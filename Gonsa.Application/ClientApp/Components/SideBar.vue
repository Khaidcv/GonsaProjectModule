<template>
  <div>
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form hidden">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree" data-animation-speed="0">
        <li class="header">MAIN NAVIGATION</li>
        <li v-bind:class="{active : $route.path=='/'}"><router-link to="/"><i class="fa fa-dashboard"></i> <span>Bảng điều khiển</span></router-link></li>
        <li class="treeview" v-bind:class="{'active menu-open' : $route.path=='/web-contract' || $route.path=='/new-web-contract'}">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Đơn hàng</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li v-bind:class="{active : $route.path=='/web-contract'}"><router-link to="/web-contract"><i class="fa fa-list"></i> Danh sách đơn hàng</router-link></li>
            <li v-bind:class="{active : $route.path=='/new-web-contract'}"><router-link to="/new-web-contract"><i class="fa fa-plus"></i> Tạo mới đơn hàng</router-link></li>
          </ul>
        </li>
        <li class="treeview hidden">
          <a href="#">
            <i class="fa fa-share"></i> <span>Multilevel</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-circle-o"></i> Level One
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>
                <li class="treeview">
                  <a href="#">
                    <i class="fa fa-circle-o"></i> Level Two
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </div>
</template>
