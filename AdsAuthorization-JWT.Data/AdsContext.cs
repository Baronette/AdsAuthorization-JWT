using Microsoft.EntityFrameworkCore;

namespace AdsAuthorization_JWT.Data
{
    public class AdsContext : DbContext
    {
        private readonly string _connection;

        public AdsContext(string connection)
        {
            _connection = connection;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connection);
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Ad> Ads { get; set; }
    }

}
