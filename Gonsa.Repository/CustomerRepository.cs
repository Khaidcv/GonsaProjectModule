using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Gonsa.Data;
using Gonsa.Repository.Interfaces;
namespace Gonsa.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        public async Task<IEnumerable<Customer>> GetAll(string ZoneID,string RegionID)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"wspCustomers";
                DynamicParameters parameters = new DynamicParameters();
                //parameters.Add("@CmpnID", "00");
                //parameters.Add("@ClnID", "21:020");
                parameters.Add("@ZoneID", ZoneID.Replace("','",","));
                parameters.Add("@RegionID", RegionID.Replace("','", ","));
                //parameters.Add("@ASM", "000204");
                //parameters.Add("@SUB", "000224");
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

        public async Task<Customer> Get(string CusomterID)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = $"select CustomerID,CsName PsCsName from BosCataloge.dbo.mnuCustomersInfo where CustomerID = '{CusomterID}'";
                conn.Open();

                var result = await conn.QueryAsync<Customer>(sQuery, commandType: CommandType.Text);
                return result.FirstOrDefault();
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
