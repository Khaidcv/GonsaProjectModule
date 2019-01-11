<template>
  <div>
    <div class="modal add-product-modal" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="modal-title">Chương trình khuyến mãi</h3>
          </div>
          <div class="modal-body" v-if="show">
            <div class="wrap-table">
              <table class="table-bordered table">
                <thead>
                  <tr>
                    <th>.No</th>
                    <th>Tên CTKM</th>
                    <th>Mã CTKM</th>
                    <th>% Giảm </th>
                    <th>Số tiền giảm</th>
                    <th>#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product_promotion,index) in product_promotions" v-bind:key="index">
                    <td>{{(index+1)}}</td>
                    <td><strong class="text-success">{{product_promotion.prmtNm}}</strong></td>
                    <td>{{product_promotion.prmtID}}</td>
                    <td>{{product_promotion.dscnRate}} %</td>
                    <td>{{product_promotion.dscnAmnt | formatVnd}}</td>
                    <td>
                      <button @click="on_selected(product_promotion)" class="btn btn-default btn-xs"><i class="fa fa-check"></i> Chọn</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      show: Boolean,
      itemID: {
        type: String,
        default: ',00005.0001,00005.0001,00005.0002'
      },
      prdcQtty: {
        type: Number,
        default: 0
      },
      prdcAmnt: {
        type: Number,
        default: 0
      },
      customerID: {
        type: String,
        default: ''
      },
      membType: {
        type: String,
        default: '01'
      }
    },
    data() {
      return {
        product_promotions: [],
        selected: null
      }
    },
    methods: {
      async get_product_promotions() {
        const param = $.param({
          itemID: this.itemID,
          prdcQtty: this.prdcQtty,
          customerID: this.customerID,
          membType: this.membType
        });
        const url = "/api/productpromotion?" + param;
        let response = await this.$http.get(url);
        this.product_promotions = response.data;
      },
      on_selected(product_promotion) {
        this.$emit("change", Object.assign({}, product_promotion));
      }
    },
    filters: {
      formatVnd(number) {
        var decimals = 0;
        var dec_point = ",";
        var thousands_sep = ".";
        var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point == undefined ? "," : dec_point;
        var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + " ₫";
      }
    },
    watch: {
      show() {
        if (this.show) {
          this.$store.state.show_loading = true;
          (async () => {
            await this.get_product_promotions();
            this.$store.state.show_loading = false;
            $(this.$refs.modal).modal('show');
          })();
        } else {
          $(this.$refs.modal).modal('hide');
        }
      }
    },
    mounted() {
      var vm = this;
      $(this.$refs.modal).on('hidden.bs.modal', () => {
        vm.$emit("hide");
      });
    }
  }
</script>
<style lang="scss" scoped>

  .wrap-table {
    overflow-y: hidden;
    min-height: 200px;
  }

    .wrap-table table {
      width: 100%;
    }
    .wrap-table tr:hover{
      cursor:pointer;
      background:#eee;
    }
    .wrap-table tr button:hover {
      background: #3c8dbc;
      color: #fff;
    }
</style>
