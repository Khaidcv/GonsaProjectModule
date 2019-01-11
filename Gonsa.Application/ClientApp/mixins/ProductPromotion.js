export default {
  data() {
    return {
      show_product_promotion_modal: false,
      contract_detail_change_promotion_index: -1 // biến để lưu lai contract detail đang chỉnh sửa.
    }
  },
  methods: {
    onProductPromotionChange(productPromotion) {

      var detail = this.web_contract_details[this.contract_detail_change_promotion_index];

      detail.prmtID = productPromotion.prmtID;
      detail.prmtListItem = productPromotion.prmtNm;
      detail.dscnAmnt = productPromotion.dscnAmnt;
      detail.dscnRate = productPromotion.dscnRate;

      // gọi hàm tính tiền hàng bên mix web contract detail
      // Tính lại thành tiền hàng
      this.calc_SmPdAmnt(detail);
      this.calc_payment_amount();

      // goi ham dong, de reset lai gia tri. 1. index dang add promotion, 2. flat show hide modal.
      this.onCloseProductPromotionModal();
    },
    openProductPromotionModal(index) {
      this.contract_detail_change_promotion_index = index;
      this.show_product_promotion_modal = true;
    },
    onCloseProductPromotionModal() {
      this.contract_detail_change_promotion_index = -1;
      this.show_product_promotion_modal = false;
    }
  }
}
