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
    remove_webcontractdetails(contractDetail) {
      var index = this.web_contract_details.indexOf(contractDetail);
      this.web_contract_details.splice(index, 1);
    }
  }
}
