using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Gonsa.Application.Data;
using Gonsa.Application.Models.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ApiAccountController : ControllerBase
    {
        private readonly string _connectionString;
        private readonly UserManager<ApplicationUser> _userManager;
        public ApiAccountController(IConfiguration configuration, UserManager<ApplicationUser> userManager)
        {
            _connectionString = configuration.GetConnectionString("BosOnlineContext");
            _userManager = userManager;
        }
        [HttpGet("getCurrentuser")]
        public async Task<IActionResult> getCurrentuser()
        {
            var rs = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            if (rs != null)
            {
                var ap = new ApplicationUser();
                ap = rs;
                return Ok(ap);
            }
            return NotFound();
        }
        [HttpGet("ApiGetMenu")]
        public async Task<IActionResult> ApiGetMenu()
        {
            var customstore = new CustomStore(_connectionString);
            var rs = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var grouplst = rs.Grp_List.Replace("'", "");
            var menu = await customstore.bosGetApplicationTools_ByGroupUser_Onl(grouplst);
            if (menu != null)
            {
                return Ok(menu);
            }
            return NotFound();
        }
    }
}
