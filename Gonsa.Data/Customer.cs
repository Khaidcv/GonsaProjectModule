using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
namespace Gonsa.Data
{
    public class Customer
    {
        public string CustomerID { get; set; }
        public string PsCsName { get; set; }
        public string PsCsTel { get; set; }
        public string PsCsInfo { get; set; }
        public string MemberCardID { get; set; }
        public string MembType { get; set; }
        public string MemberTypeName
        {
            get
            {
                string Name = "";
                switch (MembType)
                {
                    case "01":
                        Name = "TTV";
                        break;
                    case "02":
                        Name = "BAC";
                        break;
                    case "03":
                        Name = "VAG";
                        break;
                    case "04":
                        Name = "VIP";
                        break;
                    case "ZZ":
                        Name = "VIP(ex)";
                        break;
                    default:
                        Name = "";
                        break;
                }
                return Name;
            }
        }

        /// <summary>
        /// Ty le giam the
        /// </summary>
        public decimal DscnMbRt { get; set; }
        /// <summary>
        ///  Ma khu vuc
        /// </summary>
        public string PsCsAddr { get; set; }

        public string id
        {
            get
            {
                return this.CustomerID;
            }
        }
        public string text
        {
            get
            {
                return this.PsCsName;
            }
        }
    }
}
