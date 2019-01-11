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
    public class WebContractRepository : IWebContractRepository, IDisposable
    {
        public async Task<IEnumerable<WebContract_Monitor>> GetAll(string cmpnID,string CrtUser)
        {
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"wspListContractsMonitor";
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@cmpnID", cmpnID);
                parameters.Add("@CrtUser", CrtUser);
                conn.Open();
                var result = await conn.QueryAsync<WebContract_Monitor>(sQuery,param: parameters, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        public void Dispose()
        {

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
