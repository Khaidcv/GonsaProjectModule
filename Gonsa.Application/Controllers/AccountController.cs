using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gonsa.Application.Data;
using Gonsa.Application.Models.Account;
using Gonsa.Application.Models.Account.ViewModel;
using Gonsa.Application.Providers.hashsha1;
using Gonsa.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

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
            _connectionString = configuration.GetConnectionString("BosOnlineContext");
        }
        [TempData]
        public string ErrorMessage { get; set; }

        [BindProperty]

        public Position ddl { get; set; }
        public List<Position> ddls { get; set; }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string returnUrl = null)
        {
            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            //HttpContext.Session.SetString("username", "letrung193");

            ViewData["ReturnUrl"] = returnUrl;
            string message = "";
            var Results = new Results();
            if (ModelState.IsValid)
            {
                await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
                var customstore = new CustomStore(_connectionString);
                var user = await _userManager.FindByNameAsync(model.UserName);
                if (user != null)
                {
                    var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, lockoutOnFailure: false);
                    if (result.Succeeded)
                    {

                        _logger.LogInformation("User logged in");
                        Results.status = "success";
                        Results.Description = "Đăng nhập thành công";
                        message = JsonConvert.SerializeObject(Results);
                    }
                    else
                    {
                        Results.status = "fail";
                        Results.Description = "Mật khẩu không tồn tại trong hệ thống";
                        message = JsonConvert.SerializeObject(Results);
                    }
                }
                else
                {
                    Results.status = "fail";
                    Results.Description = "Tên đăng nhập không tồn tại trong hệ thống";
                    message = JsonConvert.SerializeObject(Results);
                }
            }
            else
            {
                return View(model);
            }
            return Content(message);
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Register(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model, string returnUrl = null)
        {
            // if(!IsPostBack)
            ViewData["ReturnUrl"] = returnUrl;
            string message = "";
            var Results = new Results();
            IdentityResult rs = new IdentityResult();
            if (ModelState.IsValid)
            {
                CryptePass hash = new CryptePass();
                // model.Password = hash.getSHA1(model.Password);
                var customStor = new CustomStore(_connectionString);
                var user = new ApplicationUser
                {
                    LoginName = model.UserName,
                    FullName = model.FirstName + " " + model.MiddleName + " " + model.LastName,
                    Email = model.Email,
                    Password = hash.getSHA1(model.Password)
                };
                var result = customStor.ChkUser(model.UserName);
                if (result == 0)
                {
                    var results = customStor.CreatedUser(user);

                    if (results == 1)
                    {
                        _logger.LogInformation("User created a new account with password.");
                        // await _signInManager.SignInAsync(user, isPersistent: false);
                        Results.status = "success";
                        Results.Description = "Đăng ký thành công,  tài khoản chờ xét duyệt";
                        message = JsonConvert.SerializeObject(Results);
                    }
                    else
                    {
                        Results.status = "fail";
                        Results.Description = "Đăng ký thất bại";
                        message = JsonConvert.SerializeObject(Results);
                    }
                }
                else
                {
                    Results.status = "fail";
                    Results.Description = "Username đã tồn tại trong hệ thống";
                    message = JsonConvert.SerializeObject(Results);
                }
            }
            else
            {
                return View(model);
            }
            return Content(message);
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
