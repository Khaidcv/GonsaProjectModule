<template>
  <div>
    <div class="modal modal-customer-list modal-wide" ref="modal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="modal-title">Danh sách khách hàng</h3>
          </div>
          <div class="modal-body">
            <div class="input-group">
              <input type="text" placeholder="Nhập mã hoặc tên khách hàng..." class="form-control">
              <span class="input-group-btn">
                <button type="button" class="btn btn-primary btn-flat">Tìm kiếm</button>
              </span>
            </div>
            <br />
            <div class="wrap-table">
              <table class="table-bordered table-striped table">
                <thead>
                  <tr>
                    <th>.No</th>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Chọn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(customer,index) in customers" v-bind:key="customer.customerID">
                    <td>{{(index+1)}}</td>
                    <td>{{customer.customerID}}</td>
                    <td><strong class="text-info">{{customer.psCsName}}</strong></td>
                    <td>{{customer.psCsInfo}}</td>
                    <td>
                      <button @click="selected(customer)" class="btn btn-xs btn-flat btn-primary"><i class="fa fa-check"></i> Chọn</button>
                    </td>
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
                      <a class="page-link" href="#">{{n}}</a>
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
          <div class="modal-footer hidden">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
        customers: [],
        pagination: {
          currentPage: 1,
          total: 0,
          pageSize: 20,
          max: 3
        }
      }
    },
    methods: {
      async get_customers() {
        let response = await this.$http.get("/api/customer?page=" + this.pagination.currentPage + "&pageSize=" + this.pagination.pageSize);
        this.customers = response.data.data;
        this.pagination.total = response.data.total;
      },
      async loadPage(page) {
        this.$store.state.show_loading = true;
        this.pagination.currentPage = page;
        await this.get_customers();
        this.$store.state.show_loading = false;
      },
      selected(customer) {
        this.$emit("selected", customer.customerID);
      }
    },
    watch: {
       show() {
         if (this.show) {
           this.$store.state.show_loading = true;
           if (this.customers.length == 0) {
             // Goi await trong ham khong async.
             (async () => {
               await this.get_customers();
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
    created() {
      
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
  /*modal customer list*/
  .modal-customer-list {
    .wrap-table

  {
    max-height: 400px;
    overflow-y: scroll;
    /*border: 1px solid #999;*/
  }

  }
</style>
