using System;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using WebAPI.Models;

namespace WebAPI.Tests.Integration
{
    public class DbFixture : IDisposable
    {
        public DbFixture()
        {
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = config.GetSection(nameof(DatabaseSettings)).GetSection("ConnectionString").Value;
            var dbName = $"test_db_{Guid.NewGuid()}";

            this.DbContextSettings = new DatabaseSettings()
            {
                ConnectionString = connectionString,
                DatabaseName = dbName
            };
        }

        public IDatabaseSettings DbContextSettings { get; }

        public void Dispose()
        {
            var client = new MongoClient(this.DbContextSettings.ConnectionString);
            client.DropDatabase(this.DbContextSettings.DatabaseName);
        }
    }
}
