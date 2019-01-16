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
              <div class="tl-table-footer clearfix hidden"><div class="row"><div class="col-sm-6 col-xs-12 tl-table-pageinfo"><small><strong>Displaying 1 to 50 of 9.481 items.</strong></small></div> <div class="col-sm-6 col-xs-12 tl-table-pagination"><div><ul class="pagination pagination-sm"><li class="active"><a>1</a></li><li><a onclick="gotoPage(2)" href="javascript:void(0)">2</a></li><li><a onclick="gotoPage(3)" href="javascript:void(0)">3</a></li><li><a href="javascript:void(0)">...</a></li><li></li><li><a onclick="gotoPage(190)" data-page="190" href="javascript:void(0)">190</a></li><li><a onclick="gotoPage(2)" href="javascript:void(0)" data-page="2"><i class="fa fa-angle-right"></i></a></li></ul></div></div></div></div>
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
        status: null
      }
    },
    methods: {
      async load_web_contrac_list() {
        try{
            let url = "/api/webcontract";
            let status = this.$route.query.status;
            if(status){
                this.status = status;
                url+="?status="+status;
            }
            let response = await this.$http.get(url).catch((error)=>{
                console.log(error);
                this.$router.push("/web-contract");
            });
            if(response.data){
                this.web_contract_list = response.data;
            }
        }catch(e){
            console.log(e);
        }
      }
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
    }
  }
</script>
