<template>
  <div>
    <section class="content-header">
      <h1>
        Tạo đơn hàng mới
        <small>Đơn hàng</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li><a href="#">Đơn hàng</a></li>
        <li class="active">Thêm mới</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <p class="btn-group btn-breadcrumb">
        <button class="btn btn-sm btn-primary"><i class="fa fa-plus"></i></button>
        <button class="btn btn-sm btn-default" @tclick="step_active='step-customer'" v-bind:class="{'btn-success' : step_active=='step-customer'}">Thông tin khách hàng  <i class="fa fa-arrow-circle-right"></i></button>
        <button class="btn btn-sm btn-default" @tclick="save_customer_info()" v-bind:class="{'btn-success' : step_active=='step-delivery-customer'}">Thông tin đơn vị nhận hàng  <i class="fa fa-arrow-circle-right"></i></button>
        <button class="btn btn-sm btn-default" @tclick="save_delivery_customer()" v-bind:class="{'btn-success' : step_active=='step-product'}">Danh sách sản phẩm  <i class="fa fa-arrow-circle-right"></i></button>
        <button class="btn btn-sm btn-default" @tclick="save_product()" v-bind:class="{'btn-success' : step_active=='step-review'}">Tổng quan đơn hàng</button>
      </p>
      
      <!-- Chọn khách hàng -->
      <div class="box box-primary" v-if="step_active == 'step-customer'">
        <div class="box-header with-border">
          <h3 class="box-title">
            <img src="/dist/img/pharmacy-icon.png" width="30" alt="Thông tin đơn hàng" />
            <strong>Thông tin khách hàng</strong>
          </h3>

          <div class="box-tools pull-right">
            <!--<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>-->
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
                               :templateResult="get_customer_template_result"
                               :options="customers"
                               :templateSelection="get_customer_template_selection"
                               :matcher="get_customer_matcher"
                               @change="customer_OnChange($event)">
                      </Select2>
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.customerID')">{{errors.first('form-step-customer.customerID')}}</p>
                      <div class="text-right">
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
                             class="form-control" v-model="webContract.memberCardID" placeholder="Mã thẻ thành viên">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.memberCardID')">{{errors.first('form-step-customer.memberCardID')}}</p>
                    </div>
                  </div>
                  <!--Loại thẻ-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Loại thẻ</label>
                    <div class="col-sm-9">
                      <input type="text" name="memberTypeName" v-validate="'required'"
                             class="form-control" v-model="webContract.memberTypeName" placeholder="Loại thẻ">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.memberTypeName')">{{errors.first('form-step-customer.memberTypeName')}}</p>
                    </div>
                  </div>
                  <!--Tỷ lệ giảm thẻ-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Tỷ lệ giảm thẻ</label>
                    <div class="col-sm-9">
                      <input type="text" name="dscnMbRt" v-validate="'required'"
                             class="form-control" v-model="webContract.dscnMbRt" placeholder="Tỷ lệ giảm thẻ">
                      <p class="text-danger" v-if="issubmited_customer && errors.has('form-step-customer.dscnMbRt')">{{errors.first('form-step-customer.dscnMbRt')}}</p>
                    </div>
                  </div>
                  <!-- Tên khách hang -->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Tên khách hàng</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsName" v-validate="'required'"
                             class="form-control" v-model="webContract.psCsName" placeholder="Tên khách hàng">
                      <p class="text-danger" v-validate="'required'" v-if="issubmited_customer && errors.has('form-step-customer.psCsName')">{{errors.first('form-step-customer.psCsName')}}</p>
                    </div>
                  </div>

                  <!--Điện thoaị-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Điện thoại</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsTel" v-validate="'required|numeric|min:8|max:12'"
                             class="form-control" v-model="webContract.psCsTel" placeholder="Điện thoại">
                      <p class="text-danger" v-validate="'required'" v-if="issubmited_customer && errors.has('form-step-customer.psCsTel')">{{errors.first('form-step-customer.psCsTel')}}</p>
                    </div>
                  </div>

                  <!--Địa chỉ-->
                  <div class="form-group">
                    <label for="" class="col-sm-3 control-label span-required">Địa chỉ</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsInfo" v-validate="'required'"
                             class="form-control" v-model="webContract.psCsInfo" placeholder="Địa chỉ">
                      <p class="text-danger" v-validate="'required'" v-if="issubmited_customer && errors.has('form-step-customer.psCsInfo')">{{errors.first('form-step-customer.psCsInfo')}}</p>
                    </div>
                  </div>

                  <!--Mã khu vực-->
                  <div class="form-group" v-if="false">
                    <label for="" class="col-sm-3 control-label span-required">Mã khu vực</label>
                    <div class="col-sm-9">
                      <input type="text" name="psCsAddr" v-validate="'required'"
                             class="form-control" v-model="webContract.psCsAddr" placeholder="Mã khu vực">
                      <p class="text-danger" v-validate="'required'" v-if="issubmited_customer && errors.has('form-step-customer.psCsAddr')">{{errors.first('form-step-customer.psCsAddr')}}</p>
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
            <button @click="show_modal_add_product=true" class="btn btn-primary"><i class="fa fa-plus"></i> Thêm sản phẩm vào giỏ hàng</button>
            <button @click="save_step_product()" class="btn btn-primary">Xem đơn hàng <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              <div class="wrap-table">

                <table class="table table-bordered" width="1200">
                  <thead>
                    <tr>
                      <th>.No</th>
                      <th>Mã kho</th>
                      <th>Tên sản phẩm</th>
                      <td class="hidden">Mã đơn vị tính</td>
                      <th>Tên đơn vị tính</th>
                      <th>Mã lô</th>
                      <th>Qui cách bán</th>
                      <th>Số lượng tồn thầu DVI</th>
                      <th>Số lượng bán DVI</th>
                      <th>Số lượng bán hộp</th>
                      <th>Giá bán</th>
                      <th>Tiền hàng</th>
                      <th>Tên chương trình khuyến mại</th>
                      <th>% GG.KM</th>
                      <th>Tiền GG.KM</th>
                      <th>% G.Thẻ</th>
                      <th>Tiền G.Thẻ</th>
                      <th>Thành tiền hàng</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(contractDetail,index) in web_contract_details" :key="contractDetail.itemID">
                      <td>{{(index+1)}}</td>
                      <td>{{contractDetail.storeID}}</td>
                      <td class="hidden">{{contractDetail.itemID}}</td>
                      <td><strong>{{contractDetail.itemName}}</strong></td>
                      <td class="hidden">{{contractDetail.itemUnit}}</td>
                      <td>{{contractDetail.itemUnitName}}</td>
                      <td>{{contractDetail.bchCode}}</td>
                      <td>{{contractDetail.boxID}}</td>
                      <td>{{contractDetail.remnRfQt}}</td>
                      <td>
                        <input type="number" @change="storeQtty_OnChange(contractDetail)" min="1" style="width:50%" v-model="contractDetail.storeQtty" name="name" value="" />
                      </td>
                      <td>
                        <input type="number" style="width:50%" v-model="contractDetail.itemQtty" name="name" value="" />
                      </td>
                      <td>{{contractDetail.itemPrice | formatVnd}}</td>
                      <td>{{contractDetail.prdcAmnt | formatVnd}}</td>
                      <td>
                        {{contractDetail.prmtListItem}}
                        <button class="btn btn-xs btn-success">Chọn CTKM</button>
                      </td>
                      <td class="hidden">{{contractDetail.prmtID}}</td>
                      <td>{{contractDetail.dscnRate}}</td>
                      <td>{{contractDetail.dscnAmnt | formatVnd}}</td>
                      <td>{{contractDetail.dscnMbRt}}</td>
                      <td>{{contractDetail.dscnMbAm | formatVnd}}</td>
                      <td>{{contractDetail.smPdAmnt | formatVnd}}</td>
                      <td>
                        <button @click="remove_webcontractdetails(contractDetail)" class="btn btn-xs btn-danger"> Xóa </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--wrap table-->
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
        <div class="box-footer text-right hidden">
        </div>
      </div>
      <!-- Giỏ hàng -->
      <!-- Review -->
      <div class="box box-primary" v-if="step_active == 'step-review'">
        <div class="box-header with-border">
          <h3 class="box-title">
            <img src="/dist/img/vitamin-c.png" width="30" alt="Sản phẩm" />
            <strong>Xem đơn hàng</strong>
          </h3>
          <div class="box-tools pull-right">
            <button @click="step_active='step-product'" class="btn btn-default"><i class="fa fa-arrow-circle-left"></i> Quay lại</button>
            <button class="btn btn-success">
              Duyệt đơn hàng <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            </button>
            <button class="btn btn-primary">Lưu đơn hàng <i class="fa fa-floppy-o" aria-hidden="true"></i></button>
            <button class="btn btn-danger">Xóa đơn hàng <i class="fa fa-trash"></i></button>
            <button class="btn btn-warning">Cancel đơn hàng <i class="fa fa-ban" aria-hidden="true"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-4">
              <h4><i class="fa fa-first-order"></i> <strong class="text-success">Thông tin đơn hàng</strong></h4>
              <table cellpadding="5" class="table">
                <tbody>
                  <tr>
                    <td width="40%"><strong>Số kênh :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Mã kênh :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Số đơn đặt hàng :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Ngày đơn đặt hàng :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Tên trình dược viên :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Tình trạng :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Ghi chú :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Ngày giờ tạo :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Ngày giờ sửa :</strong></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--col-->
            <div class="col-md-4">
              <h4><i class="fa fa-user-circle"></i> <strong class="text-success">Thông tin khách hàng</strong></h4>
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
              <h4><i class="fa fa-truck"></i> <strong class="text-success">Đơn vị nhận hàng</strong></h4>
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
            <hr/>
            <div class="col-md-4 col-md-offset-8">
              <h4><i class="fa fa-money"></i> <strong class="text-success">Thông tin thanh toán</strong></h4>
              <table cellpadding="5" class="table">
                <tbody>
                  <tr>
                    <td><strong>Tổng tiền hàng :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Tiền giảm giá khuyến mãi :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Tiền giảm thẻ :</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><strong>Tổng thanh toán :</strong></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--row-->
        </div>
        <!-- /.box-body -->
        <div class="box-footer text-right hidden">
          
        </div>
      </div>
      <!-- Review -->
    </section>
    <!-- /.content -->
    <template>
      <CustomerListModal v-bind:show="show_modal_customer_list"
                         @hide="show_modal_customer_list=false"
                         @selected="customer_OnChange"></CustomerListModal>
      <AddProductModal v-bind:show="show_modal_add_product"
                       @hide="show_modal_add_product=false"
                       @selected="webContractDetail_Selected"></AddProductModal>
    </template>
  </div>
