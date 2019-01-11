using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using Gonsa.Data;

namespace Gonsa.Repository.Interfaces
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetAll(string ZoneID,string RegionID);
        Task<Customer> Get(string CusomterID);
        Task<IEnumerable<DeliveryCustomer>> GetByDelivery(string CustomerID);
    }
}
