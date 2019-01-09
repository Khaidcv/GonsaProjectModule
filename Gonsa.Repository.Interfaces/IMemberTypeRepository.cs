using Gonsa.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository.Interfaces
{
    public interface IMemberTypeRepository
    {
        Task<IEnumerable<MemberType>> Get();
        Task<MemberType> Get(string type);
    }
}
