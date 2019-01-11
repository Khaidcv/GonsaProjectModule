export default {
  data() {
    return {
      show_modal_add_product: false
    }
  },
  methods: {
    webContractDetail_Selected(list) {
      for (var i = 0; i < list.length; i++) {
        list[i].dscnMbRt = this.webContract.dscnMbRt || 0;
        this.web_contract_details.push(list[i]);
      }
      this.show_modal_add_product = false;
    },

    // tính tiền hàng. 
    calc_product_amount(detail) {
      var itemPrice = detail.itemPrice || 0;
      var itemQtty = detail.itemQtty || 0;
      detail.prdcAmnt = itemPrice * itemQtty;


    },

    // tính tiền giảm thẻ.
    calc_DscnMbAm(detail) {
      var prdcAmnt = detail.prdcAmnt || 0;
      detail.dscnMbAm = (prdcAmnt * (detail.dscnMbRt || 0)) / 100;
    },

    // tính thành tiền hàng
    calc_SmPdAmnt(detail) {
      detail.smPdAmnt = (detail.prdcAmnt || 0) - (detail.dscnAmnt || 0) - (detail.dscnMbAm || 0);
    },

    // check số lượng của số lượng bán (đơn vị)
    check_store_quantity(detail) {
      debugger;
      var storeQtty = detail.storeQtty || 0;
      var sl_tonban_donvi = detail.slOhQtty || 0;
      var sl_tonthau_donvi = detail.rmRfQtty || 0;
      if (sl_tonthau_donvi != -1) { // số lượng tồn thầu khác -1 mới kiểm tra
        if (storeQtty > sl_tonban_donvi || storeQtty > sl_tonthau_donvi) {
          alert(`Số lượng bán (đơn vị) ${storeQtty} không được lớn hơn số lượng tồn bán(${sl_tonban_donvi}) hoặc số lượng tồn thầu(${sl_tonthau_donvi})`);
          detail.storeQtty = 0;
          detail.itemQtty = 0;
        }
      }
    },

    // storeq qqty change
    store_quantity_change(detail) {
      // kiểm tra nhập nhỏ hơn 0 thì gán = 0
      if (detail.storeQtty) {
        if (detail.storeQtty < 0) {
          detail.storeQtty = 0;
        }
      }

      // chcek sotrequantity 
      this.check_store_quantity(detail);
      // store thay đổi thì tính item

      //  loại trường hợp chia 0.
      if (detail.itemPerBox && detail.itemPerBox > 0) {
        detail.itemQtty = detail.storeQtty / detail.itemPerBox;
      } else {
        detail.itemQtty = 0;
      }

      this.calc_product_amount(detail); // tiền hàng
      this.calc_DscnMbAm(detail); // tiền giảm thẻ
      this.calc_SmPdAmnt(detail); // thành tiền hàng
      this.calc_payment_amount();
    },

    // item qtty change.
    item_quantity_change(detail) {
      // kiểm tra nhập nhỏ hơn 0 thì gán = 0
      if (detail.itemQtty) {
        if (detail.itemQtty < 0) {
          detail.itemQtty = 0;
        }
      }

      // item thay dổi thì tính cho store
      detail.storeQtty = detail.itemQtty * detail.itemPerBox;
      // tính storequantity xong moi check storequantity
      this.check_store_quantity(detail);

      this.calc_product_amount(detail); // tiền hàng
      this.calc_DscnMbAm(detail); // tiền giảm thẻ
      this.calc_SmPdAmnt(detail); // thành tiền hàng
      this.calc_payment_amount();
    },

    // tính tiền đơn hàng
    calc_payment_amount() { // tính số tiền của đơn hàng.
      var prdcAmnt = 0;
      var dscnAmnt = 0;
      var dscnMbAm = 0;
      var sum_Amnt = 0;

      for (var i = 0; i < this.web_contract_details.length; i++) {
        var detail = this.web_contract_details[i];
        prdcAmnt += detail.prdcAmnt;
        dscnAmnt += detail.dscnAmnt;
        dscnMbAm += detail.dscnMbAm;
        sum_Amnt += detail.smPdAmnt;
      }
      this.webContract.prdcAmnt = prdcAmnt;
      this.webContract.dscnAmnt = dscnAmnt;
      this.webContract.dscnMbAm = dscnMbAm;
      this.webContract.sum_Amnt = sum_Amnt;
    },

    // on remove
    remove_webcontractdetails(detail) {
      var index = this.web_contract_details.indexOf(detail);
      this.web_contract_details.splice(index, 1);
      this.calc_payment_amount();
    },

    removeProductPromotion(index) {
      var detail = this.web_contract_details[index];
      detail.prmtID = null;
      detail.prmtListItem = null;
      detail.dscnAmnt = null;
      detail.dscnRate = null;


      // Tính lại thành tiền hàng
      this.calc_SmPdAmnt(detail);
      this.calc_payment_amount();
    }
  }
}
