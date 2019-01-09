using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class WebContract
    {
        public string CmpnID { get; set; }
        public string ClnID { get; set; }
        public string ZoneID { get; set; }
        public string RegionID { get; set; }
        public string CustomerID { get; set; }
        public string EntryID { get; set; }
        public string FactorID { get; set; }
        public string OID { get; set; }

        public DateTime ODATE { get; set; }
        public string ClnPath { get; set; }
        public string MemberCardID { get; set; }
        public string MembType { get; set; }
        public decimal DscnMbRt { get; set; }
        public string PsCsName { get; set; }
        public string PsCsFReg { get; set; }
        public string PsCsTel { get; set; }
        public string PsCsAddr { get; set; }
        public string PsCsInfo { get; set; }
        public string DeliverEm { get; set; }
        public string DlCsName { get; set; }
        public string DlCsAddr { get; set; }
        public string DlCsInfo { get; set; }
        public string SaleEmID { get; set; }
        public string SaleEmName { get; set; }
        public string DESCRIP { get; set; }
        public decimal PrdcAmnt { get; set; }
        public decimal DscnMbAm { get; set; }
        public decimal DscnAmnt { get; set; }
        public decimal Sum_Amnt { get; set; }
        public int SignNumb { get; set; }
        public DateTime SignDate { get; set; }
        public string Crt_User { get; set; }
        public DateTime Crt_Date { get; set; }
        public string ChgeUser { get; set; }
        public string ChgeDate { get; set; }

    }
}
