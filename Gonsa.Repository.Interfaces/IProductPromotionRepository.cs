using Gonsa.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Gonsa.Repository.Interfaces
{
    public interface IProductPromotionRepository
    {
        Task<IEnumerable<ProductPromotion>> GetProductPromotions(string ClnID, string ItemID, decimal PrdcQtty, decimal PrdcAmnt, string CustomerID, string MembType);
    }
}
