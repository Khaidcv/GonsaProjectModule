using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Application.Providers.hashsha1
{
    public class CryptePass
    {
        public string getSHA1(string text)
        {
            SHA1CryptoServiceProvider sh = new SHA1CryptoServiceProvider();
            sh.ComputeHash(ASCIIEncoding.ASCII.GetBytes(text));
            byte[] re = sh.Hash;
            StringBuilder sb = new StringBuilder();
            foreach (var b in re)
            {
                sb.Append(b.ToString("x2"));
            }
            return sb.ToString();
        }
    }
}
