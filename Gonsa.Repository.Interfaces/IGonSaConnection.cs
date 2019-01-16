using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Gonsa.Repository.Interfaces
{
    public interface IGonSaConnection
    {
        SqlConnection GetConnection();
    }
}
