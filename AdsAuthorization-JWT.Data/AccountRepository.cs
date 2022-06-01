using System.Linq;

namespace AdsAuthorization_JWT.Data
{
    public class AccountRepository
    {
        private readonly string _connection;

        public AccountRepository(string connection)
        {
            _connection = connection;
        }
        public void AddUser(User user, string password)
        {
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(password);
            var context = new AdsContext(_connection);
            context.Users.Add(user);
            context.SaveChanges();
        }
        public User Login(string email, string password)
        {
            var user = GetByEmail(email);
            if (user == null)
            {
                return null;
            }
            var isValid = BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
            return isValid ? user : null;
        }
        public User GetByEmail(string email)
        {
            var context = new AdsContext(_connection);
            return context.Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
