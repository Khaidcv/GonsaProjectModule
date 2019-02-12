<template>
  <div>
    <section class="content-header">
      <h1>
        {{form_title}}
        <small>Đơn hàng</small>
      </h1>
      <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard</router-link></li>
        <li><router-link to="/web-contract">Đơn hàng</router-link></li>
        <li class="active">{{form_title}}</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content" v-if="show">
      <p class="btn-group btn-breadcrumb">
        <button class="btn btn-sm btn-default"><i class="fa fa-plus"></i></button>
        <button class="btn btn-sm btn-default" @click="step_active='step-customer'" v-bind:class="{'btn-success' : step_active=='step-customer'}">Thông tin khách hàng  <i class="fa fa-arrow-circle-right"></i></button>
        <button class="btn btn-sm btn-default" @click="save_customer_info()" v-bind:class="{'btn-success' : step_active=='step-delivery-customer'}">Thông tin đơn vị nhận hàng  <i class="fa fa-arrow-circle-right"></i></button>
        <button class="btn btn-sm btn-default" @click="go_step_product()" v-bind:class="{'btn-success' : step_active=='step-product'}">Danh sách sản phẩm  <i class="fa fa-arrow-circle-right"></i></button>
        <button class="btn btn-sm btn-default" @click="save_step_product()" v-bind:class="{'btn-success' : step_active=='step-review'}">Tổng quan đơn hàng</button>
      </p>

      <!-- Chọn khách hàng -->
      <div class="box box-primary" v-if="step_active == 'step-customer'">
        <div class="box-header with-border">
          <h3 class="box-title">
            <img src="/dist/img/pharmacy-icon.png" width="30" alt="Thông tin đơn hàng" />
            <strong>Thông tin khách hàng</strong>
          </h3>

          <div class="box-tools pull-right">
            <button @click="save_customer_info()" class="btn btn-primary">Chọn đơn vị nhận hàng <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <form data-vv-scope="form-step-customer">
            <div class="row">
              <div class="col-md-8 col-md-offset-1">
                <div class="form-horizontal">
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Khách hàng</label>
                    <div class="col-sm-9">
                      <Select2 skey="customerID" placeholder="Chọn khách hàng" name="customerID" v-validate="'required'" key="customerID"
                               v-model="webContract.customerID"
                               :ajax="customer_ajax" :defaulttext="webContract.psCsName"
                               :templateResult="get_customer_template_result"
                               :templateSelection="get_customer_template_selection"
                               :matcher="get_customer_matcher"
                               @change="customer_OnChange($event)">
                      </Select2>
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.customerID')">{{errors.first('form-step-customer.customerID')}}</p>
                      <div class="text-right hidden">
                        <button type="button" class="btn-xs btn-default" @click="show_modal_customer_list=true">Mở danh sách khách hàng dạng bảng</button>
                      </div>
                    </div>
                  </div>

                  <!-- Mã khách hàng -->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Mã khách hàng</label>
                    <div class="col-sm-9">
                      <input type="text" name="customerID" v-validate="'required'"
                             class="form-control" v-model="webContract.customerID" readonly="readonly" placeholder="Mã khách hàng">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.customerID')">{{errors.first('form-step-customer.customerID')}}</p>
                    </div>
                  </div>
                  <!--Mã thẻ thành viên-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Mã thẻ thành viên</label>
                    <div class="col-sm-9">
                      <input type="text" name="memberCardID" v-validate="'required'"
                             class="form-control" v-model="webContract.memberCardID" readonly="readonly" placeholder="Mã thẻ thành viên">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.memberCardID')">{{errors.first('form-step-customer.memberCardID')}}</p>
                    </div>
                  </div>
                  <!--Loại thẻ-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Loại thẻ</label>
                    <div class="col-sm-9">
                      <input type="text" name="membType" v-validate="'required'"
                             class="form-control" v-model="webContract.membType" readonly="readonly" placeholder="Loại thẻ">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.membType')">{{errors.first('form-step-customer.membType')}}</p>
                    </div>
                  </div>
                  <!--Tỷ lệ giảm thẻ-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Tỷ lệ giảm thẻ</label>
                    <div class="col-sm-9">
                      <input type="text" name="dscnMbRt" v-validate="'required'"
                             class="form-control" v-model="webContract.dscnMbRt" readonly="readonly" placeholder="Tỷ lệ giảm thẻ">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.dscnMbRt')">{{errors.first('form-step-customer.dscnMbRt')}}</p>
                    </div>
                  </div>
                  <!-- Tên khách hang -->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Tên khách hàng</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsName" v-validate="'required'"
                             class="form-control" v-model="webContract.psCsName" placeholder="Tên khách hàng">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.psCsName')">{{errors.first('form-step-customer.psCsName')}}</p>
                    </div>
                  </div>

                  <!--Điện thoaị-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label">Điện thoại</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsTel" v-validate="'numeric|min:8|max:12'"
                             class="form-control" v-model="webContract.psCsTel" placeholder="Điện thoại">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.psCsTel')">{{errors.first('form-step-customer.psCsTel')}}</p>
                    </div>
                  </div>

                  <!--Địa chỉ-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Địa chỉ</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsInfo" v-validate="'required'"
                             class="form-control" v-model="webContract.psCsInfo" placeholder="Địa chỉ">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.psCsInfo')">{{errors.first('form-step-customer.psCsInfo')}}</p>
                    </div>
                  </div>

                  <!--Mã khu vực-->
                  <div class="form-group" v-if="false">
                    <label for="" class="col-sm-3 control-label span-required">Mã khu vực</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsAddr" v-validate="'required'"
                             class="form-control" v-model="webContract.psCsAddr" placeholder="Mã khu vực">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.psCsAddr')">{{errors.first('form-step-customer.psCsAddr')}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </form>
        </div>
        <!-- /.box-body -->
        <div class="box-footer text-right hidden">
        </div>
      </div>
      <!-- Chọn khách hàng-->
      <!-- Đơn vị nhận hàng  -->
      <div class="box box-primary" v-if="step_active == 'step-delivery-customer'">
        <div class="box-header with-border">
          <h3 class="box-title">
            <img src="/dist/img/truck-icon.svg" width="30" alt="Thông tin đơn vị nhận hàng" />
            <strong>Đơn vị nhận hàng</strong>
          </h3>
          <div class="box-tools pull-right">
            <button @click="step_active='step-customer'" class="btn btn-default"><i class="fa fa-arrow-circle-left"></i> Quay lại</button>
            <button @click="save_delivery_customer()" class="btn btn-primary">Giỏ hàng <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <form data-vv-scope="form-step-delivery-customer">
            <div class="row">
              <div class="col-md-8 col-md-offset-1">
                <div class="form-horizontal">
                  <!--Đơn vị nhận hàng-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Đơn vị nhận hàng</label>
                    <div class="col-sm-9">
                      <Select2 skey="deliverEm" placeholder="Chọn đơn vị nhận hàng" name="deliverEm" v-validate="'required'" data-vv-as="Đơn vị nhận hàng" key="deliverEm"
                               v-model="webContract.deliverEm"
                               :templateResult="get_deliverycustomer_template_result"
                               :options="delivery_customers"
                               :templateSelection="get_deliverycustomer_template_selection"
                               @change="deliveryCustomer_OnChange($event)"
                               :matcher="get_deliverycustomer_matcher">
                      </Select2>
                      <p class="text-danger" v-if="issubmited_delivery_customer && errors.has('form-step-delivery-customer.deliverEm')">{{errors.first('form-step-delivery-customer.deliverEm')}}</p>
                    </div>
                  </div>
                  <!--Tên đơn vị-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Tên đơn vị</label>
                    <div class="col-sm-9">
                      <input type="text" name="dlCsName" v-validate="'required'" data-vv-as="Tên đơn vị nhận hàng" key="dlCsName"
                             class="form-control" v-model="webContract.dlCsName" placeholder="Tên đơn vị nhận hàng">
                      <p class="text-danger" v-if="issubmited_delivery_customer && errors.has('form-step-delivery-customer.dlCsName')">{{errors.first('form-step-delivery-customer.dlCsName')}}</p>
                    </div>
                  </div>
                  <!--Mã đơn vị-->
                  <div class="form-group" v-if="false">
                    <label for="" class="col-sm-3 control-label span-required">Mã đơn vị</label>
                    <div class="col-sm-9">
                      <input type="text" name="deliverEm2" v-validate="'required'" data-vv-as="Mã đơn vị nhận hàng" key="deliverEm2"
                             class="form-control" v-model="webContract.deliverEm" readonly="readonly" placeholder="Mã đơn vị nhận hàng">
                      <p class="text-danger" v-if="issubmited_delivery_customer && errors.has('form-step-delivery-customer.deliverEm2')">{{errors.first('form-step-delivery-customer.deliverEm2')}}</p>
                    </div>
                  </div>
                  <!--Địa chỉ nhận hàng-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Địa chỉ nhận hàng</label>
                    <div class="col-sm-9">
                      <input type="text" name="dlCsInfo" v-validate="'required'" data-vv-as="Địa chỉ nhận hàng" key="dlCsInfo"
                             class="form-control" v-model="webContract.dlCsInfo" placeholder="Địa chỉ nhận hàng">
                      <p class="text-danger" v-if="issubmited_delivery_customer && errors.has('form-step-delivery-customer.dlCsInfo')">{{errors.first('form-step-delivery-customer.dlCsInfo')}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
        <div class="box-footer text-right hidden">
          <button @click="step_active='step-customer'" class="btn btn-default"><i class="fa fa-arrow-circle-left"></i> Quay lại</button>
          <button @click="save_delivery_customer()" class="btn btn-primary">Giỏ hàng <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
        </div>
      </div>
      <!-- Đơn vị nhận hàng-->
      <!-- Giỏ hàng -->
      <div class="box box-primary" v-if="step_active == 'step-product'">
        <div class="box-header with-border">
          <h3 class="box-title">
            <img src="/dist/img/shopping-bags.png" width="30" alt="Sản phẩm" />
            <strong>Giỏ hàng</strong>
          </h3>

          <div class="box-tools pull-right">
            <button @click="step_active='step-delivery-customer'" class="btn btn-default"><i class="fa fa-arrow-circle-left"></i> Quay lại</button>
            <button @click="show_modal_add_product=true" v-if="can_edit" class="btn btn-primary"><i class="fa fa-plus"></i> Thêm sản phẩm vào giỏ hàng</button>
            <button @click="save_step_product()" class="btn btn-primary">Xem đơn hàng <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              <div class="alert alert-danger alert-dismissible hidden">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4><i class="icon fa fa-ban"></i> Cảnh báo!</h4>
                Sản phẩm đã bị trùng lặp trong giỏ hàng
              </div>
              <div class="wrap-table">
                <form data-vv-scope="form-step-product">

                  <table class="table table-bordered" width="1200">
                    <thead>
                      <tr>
                        <th>.No</th>
                        <th>Mã kho</th>
                        <th>Tên sản phẩm</th>
                        <th>Tên đơn vị tính</th>
                        <th v-if="$store.state.user_info.clnType=='ETC'">Số hợp đồng thầu</th>
                        <th v-if="$store.state.user_info.clnType=='ETC'">Mã lô</th>
                        <th v-if="false">Qui cách bán</th>
                        <th v-if="$store.state.user_info.clnType=='ETC'">SL tồn thầu (đơn vị)</th>
                        <th>SL bán (đơn vị)</th>
                        <th>SL bán (hộp)</th>
                        <th>Giá bán</th>
                        <th>Tiền hàng</th>
                        <th v-if="$store.state.user_info.clnType=='OTC'">Tên chương trình KM</th>
                        <th v-if="$store.state.user_info.clnType=='OTC'">% GG.KM</th>
                        <th v-if="$store.state.user_info.clnType=='OTC'">Tiền GG.KM</th>
                        <th v-if="$store.state.user_info.clnType=='OTC'">% G.Thẻ</th>
                        <th v-if="$store.state.user_info.clnType=='OTC'">Tiền G.Thẻ</th>
                        <th>Thành tiền hàng</th>
                        <th v-if="can_edit">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(contractDetail,index) in web_contract_details" :key="index">
                        <td>{{(index+1)}}</td>
                        <td>{{contractDetail.storeID}}</td>
                        <td><strong class="text-success">{{contractDetail.itemName}}</strong></td>
                        <td>{{contractDetail.itemUnitName}}</td> <!-- tê dơn vị tính-->
                        <td v-if="$store.state.user_info.clnType=='ETC'">{{contractDetail.qc_XaBang}}</td> <!-- Số hợp đồng thầu-->
                        <td v-if="$store.state.user_info.clnType=='ETC'">{{contractDetail.bchCode}}</td>
                        <td v-if="false">{{contractDetail.boxID}}</td>
                        <td v-if="$store.state.user_info.clnType=='ETC'">{{contractDetail.remnRfQt}}</td> <!-- So luong ton thau don vi-->
                        <td>
                          <template v-if="can_edit">
                            <input type="number" min="0" max="200"
                                   @change="store_quantity_change(contractDetail)"
                                   v-model="contractDetail.storeQtty" />
                          </template>
                          <template v-else>
                            {{contractDetail.storeQtty}}
                          </template>
                        </td>
                        <td>
                          <template v-if="can_edit">
                            <input type="number" min="0" max="200"
                                   @change="item_quantity_change(contractDetail)"
                                   v-model="contractDetail.itemQtty" />
                          </template>
                          <template v-else>
                            {{contractDetail.itemQtty}}
                          </template>
                        </td>
                        <td>{{contractDetail.itemPrice | formatVnd}}</td>
                        <td>{{contractDetail.prdcAmnt | formatVnd}}</td>
                        <td class="text-right" v-if="$store.state.user_info.clnType=='OTC'">
                          {{contractDetail.prmtListItem}}
                          <template v-if="can_edit">
                            <button @click="openProductPromotionModal(index)" type="button" class="btn btn-xs btn-success">Tìm CTKM</button>
                            <button v-if="contractDetail.prmtListItem" @click="removeProductPromotion(index)" type="button" class="btn btn-xs btn-default">X</button>
                          </template>
                        </td>
                        <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnRate}}</td>
                        <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnAmnt | formatVnd}}</td>
                        <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnMbRt}}</td>
                        <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnMbAm | formatVnd}}</td>
                        <td>{{contractDetail.smPdAmnt | formatVnd}}</td>
                        <td v-if="can_edit">
                          <button type="button" @click="remove_webcontractdetails(contractDetail)" class="btn btn-xs btn-danger"> Xóa </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <!--wrap table-->
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
      </div>
      <!-- Giỏ hàng -->
      <!-- Review -->
      <div class="box box-primary box-review" v-if="step_active == 'step-review'">
        <div class="box-header with-border">
          <h3 class="box-title">
            <img src="/dist/img/vitamin-c.png" width="30" alt="Sản phẩm" />
            <strong>Tổng quan đơn hàng</strong>
          </h3>
          <div class="box-tools pull-right">
            <button @click="step_active='step-product'" class="btn btn-default"><i class="fa fa-arrow-circle-left"></i> Quay lại</button>

            <button @click="approve_webContract" v-if="can_approve" class="btn btn-sm btn-success">
              <i class="fa fa-check-circle-o" aria-hidden="true"></i> Duyệt đơn hàng
            </button>

            <button @click="return_webContract" v-if="can_return" class="btn btn-sm btn-warning">
              <i class="fa fa-check-circle-o" aria-hidden="true"></i> Trả đơn hàng về
            </button>

            <button @click="save_webContract" v-if="can_save" class="btn btn-sm btn-success"><i class="fa fa-floppy-o" aria-hidden="true"></i> Lưu đơn hàng</button>

            <button @click="post_webContract(true)" v-if="can_post" class="btn btn-sm btn-primary">
              <i class="fa fa-check-circle-o" aria-hidden="true"></i> Post đơn hàng
            </button>

            <button @click="delete_webContract" v-if="can_delete" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> Xóa đơn hàng</button>

            <button @click="confirm_webContract" v-if="can_confirm_receive" class="btn btn-sm btn-primary"><i class="fa fa-ban" aria-hidden="true"></i>Xác nhận hàng đã giao</button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-4">
              <h4><i class="fa fa-first-order"></i> <strong class="text-success">Thông tin đơn hàng</strong></h4>
              <table cellpadding="5" class="table">
                <tbody>
                  <tr class="hidden">
                    <td><strong>ASM :</strong></td>
                    <td>{{webContract.asm}}</td>
                  </tr>
                  <tr class="hidden">
                    <td><strong>TEAM :</strong></td>
                    <td>{{webContract.team}}</td>
                  </tr>
                  <tr class="hidden">
                    <td><strong>SUB :</strong></td>
                    <td>{{webContract.sub}}</td>
                  </tr>
                  <tr>
                    <td><strong>Số kênh :</strong></td>
                    <td>{{webContract.clnID}}</td>
                  </tr>
                  <tr>
                    <td><strong>Mã kênh :</strong></td>
                    <td>{{webContract.clnPath}}</td>
                  </tr>
                  <tr>
                    <td><strong>Số đơn đặt hàng :</strong></td>
                    <td>{{webContract.oid}}</td>
                  </tr>
                  <tr>
                    <td><strong>Ngày đơn đặt hàng :</strong></td>
                    <td>{{webContract.odate | dateTimeFormat}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tên trình dược viên :</strong></td>
                    <td>{{webContract.saleEmName}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tình trạng :</strong></td>
                    <template v-if="mode==1">
                      <td :inner-html.prop="webContract.signNumb | filterStatus"></td>
                    </template>
                    <template v-else>
                      <td></td>
                    </template>
                  </tr>
                  <tr>
                    <td><strong>Ghi chú :</strong></td>
                    <td><textarea class="form-control" rows="2" v-model="webContract.descrip"></textarea></td>
                  </tr>
                  <tr>
                    <td><strong>Ngày giờ tạo :</strong></td>
                    <td>{{webContract.crt_Date | dateTimeFormat}}</td>
                  </tr>
                  <tr>
                    <td><strong>Ngày giờ sửa :</strong></td>
                    <td>{{webContract.chgeDate | dateTimeFormat}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--col-->
            <div class="col-md-4">
              <h4>
                <i class="fa fa-user-circle"></i> <strong class="text-success">Thông tin khách hàng</strong>
                <button v-if="can_edit" class="btn btn-xs btn-success" @click="step_active='step-customer'">Sửa</button>
              </h4>
              <table cellpadding="5" class="table">
                <tbody>
                  <tr>
                    <td width="40%"><strong>Mã khách hàng :</strong></td>
                    <td>{{webContract.customerID}}</td>
                  </tr>
                  <tr>
                    <td><strong>Mã thẻ thành viên :</strong></td>
                    <td>{{webContract.memberCardID}}</td>
                  </tr>
                  <tr>
                    <td><strong>Loại thẻ :</strong></td>
                    <td>{{webContract.membType}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tỷ lệ giảm thẻ :</strong></td>
                    <td>{{webContract.dscnMbRt}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tên khách hàng :</strong></td>
                    <td><strong class="text-primary">{{webContract.psCsName}}</strong> </td>
                  </tr>
                  <tr>
                    <td><strong>Điện thoại :</strong></td>
                    <td>{{webContract.psCsTel}}</td>
                  </tr>
                  <tr>
                    <td><strong>Địa chỉ :</strong></td>
                    <td>{{webContract.psCsInfo}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--col-->
            <div class="col-md-4">
              <h4>
                <i class="fa fa-truck"></i> <strong class="text-success">Đơn vị nhận hàng</strong>
                <button v-if="can_edit" class="btn btn-xs btn-success" @click="step_active='step-delivery-customer'">Sửa</button>
              </h4>

              <table cellpadding="5" class="table">
                <tbody>
                  <tr>
                    <td width="40%"><strong>Mã đơn vị nhận :</strong></td>
                    <td>{{webContract.deliverEm}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tên đơn vị :</strong></td>
                    <td><strong class="text-primary">{{webContract.dlCsName}}</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Địa chỉ nhận hàng :</strong></td>
                    <td>{{webContract.dlCsInfo}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--col-->
          </div>
          <!-- /.row -->
          <div class="row">
            <div class="col-md-12">
              <p class="text-right">
                <button v-if="can_edit" class="btn btn-xs btn-success" @click="step_active='step-product'">Sửa</button>
              </p>
              <table class="table table-bordered" width="1200">
                <thead>
                  <tr>
                    <th>.No</th>
                    <th>Mã kho</th>
                    <th>Tên sản phẩm</th>
                    <th>Tên đơn vị tính</th>
                    <th v-if="$store.state.user_info.clnType=='ETC'">Số hợp đồng thầu</th>
                    <th v-if="$store.state.user_info.clnType=='ETC'">Mã lô</th>
                    <th v-if="false">Qui cách bán</th>
                    <th v-if="$store.state.user_info.clnType=='ETC'">SL tồn thầu (đơn vị)</th>
                    <th>SL bán (đơn vị)</th>
                    <th>SL bán (hộp)</th>
                    <th>Giá bán</th>
                    <th>Tiền hàng</th>
                    <th v-if="$store.state.user_info.clnType=='OTC'">Tên chương trình KM</th>
                    <th v-if="$store.state.user_info.clnType=='OTC'">% GG.KM</th>
                    <th v-if="$store.state.user_info.clnType=='OTC'">Tiền GG.KM</th>
                    <th v-if="$store.state.user_info.clnType=='OTC'">% G.Thẻ</th>
                    <th v-if="$store.state.user_info.clnType=='OTC'">Tiền G.Thẻ</th>
                    <th>Thành tiền hàng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(contractDetail,index) in web_contract_details" :key="index">
                    <td>{{(index+1)}}</td>
                    <td>{{contractDetail.storeID}}</td>
                    <td><strong class="text-success">{{contractDetail.itemName}}</strong></td>
                    <td>{{contractDetail.itemUnitName}}</td>
                    <td v-if="$store.state.user_info.clnType=='ETC'">{{contractDetail.qc_XaBang}}</td> <!-- Số hợp đồng thầu-->
                    <td v-if="$store.state.user_info.clnType=='ETC'">{{contractDetail.bchCode}}</td>
                    <td v-if="false">{{contractDetail.boxID}}</td>
                    <td v-if="$store.state.user_info.clnType=='ETC'">{{contractDetail.remnRfQt}}</td> <!-- So luong ton thau don vi-->
                    <td>{{contractDetail.storeQtty}}</td>
                    <td>{{contractDetail.itemQtty}}</td>
                    <td>{{contractDetail.itemPrice | formatVnd}}</td>
                    <td>{{contractDetail.prdcAmnt | formatVnd}}</td>
                    <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.prmtListItem}}</td>
                    <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnRate}}</td>
                    <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnAmnt | formatVnd}}</td>
                    <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnMbRt}}</td>
                    <td v-if="$store.state.user_info.clnType=='OTC'">{{contractDetail.dscnMbAm | formatVnd}}</td>
                    <td>{{contractDetail.smPdAmnt | formatVnd}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row">
            <hr />
            <div class="col-md-4 col-md-offset-8">
              <h4><i class="fa fa-money"></i> <strong class="text-success">Thông tin thanh toán</strong></h4>
              <table cellpadding="5" class="table">
                <tbody>
                  <tr>
                    <td><strong>Tổng tiền hàng :</strong></td>
                    <td>{{webContract.prdcAmnt| formatVnd}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tiền giảm giá khuyến mãi :</strong></td>
                    <td>{{webContract.dscnAmnt| formatVnd}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tiền giảm thẻ :</strong></td>
                    <td>{{webContract.dscnMbAm| formatVnd}}</td>
                  </tr>
                  <tr>
                    <td><strong>Tổng thanh toán :</strong></td>
                    <td>{{webContract.sum_Amnt | formatVnd}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--row-->
        </div>
      </div>
      <!-- Review -->
    </section>
    <!-- /.content -->
    <template>
      <CustomerListModal :show="show_modal_customer_list"
                         @hide="show_modal_customer_list=false"
                         @selected="customer_OnChange"></CustomerListModal>
      <AddProductModal :show="show_modal_add_product"
                       :membType="webContract.membType" :customerID="webContract.customerID"
                       @hide="show_modal_add_product=false"
                       @selected="webContractDetail_Selected"></AddProductModal>
      <SelectProductPromotionModal :show="show_product_promotion_modal"
                                   :membType="webContract.membType"
                                   :customerID="webContract.customerID"
                                   :detail_editing="detail_editing"
                                   @hide="onCloseProductPromotionModal"
                                   :index="contract_detail_change_promotion_index"
                                   @change="onProductPromotionChange"></SelectProductPromotionModal>
    </template>
  </div>
</template>
<script>
  import Common from '../../mixins/Common.js'
  import WebContractMixin from '../../mixins/WebContract.js'
  import WebContractDetailsMixin from '../../mixins/WebContractDetails.js'
  import ProductPromotion from '../../mixins/ProductPromotion'
  import dic from '../../libs/validation_dic/webcontract.js'
  import Select2 from '../Controls/Select2.vue';
  import CustomerListModal from './CustomerListModal.vue'
  import AddProductModal from './AddProductModal.vue'
  import SelectProductPromotionModal from './SelectProductPromotionModal.vue'

  export default {
    mixins: [Common, WebContractDetailsMixin, ProductPromotion, WebContractMixin],
    components: { Select2, CustomerListModal, AddProductModal, SelectProductPromotionModal },
    data() {
      return {
        mode: 0,
        isDirty: false,
        form_title: '',
        customer_ajax: {
          url: '/api/customer?PageSize=50',
          dataType: 'json',
          data: function (params) {
            if (params.term) {
              return {
                term: params.term || '',
                page: params.page || 1
              }
            } else {
              return {
                page: params.page || 1
              }
            }
          },
          cache: true
        },
        issubmited_customer: false, // xac nhan da submit form customer
        issubmited_delivery_customer: false, // xac nhan da submit form delivery customer
        delivery_customers: [],
        show_modal_customer_list: false,
        step_active: "step-customer",
        web_contract_details: [],
        initWebContract: {}, // khai bao de kiem tra dirty
        webContract: {
          // thông tin đơn hàng.
          clnID: '',
          clnPath: '',
          oid: '',
          odate: null,
          saleEmID: '',
          saleEmName: '',
          descrip: '',

          // Thông tin khách hàng
          customerID: null,
          psCsName: '',
          membType: '',
          memberCardID: '',
          dscnMbRt: '',

          psCsInfo: '',
          psCsTel: '',
          psCsAddr: '',

          // Thông tin đơn vị nhận hàng
          dlCsName: '',
          deliverEm: null,
          dlCsInfo: '',

          // thanh toan
          prdcAmnt: 0, // tổn tiền hàng
          dscnAmnt: 0, // Tiền giảm giá khuyến mãi.
          dscnMbAm: 0, // tiền giảm thẻ,
          sum_Amnt: 0, // tổng thành toán.
        }
      }
    },
    methods: {
      async get_oid() {
        return await this.$http.get("/api/webcontract/getoid");
      },
      async get_delivery_customers() {
        if (this.webContract.customerID) {
          let response = await this.$http.get("/api/customer/GetByDelivery/" + this.webContract.customerID);
          this.delivery_customers = response.data;
        } else {
          this.delivery_customers = [];
        }
      },
      async load_customer_info() {
        if (this.webContract.customerID && this.webContract.customerID.length > 0) {
          let customer_response = await this.$http.get("/api/customer/" + this.webContract.customerID);
          var cus = customer_response.data;

          this.webContract.psCsName = cus.psCsName;
          this.webContract.membType = cus.membType;
          this.webContract.memberCardID = cus.memberCardID;
          this.webContract.dscnMbRt = cus.dscnMbRt;

          // thông ti đơn vị nhận hàng
          this.webContract.psCsInfo = cus.psCsInfo;
          this.webContract.psCsTel = cus.psCsTel;
          this.webContract.psCsAddr = cus.psCsAddr;
        } else {
          this.webContract.psCsName = '';
          this.webContract.customerID = '';
          this.webContract.memberCardID = '';
          this.webContract.membType = '';
          this.webContract.dscnMbRt = '';

          // thông tin khách hàng
          this.webContract.psCsInfo = '';
          this.webContract.psCsTel = '';
          this.webContract.psCsAddr = '';

          // thông ti đơn vị nhận hàng
          this.webContract.dlCsName = '';
          this.webContract.deliverEm = '';
          this.webContract.dlCsInfo = '';
        }
      },
      customer_OnChange(customerID) {
        this.$store.state.show_loading = true;
        // clear giỏ hàng
        this.web_contract_details = [];

        this.$store.state.show_loading = true; // baatj loading

        this.webContract.customerID = customerID;
        this.show_modal_customer_list = false;
        this.load_customer_info();
        this.get_delivery_customers();

        this.webContract.deliverEm = null;
        this.deliveryCustomer_OnChange(null);

        setTimeout(() => {
          this.$store.state.show_loading = false; // off loading
        }, 500);
      }, // Khi thay đổi khách hàng, change khi mở modal và chọn, và khi chọn từ select2.
      get_customer_template_result(obj) {
        if (obj.customerID != null && obj.customerID.length > 0) {
          return $(`<div class='select2-template-result'>
                <div class='title'>${obj.psCsName}</div>
                <div class=""><span>${obj.psCsTel}</span></div>
                <div class=""><small>${obj.psCsInfo}</small></div>
                </div>`);
        } else {
          //return obj.text;
          return null;
        }
      }, // Cấu hình selec2 cho customer
      get_customer_template_selection(obj) {
        if (obj.customerID != null && obj.customerID.length > 0)
          return obj.psCsName;
        //return $('<div class="selected"><strong>' + obj.psCsName + '</strong></div>');
        return obj.text;
      },
      get_customer_matcher(params, data) {
        if ($.trim(params.term) === '') {
          return data;
        }

        if (data.customerID == null) {
          return null;
        }

        //if (data.customerID.includes(params.term)) {
        //  return data;
        //}

        if (data.psCsTel.toLowerCase().includes(params.term.toLowerCase())) {
          return data;
        }
        if (this.xoadau(data.psCsName).toLowerCase().includes(this.xoadau(params.term).toLowerCase())) {
          return data;
        }
        if (this.xoadau(data.psCsInfo).toLowerCase().includes(this.xoadau(params.term).toLowerCase())) {
          return data;
        }

        return null;
      },
      get_deliverycustomer_template_result(obj) {
        if (obj.dlCsName != null && obj.dlCsName.length > 0) {
          return $(`<div class='select2-template-result'>
                <div class='title'>${obj.dlCsName}</div>
                <div class="hidden"><span>${obj.deliverEm}</span></div>
                <div class=""><small>${obj.dlCsInfo}</small></div>
                </div>`);
        } else {
          return obj.dlCsName;
        }
      }, // Cấu hình selec2 cho delivery customer
      get_deliverycustomer_template_selection(obj) {
        if (obj.deliverEm != null && obj.deliverEm.length > 0)
          return obj.dlCsName;
        //return $('<div class="selected"><strong>' + obj.dlCsName + '</strong></div>');
        return obj.text;
      },
      get_deliverycustomer_matcher(params, data) {
        if ($.trim(params.term) === '') {
          return data;
        }

        if (data.deliverEm == null) {
          return null;
        }

        //if (data.deliverEm.includes(params.term)) {
        //  return data;
        //}

        if (this.xoadau(data.dlCsName).toLowerCase().includes(this.xoadau(params.term).toLowerCase())) {
          return data;
        }
        return null;
      },
      deliveryCustomer_OnChange(deliveryCustomerID) {
        var deliverCustomer = this.delivery_customers.find((item) => { return item.deliverEm == deliveryCustomerID });
        if (deliverCustomer) {
          this.webContract.deliverEm = deliverCustomer.deliverEm;
          this.webContract.dlCsInfo = deliverCustomer.dlCsInfo;
          this.webContract.dlCsName = deliverCustomer.dlCsName;
        } else {
          this.webContract.deliverEm = '';
          this.webContract.dlCsInfo = '';
          this.webContract.dlCsName = '';
        }
      }, // Khi thay đổi khách hàng, change khi mở modal và chọn, và khi chọn từ select2.
      async go_step_product() {
        this.issubmited_customer = true;
        this.issubmited_delivery_customer = true;
        var valid = await this.$validator.validateAll("form-step-customer");
        if (valid) {
          this.step_active = "step-delivery-customer";
          setTimeout(async () => {
            valid = await this.$validator.validateAll("form-step-delivery-customer");
            if (valid) {
              this.step_active = "step-product";
            }
          }, 0);
        }
      },
      async save_customer_info() { // Step customer
        this.issubmited_customer = true;
        var customerValid = await this.$validator.validateAll("form-step-customer");
        if (customerValid) {
          this.step_active = "step-delivery-customer";
          return true;
        } else {
          this.step_active = "step-customer";
          return false;
        }
      },
      async save_delivery_customer() { // Step delivery customer
        await this.save_customer_info();

        // Set mặc định để check. /// trường hợp bấm từ step sau về.  do vướng v-if nên bật len rồi mới check.
        this.step_active = "step-delivery-customer";
        this.issubmited_delivery_customer = true;
        var deliveryCustomerValid = await this.$validator.validateAll("form-step-delivery-customer");
        if (deliveryCustomerValid) {
          this.step_active = "step-product";
        }
      },
      async save_step_product() {
        // kiểm tra có sản phẩm trong giỏi hàng
        if (this.web_contract_details.length == 0) {
          alert("Không có sản phẩm nào trong giỏ hàng !");
          return true;
        }

        // kiểm tra có detail nào chưa nhập số lượng không
        var no_quantity_check = this.web_contract_details.filter(function (item) { return item.storeQtty == null || item.itemQtty == null }).length;
        if (no_quantity_check > 0) {
          alert("Cập nhật số lượng trong giỏ hàng .");
          return;
        }

        // check trùng dữ sản phẩm.

        var duplicate_list = [];
        for (var i = 0; i < this.web_contract_details.length; i++) {
          var item = this.web_contract_details[i];

          let itemID = item.itemID;
          let boxID = item.boxID;
          let bchCode = item.bchCode;
          let storeID = item.storeID;
          let prmtID = item.prmtID;
          let qc_XaBang = item.qc_XaBang;

          var duplicate_items = this.web_contract_details.filter(function (detail) {
            return detail.itemID == itemID && detail.boxID == boxID && detail.bchCode == bchCode && detail.storeID == storeID && detail.prmtID == prmtID && detail.qc_XaBang == qc_XaBang
          });
          if (duplicate_items.length > 1) {
            var dup_item = duplicate_items[0];
            alert(`Sản phẩm ${dup_item.itemName} với cùng qui cách bán, mã lô, số hợp đồng thầu, mã kho, CTKM bị trùng lặp. !`);
            return;
            //duplicate_list.push({
            //  itemName: duplicate_item[0].itemName
            //})
          }
        }

        //if (duplicate_list.length > 0) {
        //  var name_list = duplicate_list.map((item) => { return item.itemName });
        //  alert("Sản phẩm " + name_list.join(", ") + " trong giỏ hàng bị trùng lặp.");
        //  return;
        //}



        // check dữ liệu
        // chuyển sáng review
        this.step_active = "step-review";
      },
      async save_webContract() {
        this.$store.state.show_loading = true;
        this.issubmited_customer = true;
        this.issubmited_delivery_customer = true;

        var data = {
          mode: this.mode,
          webContract: this.webContract,
          webContractDetails: this.web_contract_details
        };

        console.log("data to save", data);
        let response = await this.$http.post("/api/webcontract/save", data).catch((error) => {
          this.$store.state.show_loading = false;
          alert("Không thể lưu đơn hàng ! Vui lòng kiểm tra lại thông tin !");
          console.log(error);
          return;
        });

        console.log(response);
        var status = response.data.status;
        if (status == 1) {
          alert(response.data.message);
          window.location.href = "/web-contract/edit?oid=" + this.webContract.oid;
        } else {
          alert("Lỗi, không thể lưu đơn hàng. " + response.data.message);
          console.log(response.data.message);
        }
        this.$store.state.show_loading = false;
      },
      async delete_webContract() {
        if (confirm("Bạn có chắc chắn muốn xóa đơn hàng không ?") == false) return;

        let response = await this.$http.post("/api/webcontract/delete?OID=" + this.webContract.oid);
        console.log(response);
        if (response.data.status == 1) {
          this.$router.push("/web-contract");
        } else {
          alert(response.data.message);
          console.log(response.data.exMessage);
        }
      },
      async post_webContract() {
        if ((JSON.stringify(this.initWebContract) != JSON.stringify(this.webContract)) || (this.isDirty == true && this.mode == 1)) {
          alert("Vui lòng lưu đơn hàng trước khi Post");
          return;
        }

        if (confirm("Bạn có chắc chắn muốn Post đơn hàng này không ?")) {
          let response = await this.$http.post("/api/webcontract/post?oid=" + this.webContract.oid).catch(function (err) {
            alert("Có lỗi, vui lòng kiểm tra thông tin !");
            console.log(err);
          });
          var response_data = response.data;
          if (response_data.status == 1) {
            window.location.reload();
          } else {
            alert(response_data.message);
          }
        }
      },
      async approve_webContract() {
        if (confirm("Bạn có chắc chắn muốn duyệt đơn hàng này không ?")) {
          let response = await this.$http.post("/api/webcontract/approve?oid=" + this.webContract.oid).catch(function (err) {
            alert("Có lỗi, vui lòng kiểm tra thông tin !");
            console.log(err);
          });
          var response_data = response.data;
          if (response_data.status == 1) {
            window.location.reload();
          } else {
            alert(response_data.message);
          }
        }
      },
      async return_webContract() {
        if (confirm("Bạn có chắc chắn muốn trả đơn hàng này về không ?")) {
          let response = await this.$http.post("/api/webcontract/return?oid=" + this.webContract.oid).catch(function (err) {
            alert("Có lỗi, vui lòng kiểm tra thông tin !");
            console.log(err);
          });
          var response_data = response.data;
          if (response_data.status == 1) {
            window.location.reload();
          } else {
            alert(response_data.message);
          }
        }
      },
      async confirm_webContract() {
        if (confirm("Bạn có chắc chắn muốn xác nhận đơn hàng này về không ?")) {
          let response = await this.$http.post("/api/webcontract/confirm_receive?oid=" + this.webContract.oid).catch(function (err) {
            alert("Có lỗi, vui lòng kiểm tra thông tin !");
            console.log(err);
          });
          var response_data = response.data;
          if (response_data.status == 1) {
            window.location.reload();
          } else {
            alert(response_data.message);
          }
        }
      }
    },
    async mounted() {
      this.$validator.localize('en', dic.vn);
      this.$store.state.show_loading = true;
      var oid = this.$route.query.oid;
      if (oid) {
        this.mode = 1;
        let webcontract_response = await this.$http.get("/api/webcontract/get?oid=" + oid);
        this.webContract = webcontract_response.data.webContract;
        this.web_contract_details = webcontract_response.data.webContractDetails;

        // init lai field qc_xabang trong detail, vi sotre tra ve null. nhugn tren formko co truong hop null, neu ko co gi tri thi la ""
        for (var i = 0; i < this.web_contract_details.length; i++) {
          if (this.web_contract_details[i].qc_XaBang == null) {
            this.web_contract_details[i].qc_XaBang = "";
          }
        }
        // end

        this.get_delivery_customers();
        this.step_active = 'step-review'; // măc đinh khi vào form sẽ chuyển đến phần review.
        this.form_title = 'Đơn hàng : ' + this.webContract.oid;
      } else {
        this.mode = 0;
        this.form_title = 'Tạo mới đơn hàng';
        let user_response = await this.$http.get("/api/apiaccount/getCurrentuser");
        const user = user_response.data;

        this.webContract.oid = (await this.get_oid()).data;
        this.webContract.asm = user.asm;
        this.webContract.team = user.team;
        this.webContract.sub = user.sub;
        this.webContract.cmpnID = user.cmpnID;
        this.webContract.clnID = user.clnID;
        this.webContract.clnPath = user.clnPath;
        this.webContract.zoneID = user.zoneID;
        this.webContract.regionID = user.regionID;
        this.webContract.saleEmID = user.userCode;
        this.webContract.saleEmName = user.fullName;
        this.webContract.odate = new Date();
        this.webContract.crt_Date = new Date();
        this.webContract.signNumb = -1;
      }

      this.initWebContract = Object.assign({}, this.webContract);
      this.$store.state.show_loading = false;
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
      },
      dateTimeFormat(d) {
        if (!d) return "";
        return d.toLocaleString().replace(",", "").replace(/:.. /, " ");
      }
    },
    computed: {
      can_save() {
        return this.webContract.signNumb <= 0;
      },
      can_post() {
        return this.mode == 1 && this.webContract.signNumb <= 0;
      },
      can_edit() {
        return this.webContract.signNumb <= 0;
      },
      can_delete() {
        return this.mode == 1 && this.webContract.signNumb <= 0;
      },
      can_approve() {
        return this.mode == 1 && (this.webContract.signNumb > 0 && this.webContract.signNumb < 201) && this.userPosition == "manager";
      },
      can_return() {
        return this.mode == 1 && (this.webContract.signNumb > 0 && this.webContract.signNumb < 201) && this.userPosition == "manager";
      },
      can_confirm_receive() {
        return this.mode == 1 && (this.webContract.signNumb >= 401 && this.webContract.signNumb < 501);
      },
      userPosition() {
        if (this.$store.state.user_info.userPosition)
          return this.$store.state.user_info.userPosition.toLowerCase();
        return "";
      }
    },
    watch: {
      webContract() {
        console.log("change");
      }
    }
  }
</script>
<style lang="scss">
  .select2-selection .selected {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .select2-template-result {
    margin: 0;
    position: relative;
  }

    .select2-template-result .title {
      color: darkcyan;
      font-weight: bold;
    }

  .select2-container--default .select2-results > .select2-results__options {
    max-height: 350px;
    overflow-y: auto;
  }
  /* hover qua cac cai */
  .select2-results__option.select2-results__option--highlighted {
    .title

  {
    color: #fff;
  }

  }

  /* khi selected hover vao*/
  .select2-results__option[aria-selected=true] {
    .title

  {
    color: darkcyan;
  }

  }

  .wrap-table th {
    white-space: nowrap;
  }

  table {
    white-space: nowrap;
  }

  .box-review strong,
  .box-review td {
    white-space: normal;
  }
</style>

