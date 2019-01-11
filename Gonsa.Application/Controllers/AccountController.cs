using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gonsa.Application.Data;
using Gonsa.Application.Models.Account;
using Gonsa.Application.Models.Account.ViewModel;
using Gonsa.Application.Providers.ddl;
using Gonsa.Application.Providers.hashsha1;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Gonsa.Application.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;
        private readonly string _connectionString;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            ILogger<AccountController> logger, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        //[TempData]
        //public string ErrorMessage { get; set; }

        [BindProperty]

        public Position ddl { get; set; }
        public List<Position> ddls { get; set; }


        //[Route("~/")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            //HttpContext.Session.SetString("username", "letrung193");

            ViewData["ReturnUrl"] = returnUrl;

            if (ModelState.IsValid)
            {
                await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
                var customstore = new CustomStore(_connectionString);
                var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    var user = await _userManager.FindByNameAsync(model.UserName);
                    if (user != null)
                    {
                        var rs = customstore.bosGetApplicationTools_ByGroupUser_Onl(user.Grp_List);
                    }
                    _logger.LogInformation("User logged in");
                    return RedirectToLocal("/");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Đăng nhập thất bại");
                    return View(model);
                }
            }
            return View(model);
        }
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterViewModel model, string returnUrl = null)
        {
            // if(!IsPostBack)
            ViewData["ReturnUrl"] = returnUrl;
            IdentityResult rs = new IdentityResult();
            if (ModelState.IsValid)
            {
                CryptePass hash = new CryptePass();
                // model.Password = hash.getSHA1(model.Password);
                var customStor = new CustomStore(_connectionString);
                var user = new ApplicationUser
                {
                    LoginName = model.UserName,
                    FullName = model.FullName,
                    Email = model.Email,
                    Password = model.Password
                };
                var result = customStor.ChkUser(model.UserName);
                if (result == 0)
                {
                    var results = customStor.CreatedUser(user);

                    if (results == 1)
                    {
                        _logger.LogInformation("User created a new account with password.");
                        // await _signInManager.SignInAsync(user, isPersistent: false);
                        return Redirect("~/login");
                    }
                    ModelState.AddModelError(string.Empty, "Tạo user thất bại.");
                    return View(model);
                }
                ModelState.AddModelError(string.Empty, "User này đã tồn tại trong hệ thống.");
                return View(model);
            }
            return View(model);
        }
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            _logger.LogInformation("User logged out.");
            return RedirectToAction("Login");
        }

        #region Helpers

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
        private void CustomErrors(int rs)
        {
            ModelState.AddModelError(string.Empty, rs.ToString());
        }

        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction(nameof(HomeController.Index), "index");
            }
        }

        #endregion
    }
}
