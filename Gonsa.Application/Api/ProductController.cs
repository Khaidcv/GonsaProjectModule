using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gonsa.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Gonsa.Data;
namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRes;
        public ProductController(IProductRepository productRes)
        {
            _productRes = productRes;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Product>>> get(int PageSize = -1, int page = 1, string term = "")
        {
            var products = await _productRes.GetAll("21:020", ",00005.0001,00005.0001,00005.0002", ",0084.0080.0005,0084.0080.0011,0084.0080.0021", "000204", "000224", "01");
            return Ok(products);
        }
    }
}
