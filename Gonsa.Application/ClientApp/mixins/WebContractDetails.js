// mixin viet danh rieng cho web contract detail
export default {
  data() {
    return {
      show_modal_add_product: false,
      detail_editing: null
    }
  },
  methods: {
    async load_product_info(detail) {
      var url = `/api/product/line?ItemID=${detail.itemID}&ItemUnit=${detail.itemUnit}&MembType=${this.webContract.membType}&customerID=${this.webContract.customerID}`;
      if (detail.bchCode) {
        url += `&BchCode=${detail.bchCode}`;
      }
      if (detail.qc_XaBang) {
        url += `&Qc_XaBang=${detail.qc_XaBang}`;
      }
      let response = await this.$http.get(url).catch(function () {
        alert("Không tìm thấy sản phẩm !");
      });
      console.log(response);
      if (response.data && response.data != null) {
        var product = response.data;
        //detail.itemPerBox = product.itemPerBox; //  Item per box(số lượng đơn vị/hộp), cos tra ve trong api get web contract
        detail.slOhQtty = product.slOhQtty; // số lượng tồn bán đơn vị.
        detail.rmRfQtty = product.rmRfQtty; // số lượng tồn thầu đơn vị..
      }
    },
    webContractDetail_Selected(list) {
      this.isDirty = true;
      var error_items = [];
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        item.dscnMbRt = this.webContract.dscnMbRt || 0;


        // lay tohng tin de kiem tra trong gio hang da co chau
        let itemID = item.itemID;
        let boxID = item.boxID;
        let bchCode = item.bchCode;
        let storeID = item.storeID;
        let prmtID = item.prmtID;
        let qc_XaBang = item.qc_XaBang;

        // kiem tra trong igo hang
        var duplicate_items = this.web_contract_details.filter(function (detail) {
          return detail.itemID == itemID && detail.boxID == boxID && detail.bchCode == bchCode && detail.storeID == storeID && detail.prmtID == prmtID && detail.qc_XaBang == qc_XaBang
        });

        // neu co
        if (duplicate_items.length > 0) {
          var dup_item = duplicate_items[0];
          // kiem tra da add vaolist error hcua. co roi thi thoi.
          var added = error_items.filter((e) => { return e.itemName == dup_item.itemName }).length > 0;
          if (added == false) {
            error_items.push({
              itemName: dup_item.itemName
            })
          }
        } else { // neu khong co cai nao trung`. thi add vao.
          this.web_contract_details.push(item);
        }
      }

      // co loi thi show.
      if (error_items.length) {
        alert("Sản phẩm " + error_items.map((e) => { return e.itemName }).join(" ,") + " đã có trong giỏ hàng.");
      }

      this.show_modal_add_product = false;
    },

    // tính tiền hàng. 
    calc_product_amount(detail) {
      var itemPrice = detail.itemPrice || 0;
      var itemQtty = detail.itemQtty || 0;
      detail.prdcAmnt = itemPrice * itemQtty;


    },
    calc_dscnAmnt(detail) {
      try {
        // phan tram giam gia = 0. thi lay so tien. nguoc lai thi tinh so tien theo %.
        if (detail.dscnRate == 0) {
          detail.dscnAmnt = detail.dscnAmnt;
        } else {
          detail.dscnAmnt = (detail.dscnRate * detail.prdcAmnt) / 100;
        }
      } catch (e) {
        alert(e);
      }
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
        if (storeQtty > sl_tonban_donvi) {
          alert(`Số lượng bán (đơn vị) ${storeQtty} không được lớn hơn số lượng tồn bán(${sl_tonban_donvi})`);
          detail.storeQtty = 0;
          detail.itemQtty = 0;
        } else if (storeQtty > sl_tonthau_donvi) {
          alert(`Số lượng bán (đơn vị) ${storeQtty} không được lớn hơn số lượng tồn thầu(${sl_tonthau_donvi})`);
          detail.storeQtty = 0;
          detail.itemQtty = 0;
        }
      }
    },

    // storeq qqty change
    async store_quantity_change(detail) {
      this.isDirty = true;
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
      this.calc_dscnAmnt(detail); // tinh tien giam gia
      this.calc_DscnMbAm(detail); // tiền giảm thẻ
      this.calc_SmPdAmnt(detail); // thành tiền hàng
      this.calc_payment_amount(); // Tiền trên đơn hàng
    },

    // item qtty change.
    async item_quantity_change(detail) {
      // kiểm tra nhập nhỏ hơn 0 thì gán = 0
      this.isDirty = true;
      await this.load_product_info(detail);
      if (detail.itemQtty) {
        if (detail.itemQtty < 0) {
          detail.itemQtty = 0;
        }
      }

      // Từ hộp quy ra đơn vị.
      // Tính ra hộp xong gọi hàm check hộp để tính.
      detail.storeQtty = detail.itemQtty * detail.itemPerBox;

      // kich hoat ham store quantity change. 
      this.store_quantity_change(detail);

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
      this.isDirty = true;
      var index = this.web_contract_details.indexOf(detail);
      this.web_contract_details.splice(index, 1);
      this.calc_payment_amount();
    },

    // xoa promotion
    removeProductPromotion(index) {
      this.isDirty = true;
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
