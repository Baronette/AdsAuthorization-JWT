using AdsAuthorization_JWT.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdsAuthorization_JWT.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdsController : ControllerBase
    {
        private string _connectionString;
        public AdsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getads")]
        public List<Ad> GetAds()
        {
            var repo = new AdsRepository(_connectionString);
            return repo.GetAds();
        }
        [Authorize]
        [HttpPost]
        [Route("newad")]
        public void NewAd(Ad ad)
        {
            var accountRepo = new AccountRepository(_connectionString);
            string email = User.FindFirst("user").Value;
            var user = accountRepo.GetByEmail(email);
            ad.UserId = user.Id;
            ad.Date = DateTime.Now;
            var adsRepo = new AdsRepository(_connectionString);
            adsRepo.NewAd(ad);
        }

        [Authorize]
        [HttpPost]
        [Route("delete")]
        public void Delete(AdViewModel ad)
        {
            var repo = new AdsRepository(_connectionString);
            repo.Delete(ad.Id);
        }
        [Authorize]
        [HttpGet]
        [Route("getadsbyuser")]
        public List<Ad> GetAdsByUser(int id)
        {
            var currentUser = User.FindFirst("user").Value;
            var repo = new AdsRepository(_connectionString);
            return repo.GetAdsByUser(currentUser);
        }
    }
}
