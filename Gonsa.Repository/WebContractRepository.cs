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
        public async Task<IEnumerable<WebContract>> GetAll()
        {
            DynamicParameters parameters = new DynamicParameters();
            using (IDbConnection conn = Connection)
            {
                string sQuery = @"SELECT [CmpnID]
                          ,[ClnID]
                          ,[ZoneID]
                          ,[RegionID]
                          ,[CustomerID]
                          ,[EntryID]
                          ,[FactorID]
                          ,[OID]
                          ,[ODATE]
                          ,[ClnPath]
                          ,[MemberCardID]
                          ,[MembType]
                          ,[DscnMbRt]
                          ,[PsCsName]
                          ,[PsCsFReg]
                          ,[PsCsTel]
                          ,[PsCsAddr]
                          ,[PsCsInfo]
                          ,[DeliverEm]
                          ,[DlCsName]
                          ,[DlCsAddr]
                          ,[DlCsInfo]
                          ,[SaleEmID]
                          ,[SaleEmName]
                          ,[DESCRIP]
                          ,[PrdcAmnt]
                          ,[DscnMbAm]
                          ,[DscnAmnt]
                          ,[Sum_Amnt]
                          ,[SignNumb]
                          ,[SignDate]
                          ,[Crt_User]
                          ,[Crt_Date]
                          ,[ChgeUser]
                          ,[ChgeDate]
                      FROM [BosOnline].[dbo].[webContracts]";
                conn.Open();
                var result = await conn.QueryAsync<WebContract>(sQuery, commandType: CommandType.Text);
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
