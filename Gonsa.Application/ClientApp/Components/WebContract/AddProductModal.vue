<template>
  <div>
    <div class="modal" ref="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="modal-title">Danh sách sản phẩm</h3>
          </div>
          <div class="modal-body" v-if="show">
            <div class="input-group">
              <input type="text" placeholder="Nhập mã hoặc tên sản phẩm..." class="form-control">
              <span class="input-group-btn">
                <button type="button" class="btn btn-primary btn-flat">Tìm kiếm</button>
              </span>
            </div>
            <br />
            <div class="wrap-table">
              <table class="table-bordered table" style="width:1500px">
                <thead>
                  <tr>
                    <th>.No</th>
                    <th>Chọn</th>
                    <th>Mã sản phẩm</th>
                    <th style="width:200px;">Tên sản phẩm</th>
                    <th>Tên đơn vị tính</th>
                    <th>Số lượng đơnvị/hộp</th>
                    <th>Giá hộp</th>
                    <th>Giá đơn vị</th>
                    <th>Số lượng được bán</th>
                    <th>Số lượng tồn</th>
                    <th v-if="$store.state.user.clnType=='ETC'">Số lượng tồn thầu</th>
                    <th>Mã lô sản phẩm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product,index) in products" v-bind:key="index">
                    <td>{{(index+1)}}</td>
                    <td>
                      <template>
                      </template>
                      <input v-model="selectedsProductID" v-bind:value="product.itemID" type="checkbox" name="selectedsProductID[]" value="" />
                    </td>
                    <td>{{product.itemID}}</td>
                    <td><strong class="text-info">{{product.itemName}}</strong></td>
                    <td>{{product.itemUnitName}}</td>
                    <td>{{product.itemPerBox}}</td>
                    <td>{{product.itemPrice | formatVnd}}</td>
                    <td>{{product.storePrice | formatVnd}}</td>
                    <td>{{product.saleOhQt}}</td>
                    <td>{{product.realOhQt}}</td>
                    <td v-if="$store.state.user.clnType=='ETC'">{{product.remnRfQt}}</td>
                    <td>{{product.bchCode}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-right">
              <ul class="pagination pagination-sm">
                <template v-if="pagination.currentPage>1">
                  <li>
                    <a class="page-link" href="#" tabindex="-1" @click="loadPage(pagination.currentPage - 1)"><i class="fa fa-arrow-left"></i></a>
                  </li>
                  <li v-if="pagination.currentPage > pagination.max + 1">
                    <a href="#" @click="loadPage(1)">1</a>
                  </li>
                </template>
                <template v-if="start>=pagination.max">
                  <li v-if="start==pagination.max">
                    <a href="#" @click="loadPage(2)">2</a>
                  </li>
                  <li v-else>
                    <a href="#">...</a>
                  </li>
                </template>
                <template v-if="n >= start" v-for="n in end">
                  <template v-if="n==pagination.currentPage">
                    <li class="active">
                      <a class="page-link" href="#">
                        {{
n
                        }}
                      </a>
                    </li>
                  </template>
                  <template v-else>
                    <li>
                      <a class="page-link" href="#" @click="loadPage(n)">{{n}}</a>
                    </li>
                  </template>
                </template>

                <template v-if="end + 1 < totalPages">
                  <li v-if="end + 2 == totalPages">
                    <a href="#" @click="loadPage(totalPages-1)">{{(totalPages-1)}}</a>
                  </li>
                  <li v-else>
                    <a href="#">...</a>
                  </li>
                </template>

                <template v-if="pagination.currentPage< totalPages">
                  <li v-if="pagination.currentPage < totalPages - pagination.max">
                    <a href="#" @click="loadPage(totalPages)">{{totalPages}}</a>
                  </li>

                  <li v-if="pagination.currentPage<totalPages">
                    <a class="page-link" href="#" @click="loadPage(pagination.currentPage + 1)"><i class="fa fa-arrow-right"></i></a>
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Hủy <i class="fa fa-ban" aria-hidden="true"></i></button>
            <button type="button" @click="save_close()" class="btn btn-primary">Đưa sản phẩm đã chọn giỏ hàng <i class="fa fa-floppy-o" aria-hidden="true"></i></button>
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
    props: ["show"],
    data() {
      return {
        flag_loaddata: false,
        selectedsProductID: [],
        products: [],
        pagination: {
          currentPage: 1,
          total: 0,
          pageSize: 20,
          max: 3
        }
      }
    },
    methods: {
      async get_products() {
        let response = await this.$http.get("/api/product");
        console.log(response);
        this.products = response.data;
        //this.pagination.total = response.data.total;
        this.pagination.total = 5;
      },
      async loadPage(page) {
        this.$store.state.show_loading = true;
        this.pagination.currentPage = page;
        await this.get_products();
        this.$store.state.show_loading = false;
      },
      save_close() {
        var webContractDetailList = [];
        for (var i = 0; i < this.selectedsProductID.length; i++) {
          var product = this.products.find((item) => { return item.itemID == this.selectedsProductID[i] });
          var webContractDetail = {};

          webContractDetail.storeID = product.storeID;
          webContractDetail.itemID = product.itemID;
          webContractDetail.itemName = product.itemName;
          webContractDetail.itemUnit = product.itemUnit;
          webContractDetail.itemUnitName = product.itemUnitName;
          webContractDetail.bchCode = product.bchCode; // mã lô

          // qui cách bán
          if (this.$store.state.user.clnType == 'OTC') {
            webContractDetail.boxID = 'SizeItem';
          } else if (this.$store.state.user.clnType == 'ETC') {
            webContractDetail.boxID = 'SizeBase';
          }

          // tinh so luong ton thau
          if (this.$store.state.user.clnType == 'OTC') {
            webContractDetail.remnRfQt = -9999; // qui cách bán
          } else if (this.$store.state.user.clnType == 'ETC') {
            webContractDetail.remnRfQt = product.remnRfQt; // qui cách bán
          }

          webContractDetailList.push(webContractDetail);
        }
        this.$emit("selected", webContractDetailList);
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
          this.selectedsProductID = [];
          this.$store.state.show_loading = true;
          if (this.products.length == 0) {
            // Goi await trong ham khong async.
            (async () => {
              await this.get_products();
              this.$store.state.show_loading = false;
              $(this.$refs.modal).modal('show');
            })();
          } else {
            this.$store.state.show_loading = false;
            $(this.$refs.modal).modal('show');
          }
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
    },
    computed: {
      totalPages: function () {
        return Math.ceil(this.pagination.total / this.pagination.pageSize)
      },
      start() {
        var start = this.pagination.currentPage - this.pagination.max;
        if (start <= 1) {
          return 1;
        } else {
          return start;
        }
      },
      end() {
        var end = this.pagination.currentPage + this.pagination.max;
        if (end > this.totalPages) {
          return this.totalPages;
        } else {
          return end;
        }
      }
    }
  }
</script>
<style lang="scss">
  input[type="checkbox"] {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  table th {
    white-space: nowrap;
  }
</style>
