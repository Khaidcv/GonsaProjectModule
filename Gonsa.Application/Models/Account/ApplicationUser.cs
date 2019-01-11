using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gonsa.Application.Models.Account
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser() : base()
        {

        }
        public string LoginName { get; set; }
        public string Password { get; set; }
        public string UserCode { get; set; }
        public string PasswordEx { get; set; }
        public string FullName { get; set; }
        public int OSLogin { get; set; }
        public int AcssRght { get; set; }
        public string Country { get; set; }
        public string Fax { get; set; }
        public string Grp_List { get; set; }
        public string CmpnID { get; set; }
        public string CmpnKey { get; set; }
        public string AppvHost { get; set; }
        public string AppvSite { get; set; }
        public string CLN { get; set; }
        public string ASM { get; set; }
        public string SUB { get; set; }
        public string TEAM { get; set; }
        public string ZoneID { get; set; }
        public string RegionID { get; set; }
        public string ClnType { get; set; }
        public string ClnID { get; set; }
        public string ClnPath { get; set; }
        public string Address { get; set; }

        public string LanguageDefault { get; set; }
    }
}
