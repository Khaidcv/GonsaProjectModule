using Dapper;
using Gonsa.Application.Models.Account;
using Gonsa.Application.Models.Menu;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Gonsa.Application.Data
{
    public class CustomStore
    {
        private readonly string _connectionString;

        public CustomStore(string connectionString)
        {
            _connectionString = connectionString;
        }
        public async Task<IEnumerable<ApplicationUser>> findByLoginName(string loginName)
        {
            IEnumerable<ApplicationUser> user;
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                IEnumerable<ApplicationUser> enumerable =
                    await connection.QueryAsync<ApplicationUser>("bosConfigure.dbo.bosGetApplicationTools_ByGroupUser_Onl", new { Model = loginName },
                        commandType: CommandType.StoredProcedure);
                user = enumerable;
            }
            return user;
        }
        public async Task<IEnumerable<int>> checkUserByLoginName(string LoginName)
        {
            IEnumerable<int> result;
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                result = await connection.QueryAsync<int>("bosConfigure.dbo.bos_ChkUser", new { LoginName = LoginName });
            }
            return result;
        }
        public async Task<IEnumerable<web_bosMenu_ByGroup>> bosGetApplicationTools_ByGroupUser_Onl(string groupList)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                return await connection.QueryAsync<web_bosMenu_ByGroup>("bosConfigure.dbo.bosGetApplicationTools_ByGroupUser_Onl", new { Grp_Code = groupList }, commandType: CommandType.StoredProcedure);
            }
        }
        public int ChkUser(string LoginName)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    return connection.QueryFirstOrDefault<int>($@"bosConfigure.dbo.bos_ChkUser", new { LoginName = LoginName }, commandType: CommandType.StoredProcedure);
                }
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public int CreatedUser(ApplicationUser user)
        {
            var rs = 1;
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                rs = connection.QueryFirstOrDefault<int>($@"bosConfigure.dbo.bos_regUser", new
                {
                    LoginName = user.LoginName,
                    FullName = user.FullName,
                    Email = user.Email,
                    Password = user.Password
                }, commandType: CommandType.StoredProcedure);
            }
            return rs;
        }
    }
}
