using System.Collections.Generic;
using System.Linq;
using WebAPI.Models;
using MongoDB.Driver;
using WebAPI.Helpers;
using System;

namespace WebAPI.Services
{
    public class CreditCardService
    {
        private readonly IMongoCollection<CreditCardInfo> _creditCardForm;

        public CreditCardService(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _creditCardForm = database.GetCollection<CreditCardInfo>(settings.CollectionName);
        }

        public List<CreditCardInfo> Get() =>
            _creditCardForm.Find(info => true).ToList();

        public CreditCardInfo Get(string id) =>
            _creditCardForm.Find<CreditCardInfo>(info => info.Id == id).FirstOrDefault();

        public CreditCardInfo Create(CreditCardInfo creditCardForm)
        {
            try
            {
                ValidateCreditCardInfo(creditCardForm);
                _creditCardForm.InsertOne(creditCardForm);
            } catch (Exception e)
            {
                throw e;
            }
            return creditCardForm;
        }

        private void ValidateCreditCardInfo(CreditCardInfo creditCardForm)
        {
            // Validate credit card number
            if (string.IsNullOrEmpty(creditCardForm.CreditCardNumber))
            {
                throw new ArgumentException("Credit card number is null or empty.");
            } else if (!CreditCardValidationHelper.ValidateCardNumber(creditCardForm.CreditCardNumber)) {
                throw new ArgumentException("Invalid credit card number");
            }

            // Validate cvc
            if (string.IsNullOrEmpty(creditCardForm.Cvc))
            {
                throw new ArgumentException("CVC is null or empty.");
            }
            else if (!CreditCardValidationHelper.ValidateCvc(creditCardForm.Cvc))
            {
                throw new ArgumentException("Invalid CVC");
            }

            // Validate expiry date
            if (string.IsNullOrEmpty(creditCardForm.Expiry))
            {
                throw new ArgumentException("Expiry is null or empty.");
            }
            else if (!CreditCardValidationHelper.ValidateExpiry(creditCardForm.Expiry))
            {
                throw new ArgumentException("Invalid Expiry");
            }

            // Validate Name
            if (string.IsNullOrEmpty(creditCardForm.Name))
            {
                throw new ArgumentException("Name is null or empty.");
            }
            else if (!CreditCardValidationHelper.ValidateName(creditCardForm.Name))
            {
                throw new ArgumentException("Invalid Name");
            }
        }
    }
}
