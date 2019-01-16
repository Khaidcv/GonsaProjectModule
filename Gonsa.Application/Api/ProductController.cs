using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gonsa.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Gonsa.Data;
using Gonsa.Utilities;
using Microsoft.AspNetCore.Identity;
using Gonsa.Application.Models.Account;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRes;
        private readonly UserManager<ApplicationUser> _userManager;
        public ProductController(IProductRepository productRes, UserManager<ApplicationUser> userManager)
        {
            _productRes = productRes;
            _userManager = userManager;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Product>>> get(string MembType = "", string term = "")
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var products = await _productRes.GetAll(user.ClnID, user.ZoneID, user.RegionID, user.ASM, user.SUB, MembType);
            if (string.IsNullOrWhiteSpace(term) == false)
            {
                products = products.Where(x => x.ItemName.NonUnicode().ToLower().Contains(term.NonUnicode().ToLower())).OrderBy(x => x.ItemName);
            }
            return Ok(products);
        }

        [HttpGet("line")]
        public async Task<ActionResult<IEnumerable<Product>>> getProductLine(string ItemID, string ItemUnit, string BchCode="", string MembType = "")
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var products = await _productRes.GetAll(user.ClnID, user.ZoneID, user.RegionID, user.ASM, user.SUB, MembType);
            if (products.Any())
            {
                var product = products.FirstOrDefault(x => x.ItemID == ItemID && x.ItemUnit == ItemUnit && x.BchCode == BchCode);
                return Ok(product);
            }
            else
            {
                return Ok(null);
            }
        }
    }
}
