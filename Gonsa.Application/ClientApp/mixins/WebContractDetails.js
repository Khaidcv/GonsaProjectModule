// mixin viet danh rieng cho web contract detail
export default {
  data() {
    return {
      show_modal_add_product: false
    }
  },
  methods: {
    async load_product_info(detail) {
      var url = `/api/product/line?ItemID=${detail.itemID}&ItemUnit=${detail.itemUnit}&MembType=${this.webContract.membType}`;
      if (detail.bchCode) {
        url += `&BchCode=${detail.bchCode}`;
      }
      let response = await this.$http.get(url).catch(function () {
        alert("Không tìm thấy sản phẩm !");
      });
      if (response.data && response.data != null) {
        var product = response.data;
        //detail.itemPerBox = product.itemPerBox; //  Item per box(số lượng đơn vị/hộp)
        detail.slOhQtty = product.slOhQtty; // số lượng tồn bán đơn vị.
        detail.rmRfQtty = product.rmRfQtty; // số lượng tồn thầu đơn vị..
      }
    },
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
      var dscnMbAm = (prdcAmnt * detail.dscnMbRt) / 100;
      detail.dscnMbAm = dscnMbAm;
    },

    // tính thành tiền hàng
    calc_SmPdAmnt(detail) {
      detail.smPdAmnt = (detail.prdcAmnt || 0) - (detail.dscnAmnt || 0) - (detail.dscnMbAm || 0);
    },

    // check số lượng của số lượng bán (đơn vị)
    check_store_quantity(detail) {
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
    async store_quantity_change(detail) {
      await this.load_product_info(detail);
      // kiểm tra nhập nhỏ hơn 0 thì gán = 0
      if (detail.storeQtty) {
        if (detail.storeQtty < 0) {
          detail.storeQtty = 0;
        }
      }

      // Số lượng bán đơn vị (nhập)
      this.check_store_quantity(detail);
      // store thay đổi thì tính item

      // Tính qui ra hộp.
      //  loại trường hợp chia 0.
      if (detail.itemPerBox && detail.itemPerBox > 0) {
        detail.itemQtty = detail.storeQtty / detail.itemPerBox;
      } else {
        detail.itemQtty = 0;
      }


      this.calc_product_amount(detail); // tiền hàng
      this.calc_DscnMbAm(detail); // tiền giảm thẻ
      this.calc_SmPdAmnt(detail); // thành tiền hàng
      this.calc_payment_amount(); // Tiền trên đơn hàng
    },

    // item qtty change.
    async item_quantity_change(detail) {
      // kiểm tra nhập nhỏ hơn 0 thì gán = 0
      await this.load_product_info(detail);
      if (detail.itemQtty) {
        if (detail.itemQtty < 0) {
          detail.itemQtty = 0;
        }
      }

      // Từ hộp quy ra đơn vị.
      // Tính ra hộp xong gọi hàm check hộp để tính.
      detail.storeQtty = detail.itemQtty * detail.itemPerBox;
      // tính storequantity xong moi check storequantity
      this.check_store_quantity(detail);

      this.calc_product_amount(detail); // tiền hàng
      this.calc_DscnMbAm(detail); // tiền giảm thẻ
      this.calc_SmPdAmnt(detail); // thành tiền hàng
      this.calc_payment_amount(); // Tiền trên đơn hàng
    },

    // tính tiền đơn hàng
    calc_payment_amount() { // tính số tiền của đơn hàng.
      var prdcAmnt = 0;
      var dscnAmnt = 0;
      var dscnMbAm = 0;
      var sum_Amnt = 0;

      if (this.web_contract_details.length > 0) {
        const length = this.web_contract_details.length;
        for (let i = 0; i < length; i++) {
          var detail = this.web_contract_details[i];
          prdcAmnt += detail.prdcAmnt || 0;
          dscnAmnt += detail.dscnAmnt || 0;
          dscnMbAm += detail.dscnMbAm || 0;
          sum_Amnt += detail.smPdAmnt || 0;
        }
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
      detail.prmtID = "";
      detail.prmtListItem = "";
      detail.dscnAmnt = 0;
      detail.dscnRate = 0;

      // Tính lại thành tiền hàng
      this.calc_SmPdAmnt(detail);
      this.calc_payment_amount();
    }
  }
}
