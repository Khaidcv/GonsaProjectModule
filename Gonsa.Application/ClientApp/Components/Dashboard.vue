<template>
  <div>

    <section class="content-header">
      <h1>
        Bảng điều khiển
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb hidden">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box" style="background:#fff;">
            <div class="inner">
              <h4>Danh sách tất cả đơn hàng</h4>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h4>Đơn hàng chờ xử lý</h4>
            </div>
            <router-link to="/web-contract?status=0" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-primary">
            <div class="inner">
              <h4>Đơn hàng đã Post</h4>
            </div>
            <router-link to="/web-contract?status=101" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-info">
            <div class="inner">
              <h4>Đơn hàng Team Lead đã duyệt</h4>
            </div>
            <router-link to="/web-contract?status=201" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h4>Đơn hàng đã lập phiếu bán</h4>
            </div>
            <router-link to="/web-contract?status=301" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box" style="background:#0094ff">
            <div class="inner">
              <h4>Đơn hàng đang giao</h4>
            </div>
            <router-link to="/web-contract?status=401" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h4>Đơn hàng hoàn tất</h4>
            </div>
            <router-link to="/web-contract?status=501" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <router-link to="/web-contract/new" class="btn btn-primary btn-lg">
            <i class="fa fa-plus"></i> Thêm đơn hàng mới
          </router-link>
        </div>
        <!-- ./col -->
      </div>

    </section>
    <!-- /.content -->
  </div>
</template>
<script>

  export default {
    mounted() {
      this.$store.state.show_loading = false;
    }
  };
</script>
<style lang="scss">
</style>
