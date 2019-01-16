using System;
using System.Collections.Generic;
using System.Text;

namespace Gonsa.Data
{
    public class WebContractViewModel
    {
        public Int32 Mode { get; set; }
        public WebContract WebContract { get; set; }
        public List<WebContractDetail> WebContractDetails { get; set; }
    }
}
