using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class Product
    {
        public string ItemID { get; set; } // Mã sản phẩm
        public string ItemName { get; set; } // Tên sản phẩm
        public string ItemUnit { get; set; } // Mã đơn vị tính
        public string ItemUnitName { get; set; } // Tên đơn vị tính
        public string StoreID { get; set; } // Mã kho

        public decimal ItemPerBox { get; set; } // Số lượng đơn vị/ 1 hộp.

        public decimal ItemPrice { get; set; } // Giá/hộp
        public decimal StorePrice { get; set; } // Giá/đơn vị

        public decimal SlOhItQt { get; set; } // Số lượng được bán hộp
        public string SlOhItQt_Format { get { return Replace(SlOhItQt); } }

        public decimal SlOhQtty { get; set; } // Số lượng được bán Đơn vị
        public string SlOhQtty_Format { get { return Replace(SlOhQtty); } }

        public string Qc_XaBang { get; set; } // Số hợp đồng thầu

        public decimal RmRfQtty { get; set; } //Số lượng tồn thầu Đơn vị
        public string RmRfQtty_Format { get { return Replace(RmRfQtty); } }

        public decimal RmRfItQt { get; set; } // Số lượng tồn thầu Hộp
        public string RmRfItQt_Format { get { return Replace(RmRfItQt); } }

        public decimal RmPlItQt { get; set; } //Số lượng tồn dự trù hộp
        public string RRmPlItQt_Format { get { return Replace(RmPlItQt); } }

        public decimal RmPlQtty { get; set; } //Số lượng tồn dự trù Đơn vị
        public string RmPlQtty_Format { get { return Replace(RmPlQtty); } }

        public string BchCode { get; set; } // Mã lô



        public string Replace(decimal decVal)
        {
            return String.Format("{0:0,0}", decVal).Replace(".", "*").Replace(",", ".").Replace("*", ",");
        }
    }
}
