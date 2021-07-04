using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebAPI.Services;
namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CreditCardFormController : ControllerBase
    {
        private readonly CreditCardService _creditCardFormService;

        public CreditCardFormController(CreditCardService creditCardFormService)
        {
            _creditCardFormService = creditCardFormService;
        }

        /// <summary>
        /// Get all credit card information.
        /// </summary>
        /// <returns>
        /// A list of CreditCardInfo.
        /// </returns> 
        [HttpGet]
        public ActionResult<List<CreditCardInfo>> Get() =>
            _creditCardFormService.Get();

        /// <summary>
        /// Get a credit card information that queries by id from database.
        /// </summary>
        /// <returns>
        /// CreditCardInfo that matches the id.
        /// </returns>
        /// <param name="id">A string of Id with 24 digits</param>
        [HttpGet("{id:length(24)}", Name = "GetCreditCardInfo")]
        public ActionResult<CreditCardInfo> Get(string id)
        {
            var cardInfo = _creditCardFormService.Get(id);

            if (cardInfo == null)
            {
                return NotFound();
            }

            return cardInfo;
        }

        /// <summary>
        /// Save a credit card information.
        /// </summary>
        /// <returns>
        /// Saved CreditCardInfo with Id.
        /// </returns>
        /// <exception cref="System.ArgumentException">Thrown when a value in the model is null 
        /// or empty or fails validation.</exception>
        /// <param name="creditCardInfo">CreditCardInfo to save.</param>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST /creditcardinfo
        ///     {
        ///        "creditCardNumber": "4716660449857612",
        ///        "cvc": "123",
        ///        "expiry": "12/23",
        ///        "name": "John Doe"
        ///     }
        ///
        /// </remarks>
        [HttpPost]
        public ActionResult<CreditCardInfo> Create(CreditCardInfo creditCardInfo)
        {
            _creditCardFormService.Create(creditCardInfo);

            return CreatedAtRoute("GetCreditCardInfo", new { id = creditCardInfo.Id.ToString() }, creditCardInfo);
        }

    }
}
