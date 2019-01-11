<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Danh sách đơn hàng
        <small>Đơn hàng</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li><a href="#">Đơn hàng</a></li>
        <li class="active">Danh sách đơn hàng</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <p>
            <router-link to="/new-web-contract" class="btn btn-primary btn-sm">
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
                        <button class="btn btn-xs btn-primary">Xem</button>
                        <button class="btn btn-xs btn-danger"><i class="fa fa-trash"></i></button>
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
  export default {
    data() {
      return {
        web_contract_list: []
      }
    },
    methods: {
      async load_web_contrac_list() {
        let response = await this.$http.get("/api/webcontract");
        this.web_contract_list = response.data;
      }
    },
    async created() {
      await this.load_web_contrac_list();
      this.$store.state.show_loading = false;
    },
    filters :{
      filterOdate(value){
        if(value){
            return value.substring(0,10);
        }else{
            return "";
        }
      },
      filterStatus(status){
        if(status==-1){
            return `<span class='label label-default'>Đã lưu</span>`;
        }else  if(status==101){
            return `<span class='label label-primary'>Đã post</span>`;
        }else  if(status==201){
            return `<span class='label label-info'>Team Lead Duyệt</span>`;
        }else  if(status==0){
            return `<span class='label label-warning'>Trả về chờ chỉnh sửa</span>`;
        }else  if(status==301){
            return `<span class='label label-default'>Đã lập phiếu bán</span>`;
        }else  if(status==401){
            return `<span class='label label-default'>Hàng đang giao</span>`;
        }else  if(status==501){
            return `<span class='label label-success'>Hoàn tất</span>`;
        }else{
            return "";
        }
      }
    },
    mounted() {

    }
  }
</script>
