using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gonsa.Data;
using Gonsa.Repository.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gonsa.Application.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebContractController : ControllerBase
    {
        private readonly IWebContractRepository _webContractRes;
        public WebContractController(IWebContractRepository webContractRes)
        {
            _webContractRes = webContractRes;
        }
        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<WebContract>>> get()
        {
            var result = await _webContractRes.GetAll();
            return Ok(result);
        }
    }
}
