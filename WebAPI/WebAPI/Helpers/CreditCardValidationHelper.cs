using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WebAPI.Helpers
{
    public class CreditCardValidationHelper
    {
        public enum CardType
        {
            Unknown = 0,
            MasterCard = 1,
            VISA = 2,
            Amex = 3,
            Discover = 4,
            DinersClub = 5,
            JCB = 6,
            enRoute = 7
        }

        // Class to hold credit card type information
        private class CardTypeInfo
        {
            public CardTypeInfo(string regEx, int length, CardType type)
            {
                RegEx = regEx;
                Length = length;
                Type = type;
            }

            public string RegEx { get; set; }
            public int Length { get; set; }
            public CardType Type { get; set; }
        }

        // Array of CardTypeInfo objects
        private static CardTypeInfo[] _cardTypeInfo =
        {
            new CardTypeInfo("^(51|52|53|54|55)", 16, CardType.MasterCard),
            new CardTypeInfo("^(4)", 16, CardType.VISA),
            new CardTypeInfo("^(4)", 13, CardType.VISA),
            new CardTypeInfo("^(34|37)", 15, CardType.Amex),
            new CardTypeInfo("^(6011)", 16, CardType.Discover),
            new CardTypeInfo("^(300|301|302|303|304|305|36|38)",
                               14, CardType.DinersClub),
            new CardTypeInfo("^(3)", 16, CardType.JCB),
            new CardTypeInfo("^(2131|1800)", 15, CardType.JCB),
            new CardTypeInfo("^(2014|2149)", 15, CardType.enRoute)
        };

        private static Regex _monthCheck = new Regex(@"^(0[1-9]|1[0-2])$");
        private static Regex _yearCheck = new Regex(@"^[0-9]{2}$");
        private const string _yearStart = "20";

        private static Regex _cvcCheck = new Regex(@"^\d{3}$");

        private static Regex _nameCheck = new Regex(@"^[A-Za-z]{1,50}$");

        public static bool ValidateCardNumber(string cardNumber)
        {
            foreach (CardTypeInfo info in _cardTypeInfo)
            {
                if (cardNumber.Length == info.Length &&
                    Regex.IsMatch(cardNumber, info.RegEx))
                    return true;
            }

            return false;
        }

        public static bool ValidateCvc(string cvc)
        {
            return _cvcCheck.IsMatch(cvc);
        }

        public static bool ValidateName(string name)
        {
            return _nameCheck.IsMatch(name);
        }

        public static bool ValidateExpiry(string expiry)
        {
            // Expiry date in from MM/YY
            string[] dateParts = expiry.Split('/');   
            
            // Check date format is valid as MM/YY        
            if (!_monthCheck.IsMatch(dateParts[0]) || !_yearCheck.IsMatch(dateParts[1]))
            {
                return false;
            }

            // Get actual expiry date
            int year = int.Parse(_yearStart + dateParts[1]);
            int month = int.Parse(dateParts[0]);
            var lastDateOfExpiryMonth = DateTime.DaysInMonth(year, month); 
            var cardExpiry = new DateTime(year, month, lastDateOfExpiryMonth, 23, 59, 59);

            // Check expiry greater than today & within next 6 years
            return cardExpiry > DateTime.Now && cardExpiry < DateTime.Now.AddYears(6);
        }

    }
}
