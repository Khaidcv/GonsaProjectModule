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
    public class ProductPromotionRepository : IProductPromotionRepository
    {
        public async Task<IEnumerable<Data.ProductPromotion>> GetProductPromotions(string ClnID, string ItemID, decimal PrdcQtty, decimal PrdcAmnt, string CustomerID, string MembType)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"wspPromotionOfProduct";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@ClnID", ClnID);
                parameters.Add("@ItemID", ItemID);
                parameters.Add("@PrdcQtty", PrdcQtty);
                parameters.Add("@PrdcAmnt", PrdcAmnt);
                parameters.Add("@CustomerID", CustomerID);
                parameters.Add("@MembType", MembType);
                conn.Open();
                var result = await conn.QueryAsync<Data.ProductPromotion>(sQuery, param: parameters, commandType: CommandType.StoredProcedure);
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
