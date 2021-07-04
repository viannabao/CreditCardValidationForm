using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebAPI.Helpers;

namespace WebAPI.Tests
{
    [TestClass]
    public class CreditCardValidationHelperTests
    {
        [TestMethod]
        public void ValidateCreditCardNumber_ShouldBeValid()
        {
            bool result = CreditCardValidationHelper.ValidateCardNumber("4716660449857612");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void ValidateCreditCardNumber_ShouldBeInvalidWithEmptyString()
        {
            bool result = CreditCardValidationHelper.ValidateCardNumber("");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateCreditCardNumber_ShouldBeInvalid()
        {
            bool result = CreditCardValidationHelper.ValidateCardNumber("0000000000000000");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateCvc_ShouldBeValid()
        {
            bool result = CreditCardValidationHelper.ValidateCvc("123");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void ValidateCvc_ShouldBeInvalidWithEmptyString()
        {
            bool result = CreditCardValidationHelper.ValidateCvc("");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateCvc_ShouldBeInvalid()
        {
            bool result = CreditCardValidationHelper.ValidateCvc("2");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateExpiry_ShouldBeValid()
        {
            bool result = CreditCardValidationHelper.ValidateExpiry("12/23");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void ValidateExpiry_ShouldBeInvalidWithEmptyString()
        {
            bool result = CreditCardValidationHelper.ValidateExpiry("");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateExpiry_ShouldBeInvalid()
        {
            bool result = CreditCardValidationHelper.ValidateExpiry("22/22");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateExpiry_ShouldBeInvalidFormat()
        {
            bool result = CreditCardValidationHelper.ValidateExpiry("1223");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateExpiry_ShouldBeInvalidWithLongerThanSixYear()
        {
            bool result = CreditCardValidationHelper.ValidateExpiry("01/53");
            Assert.IsFalse(result);
        }
        [TestMethod]
        public void ValidateName_ShouldBeValid()
        {
            bool result = CreditCardValidationHelper.ValidateName("John Doe");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void ValidateName_ShouldBeInvalidWithEmptyString()
        {
            bool result = CreditCardValidationHelper.ValidateName("");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateName_ShouldBeInvalidWithNumbers()
        {
            bool result = CreditCardValidationHelper.ValidateName("1234Hello");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void ValidateName_ShouldBeInvalidWithLongerThan50Characters()
        {
            bool result = CreditCardValidationHelper.ValidateName("HelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorldHelloWorld");
            Assert.IsFalse(result);
        }

    }
}
