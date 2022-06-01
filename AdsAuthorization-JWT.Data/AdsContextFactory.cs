using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace AdsAuthorization_JWT.Data
{
    public class AdsContextFactory : IDesignTimeDbContextFactory<AdsContext>
    {
        public AdsContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                 .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}AdsAuthorization-JWT.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new AdsContext(config.GetConnectionString("ConStr"));
        }
    }

}
