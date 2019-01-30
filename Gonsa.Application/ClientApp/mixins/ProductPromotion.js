export default {
  data() {
    return {
      show_product_promotion_modal: false,
      contract_detail_change_promotion_index: -1 // biến để lưu lai contract detail đang chỉnh sửa.
    }
  },
  methods: {
    onProductPromotionChange(productPromotion) {
      this.isDirty = true;
      var detail = this.web_contract_details[this.contract_detail_change_promotion_index];

      detail.prmtID = productPromotion.prmtID;
      detail.prmtListItem = productPromotion.prmtNm;

      detail.dscnRate = productPromotion.dscnRate;
      detail.dscnAmnt = productPromotion.dscnAmnt; // gan vào truoc, rôi goi ham tinh tien giam gia, trogn do se tinh lai tien giam gia phu thuoc vao phan tram giam gia, neu co phan tram thi tinh theo tien hang, neu ko thi lay tu bang popup

      // gọi hàm tính tiền hàng bên mix web contract detail
      // Tính lại thành tiền hàng
      this.calc_dscnAmnt(detail);
      this.calc_SmPdAmnt(detail);
      this.calc_payment_amount();

      // goi ham dong, de reset lai gia tri. 1. index dang add promotion, 2. flat show hide modal.
      this.onCloseProductPromotionModal();
    },
    openProductPromotionModal(index) {
      // Khi mở popup, gán index để khi đóng, hoặc khi sửa, từ index lấy ra detail để chỉnh sửa. khi đóng thì reset lại.
      this.detail_editing = this.web_contract_details[index];
      this.contract_detail_change_promotion_index = index;
      this.show_product_promotion_modal = true;
    },
    onCloseProductPromotionModal() {
      this.detail_editing = null;
      this.contract_detail_change_promotion_index = -1;
      this.show_product_promotion_modal = false;
    }
  }
}
