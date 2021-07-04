using System;
using System.Collections.Generic;
using WebAPI;
using WebAPI.Services;
using WebAPI.Tests.Integration;
using Xunit;

namespace MongoDbIntegrationSample.Tests.Integration.Persistence
{
    public class CreditCardServiceTests : IClassFixture<DbFixture>
    {
        private readonly CreditCardService _service;

        private const string CARD_NUMBER_SAMPLE_1 = "4716660449857612";

        private const string CVC_SAMPLE_1 = "123";

        private const string EXPIRY_SAMPLE_1 = "12/23";

        private const string NAME_SAMPLE_1 = "John Doe";

        private const string CARD_NUMBER_SAMPLE_2 = "5449634878129711";

        private const string CVC_SAMPLE_2 = "725";

        private const string EXPIRY_SAMPLE_2 = "09/25";

        private const string NAME_SAMPLE_2 = "Emma Murphy";

        private static string _presetId;


        public CreditCardServiceTests(DbFixture fixture)
        {
            _service = new CreditCardService(fixture.DbContextSettings);
            _presetId = SaveCreditCardInfo(CARD_NUMBER_SAMPLE_1, CVC_SAMPLE_1, EXPIRY_SAMPLE_1, NAME_SAMPLE_1).Id;
        }

        [Fact]
        public void GetCreditCardInfoById_ShouldReturnOneResult()
        {
            CreditCardInfo result = _service.Get(_presetId);

            // Should return the desired info from preset
            Assert.Equal(CARD_NUMBER_SAMPLE_1, result.CreditCardNumber);
            Assert.Equal(CVC_SAMPLE_1, result.Cvc);
            Assert.Equal(EXPIRY_SAMPLE_1, result.Expiry);
            Assert.Equal(NAME_SAMPLE_1, result.Name);
            Assert.Equal(_presetId, result.Id);
        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCreateValidInfo()
        {
            CreditCardInfo result = SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, CVC_SAMPLE_2, EXPIRY_SAMPLE_2, NAME_SAMPLE_2);

            // Saved info without exception
            Assert.Equal(CARD_NUMBER_SAMPLE_2, result.CreditCardNumber);
            Assert.Equal(CVC_SAMPLE_2, result.Cvc);
            Assert.Equal(EXPIRY_SAMPLE_2, result.Expiry);
            Assert.Equal(NAME_SAMPLE_2, result.Name);

            // Id created
            Assert.NotNull(result.Id);
        }

        [Fact]
        public void GetAllCreditCardInfo_ShouldReturnAllResults()
        {
            IList<CreditCardInfo> results = _service.Get();

            // Should have two result from the creation of the first test and the preset info 
            results.Count.Equals(2);
        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfEmptyCardNumber()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo("", CVC_SAMPLE_2, EXPIRY_SAMPLE_2, NAME_SAMPLE_2));
            Assert.Equal("Credit card number is null or empty.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfInvalidCardNumber()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo("00000000000000", CVC_SAMPLE_2, EXPIRY_SAMPLE_2, NAME_SAMPLE_2));
            Assert.Equal("Invalid credit card number.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfEmptyCvc()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, "", EXPIRY_SAMPLE_2, NAME_SAMPLE_2));
            Assert.Equal("CVC is null or empty.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfInvalidCvc()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, "2", EXPIRY_SAMPLE_2, NAME_SAMPLE_2));
            Assert.Equal("Invalid CVC.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfEmptyExpiry()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, CVC_SAMPLE_2, "", NAME_SAMPLE_2));
            Assert.Equal("Expiry is null or empty.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfInvalidExpiry()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, CVC_SAMPLE_2, "30/25", NAME_SAMPLE_2));
            Assert.Equal("Invalid Expiry.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfEmptyName()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, CVC_SAMPLE_2, EXPIRY_SAMPLE_2, ""));
            Assert.Equal("Name is null or empty.", ex.Message);

        }

        [Fact]
        public void SaveCreditCardInfo_ShouldCatchExceptionOfInvalidName()
        {
            var ex = Assert.Throws<ArgumentException>(() => SaveCreditCardInfo(CARD_NUMBER_SAMPLE_2, CVC_SAMPLE_2, EXPIRY_SAMPLE_2, "123Hello"));
            Assert.Equal("Invalid Name.", ex.Message);

        }

        private CreditCardInfo SaveCreditCardInfo(string cardNumber, string cvc, string name, string expiry)
        {
            CreditCardInfo info = new CreditCardInfo()
            {
                CreditCardNumber = cardNumber,
                Cvc = cvc,
                Expiry = name,
                Name = expiry
            };
            return _service.Create(info);
        }

    }
}
