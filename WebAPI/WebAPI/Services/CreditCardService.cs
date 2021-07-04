using System.Collections.Generic;
using System.Linq;
using WebAPI.Models;
using MongoDB.Driver;
using WebAPI.Helpers;
using System;

namespace WebAPI.Services
{
    /// <summary>
    /// The main <c>CreditCardService</c> class.
    /// Contains methods for performing CRUD for credit card information.
    /// </summary>
    public class CreditCardService
    {
        private readonly IMongoCollection<CreditCardInfo> _creditCardForm;

        public CreditCardService(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _creditCardForm = database.GetCollection<CreditCardInfo>("CreditCardInfo");
        }

        /// <summary>
        /// Get all credit card information from database.
        /// </summary>
        /// <returns>
        /// A list of CreditCardInfo.
        /// </returns>
        public List<CreditCardInfo> Get() =>
            _creditCardForm.Find(info => true).ToList();

        /// <summary>
        /// Get a credit card information that queries by id from database.
        /// </summary>
        /// <returns>
        /// CreditCardInfo that matches the id.
        /// </returns>
        /// <param name="id">A string of Id</param>
        public CreditCardInfo Get(string id) =>
            _creditCardForm.Find<CreditCardInfo>(info => info.Id == id).FirstOrDefault();


        /// <summary>
        /// Save a credit card information to database.
        /// </summary>
        /// <returns>
        /// Saved CreditCardInfo.
        /// </returns>
        /// <exception cref="System.ArgumentException">Thrown when a value in the model is null 
        /// or empty or fails validation.</exception>
        /// <param name="creditCardForm">CreditCardInfo to save.</param>
        public CreditCardInfo Create(CreditCardInfo creditCardForm)
        {
            try
            {
                ValidateCreditCardInfo(creditCardForm);
                _creditCardForm.InsertOne(creditCardForm);
            } catch (ArgumentException e)
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
                throw new ArgumentException("Invalid credit card number.");
            }

            // Validate cvc
            if (string.IsNullOrEmpty(creditCardForm.Cvc))
            {
                throw new ArgumentException("CVC is null or empty.");
            }
            else if (!CreditCardValidationHelper.ValidateCvc(creditCardForm.Cvc))
            {
                throw new ArgumentException("Invalid CVC.");
            }

            // Validate expiry date
            if (string.IsNullOrEmpty(creditCardForm.Expiry))
            {
                throw new ArgumentException("Expiry is null or empty.");
            }
            else if (!CreditCardValidationHelper.ValidateExpiry(creditCardForm.Expiry))
            {
                throw new ArgumentException("Invalid Expiry.");
            }

            // Validate Name
            if (string.IsNullOrEmpty(creditCardForm.Name))
            {
                throw new ArgumentException("Name is null or empty.");
            }
            else if (!CreditCardValidationHelper.ValidateName(creditCardForm.Name))
            {
                throw new ArgumentException("Invalid Name.");
            }
        }
    }
}
