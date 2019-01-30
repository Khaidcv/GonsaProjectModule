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
    public class ProductPromotionController : ControllerBase
    {
        private readonly IProductPromotionRepository _productPromotion;
        private readonly UserManager<ApplicationUser> _userManager;
        public ProductPromotionController(IProductPromotionRepository productPromotion, UserManager<ApplicationUser> userManager)
        {
            _productPromotion = productPromotion;
            _userManager = userManager;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<ProductPromotion>>> get(string ItemID, decimal PrdcQtty, decimal PrdcAmnt, string CustomerID, string MembType)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var products = await _productPromotion.GetProductPromotions(user.ClnID, ItemID, PrdcQtty, PrdcAmnt, CustomerID, MembType);
            var products_mock = new List<ProductPromotion>()
            {
                new ProductPromotion()
                {
                    PrmtID = "00001",
                    PrmtNm = "CTKM 0001",
                    DscnAmnt = 0,
                    DscnRate = 50
                },
                new ProductPromotion()
                {
                    PrmtID = "00002",
                    PrmtNm = "CTKM 0002",
                    DscnAmnt = 250000,
                    DscnRate = 0
                }
            };
            return Ok(products);
        }
    }
}
