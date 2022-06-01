using AdsAuthorization_JWT.Data;

namespace AdsAuthorization_JWT.Web.Controllers
{
    public class AccountViewModel:User
    {
        public string Password { get; set; }
    }
}