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

        [HttpGet]
        public ActionResult<List<CreditCardInfo>> Get() =>
            _creditCardFormService.Get();

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

        [HttpPost]
        public ActionResult<CreditCardInfo> Create(CreditCardInfo creditCardInfo)
        {
            _creditCardFormService.Create(creditCardInfo);

            return CreatedAtRoute("GetCreditCardInfo", new { id = creditCardInfo.Id.ToString() }, creditCardInfo);
        }

    }
}
