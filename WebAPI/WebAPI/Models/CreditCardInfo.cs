using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebAPI
{
    public class CreditCardInfo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] 
        public string Id { get; set; }

        public string CreditCardNumber { get; set; }

        public string Cvc { get; set; }

        public string Expiry { get; set; }

        public string Name { get; set; }
    }
}
