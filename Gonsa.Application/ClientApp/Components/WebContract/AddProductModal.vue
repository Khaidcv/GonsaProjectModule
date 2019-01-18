<template>
  <div>
    <div class="modal add-product-modal" ref="modal">
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
              <input type="text" placeholder="Nhập tên sản phẩm..." @keyup.13="search" v-model="keyword" class="form-control">
              <span class="input-group-btn">
                <button v-if="keyword.length>0" @click="()=>{keyword=''; search()}" class="btn btn-defal btn-flat">X</button>
                <button @click="search" type="button" class="btn btn-primary btn-flat">Tìm kiếm</button>
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
                    <th>Số lượng đơn vị/hộp</th>
                    <th>Giá hộp</th>
                    <th>Giá đơn vị</th>
                    <th>SL được bán (hộp)</th>
                    <th>SL được bán (đơn vị)</th>
                    <th>Số hợp đồng thầu</th>
                    <th v-if="$store.state.user_info.clnType=='ETC'">Sl tồn thầu (hộp)</th>
                    <th v-if="$store.state.user_info.clnType=='ETC'">Sl tồn thầu (đơn vị)</th>
                    <th>Sl dụ trù (hộp)</th>
                    <th>Sl dụ trù (đơn vị)</th>
                    <th v-if="$store.state.user_info.clnType=='ETC'">Mã lô sản phẩm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product,index) in products" @click="check($event)" v-bind:key="index">
                    <td>{{(index+1)}}</td>
                    <td>
                      <template>
                      </template>
                      <input v-model="selectedsProductID" v-bind:value="index" type="checkbox" name="selectedsProductID[]" value="" />
                    </td>
                    <td>{{product.itemID}}</td>
                    <td><strong class="text-info">{{product.itemName}}</strong></td>
                    <td>{{product.itemUnitName}}</td>
                    <td>{{product.itemPerBox}}</td>
                    <td>{{product.itemPrice | formatVnd}}</td>
                    <td>{{product.storePrice | formatVnd}}</td>
                    <td>{{product.slOhItQt}}</td> <!-- Số lượng được bán hộp-->
                    <td>{{product.slOhQtty}}</td> <!-- Số lượng được bán đơn vị-->
                    <td>{{product.qc_XaBang}}</td> <!--Số hợp đồng thầu -->
                    <td v-if="$store.state.user_info.clnType=='ETC'">{{product.rmRfItQt}}</td> <!-- Số lượng tồn thầu hộp-->
                    <td v-if="$store.state.user_info.clnType=='ETC'">{{product.rmRfQtty}}</td> <!-- Số lượng tồn thầu đơn vị-->
                    <td>
                      {{product.rmPlItQt}}
                    </td> <!-- Số lượng dụ trù hộp-->
                    <td>{{product.rmPlQtty}}</td> <!-- Số lượng dụ trù đơn vị-->
                    <td v-if="$store.state.user_info.clnType=='ETC'">{{product.bchCode}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-right hidden">
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
    props: ["show", "membType","customerID"],
    data() {
      return {
        // lưu danh sách product đã chọn.
        selectedsProductID: [],
        // danh sách sản phẩm từ api.
        products: [],
        keyword: '',
        // phân trang.
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
        this.selectedsProductID = []; // reset lai list da chon.
        let url = "/api/product?membType=" + this.membType +"&customerID="+this.customerID;
        if (this.keyword) {
          url += "&term=" + this.keyword;
        }
        let response = await this.$http.get(url);
        this.products = response.data;
        //this.pagination.total = response.data.total;
      },
      async loadPage(page) {
        this.$store.state.show_loading = true;
        this.pagination.currentPage = page;
        await this.get_products();
        this.$store.state.show_loading = false;
      },
      async check(evt) {

      },
      async search() {
        this.$store.state.show_loading = true;
        await this.get_products();
        this.$store.state.show_loading = false;
      },
      save_close() {
        if (this.selectedsProductID.length == 0) {
          alert("Vui lòng chọn sản phẩm để đưa vào giỏ hàng !");
          return;
        }

        var details = [];
        for (let i = 0; i < this.selectedsProductID.length; i++) {
          var product = this.products[this.selectedsProductID[i]];
          var detail = {};

          detail.storeID = product.storeID;
          detail.itemID = product.itemID;
          detail.itemName = product.itemName;
          detail.itemUnit = product.itemUnit;
          detail.itemUnitName = product.itemUnitName;
          detail.qc_XaBang = product.qc_XaBang;
          detail.bchCode = product.bchCode; // mã lô

          // Qui cách bán
          if (this.$store.state.user_info.clnType == 'OTC') {
            detail.boxID = 'SizeItem';
          } else if (this.$store.state.user_info.clnType == 'ETC') {
            detail.boxID = 'SizeBase';
          }

          // webContractDetail không có thông tin này, nhưng gắn vào để làm dữ liệu tính toán.
          // Lưu form type 2 không có giá trị, call api để lấy lại.
          detail.itemPerBox = product.itemPerBox; //  Item per box(số lượng đơn vị/hộp)
          detail.slOhQtty = product.slOhQtty; // số lượng tồn bán đơn vị.
          detail.rmRfQtty = product.rmRfQtty; // số lượng tồn thầu đơn vị..

          // tinh so luong ton thau theo đơn vị. (store)
          if (this.$store.state.user_info.clnType == 'OTC') { // -9999
            detail.remnRfQt = -9999;
          } else if (this.$store.state.user_info.clnType == 'ETC') { //
            detail.remnRfQt = product.rmRfQtty;
          }

          detail.itemQtty = 0;
          detail.storeQtty = 0;

          // ItemPrice giá bán
          if (this.$store.state.user_info.clnType == 'OTC') {
            detail.itemPrice = product.itemPrice; // OTC thì lấy giá item price
          } else if (this.$store.state.user_info.clnType == 'ETC') {
            detail.itemPrice = product.storePrice; // ETC thì lấy giá store price
          }

          // Thành tiền.
          detail.prdcAmnt = 0;

          // gán null
          detail.prmtID = "";
          detail.prmtListItem = "";
          detail.dscnAmnt = 0;
          detail.dscnRate = 0;

          detail.dscnMbRt = 0;
          detail.dscnMbAm = 0;

          details.push(detail);
        }

        // gửi dữ liệu qua Form, qua props selected. với tham số là hàm webContractDetail_Selected trong mixins web_contractdetail.
        this.$emit("selected", details);
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
          // khi mở popup, reset lại list danh sách product đang chọn. và từ khoa tìm kiếm.
          this.selectedsProductID = [];
          this.keyword = '';

          this.$store.state.show_loading = true;

          // Kiểm tra chưa lấy sản phẩm thì lấy rồi show, còn lấy rồi thì chỉ show.
          if (this.products.length == 0 || true) {

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
      // Cấu hình khi đọc modal, gọi hàm hide để Form lắng nghe.
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
    height: 15px;
    width: 15px;
    cursor: pointer;
  }

  table td {
    white-space: nowrap;
  }

  .wrap-table {
    min-height: 450px;
  }

    .wrap-table tr:hover {
      background: #eee;
    }

  .add-product-modal .modal-body {
    min-height: 300px;
  }
</style>
