using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Gonsa.Data;
using Gonsa.Repository.Interfaces;
namespace Gonsa.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        public async Task<IEnumerable<Customer>> GetAll()
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"wspCustomers";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@CmpnID", "00");
                parameters.Add("@ClnID", "21:020");
                parameters.Add("@ZoneID", ",00005.0001,00005.0001,00005.0002");
                parameters.Add("@RegionID", ",0084.0080.0005,0084.0080.0011,0084.0080.0021");
                parameters.Add("@ASM", "000204");
                parameters.Add("@SUB", "000224");
                conn.Open();
                var result = await conn.QueryAsync<Customer>(sQuery, param: parameters, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        public async Task<IEnumerable<DeliveryCustomer>> GetByDelivery(string CustomerID)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"wspCustomersByDelivery";
                conn.Open();

                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@CustomerID", CustomerID);

                var result = await conn.QueryAsync<DeliveryCustomer>(sQuery, parameters, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection("Data Source=tcp:45.118.151.118,5172\\SQLEXPRESS;Initial Catalog=BosOnline;Persist Security Info=True;User ID=devcode; Password=dev@#123");
            }
        }
    }
}
