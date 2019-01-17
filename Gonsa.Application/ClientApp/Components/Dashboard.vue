<template>
  <div class="dashboard">

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
    <section class="content" v-if="show">
      <!-- Small boxes (Stat box) -->
      <div class="row navigation">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link to="/new-web-contract" class="small-box bg-primary">
            <div class="inner">
              <h4>Thêm đơn hàng mới</h4>
            </div>
            <span class="small-box-footer">Thêm <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>

        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link to="/web-contract" class="small-box bg-default">
            <div class="inner">
              <h4>Danh sách tất cả đơn hàng</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>
        <!-- ./col -->

        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link to="/web-contract?status=0" class="small-box bg-yellow">
            <div class="inner">
              <h4>Đơn hàng chờ xử lý</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link class="small-box bg-primary" to="/web-contract?status=101">
            <div class="inner">
              <h4>Đơn hàng đã Post</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link class="small-box bg-teamlead" to="/web-contract?status=201">
            <div class="inner">
              <h4>Đơn hàng Team Lead đã duyệt</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link class="small-box bg-dlpb" to="/web-contract?status=301">
            <div class="inner">
              <h4>Đơn hàng đã lập phiếu bán</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link class="small-box bg-dg" to="/web-contract?status=401">
            <div class="inner">
              <h4>Đơn hàng đang giao</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
          </router-link>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <router-link class="small-box bg-green" to="/web-contract?status=501">
            <div class="inner">
              <h4>Đơn hàng hoàn tất</h4>
            </div>
            <span class="small-box-footer">Xem chi tiết <i class="fa fa-arrow-circle-right"></i></span>
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
    data() {
      return {
        show : false
      }
    },
   async mounted() {
      this.$store.state.show_loading = false;
      try {
        let response = await this.$http.get('/api/ApiAccount/ApiGetMenu');
        if (response.data) {
          // Check xem co menu khong.
          var check = response.data.find((item) => { return item.menuID == "81003" });
          if (check) {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      } catch (e) {
        this.$router.push("/");
      }
    }
  };
</script>
<style lang="scss" scoped>
  .bg-default {
    background: #877f7f;
    color: #fff;
  }

  .bg-teamlead {
    background: #47aa7c;
    color: #fff;
  }

  .bg-dlpb {
    background: #ba5151;
    color: #fff;
  }

  .bg-dg {
    background: #3698c9;
    color: #fff;
  }

  .box-new-web-contract {
    background: #2980b9 !important;
  }

    .box-new-web-contract:hover {
      background: #3498db !important;
    }

  .small-box {
    position: relative;
  }

    .small-box:hover :after {
      content:"";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(250,250,250,0.1) !important;
    }
</style>
