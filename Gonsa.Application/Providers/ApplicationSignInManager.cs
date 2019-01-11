
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Gonsa.Application.Models.Account;
using Gonsa.Application.Providers.hashsha1;

namespace Gonsa.Application.Providers
{
    public class ApplicationSignInManager : SignInManager<ApplicationUser>
    {
        private readonly string _connectionString;
        public ApplicationSignInManager(UserManager<ApplicationUser> userManager, IHttpContextAccessor contextAccessor, IUserClaimsPrincipalFactory<ApplicationUser> claimsFactory, IOptions<IdentityOptions> optionsAccessor, ILogger<SignInManager<ApplicationUser>> logger, IAuthenticationSchemeProvider schemes, IConfiguration configuration) : base(userManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public override Task<SignInResult> CheckPasswordSignInAsync(ApplicationUser user, string password, bool lockoutOnFailure)
        {
            return Task.Run(() => MyCheckPasswordAsync(user, password));
        }

        private async Task<SignInResult> MyCheckPasswordAsync(ApplicationUser appuser, string password)
        {
            if (appuser == null)
            {
                throw new Exception(nameof(appuser));
            }
            var error = await PreSignInCheck(appuser);
            if (error != null)
            {
                return error;
            }
          //  CryptePass hash = new CryptePass();
            if (appuser.PasswordEx == password)
            {
                var alwaysLockout = AppContext.TryGetSwitch("Microsoft.AspNetCore.Identity.CheckPasswordSignInAlwaysResetLockoutOnSuccess", out var enabled) && enabled;
                // Only reset the lockout when TFA is not enabled when not in quirks mode
                return SignInResult.Success;

            }
            Logger.LogWarning(2, "User {userId} failed to provide the correct password.", await UserManager.GetUserIdAsync(appuser));
            return SignInResult.Failed;
        }
    }
}
