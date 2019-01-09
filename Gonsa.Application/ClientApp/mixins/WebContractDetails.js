export default {
  data() {
    return {
      show_modal_add_product: false
    }
  },
  methods: {
    webContractDetail_Selected(list) {
      for (var i = 0; i < list.length; i++) {
        this.web_contract_details.push(list[i]);
      }
      this.show_modal_add_product = false;
    },
    calc_produt_amount(detail) {
      var itemPrice = detail.itemPrice || 0;
      var itemQtty = detail.itemQtty || 0;
      detail.prdcAmnt = itemPrice * itemQtty;
    },
    store_quantity_change(detail) {
      // store thay đổi thì tính item
      detail.itemQtty = detail.storeQtty / detail.itemPerBox;
      this.calc_produt_amount(detail);
    },
    item_quantity_change(detail) {
      // item thay dổi thì tính cho store

      detail.storeQtty = detail.itemQtty * detail.itemPerBox;
      this.calc_produt_amount(detail);
    },
    remove_webcontractdetails(contractDetail) {
      var index = this.web_contract_details.indexOf(contractDetail);
      this.web_contract_details.splice(index, 1);
    }
  }
}
