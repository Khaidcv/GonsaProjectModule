using Gonsa.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository.Interfaces
{
    public interface IWebContractRepository
    {
        Task<IEnumerable<WebContract_Monitor>> GetAll(string cmpnID, string CrtUser);
        Task<WebContractViewModel> GetByOID(string OID);
        Task<WebContract> Get(string OID);
        Task<IEnumerable<WebContractDetail>> GetDetails(string OID);
        Task Insert(WebContractViewModel webContractViewModel, string ASM, string SUB, string TEAM, string VISA);
        Task Save(WebContractViewModel webContractViewModel, string ASM, string SUB, string TEAM, string VISA);
        Task<string> GetOID(string KeyId, string CmnpID);
        Task<string> GetOID(string UserCode);
        Task Delete(string OID, string ASM, string SUB, string TEAM, string VISA);
        Task DeleteDetail(string OID, string ItemID, string BoxID, string BchCode, string StoreID, string PrmtID);
        Task<int> ApproveContract(Approve approve);
    }
}
