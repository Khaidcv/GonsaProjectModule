using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Gonsa.Application.Models;
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
        public async Task<ActionResult<IEnumerable<WebContract>>> getAll(string status)
        {
            try
            {
                ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
                var result = await _webContractRes.GetAll(user.CmpnID, user.UserCode);
                if (string.IsNullOrWhiteSpace(status) == false) // has value.
                {
                    result = result.Where(x => x.CurrSignNumb == int.Parse(status));
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Ok();
            }
        }

        /// <summary>
        /// Lay theo ma don hang
        /// </summary>
        /// <param name="OID"></param>
        /// <returns></returns>
        [HttpGet("{OID}")]
        public async Task<ActionResult<IEnumerable<WebContract>>> get(string OID)
        {
            //ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var result = await _webContractRes.GetByOID(OID);
            return Ok(result);
        }

        [HttpGet("getoid")]
        public async Task<ActionResult<IEnumerable<WebContract>>> getOID()
        {
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var result = await _webContractRes.GetOID("GDH001", user.CmpnID);
            return Ok(result);
        }

        [HttpPost("save")]
        public async Task<ActionResult<WebContract>> save(WebContractViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Ok(new
                {
                    Status = -1,
                    Message = "Vui lòng cung cấp đầy đủ thông tin đơn hàng!"
                });
            }
            ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
            var webContract = model.WebContract;
            webContract.ChgeUser = user.UserCode;
            webContract.ChgeDate = DateTime.Now;
            if (model.Mode == 0)
            {
                webContract.Crt_User = user.UserCode;
                webContract.SignNumb = -1;
                webContract.SignDate = DateTime.Now;
                webContract.EntryID = "21:763";
                webContract.FactorID = "webContract";
                try
                {
                    await _webContractRes.Insert(model, user.ASM, user.SUB, user.TEAM, VISA: "");
                    return Ok(new
                    {
                        Status = 1,
                        Message = "Thêm đơn hàng thành công"
                    });
                }
                catch (Exception ex)
                {
                    return Ok(new
                    {
                        Status = 0,
                        Message = ex.Message
                    });
                }
            }
            else
            {
                try
                {
                    await _webContractRes.Save(model, user.ASM, user.SUB, user.TEAM, VISA: "");
                    return Ok(new
                    {
                        Status = 1,
                        Message = "Chỉnh sửa đơn hàng thành công"
                    });
                }
                catch (Exception ex)
                {
                    return Ok(new
                    {
                        Status = 0,
                        Message = ex.Message
                    });
                }
            }
        }

        [HttpDelete("{OID}")]
        public async Task<ActionResult> delete([FromRoute]string OID)
        {
            try
            {
                ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
                await _webContractRes.Delete(OID, user.ASM, user.SUB, user.TEAM, VISA: "");
                return Ok(new
                {
                    Status = 1,
                });
            }
            catch (Exception ex)
            {
                return Ok(new
                {
                    Status = 0,
                    Message = "Không thể xóa đơn hàng " + OID,
                    ExMessage = ex.Message
                });
            }
        }

        [HttpPost("post")]
        public async Task<ActionResult> post(string OID)
        {
            try
            {
                Approve apprModel = new Approve();
                ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
                apprModel.OID = OID;
                apprModel.CmpnID = user.CmpnID;
                apprModel.Crt_User = user.UserCode;

                var webContractModel = await _webContractRes.GetByOID(OID);
                apprModel.ODate = webContractModel.WebContract.ODATE;
                apprModel.holdSignNumb = 0;
                apprModel.nextSignNumb = 101;
                var status = await _webContractRes.ApproveContract(apprModel);
                return Ok(new
                {
                    Status = status,
                    Message = "Success",
                });
            }
            catch (Exception ex)
            {
                return Ok(new
                {
                    Status = 0,
                    Message = "Không thể lưu đơn hàng này",
                    ExMessage = ex.Message,
                });
            }
        }

        [HttpPost("approve")]
        public async Task<ActionResult> approve(string OID)
        {
            try
            {
                Approve apprModel = new Approve();
                ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
                apprModel.OID = OID;
                apprModel.CmpnID = user.CmpnID;
                apprModel.Crt_User = user.UserCode;

                var webContractModel = await _webContractRes.GetByOID(OID);
                apprModel.ODate = webContractModel.WebContract.ODATE;
                apprModel.holdSignNumb = 101;
                apprModel.nextSignNumb = 201;
                var status = await _webContractRes.ApproveContract(apprModel);
                return Ok(new
                {
                    Status = status,
                    Message = "Success",
                });
            }
            catch (Exception ex)
            {
                return Ok(new
                {
                    Status = 0,
                    Message = "Không thể lưu đơn hàng này",
                    ExMessage = ex.Message,
                });
            }
        }

        [HttpPost("return")]
        public async Task<ActionResult> returnWebcontract(string OID)
        {
            try
            {
                Approve apprModel = new Approve();
                ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
                apprModel.OID = OID;
                apprModel.CmpnID = user.CmpnID;
                apprModel.Crt_User = user.UserCode;

                var webContractModel = await _webContractRes.GetByOID(OID);
                apprModel.ODate = webContractModel.WebContract.ODATE;
                apprModel.holdSignNumb = 101;
                apprModel.nextSignNumb = 0;
                var status = await _webContractRes.ApproveContract(apprModel);
                return Ok(new
                {
                    Status = status,
                    Message = "Success",
                });
            }
            catch (Exception ex)
            {
                return Ok(new
                {
                    Status = 0,
                    Message = "Không thể lưu đơn hàng này",
                    ExMessage = ex.Message,
                });
            }
        }

        [HttpPost("confirm_receive")]
        public async Task<ActionResult> confirm(string OID)
        {
            try
            {
                Approve apprModel = new Approve();
                ApplicationUser user = await _userManager.FindByNameAsync(HttpContext.User.FindFirst(ClaimTypes.Name).Value);
                apprModel.OID = OID;
                apprModel.CmpnID = user.CmpnID;
                apprModel.Crt_User = user.UserCode;

                var webContractModel = await _webContractRes.GetByOID(OID);
                apprModel.ODate = webContractModel.WebContract.ODATE;
                apprModel.holdSignNumb = 401;
                apprModel.nextSignNumb = 501;
                var status = await _webContractRes.ApproveContract(apprModel);
                return Ok(new
                {
                    Status = status,
                    Message = "Success",
                });
            }
            catch (Exception ex)
            {
                return Ok(new
                {
                    Status = 0,
                    Message = "Không thể lưu đơn hàng này",
                    ExMessage = ex.Message,
                });
            }
        }
    }
}
