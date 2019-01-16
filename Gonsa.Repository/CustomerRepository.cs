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
        private readonly IGonSaConnection _gonSaConnection;
        public CustomerRepository(IGonSaConnection gonSaConnection)
        {
            _gonSaConnection = gonSaConnection;
        }
        public async Task<IEnumerable<Customer>> GetAll(string ZoneID, string RegionID)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                string sQuery = @"wspCustomers";
                DynamicParameters parameters = new DynamicParameters();
                //parameters.Add("@CmpnID", "00");
                //parameters.Add("@ClnID", "21:020");
                parameters.Add("@ZoneID", ZoneID);
                parameters.Add("@RegionID", RegionID);
                //parameters.Add("@ASM", "000204");
                //parameters.Add("@SUB", "000224");
                conn.Open();
                var result = await conn.QueryAsync<Customer>(sQuery, param: parameters, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        public async Task<IEnumerable<DeliveryCustomer>> GetByDelivery(string CustomerID)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
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
            using (IDbConnection conn = _gonSaConnection.GetConnection())
            {
                string sQuery = $"select CustomerID,CsName PsCsName from BosCataloge.dbo.mnuCustomersInfo where CustomerID = '{CusomterID}'";
                conn.Open();

                var result = await conn.QueryAsync<Customer>(sQuery, commandType: CommandType.Text);
                return result.FirstOrDefault();
            }
        }
    }
}
