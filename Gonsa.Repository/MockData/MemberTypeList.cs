using Gonsa.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository.MockData
{
    public class MemberTypeList
    {
        public static List<MemberType> GetFakeMemberType()
        {
            var result = new List<MemberType>()
            {
                new MemberType("01","TTV"),
                new MemberType("02","BAC"),
                new MemberType("03","VAG"),
                new MemberType("04","VIP"),
                new MemberType("ZZ","VIP(ex)")
            };
            return result;
        }

        public static Gonsa.Data.MemberType Find(string type)
        {
            return GetFakeMemberType().Where(x => x.MembType == type).SingleOrDefault();
        }
    }
}
