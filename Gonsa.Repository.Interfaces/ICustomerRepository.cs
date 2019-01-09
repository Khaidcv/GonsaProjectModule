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
        Task<IEnumerable<Customer>> GetAll();
        Task<IEnumerable<DeliveryCustomer>> GetByDelivery(string CustomerID);
    }
}
