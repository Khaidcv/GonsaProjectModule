using Dapper;
using Gonsa.Data;
using Gonsa.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository
{
    public class ProductRepository : IProductRepository
    {
        public async Task<IEnumerable<Product>> GetAll(string ClnID, string ZoneID, string RegionID, string ASM, string SUB, string MembType)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"wspProducts";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@ClnID", ClnID);
                parameters.Add("@ZoneID", ZoneID);
                parameters.Add("@RegionID", RegionID);
                parameters.Add("@ASM", ASM);
                parameters.Add("@SUB", SUB);
                parameters.Add("@TEAM", "");
                parameters.Add("@CustomerID", "");
                parameters.Add("@MembType", MembType);
                conn.Open();
                var result = await conn.QueryAsync<Product>(sQuery, param: parameters, commandType: CommandType.StoredProcedure);
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
