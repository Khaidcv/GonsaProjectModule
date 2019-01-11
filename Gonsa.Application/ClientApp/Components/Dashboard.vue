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
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>150</h3>

              <h4>Đơn hàng đã lưu</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>53</h3>

              <h4>Đơn hàng đã Post</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>44</h3>

              <h4>Đơn hàng Team Lead đã duyệt</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>65</h3>

              <h4>Đơn hàng trả về chờ chỉnh sửa</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>53<sup style="font-size: 20px">%</sup></h3>

              <h4>Đơn hàng đã lập phiếu bán</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>44</h3>

              <h4>Đơn hàng đang giao</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>65</h3>

              <h4>Đơn hàng hoàn tất</h4>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <router-link to="/web-contract" class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></router-link>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <router-link to="/new-web-contract" class="btn btn-primary btn-lg">
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
