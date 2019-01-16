using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class Approve
    {
        public string FactorID { get; set; } = "webContract";
        public string OID { get; set; }
        public DateTime ODate { get; set; }
        public string CmpnID { get; set; } = "21";
        public string Crt_User { get; set; }
        public string DataTbl { get; set; } = "webContract";
        public string SignTble { get; set; } = "zsgn_webContract";
        public int SignChck { get; set; } = 0;
        public int holdSignNumb { get; set; }
        public int nextSignNumb { get; set; }
        public string Variant22 { get; set; }
        public string EntryID { get; set; } = "21:763";
        public string AppvMess { get; set; } = "Trình duyệt";
    }
}
