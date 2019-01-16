using Gonsa.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Gonsa.Repository
{
    public class GonsaConnection : IGonSaConnection
    {
        private readonly string _connectionString;
        public GonsaConnection(string ConncetionString)
        {
            _connectionString = ConncetionString;
        }
        public SqlConnection GetConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}
