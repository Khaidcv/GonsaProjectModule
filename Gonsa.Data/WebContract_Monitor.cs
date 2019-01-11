using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
   public class WebContract_Monitor
    {
        public string OID { get; set; }
        public string ODATE { get; set; }
        public string CustomerID { get; set; }
        public string CsName { get; set; }
        public string DESCRIP { get; set; }
        public string SaleEmID { get; set; }
        public int CurrSignNumb { get; set; }
        public byte IsINS { get; set; }
        public DateTime Crt_Date { get; set; }
        public string StepName { get; set; }
    }
}
