using Gonsa.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository.Interfaces
{
    public interface IWebContractRepository
    {
        Task<IEnumerable<WebContract>> GetAll();
    }
}
