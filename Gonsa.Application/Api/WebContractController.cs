using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Gonsa.Application.Models.Account;
using Gonsa.Data;
using Gonsa.Repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class WebContractController : ControllerBase
    {
        private readonly IWebContractRepository _webContractRes;
        private readonly UserManager<ApplicationUser> _userManager;
        public WebContractController(IWebContractRepository webContractRes, UserManager<ApplicationUser> userManager)
        {
            _webContractRes = webContractRes;
            _userManager = userManager;
        }
        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<WebContract>>> get()
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var result = await _webContractRes.GetAll(user.CmpnID, user.UserCode);
            return Ok(result);
        }
    }
}
