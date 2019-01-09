using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class BosOnlineContext : DbContext
    {
        public BosOnlineContext()
        {
        }

        public BosOnlineContext(DbContextOptions<BosOnlineContext> options)
            : base(options)
        { }
    }
}
