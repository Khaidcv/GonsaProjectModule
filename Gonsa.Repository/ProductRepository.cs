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
        private readonly IGonSaConnection _gonSaConnection;
        public ProductRepository(IGonSaConnection gonSaConnection)
        {
            _gonSaConnection = gonSaConnection;
        }
        public async Task<IEnumerable<Product>> GetAll(string ClnID, string ZoneID, string RegionID, string ASM, string SUB, string MembType)
        {
            using (IDbConnection conn = _gonSaConnection.GetConnection())
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
    }
}
