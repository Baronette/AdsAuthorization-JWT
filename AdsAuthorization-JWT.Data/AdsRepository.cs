using System.Collections.Generic;
using System.Linq;

namespace AdsAuthorization_JWT.Data
{
    public class AdsRepository
    {
        private readonly string _connectionString;

        public AdsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void NewAd(Ad ad)
        {
            using var context = new AdsContext(_connectionString);
            context.Ads.Add(ad);
            context.SaveChanges();
        }
        public List<Ad> GetAds()
        {
            using var context = new AdsContext(_connectionString);
            return context.Ads.ToList();
        }

        public List<Ad> GetAdsByUser(string email)
        {
            using var context = new AdsContext(_connectionString);
            return context.Ads.Where(a => a.User.Email == email).ToList();
        }

        public void Delete(int id)
        {
            using var context = new AdsContext(_connectionString);
            var ad = context.Ads.FirstOrDefault(a => a.Id == id);
            context.Ads.Remove(ad);
            context.SaveChanges();
        }
    }

}
