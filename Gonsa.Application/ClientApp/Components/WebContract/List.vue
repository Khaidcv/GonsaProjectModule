<template>
  <div>
    <section class="content-header">
      <h1>
        Danh sách đơn hàng
        <small v-if="status" :inner-html.prop="status | filterStatus"></small>
        <small v-else>
          Tất cả đơn hàng
        </small>
      </h1>
      <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard</router-link></li>
        <li class="active">Danh sách đơn hàng</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <p class="text-right">
            <router-link to="/web-contract/new" class="btn btn-primary btn-sm">
              <i class="fa fa-plus"></i> Thêm đơn hàng mới
            </router-link>
          </p>
          <div class="box box-primary">
            <div class="box-header hidden">

            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="tl-wrap-table">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>.No</th>
                      <th>Số DDH</th>
                      <th>Khách hàng</th>
                      <th>Ngày đơn hàng</th>
                      <th>Tình trạng</th>
                      <th>Bước duyệt tiếp theo</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(webcontract,index) in web_contract_list" v-bind:key="index">
                      <td>{{(index+1)}}</td>
                      <td><strong>{{webcontract.oid}}</strong></td>
                      <td><strong class="text-primary">{{webcontract.csName}}</strong></td>
                      <td>{{webcontract.odate | filterOdate}}</td>
                      <!--cách khác $options.filters.linkify(message)-->
                      <td :inner-html.prop="webcontract.currSignNumb | filterStatus"></td>
                      <td>{{webcontract.stepName}}</td>
                      <td width="150">
                        <router-link :to="'/web-contract/edit/'+webcontract.oid" class="btn btn-xs btn-primary">Xem đơn hàng</router-link>
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
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->

  </div>
</template>
<script>
  import WebContractMixin from '../../mixins/WebContract.js'
  export default {
    mixins : [WebContractMixin],
    data() {
      return {
        web_contract_list: [],
        status: null,
        pagination: {
          currentPage: 1,
          total: 0,
          pageSize: 10,
          max: 3
        }
      }
    },
    methods: {
      async load_web_contrac_list() {
        try{
          let url = "/api/webcontract?page=" + this.pagination.currentPage + "&pageSize=" + this.pagination.pageSize;
            let status = this.$route.query.status;
            if(status){
                this.status = status;
                url+="&status="+status;
            }
            let response = await this.$http.get(url).catch((error)=>{
                console.log(error);
                this.$router.push("/web-contract");
            });
            if(response.data){
              this.web_contract_list = response.data.data;
              this.pagination.total = response.data.total;
            }
        }catch(e){
            console.log(e);
        }
      },
      async loadPage(page) {
        this.$store.state.show_loading = true;
        this.pagination.currentPage = page;
        await this.load_web_contrac_list();
        this.$store.state.show_loading = false;
      },
    },
    filters :{
      filterOdate(value){
        if(value){
            return value.substring(0,10);
        }else{
            return "";
        }
      }
    },
   async mounted() {
      this.$store.state.show_loading = true;
      await this.load_web_contrac_list();
      this.$store.state.show_loading = false;
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
