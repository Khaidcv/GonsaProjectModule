using Gonsa.Data;
using Gonsa.Repository.Interfaces;
using Gonsa.Repository.MockData;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository
{
    public class MemberTypeRepository : IMemberTypeRepository
    {
        public async Task<IEnumerable<MemberType>> Get()
        {
            return MemberTypeList.GetFakeMemberType();
        }

        public async Task<MemberType> Get(string type)
        {
            return MemberTypeList.Find(type);
        }
    }
}
