using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class MemberType
    {
        public string MembType { get; set; }
        public string MembName { get; set; }
        public MemberType(string membType, string membName)
        {
            MembType = membType;
            MembName = membName;
        }
    }
}
