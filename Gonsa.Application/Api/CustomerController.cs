using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Gonsa.Repository.Interfaces;
using Gonsa.Data;
using Gonsa.Utilities;
using Microsoft.EntityFrameworkCore;
using Gonsa.Application.Models.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRes;
        private readonly UserManager<ApplicationUser> _userManager;
        public CustomerController(ICustomerRepository customerRes, UserManager<ApplicationUser> userManager)
        {
            _customerRes = customerRes;
            _userManager = userManager;
        }

        [HttpGet("{CustomerID}")]
        public async Task<ActionResult<Customer>> get(string CustomerID)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var customers = await _customerRes.GetAll(user.ZoneID, user.RegionID);
            return Ok(customers.SingleOrDefault(x => x.CustomerID == CustomerID));
        }

        [HttpGet]
        [Route("backup")]
        public async Task<ActionResult<IEnumerable<Customer>>> get(int PageSize = -1, int page = 1, string term = "")
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            IEnumerable<Customer> result = await _customerRes.GetAll(user.ZoneID, user.RegionID);
            if (PageSize == -1)
            {
                return Ok(new
                {
                    data = result.OrderBy(x => x.PsCsName),
                    total = result.Count()
                });
            }
            int Offset = ((page - 1) * PageSize);
            return Ok(new
            {
                data = result.OrderBy(x => x.PsCsName).Skip(Offset).Take(PageSize),
                total = result.Count()
            });
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<IEnumerable<Customer>>> get2(int PageSize, int page = 1, string term = "")
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            IEnumerable<Customer> result = await _customerRes.GetAll(user.ZoneID, user.RegionID);
            int Offset = ((page - 1) * PageSize);
            if (string.IsNullOrWhiteSpace(term) == false)
            {
                result = result.Where(x =>
                x.PsCsName.NonUnicode().ToLower().Contains(term.NonUnicode().ToLower())
                || x.CustomerID.Contains(term)
                || x.PsCsInfo.NonUnicode().ToLower().Contains(term.NonUnicode().ToLower())
                || x.PsCsTel.Contains(term));
            }
            return Ok(new
            {
                results = result.OrderBy(x => x.PsCsName).Skip(Offset).Take(PageSize),
                pagination = new
                {
                    more = (Offset + PageSize) < result.Count()
                }
            });
        }

        [HttpGet]
        [Route("GetByDelivery/{CustomerID}")]
        public async Task<ActionResult<IEnumerable<DeliveryCustomer>>> GetByDelivery(string CustomerID)
        {
            IEnumerable<DeliveryCustomer> result = await _customerRes.GetByDelivery(CustomerID);
            return Ok(result.OrderBy(x => x.DlCsName));
        }
    }
}
