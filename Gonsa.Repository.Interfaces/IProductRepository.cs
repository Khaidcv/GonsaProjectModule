using Gonsa.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAll(string ClnID, string ZoneID, string RegionID, string ASM, string SUB, string MembType,string CustomerID);
    }
}
