using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Gonsa.Repository.Interfaces;
using Gonsa.Data;
using Microsoft.EntityFrameworkCore;

namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository customerRes;
        public CustomerController(ICustomerRepository _customerRes)
        {
            customerRes = _customerRes;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<IEnumerable<Customer>>> get(int PageSize = -1, int page = 1, string term = "")
        {
            IEnumerable<Customer> result = await customerRes.GetAll();
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
        [Route("test")]
        public async Task<ActionResult<IEnumerable<Customer>>> get2(int PageSize = -1, int page = 1, string term = "")
        {
            IEnumerable<Customer> result = await customerRes.GetAll();
            if (PageSize == -1)
            {
                return Ok(new
                {
                    data = result.OrderBy(x => x.PsCsName),
                    total = result.Count()
                });
            }
            int Offset = ((page - 1) * PageSize);
            //return Ok(new
            //{
            //    data = result.OrderBy(x => x.PsCsName).Skip(Offset).Take(PageSize),
            //    total = result.Count()
            //});
            return Ok(new
            {
                results = term != "" ? result.Where(x => x.PsCsName.ToLower().Contains(term.ToLower())).OrderBy(x => x.PsCsName).Skip(Offset).Take(PageSize) : result,
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
            IEnumerable<DeliveryCustomer> result = await customerRes.GetByDelivery(CustomerID);
            return Ok(result.OrderBy(x => x.DlCsName));
        }
    }
}