</template>
<script>
  import Common from '../../mixins/Common.js'
  import WebContractDetailsMixin from '../../mixins/WebContractDetails.js'
  import dic from '../../libs/validation_dic/webcontract.js'
  import Select2 from '../Controls/Select2.vue';
  import CustomerListModal from './CustomerListModal.vue'
  import AddProductModal from './AddProductModal.vue'

  export default {
    mixins: [Common, WebContractDetailsMixin],
    components: { Select2, CustomerListModal, AddProductModal },
    data() {
      return {
        customers: [],
        issubmited_customer: false, // xac nhan da submit form customer
        issubmited_delivery_customer: false, // xac nhan da submit form delivery customer
        delivery_customers: [],
        show_modal_customer_list: false,
        step_active: "step-customer",
        web_contract_details: [
          {
            storeID: 'KHO1',
            itemID: 'MASP0001',
            itemName: 'Sản phẩm 0001',
            itemUnit: 'Mã đơn vị tính 01',
            itemUnitName: 'Tên đơn vi tính 01',
            bchCode: 'Mã lô 0001',
            boxID: 'Qui cách bán 01',
            remnRfQt: 55,
            storeQtty: 2,
            itemQtty: 3,
            itemPrice: 100000,
            prdcAmnt: 25000000,
            prmtListItem: 'Chương trình KM 001',
            prmtID: 'MÃ CTKM',
            dscnRate: '50%',
            dscnAmnt: 50000,
            dscnMbRt: '10%',
            dscnMbAm: 15000,
            smPdAmnt: 2000000
          },
          {
            storeID: 'KHO2',
            itemID: 'MASP0002',
            itemName: 'Sản phẩm 0002',
            itemUnit: 'Mã đơn vị tính 02',
            itemUnitName: 'Tên đơn vi tính 02',
            bchCode: 'Mã lô 0002',
            boxID: 'Qui cách bán 02',
            remnRfQt: 15,
            storeQtty: 2,
            itemQtty: 4,
            itemPrice: 15000000,
            prdcAmnt: 100000,
            prmtListItem: 'Chương trình KM 002',
            prmtID: 'MÃ CTKM',
            dscnRate: '50%',
            dscnAmnt: 300000,
            dscnMbRt: '10%',
            dscnMbAm: 2000000,
            smPdAmnt: 10000000
          },
          {
            storeID: 'KHO3',
            itemID: 'MASP0003',
            itemName: 'Sản phẩm 0003',
            itemUnit: 'Mã đơn vị tính 03',
            itemUnitName: 'Tên đơn vi tính 03',
            bchCode: 'Mã lô 0001',
            boxID: 'Qui cách bán 03',
            remnRfQt: 50,
            storeQtty: 4,
            itemQtty: 1,
            itemPrice: 15000000,
            prdcAmnt: '20.000.000 vnđ',
            prmtListItem: 'Chương trình KM 003',
            prmtID: 'MÃ CTKM',
            dscnRate: '50%',
            dscnAmnt: 200000,
            dscnMbRt: '10%',
            dscnMbAm: 5000000,
            smPdAmnt: 26000000
          }
        ],
        webContract: {
          customerID: null,
          psCsName: '',
          membType: '',
          memberTypeName: '',
          memberCardID: '',
          dscnMbRt: '',

          psCsInfo: '',
          psCsTel: '',
          psCsAddr: '',

          // Delivery Customer
          dlCsName: '',
          deliverEm: null,
          dlCsInfo: ''
        }
      }
    },
    methods: {
      async get_customers() {
        let response = await this.$http.get("/api/customer?pageSize=10");
        this.customers = response.data.data;
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
          var cus = this.customers.find(item => { return item.customerID == this.webContract.customerID });
          this.webContract.psCsName = cus.psCsName;
          this.webContract.memberTypeName = cus.memberTypeName;
          this.webContract.membType = cus.membType;
          this.webContract.memberCardID = cus.memberCardID;
          this.webContract.dscnMbRt = cus.dscnMbRt;

          this.webContract.psCsInfo = cus.psCsInfo;
          this.webContract.psCsTel = cus.psCsTel;
          this.webContract.psCsAddr = cus.psCsAddr;
        } else {
          this.webContract.psCsName = '';
          this.webContract.customerID = '';
          this.webContract.memberCardID = '';
          this.webContract.membType = '';
          this.webContract.memberTypeName = '';
          this.webContract.dscnMbRt = '';

          this.webContract.psCsInfo = '';
          this.webContract.psCsTel = '';
          this.webContract.psCsAddr = '';

          this.webContract.dlCsName = '';
          this.webContract.deliverEm = '';
          this.webContract.dlCsInfo = '';
        }
      },
      customer_OnChange(customerID) {

        if (customerID) {

        } else {

        }

        this.webContract.customerID = customerID;
        this.show_modal_customer_list = false;
        this.load_customer_info();
        this.get_delivery_customers();

        this.webContract.deliverEm = null;
        this.deliveryCustomer_OnChange(null);
      }, // Khi thay đổi khách hàng, change khi mở modal và chọn, và khi chọn từ select2.
      get_customer_template_result(obj) {
        if (obj.customerID != null && obj.customerID.length > 0) {
          return $(`<div class='select2-template-result'>
                <div class='title'>${obj.psCsName}</div>
                <div class=""><span>${obj.psCsTel}</span></div>
                <div class=""><small>${obj.psCsInfo}</small></div>
                </div>`);
        } else {
          return obj.text;
        }
      }, // Cấu hình selec2 cho customer
      get_customer_template_selection(obj) {
        if (obj.customerID != null && obj.customerID.length > 0)
          return $('<div class="selected"><strong>' + obj.psCsName + '</strong></div>');
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
          return $('<div class="selected"><strong>' + obj.dlCsName + '</strong></div>');
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
      save_customer_info() { // Step customer
        this.issubmited_customer = true;
        this.$validator.validateAll("form-step-customer").then((result) => {
          if (result) {
            this.step_active = "step-delivery-customer";
          }
        });
      },
      save_delivery_customer() { // step delivery customer
        this.issubmited_delivery_customer = true;
        this.$validator.validateAll("form-step-delivery-customer").then((result) => {
          if (result) {
            this.step_active = "step-product";
          }
        });
      },
      save_step_product() {
        // check dữ liệu
        // chuyển sáng review
        this.step_active = "step-review";
      },
      storeQtty_OnChange(contractDetail) {
        var prdcAmnt = contractDetail.storeQtty * contractDetail.itemPrice;
        contractDetail.prdcAmnt = prdcAmnt;
      }
    },
    async mounted() {
      this.$validator.localize('en', dic.vn);
      await this.get_customers();
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
</style>

