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
        public decimal SlOhQtty { get; set; } // Số lượng được bán - store quantity
        public decimal SlOhItQt { get; set; } // Số lượng tồn - item quantity
        public decimal RmRfQtty { get; set; } // chưa biết
        public decimal RmRfItQt { get; set; } // chưa biết
        public string BchCode { get; set; } // Mã lô
    }
}
