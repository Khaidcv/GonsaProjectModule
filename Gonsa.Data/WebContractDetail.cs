using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class WebContractDetail
    {
        public string OID { get; set; }
        public string ItemID { get; set; }
        public string BoxID { get; set; }
        public string BchCode { get; set; }
        public string StoreID { get; set; }
        public decimal ItemPerBox { get; set; }
        public string PrmtID { get; set; }
        public string PrmtListItem { get; set; }
        public string ItemName { get; set; }
        public string ItemUnit { get; set; }
        public string ItemUnitName { get; set; }
        public decimal ItemQtty { get; set; }
        public decimal RemnRfQt { get; set; }
        public decimal StoreQtty { get; set; }
        public decimal ItemPrice { get; set; }
        public decimal PrdcAmnt { get; set; }
        public decimal DscnMbRt { get; set; }
        public decimal DscnMbAm { get; set; }
        public decimal DscnRate { get; set; }
        public decimal DscnAmnt { get; set; }
        public decimal SmPdAmnt { get; set; }
        public string DESCRIP { get; set; } = "";

        // 2 field này không lưu trong bảng contract details, khai bao để hứng duwxlieuej mặc định = 0;
        public decimal SlOhQtty { get; set; } = 0;// số lượng tồn bán đơn vị
        public decimal RmRfQtty { get; set; } = 0;// số lượng tồn thầu đươn vị
    }
}
