webpackJsonp([0],{

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a28c1f88_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(301)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Form_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a28c1f88_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a28c1f88_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Form_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\WebContract\\Form.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a28c1f88", Component.options)
  } else {
    hotAPI.reload("data-v-a28c1f88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(105);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(104);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      show: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var response, check;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.$http.get('/api/ApiAccount/ApiGetMenu');

            case 3:
              response = _context.sent;

              if (response.data) {
                check = response.data.find(function (item) {
                  return item.menuID == "81003";
                });

                if (check) {
                  _this.show = true;
                } else {
                  _this.$router.push("/");
                }
              }
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              _this.$router.push("/");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }))();
  },

  filters: {
    filterStatus: function filterStatus(status) {
      if (status == -1) {
        return "<span class='label label-default'>\u0110\xE3 l\u01B0u</span>";
      } else if (status == 101) {
        return "<span class='label label-primary'>\u0110\xE3 post</span>";
      } else if (status == 201) {
        return "<span class='label label-info'>Team Lead \u0111\xE3 duy\u1EC7t</span>";
      } else if (status == 0) {
        return "<span class='label label-warning'>Tr\u1EA3 v\u1EC1 ch\u1EDD ch\u1EC9nh s\u1EEDa</span>";
      } else if (status == 301) {
        return "<span class='label label-default'>\u0110\xE3 l\u1EADp phi\u1EBFu b\xE1n</span>";
      } else if (status == 401) {
        return "<span class='label label-default'>H\xE0ng \u0111ang giao</span>";
      } else if (status == 501) {
        return "<span class='label label-success'>Ho\xE0n t\u1EA5t</span>";
      } else {
        return "";
      }
    }
  }
};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(45);
var wksExt = __webpack_require__(244);
var defineProperty = __webpack_require__(25).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "\n.wrap-table[data-v-8107d796] {\n  overflow-y: hidden;\n  min-height: 200px;\n}\n.wrap-table table[data-v-8107d796] {\n  width: 100%;\n}\n.wrap-table tr[data-v-8107d796]:hover {\n  cursor: pointer;\n  background: #eee;\n}\n.wrap-table tr button[data-v-8107d796]:hover {\n  background: #3c8dbc;\n  color: #fff;\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/WebContract/SelectProductPromotionModal.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,YAAY;CAAE;AAEhB;EACE,gBAAgB;EAChB,iBAAiB;CAAE;AAErB;EACE,oBAAoB;EACpB,YAAY;CAAE","file":"SelectProductPromotionModal.vue","sourcesContent":[".wrap-table {\n  overflow-y: hidden;\n  min-height: 200px; }\n\n.wrap-table table {\n  width: 100%; }\n\n.wrap-table tr:hover {\n  cursor: pointer;\n  background: #eee; }\n\n.wrap-table tr button:hover {\n  background: #3c8dbc;\n  color: #fff; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "\ninput[type=\"checkbox\"] {\n  height: 15px;\n  width: 15px;\n  cursor: pointer;\n}\ntable td {\n  white-space: nowrap;\n}\ntable .td-checkbox label {\n  cursor: pointer;\n}\n.wrap-table {\n  min-height: 450px;\n}\n.wrap-table tr:hover {\n  background: #eee;\n}\n.add-product-modal .modal-body {\n  min-height: 300px;\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/WebContract/AddProductModal.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;CAAE;AAEpB;EACE,oBAAoB;CAAE;AAExB;EACE,gBAAgB;CAAE;AAEpB;EACE,kBAAkB;CAAE;AAEtB;EACE,iBAAiB;CAAE;AAErB;EACE,kBAAkB;CAAE","file":"AddProductModal.vue","sourcesContent":["input[type=\"checkbox\"] {\n  height: 15px;\n  width: 15px;\n  cursor: pointer; }\n\ntable td {\n  white-space: nowrap; }\n\ntable .td-checkbox label {\n  cursor: pointer; }\n\n.wrap-table {\n  min-height: 450px; }\n\n.wrap-table tr:hover {\n  background: #eee; }\n\n.add-product-modal .modal-body {\n  min-height: 300px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "/*modal customer list*/\n.modal-customer-list .wrap-table {\n  max-height: 600px;\n  overflow-y: scroll;\n  /*border: 1px solid #999;*/\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/WebContract/CustomerListModal.vue"],"names":[],"mappings":"AAAA,uBAAuB;AACvB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;CAAE","file":"CustomerListModal.vue","sourcesContent":["/*modal customer list*/\n.modal-customer-list .wrap-table {\n  max-height: 600px;\n  overflow-y: scroll;\n  /*border: 1px solid #999;*/ }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "\n.select2-selection .selected {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.select2-template-result {\n  margin: 0;\n  position: relative;\n}\n.select2-template-result .title {\n  color: darkcyan;\n  font-weight: bold;\n}\n.select2-container--default .select2-results > .select2-results__options {\n  max-height: 350px;\n  overflow-y: auto;\n}\n\n/* hover qua cac cai */\n.select2-results__option.select2-results__option--highlighted .title {\n  color: #fff;\n}\n\n/* khi selected hover vao*/\n.select2-results__option[aria-selected=true] .title {\n  color: darkcyan;\n}\n.wrap-table th {\n  white-space: nowrap;\n}\ntable {\n  white-space: nowrap;\n}\n.box-review strong,\n.box-review td {\n  white-space: normal;\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/WebContract/Form.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CAAE;AAExB;EACE,UAAU;EACV,mBAAmB;CAAE;AAEvB;EACE,gBAAgB;EAChB,kBAAkB;CAAE;AAEtB;EACE,kBAAkB;EAClB,iBAAiB;CAAE;;AAErB,uBAAuB;AACvB;EACE,YAAY;CAAE;;AAEhB,2BAA2B;AAC3B;EACE,gBAAgB;CAAE;AAEpB;EACE,oBAAoB;CAAE;AAExB;EACE,oBAAoB;CAAE;AAExB;;EAEE,oBAAoB;CAAE","file":"Form.vue","sourcesContent":[".select2-selection .selected {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.select2-template-result {\n  margin: 0;\n  position: relative; }\n\n.select2-template-result .title {\n  color: darkcyan;\n  font-weight: bold; }\n\n.select2-container--default .select2-results > .select2-results__options {\n  max-height: 350px;\n  overflow-y: auto; }\n\n/* hover qua cac cai */\n.select2-results__option.select2-results__option--highlighted .title {\n  color: #fff; }\n\n/* khi selected hover vao*/\n.select2-results__option[aria-selected=true] .title {\n  color: darkcyan; }\n\n.wrap-table th {\n  white-space: nowrap; }\n\ntable {\n  white-space: nowrap; }\n\n.box-review strong,\n.box-review td {\n  white-space: normal; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "\n.select2-selection__clear {\n  font-size: 22px;\n}\n.select2-selection__clear:hover {\n    color: #8d1111;\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/Controls/ClientApp\\Components\\Controls/Select2.vue"],"names":[],"mappings":";AAoGA;EACA,gBAAA;CACA;AAEA;IACA,eAAA;CACA","file":"Select2.vue","sourcesContent":["<template>\r\n  <div>\r\n    <select class=\"form-control\" ref=\"select\" style=\"width:100%;\">\r\n      <option value=\"\">{{placeholder}}</option>\r\n      <option v-if=\"defaulttext\" selected=\"selected\" v-bind:value=\"value\">{{defaulttext}}</option>\r\n    </select>\r\n  </div>\r\n</template>\r\n<script>\r\n  export default {\r\n    props: [\"value\", \"templateResult\", \"templateSelection\", \"options\", \"skey\", \"placeholder\", \"matcher\", \"ajax\", \"defaulttext\", \"disabled\"],\r\n    mounted() {\r\n      var vm = this;\r\n      var el = $(this.$refs.select);\r\n      // phần trên này không cần, do khi dùng v-if nó sẽ không render ra nên giwof phải làm trong đây.\r\n      var opt = {\r\n        allowClear: true,\r\n        placeholder: vm.placeholder,\r\n        data: $.map(vm.options, function (obj) {\r\n          obj.id = obj[vm.skey];\r\n          return obj;\r\n        })\r\n      };\r\n      if (this.ajax) {\r\n        opt.delay = 15000;\r\n        opt.ajax = this.ajax;\r\n      }\r\n      if (this.templateSelection) {\r\n        opt.templateSelection = this.templateSelection;\r\n      }\r\n      if (this.templateResult) {\r\n        opt.templateResult = this.templateResult\r\n      }\r\n      if (this.matcher) {\r\n        opt.matcher = this.matcher;\r\n      }\n\n      el.select2(opt);\r\n      if (this.ajax) {\r\n\r\n      } else {\r\n        el.val(this.value).trigger('change');\r\n      }\r\n\r\n      // phần trên này không cần, do khi dùng v-if nó sẽ không render ra nên phải render lại. khi v-if render sẽ gọi hàm mounted.\r\n      el.on('select2:select', function () {\r\n        vm.$emit(\"change\", this.value);\r\n      });\r\n      el.on('select2:unselect', function () { //set null\r\n        vm.$emit(\"change\", null)\r\n      });\r\n      el.on('select2:unselecting', function () { //close lai khi clear\r\n        $(this).data('unselecting', true);\r\n      });\r\n      el.on('select2:opening', function (e) { //close lai khi clear\r\n        if ($(this).data('unselecting')) {\r\n          $(this).removeData('unselecting');\r\n          e.preventDefault();\r\n        }\r\n      });\r\n    },\r\n    watch: {\r\n      options() {\r\n        if (this.ajax) return;\r\n        var vm = this;\r\n        var el = $(this.$refs.select);\r\n        var opt = {\r\n          allowClear: true,\r\n          placeholder: vm.placeholder,\r\n          data: $.map(vm.options, function (obj) {\r\n            obj.id = obj[vm.skey];\r\n            return obj;\r\n          })\r\n        };\r\n        if (this.templateSelection) {\r\n          opt.templateSelection = this.templateSelection;\r\n        }\r\n        if (this.templateResult) {\r\n          opt.templateResult = this.templateResult\r\n        }\r\n        if (this.matcher) {\r\n          opt.matcher = this.matcher;\r\n        }\r\n        el.select2(opt);\r\n      },\r\n      value() {\r\n        $(this.$refs.select).val(this.value).trigger('change');\r\n      }\r\n    },\r\n    beforeDestroy: function () {\r\n      if (this.$refs.select) {\r\n        try {\r\n          $(this.$refs.select).off().select2('destroy');\r\n        } catch (e) {\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style>\r\n  .select2-selection__clear {\r\n    font-size: 22px;\r\n  }\r\n\r\n    .select2-selection__clear:hover {\r\n      color: #8d1111;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ["value", "templateResult", "templateSelection", "options", "skey", "placeholder", "matcher", "ajax", "defaulttext", "disabled"],
  mounted: function mounted() {
    var vm = this;
    var el = $(this.$refs.select);

    var opt = {
      allowClear: true,
      placeholder: vm.placeholder,
      data: $.map(vm.options, function (obj) {
        obj.id = obj[vm.skey];
        return obj;
      })
    };
    if (this.ajax) {
      opt.delay = 15000;
      opt.ajax = this.ajax;
    }
    if (this.templateSelection) {
      opt.templateSelection = this.templateSelection;
    }
    if (this.templateResult) {
      opt.templateResult = this.templateResult;
    }
    if (this.matcher) {
      opt.matcher = this.matcher;
    }

    el.select2(opt);
    if (this.ajax) {} else {
      el.val(this.value).trigger('change');
    }

    el.on('select2:select', function () {
      vm.$emit("change", this.value);
    });
    el.on('select2:unselect', function () {
      vm.$emit("change", null);
    });
    el.on('select2:unselecting', function () {
      $(this).data('unselecting', true);
    });
    el.on('select2:opening', function (e) {
      if ($(this).data('unselecting')) {
        $(this).removeData('unselecting');
        e.preventDefault();
      }
    });
  },

  watch: {
    options: function options() {
      if (this.ajax) return;
      var vm = this;
      var el = $(this.$refs.select);
      var opt = {
        allowClear: true,
        placeholder: vm.placeholder,
        data: $.map(vm.options, function (obj) {
          obj.id = obj[vm.skey];
          return obj;
        })
      };
      if (this.templateSelection) {
        opt.templateSelection = this.templateSelection;
      }
      if (this.templateResult) {
        opt.templateResult = this.templateResult;
      }
      if (this.matcher) {
        opt.matcher = this.matcher;
      }
      el.select2(opt);
    },
    value: function value() {
      $(this.$refs.select).val(this.value).trigger('change');
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$refs.select) {
      try {
        $(this.$refs.select).off().select2('destroy');
      } catch (e) {}
    }
  }
};

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(105);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(104);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ["show", "membType", "customerID"],
  data: function data() {
    return {
      selectedsProductID: [],

      products: [],
      keyword: '',

      pagination: {
        currentPage: 1,
        total: 0,
        pageSize: 20,
        max: 3
      }
    };
  },

  methods: {
    get_products: function get_products() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var url, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.selectedsProductID = [];url = "/api/product?membType=" + _this.membType + "&customerID=" + _this.customerID;

                if (_this.keyword) {
                  url += "&term=" + _this.keyword;
                }
                _context.next = 5;
                return _this.$http.get(url);

              case 5:
                response = _context.sent;

                _this.products = response.data;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    loadPage: function loadPage(page) {
      var _this2 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$store.state.show_loading = true;
                _this2.pagination.currentPage = page;
                _context2.next = 4;
                return _this2.get_products();

              case 4:
                _this2.$store.state.show_loading = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    check: function check(evt) {
      var _this3 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    search: function search() {
      var _this4 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$store.state.show_loading = true;
                _context4.next = 3;
                return _this4.get_products();

              case 3:
                _this4.$store.state.show_loading = false;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    save_close: function save_close() {
      if (this.selectedsProductID.length == 0) {
        alert("Vui lòng chọn sản phẩm để đưa vào giỏ hàng !");
        return;
      }

      var details = [];
      for (var i = 0; i < this.selectedsProductID.length; i++) {
        var product = this.products[this.selectedsProductID[i]];
        var detail = {};

        detail.storeID = product.storeID;
        detail.itemID = product.itemID;
        detail.itemName = product.itemName;
        detail.itemUnit = product.itemUnit;
        detail.itemUnitName = product.itemUnitName;
        detail.qc_XaBang = product.qc_XaBang;
        detail.bchCode = product.bchCode;
        if (this.$store.state.user_info.clnType == 'OTC') {
          detail.boxID = 'SizeItem';
        } else if (this.$store.state.user_info.clnType == 'ETC') {
          detail.boxID = 'SizeBase';
        }

        detail.itemPerBox = product.itemPerBox;
        detail.slOhQtty = product.slOhQtty;
        detail.rmRfQtty = product.rmRfQtty;
        if (this.$store.state.user_info.clnType == 'OTC') {
          detail.remnRfQt = -9999;
        } else if (this.$store.state.user_info.clnType == 'ETC') {
          detail.remnRfQt = product.rmRfQtty;
        }

        detail.itemQtty = 0;
        detail.storeQtty = 0;

        if (this.$store.state.user_info.clnType == 'OTC') {
          detail.itemPrice = product.itemPrice;
        } else if (this.$store.state.user_info.clnType == 'ETC') {
          detail.itemPrice = product.storePrice;
        }

        detail.prdcAmnt = 0;

        detail.prmtID = "";
        detail.prmtListItem = "";
        detail.dscnAmnt = 0;
        detail.dscnRate = 0;

        detail.dscnMbRt = 0;
        detail.dscnMbAm = 0;

        details.push(detail);
      }

      this.$emit("selected", details);
    }
  },
  filters: {
    formatVnd: function formatVnd(number) {
      var decimals = 0;
      var dec_point = ",";
      var thousands_sep = ".";
      var n = number,
          c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
      var d = dec_point == undefined ? "," : dec_point;
      var t = thousands_sep == undefined ? "." : thousands_sep,
          s = n < 0 ? "-" : "";
      var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;

      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + " ₫";
    }
  },
  watch: {
    show: function show() {
      var _this5 = this;

      if (this.show) {
        this.selectedsProductID = [];
        this.keyword = '';

        this.$store.state.show_loading = true;

        if (this.products.length == 0 || true) {
          (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this5.get_products();

                  case 2:
                    _this5.$store.state.show_loading = false;
                    $(_this5.$refs.modal).modal('show');

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, _this5);
          }))();
        } else {
          this.$store.state.show_loading = false;
          $(this.$refs.modal).modal('show');
        }
      } else {
        $(this.$refs.modal).modal('hide');
      }
    }
  },
  mounted: function mounted() {
    var vm = this;

    $(this.$refs.modal).on('hidden.bs.modal', function () {
      vm.$emit("hide");
    });
  },

  computed: {
    totalPages: function totalPages() {
      return Math.ceil(this.pagination.total / this.pagination.pageSize);
    },
    start: function start() {
      var start = this.pagination.currentPage - this.pagination.max;
      if (start <= 1) {
        return 1;
      } else {
        return start;
      }
    },
    end: function end() {
      var end = this.pagination.currentPage + this.pagination.max;
      if (end > this.totalPages) {
        return this.totalPages;
      } else {
        return end;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    $(this.$refs.modal).modal('hide');
  }
};

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(105);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(104);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ["show"],
  data: function data() {
    return {
      customers: [],
      pagination: {
        currentPage: 1,
        total: 0,
        pageSize: 20,
        max: 3
      }
    };
  },

  methods: {
    get_customers: function get_customers() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$http.get("/api/customer?page=" + _this.pagination.currentPage + "&pageSize=" + _this.pagination.pageSize);

              case 2:
                response = _context.sent;

                _this.customers = response.data.data;
                _this.pagination.total = response.data.total;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    loadPage: function loadPage(page) {
      var _this2 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$store.state.show_loading = true;
                _this2.pagination.currentPage = page;
                _context2.next = 4;
                return _this2.get_customers();

              case 4:
                _this2.$store.state.show_loading = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    selected: function selected(customer) {
      this.$emit("selected", customer.customerID);
    }
  },
  watch: {
    show: function show() {
      var _this3 = this;

      if (this.show) {
        this.$store.state.show_loading = true;
        if (this.customers.length == 0) {
          (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this3.get_customers();

                  case 2:
                    _this3.$store.state.show_loading = false;
                    $(_this3.$refs.modal).modal('show');

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, _this3);
          }))();
        } else {
          this.$store.state.show_loading = false;
          $(this.$refs.modal).modal('show');
        }
      } else {
        $(this.$refs.modal).modal('hide');
      }
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var vm = this;
    $(this.$refs.modal).on('hidden.bs.modal', function () {
      vm.$emit("hide");
    });
  },

  computed: {
    totalPages: function totalPages() {
      return Math.ceil(this.pagination.total / this.pagination.pageSize);
    },
    start: function start() {
      var start = this.pagination.currentPage - this.pagination.max;
      if (start <= 1) {
        return 1;
      } else {
        return start;
      }
    },
    end: function end() {
      var end = this.pagination.currentPage + this.pagination.max;
      if (end > this.totalPages) {
        return this.totalPages;
      } else {
        return end;
      }
    }
  }
};

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(108);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(267);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(270);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(105);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(104);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Common = __webpack_require__(264);

var _Common2 = _interopRequireDefault(_Common);

var _WebContract = __webpack_require__(242);

var _WebContract2 = _interopRequireDefault(_WebContract);

var _WebContractDetails = __webpack_require__(266);

var _WebContractDetails2 = _interopRequireDefault(_WebContractDetails);

var _ProductPromotion = __webpack_require__(265);

var _ProductPromotion2 = _interopRequireDefault(_ProductPromotion);

var _webcontract = __webpack_require__(263);

var _webcontract2 = _interopRequireDefault(_webcontract);

var _Select = __webpack_require__(282);

var _Select2 = _interopRequireDefault(_Select);

var _CustomerListModal = __webpack_require__(284);

var _CustomerListModal2 = _interopRequireDefault(_CustomerListModal);

var _AddProductModal = __webpack_require__(283);

var _AddProductModal2 = _interopRequireDefault(_AddProductModal);

var _SelectProductPromotionModal = __webpack_require__(285);

var _SelectProductPromotionModal2 = _interopRequireDefault(_SelectProductPromotionModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_Common2.default, _WebContractDetails2.default, _ProductPromotion2.default, _WebContract2.default],
  components: { Select2: _Select2.default, CustomerListModal: _CustomerListModal2.default, AddProductModal: _AddProductModal2.default, SelectProductPromotionModal: _SelectProductPromotionModal2.default },
  data: function data() {
    return {
      mode: 0,
      isDirty: false,
      form_title: '',
      customer_ajax: {
        url: '/api/customer?PageSize=50',
        dataType: 'json',
        data: function data(params) {
          if (params.term) {
            return {
              term: params.term || '',
              page: params.page || 1
            };
          } else {
            return {
              page: params.page || 1
            };
          }
        },
        cache: true
      },
      issubmited_customer: false,
      issubmited_delivery_customer: false,
      delivery_customers: [],
      show_modal_customer_list: false,
      step_active: "step-customer",
      web_contract_details: [],
      initWebContract: {},
      webContract: {
        clnID: '',
        clnPath: '',
        oid: '',
        odate: null,
        saleEmID: '',
        saleEmName: '',
        descrip: '',

        customerID: null,
        psCsName: '',
        membType: '',
        memberCardID: '',
        dscnMbRt: '',

        psCsInfo: '',
        psCsTel: '',
        psCsAddr: '',

        dlCsName: '',
        deliverEm: null,
        dlCsInfo: '',

        prdcAmnt: 0,
        dscnAmnt: 0,
        dscnMbAm: 0,
        sum_Amnt: 0 }
    };
  },

  methods: {
    get_oid: function get_oid() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$http.get("/api/webcontract/getoid");

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    get_delivery_customers: function get_delivery_customers() {
      var _this2 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.webContract.customerID) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 3;
                return _this2.$http.get("/api/customer/GetByDelivery/" + _this2.webContract.customerID);

              case 3:
                response = _context2.sent;

                _this2.delivery_customers = response.data;
                _context2.next = 8;
                break;

              case 7:
                _this2.delivery_customers = [];

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    load_customer_info: function load_customer_info() {
      var _this3 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var customer_response, cus;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.webContract.customerID && _this3.webContract.customerID.length > 0)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 3;
                return _this3.$http.get("/api/customer/" + _this3.webContract.customerID);

              case 3:
                customer_response = _context3.sent;
                cus = customer_response.data;


                _this3.webContract.psCsName = cus.psCsName;
                _this3.webContract.membType = cus.membType;
                _this3.webContract.memberCardID = cus.memberCardID;
                _this3.webContract.dscnMbRt = cus.dscnMbRt;

                _this3.webContract.psCsInfo = cus.psCsInfo;
                _this3.webContract.psCsTel = cus.psCsTel;
                _this3.webContract.psCsAddr = cus.psCsAddr;
                _context3.next = 25;
                break;

              case 14:
                _this3.webContract.psCsName = '';
                _this3.webContract.customerID = '';
                _this3.webContract.memberCardID = '';
                _this3.webContract.membType = '';
                _this3.webContract.dscnMbRt = '';

                _this3.webContract.psCsInfo = '';
                _this3.webContract.psCsTel = '';
                _this3.webContract.psCsAddr = '';

                _this3.webContract.dlCsName = '';
                _this3.webContract.deliverEm = '';
                _this3.webContract.dlCsInfo = '';

              case 25:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    customer_OnChange: function customer_OnChange(customerID) {
      var _this4 = this;

      this.$store.state.show_loading = true;

      this.web_contract_details = [];

      this.$store.state.show_loading = true;

      this.webContract.customerID = customerID;
      this.show_modal_customer_list = false;
      this.load_customer_info();
      this.get_delivery_customers();

      this.webContract.deliverEm = null;
      this.deliveryCustomer_OnChange(null);

      setTimeout(function () {
        _this4.$store.state.show_loading = false;
      }, 500);
    },
    get_customer_template_result: function get_customer_template_result(obj) {
      if (obj.customerID != null && obj.customerID.length > 0) {
        return $('<div class=\'select2-template-result\'>\n              <div class=\'title\'>' + obj.psCsName + '</div>\n              <div class=""><span>' + obj.psCsTel + '</span></div>\n              <div class=""><small>' + obj.psCsInfo + '</small></div>\n              </div>');
      } else {
        return null;
      }
    },
    get_customer_template_selection: function get_customer_template_selection(obj) {
      if (obj.customerID != null && obj.customerID.length > 0) return obj.psCsName;

      return obj.text;
    },
    get_customer_matcher: function get_customer_matcher(params, data) {
      if ($.trim(params.term) === '') {
        return data;
      }

      if (data.customerID == null) {
        return null;
      }

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
    get_deliverycustomer_template_result: function get_deliverycustomer_template_result(obj) {
      if (obj.dlCsName != null && obj.dlCsName.length > 0) {
        return $('<div class=\'select2-template-result\'>\n              <div class=\'title\'>' + obj.dlCsName + '</div>\n              <div class="hidden"><span>' + obj.deliverEm + '</span></div>\n              <div class=""><small>' + obj.dlCsInfo + '</small></div>\n              </div>');
      } else {
        return obj.dlCsName;
      }
    },
    get_deliverycustomer_template_selection: function get_deliverycustomer_template_selection(obj) {
      if (obj.deliverEm != null && obj.deliverEm.length > 0) return obj.dlCsName;

      return obj.text;
    },
    get_deliverycustomer_matcher: function get_deliverycustomer_matcher(params, data) {
      if ($.trim(params.term) === '') {
        return data;
      }

      if (data.deliverEm == null) {
        return null;
      }

      if (this.xoadau(data.dlCsName).toLowerCase().includes(this.xoadau(params.term).toLowerCase())) {
        return data;
      }
      return null;
    },
    deliveryCustomer_OnChange: function deliveryCustomer_OnChange(deliveryCustomerID) {
      var deliverCustomer = this.delivery_customers.find(function (item) {
        return item.deliverEm == deliveryCustomerID;
      });
      if (deliverCustomer) {
        this.webContract.deliverEm = deliverCustomer.deliverEm;
        this.webContract.dlCsInfo = deliverCustomer.dlCsInfo;
        this.webContract.dlCsName = deliverCustomer.dlCsName;
      } else {
        this.webContract.deliverEm = '';
        this.webContract.dlCsInfo = '';
        this.webContract.dlCsName = '';
      }
    },
    go_step_product: function go_step_product() {
      var _this5 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var valid;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.issubmited_customer = true;
                _this5.issubmited_delivery_customer = true;
                _context5.next = 4;
                return _this5.$validator.validateAll("form-step-customer");

              case 4:
                valid = _context5.sent;

                if (valid) {
                  _this5.step_active = "step-delivery-customer";
                  setTimeout((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _this5.$validator.validateAll("form-step-delivery-customer");

                          case 2:
                            valid = _context4.sent;

                            if (valid) {
                              _this5.step_active = "step-product";
                            }

                          case 4:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this5);
                  })), 0);
                }

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    save_customer_info: function save_customer_info() {
      var _this6 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var customerValid;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.issubmited_customer = true;
                _context6.next = 3;
                return _this6.$validator.validateAll("form-step-customer");

              case 3:
                customerValid = _context6.sent;

                if (!customerValid) {
                  _context6.next = 9;
                  break;
                }

                _this6.step_active = "step-delivery-customer";
                return _context6.abrupt('return', true);

              case 9:
                _this6.step_active = "step-customer";
                return _context6.abrupt('return', false);

              case 11:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    save_delivery_customer: function save_delivery_customer() {
      var _this7 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
        var deliveryCustomerValid;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.save_customer_info();

              case 2:
                _this7.step_active = "step-delivery-customer";
                _this7.issubmited_delivery_customer = true;
                _context7.next = 6;
                return _this7.$validator.validateAll("form-step-delivery-customer");

              case 6:
                deliveryCustomerValid = _context7.sent;

                if (deliveryCustomerValid) {
                  _this7.step_active = "step-product";
                }

              case 8:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    save_step_product: function save_step_product() {
      var _this8 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {
        var no_quantity_check, duplicate_list, _loop, i, item, duplicate_items, dup_item, _ret;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(_this8.web_contract_details.length == 0)) {
                  _context8.next = 3;
                  break;
                }

                alert("Không có sản phẩm nào trong giỏ hàng !");
                return _context8.abrupt('return', true);

              case 3:
                no_quantity_check = _this8.web_contract_details.filter(function (item) {
                  return item.storeQtty == null || item.itemQtty == null;
                }).length;

                if (!(no_quantity_check > 0)) {
                  _context8.next = 7;
                  break;
                }

                alert("Cập nhật số lượng trong giỏ hàng .");
                return _context8.abrupt('return');

              case 7:
                duplicate_list = [];

                _loop = function _loop() {
                  item = _this8.web_contract_details[i];


                  var itemID = item.itemID;
                  var boxID = item.boxID;
                  var bchCode = item.bchCode;
                  var storeID = item.storeID;
                  var prmtID = item.prmtID;
                  var qc_XaBang = item.qc_XaBang;

                  duplicate_items = _this8.web_contract_details.filter(function (detail) {
                    return detail.itemID == itemID && detail.boxID == boxID && detail.bchCode == bchCode && detail.storeID == storeID && detail.prmtID == prmtID && detail.qc_XaBang == qc_XaBang;
                  });

                  if (duplicate_items.length > 1) {
                    dup_item = duplicate_items[0];

                    alert('S\u1EA3n ph\u1EA9m ' + dup_item.itemName + ' v\u1EDBi c\xF9ng qui c\xE1ch b\xE1n, m\xE3 l\xF4, s\u1ED1 h\u1EE3p \u0111\u1ED3ng th\u1EA7u, m\xE3 kho, CTKM b\u1ECB tr\xF9ng l\u1EB7p. !');
                    return {
                      v: void 0
                    };
                  }
                };

                i = 0;

              case 10:
                if (!(i < _this8.web_contract_details.length)) {
                  _context8.next = 17;
                  break;
                }

                _ret = _loop();

                if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                  _context8.next = 14;
                  break;
                }

                return _context8.abrupt('return', _ret.v);

              case 14:
                i++;
                _context8.next = 10;
                break;

              case 17:
                _this8.step_active = "step-review";

              case 18:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },
    save_webContract: function save_webContract() {
      var _this9 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
        var data, response, status;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this9.$store.state.show_loading = true;
                _this9.issubmited_customer = true;
                _this9.issubmited_delivery_customer = true;

                data = {
                  mode: _this9.mode,
                  webContract: _this9.webContract,
                  webContractDetails: _this9.web_contract_details
                };


                console.log("data to save", data);
                _context9.next = 7;
                return _this9.$http.post("/api/webcontract/save", data).catch(function (error) {
                  _this9.$store.state.show_loading = false;
                  alert("Không thể lưu đơn hàng ! Vui lòng kiểm tra lại thông tin !");
                  console.log(error);
                  return;
                });

              case 7:
                response = _context9.sent;


                console.log(response);
                status = response.data.status;

                if (status == 1) {
                  alert(response.data.message);
                  window.location.href = "/web-contract/edit?oid=" + _this9.webContract.oid;
                } else {
                  alert("Lỗi, không thể lưu đơn hàng. " + response.data.message);
                  console.log(response.data.message);
                }
                _this9.$store.state.show_loading = false;

              case 12:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      }))();
    },
    delete_webContract: function delete_webContract() {
      var _this10 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {
        var response;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(confirm("Bạn có chắc chắn muốn xóa đơn hàng không ?") == false)) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt('return');

              case 2:
                _context10.next = 4;
                return _this10.$http.post("/api/webcontract/delete?OID=" + _this10.webContract.oid);

              case 4:
                response = _context10.sent;

                console.log(response);
                if (response.data.status == 1) {
                  _this10.$router.push("/web-contract");
                } else {
                  alert(response.data.message);
                  console.log(response.data.exMessage);
                }

              case 7:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10);
      }))();
    },
    post_webContract: function post_webContract() {
      var _this11 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11() {
        var response, response_data;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!((0, _stringify2.default)(_this11.initWebContract) != (0, _stringify2.default)(_this11.webContract) || _this11.isDirty == true && _this11.mode == 1)) {
                  _context11.next = 3;
                  break;
                }

                alert("Vui lòng lưu đơn hàng trước khi Post");
                return _context11.abrupt('return');

              case 3:
                if (!confirm("Bạn có chắc chắn muốn Post đơn hàng này không ?")) {
                  _context11.next = 9;
                  break;
                }

                _context11.next = 6;
                return _this11.$http.post("/api/webcontract/post?oid=" + _this11.webContract.oid).catch(function (err) {
                  alert("Có lỗi, vui lòng kiểm tra thông tin !");
                  console.log(err);
                });

              case 6:
                response = _context11.sent;
                response_data = response.data;

                if (response_data.status == 1) {
                  window.location.reload();
                } else {
                  alert(response_data.message);
                }

              case 9:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this11);
      }))();
    },
    approve_webContract: function approve_webContract() {
      var _this12 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12() {
        var response, response_data;
        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!confirm("Bạn có chắc chắn muốn duyệt đơn hàng này không ?")) {
                  _context12.next = 6;
                  break;
                }

                _context12.next = 3;
                return _this12.$http.post("/api/webcontract/approve?oid=" + _this12.webContract.oid).catch(function (err) {
                  alert("Có lỗi, vui lòng kiểm tra thông tin !");
                  console.log(err);
                });

              case 3:
                response = _context12.sent;
                response_data = response.data;

                if (response_data.status == 1) {
                  window.location.reload();
                } else {
                  alert(response_data.message);
                }

              case 6:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this12);
      }))();
    },
    return_webContract: function return_webContract() {
      var _this13 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13() {
        var response, response_data;
        return _regenerator2.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!confirm("Bạn có chắc chắn muốn trả đơn hàng này về không ?")) {
                  _context13.next = 6;
                  break;
                }

                _context13.next = 3;
                return _this13.$http.post("/api/webcontract/return?oid=" + _this13.webContract.oid).catch(function (err) {
                  alert("Có lỗi, vui lòng kiểm tra thông tin !");
                  console.log(err);
                });

              case 3:
                response = _context13.sent;
                response_data = response.data;

                if (response_data.status == 1) {
                  window.location.reload();
                } else {
                  alert(response_data.message);
                }

              case 6:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, _this13);
      }))();
    },
    confirm_webContract: function confirm_webContract() {
      var _this14 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14() {
        var response, response_data;
        return _regenerator2.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!confirm("Bạn có chắc chắn muốn xác nhận đơn hàng này về không ?")) {
                  _context14.next = 6;
                  break;
                }

                _context14.next = 3;
                return _this14.$http.post("/api/webcontract/confirm_receive?oid=" + _this14.webContract.oid).catch(function (err) {
                  alert("Có lỗi, vui lòng kiểm tra thông tin !");
                  console.log(err);
                });

              case 3:
                response = _context14.sent;
                response_data = response.data;

                if (response_data.status == 1) {
                  window.location.reload();
                } else {
                  alert(response_data.message);
                }

              case 6:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, _this14);
      }))();
    }
  },
  mounted: function mounted() {
    var _this15 = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15() {
      var oid, webcontract_response, i, user_response, user;
      return _regenerator2.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _this15.$validator.localize('en', _webcontract2.default.vn);
              _this15.$store.state.show_loading = true;
              oid = _this15.$route.query.oid;

              if (!oid) {
                _context15.next = 16;
                break;
              }

              _this15.mode = 1;
              _context15.next = 7;
              return _this15.$http.get("/api/webcontract/get?oid=" + oid);

            case 7:
              webcontract_response = _context15.sent;

              _this15.webContract = webcontract_response.data.webContract;
              _this15.web_contract_details = webcontract_response.data.webContractDetails;

              for (i = 0; i < _this15.web_contract_details.length; i++) {
                if (_this15.web_contract_details[i].qc_XaBang == null) {
                  _this15.web_contract_details[i].qc_XaBang = "";
                }
              }


              _this15.get_delivery_customers();
              _this15.step_active = 'step-review';
              _this15.form_title = 'Đơn hàng : ' + _this15.webContract.oid;
              _context15.next = 35;
              break;

            case 16:
              _this15.mode = 0;
              _this15.form_title = 'Tạo mới đơn hàng';
              _context15.next = 20;
              return _this15.$http.get("/api/apiaccount/getCurrentuser");

            case 20:
              user_response = _context15.sent;
              user = user_response.data;
              _context15.next = 24;
              return _this15.get_oid();

            case 24:
              _this15.webContract.oid = _context15.sent.data;

              _this15.webContract.cmpnID = user.cmpnID;
              _this15.webContract.clnID = user.clnID;
              _this15.webContract.clnPath = user.clnPath;
              _this15.webContract.zoneID = user.zoneID;
              _this15.webContract.regionID = user.regionID;
              _this15.webContract.saleEmID = user.userCode;
              _this15.webContract.saleEmName = user.fullName;
              _this15.webContract.odate = new Date();
              _this15.webContract.crt_Date = new Date();
              _this15.webContract.signNumb = -1;

            case 35:

              _this15.initWebContract = (0, _assign2.default)({}, _this15.webContract);
              _this15.$store.state.show_loading = false;

            case 37:
            case 'end':
              return _context15.stop();
          }
        }
      }, _callee15, _this15);
    }))();
  },

  filters: {
    formatVnd: function formatVnd(number) {
      var decimals = 0;
      var dec_point = ",";
      var thousands_sep = ".";
      var n = number,
          c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
      var d = dec_point == undefined ? "," : dec_point;
      var t = thousands_sep == undefined ? "." : thousands_sep,
          s = n < 0 ? "-" : "";
      var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;

      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + " ₫";
    },
    dateTimeFormat: function dateTimeFormat(d) {
      if (!d) return "";
      return d.toLocaleString().replace(",", "").replace(/:.. /, " ");
    }
  },
  computed: {
    can_save: function can_save() {
      return this.webContract.signNumb <= 0;
    },
    can_post: function can_post() {
      return this.mode == 1 && this.webContract.signNumb <= 0;
    },
    can_edit: function can_edit() {
      return this.webContract.signNumb <= 0;
    },
    can_delete: function can_delete() {
      return this.mode == 1 && this.webContract.signNumb <= 0;
    },
    can_approve: function can_approve() {
      return this.mode == 1 && this.webContract.signNumb > 0 && this.webContract.signNumb < 201 && this.userPosition == "manager";
    },
    can_return: function can_return() {
      return this.mode == 1 && this.webContract.signNumb > 0 && this.webContract.signNumb < 201 && this.userPosition == "manager";
    },
    can_confirm_receive: function can_confirm_receive() {
      return this.mode == 1 && this.webContract.signNumb >= 401 && this.webContract.signNumb < 501;
    },
    userPosition: function userPosition() {
      if (this.$store.state.user_info.userPosition) return this.$store.state.user_info.userPosition.toLowerCase();
      return "";
    }
  },
  watch: {
    webContract: function webContract() {
      console.log("change");
    }
  }
};

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(108);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(105);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(104);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    show: Boolean,
    detail_editing: {
      type: Object
    },
    customerID: {
      type: String,
      default: ''
    },
    membType: {
      type: String,
      default: '01'
    }
  },
  data: function data() {
    return {
      product_promotions: [],
      selected: null
    };
  },

  methods: {
    get_product_promotions: function get_product_promotions() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var param, url, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                param = $.param({
                  itemID: _this.detail_editing.itemID,
                  prdcQtty: _this.detail_editing.itemQtty || 0,
                  prdcAmnt: _this.detail_editing.prdcAmnt || 0,
                  customerID: _this.customerID,
                  membType: _this.membType
                });
                url = "/api/productpromotion?" + param;
                _context.next = 4;
                return _this.$http.get(url);

              case 4:
                response = _context.sent;

                _this.product_promotions = response.data;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    on_selected: function on_selected(product_promotion) {
      this.$emit("change", (0, _assign2.default)({}, product_promotion));
    }
  },
  filters: {
    formatVnd: function formatVnd(number) {
      var decimals = 0;
      var dec_point = ",";
      var thousands_sep = ".";
      var n = number,
          c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
      var d = dec_point == undefined ? "," : dec_point;
      var t = thousands_sep == undefined ? "." : thousands_sep,
          s = n < 0 ? "-" : "";
      var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;

      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "") + " ₫";
    }
  },
  watch: {
    show: function show() {
      var _this2 = this;

      if (this.show) {
        this.$store.state.show_loading = true;
        (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this2.get_product_promotions();

                case 2:
                  _this2.$store.state.show_loading = false;
                  $(_this2.$refs.modal).modal('show');

                case 4:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }))();
      } else {
        $(this.$refs.modal).modal('hide');
      }
    }
  },
  mounted: function mounted() {
    var vm = this;
    $(this.$refs.modal).on('hidden.bs.modal', function () {
      vm.$emit("hide");
    });
  }
};

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(113);
var hiddenKeys = __webpack_require__(67).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dic = {
  vn: {
    messages: {
      required: function required(field) {
        return "You must provide a value for " + field;
      }
    },
    attributes: {
      customerID: "Khách hàng",
      psCsName: "Tên khách hàng",
      memberCardID: "Mã thẻ thành viên",
      memberTypeName: "Loại thẻ",
      dscnMbRt: "Tỷ lệ giảm thẻ",
      psCsAddr: "Mã khu vực",
      psCsInfo: "Địa chỉ",
      psCsTel: "Điện thoại"
    }
  },
  en: {}
};
exports.default = dic;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    xoadau: function xoadau(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      return str;
    }
  }
};

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      show_product_promotion_modal: false,
      contract_detail_change_promotion_index: -1 };
  },

  methods: {
    onProductPromotionChange: function onProductPromotionChange(productPromotion) {
      this.isDirty = true;
      var detail = this.web_contract_details[this.contract_detail_change_promotion_index];

      detail.prmtID = productPromotion.prmtID;
      detail.prmtListItem = productPromotion.prmtNm;

      detail.dscnRate = productPromotion.dscnRate;
      detail.dscnAmnt = productPromotion.dscnAmnt;
      this.calc_dscnAmnt(detail);
      this.calc_SmPdAmnt(detail);
      this.calc_payment_amount();

      this.onCloseProductPromotionModal();
    },
    openProductPromotionModal: function openProductPromotionModal(index) {
      this.detail_editing = this.web_contract_details[index];
      this.contract_detail_change_promotion_index = index;
      this.show_product_promotion_modal = true;
    },
    onCloseProductPromotionModal: function onCloseProductPromotionModal() {
      this.detail_editing = null;
      this.contract_detail_change_promotion_index = -1;
      this.show_product_promotion_modal = false;
    }
  }
};

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(105);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(104);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      show_modal_add_product: false,
      detail_editing: null
    };
  },

  methods: {
    load_product_info: function load_product_info(detail) {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var url, response, product;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "/api/product/line?ItemID=" + detail.itemID + "&ItemUnit=" + detail.itemUnit + "&MembType=" + _this.webContract.membType + "&customerID=" + _this.webContract.customerID;

                if (detail.bchCode) {
                  url += "&BchCode=" + detail.bchCode;
                }
                if (detail.qc_XaBang) {
                  url += "&Qc_XaBang=" + detail.qc_XaBang;
                }
                _context.next = 5;
                return _this.$http.get(url).catch(function () {
                  alert("Không tìm thấy sản phẩm !");
                });

              case 5:
                response = _context.sent;

                console.log(response);
                if (response.data && response.data != null) {
                  product = response.data;

                  detail.slOhQtty = product.slOhQtty;
                  detail.rmRfQtty = product.rmRfQtty;
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    webContractDetail_Selected: function webContractDetail_Selected(list) {
      var _this2 = this;

      this.isDirty = true;
      var error_items = [];

      var _loop = function _loop() {
        item = list[i];

        item.dscnMbRt = _this2.webContract.dscnMbRt || 0;

        var itemID = item.itemID;
        var boxID = item.boxID;
        var bchCode = item.bchCode;
        var storeID = item.storeID;
        var prmtID = item.prmtID;
        var qc_XaBang = item.qc_XaBang;

        duplicate_items = _this2.web_contract_details.filter(function (detail) {
          return detail.itemID == itemID && detail.boxID == boxID && detail.bchCode == bchCode && detail.storeID == storeID && detail.prmtID == prmtID && detail.qc_XaBang == qc_XaBang;
        });

        if (duplicate_items.length > 0) {
          dup_item = duplicate_items[0];
          added = error_items.filter(function (e) {
            return e.itemName == dup_item.itemName;
          }).length > 0;

          if (added == false) {
            error_items.push({
              itemName: dup_item.itemName
            });
          }
        } else {
          _this2.web_contract_details.push(item);
        }
      };

      for (var i = 0; i < list.length; i++) {
        var item;
        var duplicate_items;
        var dup_item;
        var added;

        _loop();
      }

      if (error_items.length) {
        alert("Sản phẩm " + error_items.map(function (e) {
          return e.itemName;
        }).join(" ,") + " đã có trong giỏ hàng.");
      }

      this.show_modal_add_product = false;
    },
    calc_product_amount: function calc_product_amount(detail) {
      var itemPrice = detail.itemPrice || 0;
      var itemQtty = detail.itemQtty || 0;
      detail.prdcAmnt = itemPrice * itemQtty;
    },
    calc_dscnAmnt: function calc_dscnAmnt(detail) {
      try {
        if (detail.dscnRate == 0) {
          detail.dscnAmnt = detail.dscnAmnt;
        } else {
          detail.dscnAmnt = detail.dscnRate * detail.prdcAmnt / 100;
        }
      } catch (e) {
        alert(e);
      }
    },
    calc_DscnMbAm: function calc_DscnMbAm(detail) {
      var prdcAmnt = detail.prdcAmnt || 0;
      var dscnMbAm = prdcAmnt * detail.dscnMbRt / 100;
      detail.dscnMbAm = dscnMbAm;
    },
    calc_SmPdAmnt: function calc_SmPdAmnt(detail) {
      detail.smPdAmnt = (detail.prdcAmnt || 0) - (detail.dscnAmnt || 0) - (detail.dscnMbAm || 0);
    },
    check_store_quantity: function check_store_quantity(detail) {
      var storeQtty = detail.storeQtty || 0;
      var sl_tonban_donvi = detail.slOhQtty || 0;
      var sl_tonthau_donvi = detail.rmRfQtty || 0;
      if (sl_tonthau_donvi != -1) {
        if (storeQtty > sl_tonban_donvi) {
          alert("S\u1ED1 l\u01B0\u1EE3ng b\xE1n (\u0111\u01A1n v\u1ECB) " + storeQtty + " kh\xF4ng \u0111\u01B0\u1EE3c l\u1EDBn h\u01A1n s\u1ED1 l\u01B0\u1EE3ng t\u1ED3n b\xE1n(" + sl_tonban_donvi + ")");
          detail.storeQtty = 0;
          detail.itemQtty = 0;
        } else if (storeQtty > sl_tonthau_donvi) {
          alert("S\u1ED1 l\u01B0\u1EE3ng b\xE1n (\u0111\u01A1n v\u1ECB) " + storeQtty + " kh\xF4ng \u0111\u01B0\u1EE3c l\u1EDBn h\u01A1n s\u1ED1 l\u01B0\u1EE3ng t\u1ED3n th\u1EA7u(" + sl_tonthau_donvi + ")");
          detail.storeQtty = 0;
          detail.itemQtty = 0;
        }
      }
    },
    store_quantity_change: function store_quantity_change(detail) {
      var _this3 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.isDirty = true;
                _context2.next = 3;
                return _this3.load_product_info(detail);

              case 3:
                if (detail.storeQtty) {
                  if (detail.storeQtty < 0) {
                    detail.storeQtty = 0;
                  }
                }

                _this3.check_store_quantity(detail);

                if (detail.itemPerBox && detail.itemPerBox > 0) {
                  detail.itemQtty = detail.storeQtty / detail.itemPerBox;
                } else {
                  detail.itemQtty = 0;
                }

                _this3.calc_product_amount(detail);
                _this3.calc_dscnAmnt(detail);
                _this3.calc_DscnMbAm(detail);
                _this3.calc_SmPdAmnt(detail);
                _this3.calc_payment_amount();
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    item_quantity_change: function item_quantity_change(detail) {
      var _this4 = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.isDirty = true;
                _context3.next = 3;
                return _this4.load_product_info(detail);

              case 3:
                if (detail.itemQtty) {
                  if (detail.itemQtty < 0) {
                    detail.itemQtty = 0;
                  }
                }

                detail.storeQtty = detail.itemQtty * detail.itemPerBox;

                _this4.store_quantity_change(detail);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },
    calc_payment_amount: function calc_payment_amount() {
      var prdcAmnt = 0;
      var dscnAmnt = 0;
      var dscnMbAm = 0;
      var sum_Amnt = 0;

      if (this.web_contract_details.length > 0) {
        var length = this.web_contract_details.length;
        for (var i = 0; i < length; i++) {
          var detail = this.web_contract_details[i];
          prdcAmnt += detail.prdcAmnt || 0;
          dscnAmnt += detail.dscnAmnt || 0;
          dscnMbAm += detail.dscnMbAm || 0;
          sum_Amnt += detail.smPdAmnt || 0;
        }
      }

      this.webContract.prdcAmnt = prdcAmnt;
      this.webContract.dscnAmnt = dscnAmnt;
      this.webContract.dscnMbAm = dscnMbAm;
      this.webContract.sum_Amnt = sum_Amnt;
    },
    remove_webcontractdetails: function remove_webcontractdetails(detail) {
      this.isDirty = true;
      var index = this.web_contract_details.indexOf(detail);
      this.web_contract_details.splice(index, 1);
      this.calc_payment_amount();
    },
    removeProductPromotion: function removeProductPromotion(index) {
      this.isDirty = true;
      var detail = this.web_contract_details[index];
      detail.prmtID = "";
      detail.prmtListItem = "";
      detail.dscnAmnt = 0;
      detail.dscnRate = 0;

      this.calc_SmPdAmnt(detail);
      this.calc_payment_amount();
    }
  }
};

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(271), __esModule: true };

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(272), __esModule: true };

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(273), __esModule: true };

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(269);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(268);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(279);
__webpack_require__(115);
__webpack_require__(280);
__webpack_require__(281);
module.exports = __webpack_require__(6).Symbol;


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
__webpack_require__(117);
module.exports = __webpack_require__(244).f('iterator');


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(64);
var gOPS = __webpack_require__(109);
var pIE = __webpack_require__(107);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(66)('meta');
var isObject = __webpack_require__(26);
var has = __webpack_require__(35);
var setDesc = __webpack_require__(25).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(44)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(107);
var createDesc = __webpack_require__(65);
var toIObject = __webpack_require__(43);
var toPrimitive = __webpack_require__(110);
var has = __webpack_require__(35);
var IE8_DOM_DEFINE = __webpack_require__(111);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(43);
var gOPN = __webpack_require__(262).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(35);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(17);
var redefine = __webpack_require__(114);
var META = __webpack_require__(276).KEY;
var $fails = __webpack_require__(44);
var shared = __webpack_require__(68);
var setToStringTag = __webpack_require__(46);
var uid = __webpack_require__(66);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(244);
var wksDefine = __webpack_require__(243);
var enumKeys = __webpack_require__(274);
var isArray = __webpack_require__(275);
var anObject = __webpack_require__(10);
var isObject = __webpack_require__(26);
var toIObject = __webpack_require__(43);
var toPrimitive = __webpack_require__(110);
var createDesc = __webpack_require__(65);
var _create = __webpack_require__(112);
var gOPNExt = __webpack_require__(278);
var $GOPD = __webpack_require__(277);
var $DP = __webpack_require__(25);
var $keys = __webpack_require__(64);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(262).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(107).f = $propertyIsEnumerable;
  __webpack_require__(109).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(45)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(243)('asyncIterator');


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(243)('observable');


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select2_vue__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select2_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select2_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select2_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85d2a39c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Select2_vue__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(302)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Select2_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85d2a39c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Select2_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_85d2a39c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Select2_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\Controls\\Select2.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85d2a39c", Component.options)
  } else {
    hotAPI.reload("data-v-85d2a39c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddProductModal_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddProductModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddProductModal_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddProductModal_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddProductModal_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da12cb12_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddProductModal_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(299)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddProductModal_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da12cb12_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddProductModal_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da12cb12_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddProductModal_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\WebContract\\AddProductModal.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da12cb12", Component.options)
  } else {
    hotAPI.reload("data-v-da12cb12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CustomerListModal_vue__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CustomerListModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CustomerListModal_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CustomerListModal_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CustomerListModal_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_039831a9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CustomerListModal_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(300)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CustomerListModal_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_039831a9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CustomerListModal_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_039831a9_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CustomerListModal_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\WebContract\\CustomerListModal.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-039831a9", Component.options)
  } else {
    hotAPI.reload("data-v-039831a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SelectProductPromotionModal_vue__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SelectProductPromotionModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SelectProductPromotionModal_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SelectProductPromotionModal_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SelectProductPromotionModal_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8107d796_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SelectProductPromotionModal_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(298)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8107d796"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SelectProductPromotionModal_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8107d796_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SelectProductPromotionModal_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8107d796_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SelectProductPromotionModal_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\WebContract\\SelectProductPromotionModal.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8107d796", Component.options)
  } else {
    hotAPI.reload("data-v-8107d796", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { ref: "modal", staticClass: "modal modal-customer-list modal-wide" },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "wrap-table" }, [
                _c(
                  "table",
                  { staticClass: "table-bordered table-striped table" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.customers, function(customer, index) {
                        return _c("tr", { key: customer.customerID }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.customerID))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", { staticClass: "text-info" }, [
                              _vm._v(_vm._s(customer.psCsName))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(customer.psCsInfo))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-xs btn-flat btn-primary",
                                on: {
                                  click: function($event) {
                                    _vm.selected(customer)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-check" }),
                                _vm._v(" Chọn")
                              ]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right" }, [
                _c(
                  "ul",
                  { staticClass: "pagination pagination-sm" },
                  [
                    _vm.pagination.currentPage > 1
                      ? [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#", tabindex: "-1" },
                                on: {
                                  click: function($event) {
                                    _vm.loadPage(_vm.pagination.currentPage - 1)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-arrow-left" })]
                            )
                          ]),
                          _vm._v(" "),
                          _vm.pagination.currentPage > _vm.pagination.max + 1
                            ? _c("li", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.loadPage(1)
                                      }
                                    }
                                  },
                                  [_vm._v("1")]
                                )
                              ])
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.start >= _vm.pagination.max
                      ? [
                          _vm.start == _vm.pagination.max
                            ? _c("li", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.loadPage(2)
                                      }
                                    }
                                  },
                                  [_vm._v("2")]
                                )
                              ])
                            : _c("li", [
                                _c("a", { attrs: { href: "#" } }, [
                                  _vm._v("...")
                                ])
                              ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.end, function(n) {
                      return n >= _vm.start
                        ? [
                            n == _vm.pagination.currentPage
                              ? [
                                  _c("li", { staticClass: "active" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "page-link",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v(_vm._s(n))]
                                    )
                                  ])
                                ]
                              : [
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "page-link",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            _vm.loadPage(n)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(n))]
                                    )
                                  ])
                                ]
                          ]
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _vm.end + 1 < _vm.totalPages
                      ? [
                          _vm.end + 2 == _vm.totalPages
                            ? _c("li", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.loadPage(_vm.totalPages - 1)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.totalPages - 1))]
                                )
                              ])
                            : _c("li", [
                                _c("a", { attrs: { href: "#" } }, [
                                  _vm._v("...")
                                ])
                              ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.pagination.currentPage < _vm.totalPages
                      ? [
                          _vm.pagination.currentPage <
                          _vm.totalPages - _vm.pagination.max
                            ? _c("li", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.loadPage(_vm.totalPages)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.totalPages))]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pagination.currentPage < _vm.totalPages
                            ? _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "page-link",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        _vm.loadPage(
                                          _vm.pagination.currentPage + 1
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-arrow-right"
                                    })
                                  ]
                                )
                              ])
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(3)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c("h3", { staticClass: "modal-title" }, [_vm._v("Danh sách khách hàng")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Nhập mã hoặc tên khách hàng..." }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "input-group-btn" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-flat",
            attrs: { type: "button" }
          },
          [_vm._v("Tìm kiếm")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(".No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Chọn")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer hidden" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default pull-left",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "button" } },
        [_vm._v("Save changes")]
      )
    ])
  }
]
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(8)      .rerender("data-v-039831a9", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { ref: "modal", staticClass: "modal add-product-modal" }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm.show
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "wrap-table" }, [
                  _c("table", { staticClass: "table-bordered table" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.product_promotions, function(
                        product_promotion,
                        index
                      ) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(index + 1))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", { staticClass: "text-success" }, [
                              _vm._v(_vm._s(product_promotion.prmtNm))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(product_promotion.prmtID))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(product_promotion.dscnRate) + " %")
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("formatVnd")(product_promotion.dscnAmnt)
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-default btn-xs",
                                on: {
                                  click: function($event) {
                                    _vm.on_selected(product_promotion)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fa fa-check" }),
                                _vm._v(" Chọn")
                              ]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c("h3", { staticClass: "modal-title" }, [
        _vm._v("Chương trình khuyến mãi")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(".No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tên CTKM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mã CTKM")]),
        _vm._v(" "),
        _c("th", [_vm._v("% Giảm ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Số tiền giảm")]),
        _vm._v(" "),
        _c("th", [_vm._v("#")])
      ])
    ])
  }
]
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(8)      .rerender("data-v-8107d796", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "select",
      {
        ref: "select",
        staticClass: "form-control",
        staticStyle: { width: "100%" }
      },
      [
        _c("option", { attrs: { value: "" } }, [
          _vm._v(_vm._s(_vm.placeholder))
        ]),
        _vm._v(" "),
        _vm.defaulttext
          ? _c(
              "option",
              {
                attrs: { selected: "selected" },
                domProps: { value: _vm.value }
              },
              [_vm._v(_vm._s(_vm.defaulttext))]
            )
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(8)      .rerender("data-v-85d2a39c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("section", { staticClass: "content-header" }, [
        _c("h1", [
          _vm._v("\n      " + _vm._s(_vm.form_title) + "\n      "),
          _c("small", [_vm._v("Đơn hàng")])
        ]),
        _vm._v(" "),
        _c("ol", { staticClass: "breadcrumb" }, [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/" } }, [
                _c("i", { staticClass: "fa fa-dashboard" }),
                _vm._v(" Dashboard")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/web-contract" } }, [
                _vm._v("Đơn hàng")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", { staticClass: "active" }, [_vm._v(_vm._s(_vm.form_title))])
        ])
      ]),
      _vm._v(" "),
      _vm.show
        ? _c("section", { staticClass: "content" }, [
            _c("p", { staticClass: "btn-group btn-breadcrumb" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-default",
                  class: { "btn-success": _vm.step_active == "step-customer" },
                  on: {
                    click: function($event) {
                      _vm.step_active = "step-customer"
                    }
                  }
                },
                [
                  _vm._v("Thông tin khách hàng  "),
                  _c("i", { staticClass: "fa fa-arrow-circle-right" })
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-default",
                  class: {
                    "btn-success": _vm.step_active == "step-delivery-customer"
                  },
                  on: {
                    click: function($event) {
                      _vm.save_customer_info()
                    }
                  }
                },
                [
                  _vm._v("Thông tin đơn vị nhận hàng  "),
                  _c("i", { staticClass: "fa fa-arrow-circle-right" })
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-default",
                  class: { "btn-success": _vm.step_active == "step-product" },
                  on: {
                    click: function($event) {
                      _vm.go_step_product()
                    }
                  }
                },
                [
                  _vm._v("Danh sách sản phẩm  "),
                  _c("i", { staticClass: "fa fa-arrow-circle-right" })
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-default",
                  class: { "btn-success": _vm.step_active == "step-review" },
                  on: {
                    click: function($event) {
                      _vm.save_step_product()
                    }
                  }
                },
                [_vm._v("Tổng quan đơn hàng")]
              )
            ]),
            _vm._v(" "),
            _vm.step_active == "step-customer"
              ? _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-tools pull-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              _vm.save_customer_info()
                            }
                          }
                        },
                        [
                          _vm._v("Chọn đơn vị nhận hàng "),
                          _c("i", {
                            staticClass: "fa fa-arrow-circle-right",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "form",
                      { attrs: { "data-vv-scope": "form-step-customer" } },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-1" },
                            [
                              _c("div", { staticClass: "form-horizontal" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Khách hàng")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
                                      _c("Select2", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        key: "customerID",
                                        attrs: {
                                          skey: "customerID",
                                          placeholder: "Chọn khách hàng",
                                          name: "customerID",
                                          ajax: _vm.customer_ajax,
                                          defaulttext: _vm.webContract.psCsName,
                                          templateResult:
                                            _vm.get_customer_template_result,
                                          templateSelection:
                                            _vm.get_customer_template_selection,
                                          matcher: _vm.get_customer_matcher
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.customer_OnChange($event)
                                          }
                                        },
                                        model: {
                                          value: _vm.webContract.customerID,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.webContract,
                                              "customerID",
                                              $$v
                                            )
                                          },
                                          expression: "webContract.customerID"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.issubmited_customer &&
                                      _vm.errors.has(
                                        "form-step-customer.customerID"
                                      )
                                        ? _c(
                                            "p",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "form-step-customer.customerID"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "text-right hidden" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn-xs btn-default",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  _vm.show_modal_customer_list = true
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Mở danh sách khách hàng dạng bảng"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Mã khách hàng")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.customerID,
                                          expression: "webContract.customerID"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "customerID",
                                        readonly: "readonly",
                                        placeholder: "Mã khách hàng"
                                      },
                                      domProps: {
                                        value: _vm.webContract.customerID
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "customerID",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has(
                                      "form-step-customer.customerID"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.customerID"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Mã thẻ thành viên")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.memberCardID,
                                          expression: "webContract.memberCardID"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "memberCardID",
                                        readonly: "readonly",
                                        placeholder: "Mã thẻ thành viên"
                                      },
                                      domProps: {
                                        value: _vm.webContract.memberCardID
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "memberCardID",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has(
                                      "form-step-customer.memberCardID"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.memberCardID"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Loại thẻ")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.membType,
                                          expression: "webContract.membType"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "membType",
                                        readonly: "readonly",
                                        placeholder: "Loại thẻ"
                                      },
                                      domProps: {
                                        value: _vm.webContract.membType
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "membType",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has(
                                      "form-step-customer.membType"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.membType"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Tỷ lệ giảm thẻ")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.dscnMbRt,
                                          expression: "webContract.dscnMbRt"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "dscnMbRt",
                                        readonly: "readonly",
                                        placeholder: "Tỷ lệ giảm thẻ"
                                      },
                                      domProps: {
                                        value: _vm.webContract.dscnMbRt
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "dscnMbRt",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has(
                                      "form-step-customer.dscnMbRt"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.dscnMbRt"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Tên khách hàng")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.psCsName,
                                          expression: "webContract.psCsName"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "psCsName",
                                        placeholder: "Tên khách hàng"
                                      },
                                      domProps: {
                                        value: _vm.webContract.psCsName
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "psCsName",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has(
                                      "form-step-customer.psCsName"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.psCsName"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "col-sm-3 control-label",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Điện thoại")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "numeric|min:8|max:12",
                                          expression: "'numeric|min:8|max:12'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.psCsTel,
                                          expression: "webContract.psCsTel"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "psCsTel",
                                        placeholder: "Điện thoại"
                                      },
                                      domProps: {
                                        value: _vm.webContract.psCsTel
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "psCsTel",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has("form-step-customer.psCsTel")
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.psCsTel"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Địa chỉ")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.psCsInfo,
                                          expression: "webContract.psCsInfo"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "psCsInfo",
                                        placeholder: "Địa chỉ"
                                      },
                                      domProps: {
                                        value: _vm.webContract.psCsInfo
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "psCsInfo",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_customer &&
                                    _vm.errors.has(
                                      "form-step-customer.psCsInfo"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-customer.psCsInfo"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                false
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "col-sm-3 control-label span-required",
                                          attrs: { for: "" }
                                        },
                                        [_vm._v("Mã khu vực")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-9" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required",
                                              expression: "'required'"
                                            },
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.webContract.psCsAddr,
                                              expression: "webContract.psCsAddr"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            name: "psCsAddr",
                                            placeholder: "Mã khu vực"
                                          },
                                          domProps: {
                                            value: _vm.webContract.psCsAddr
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.webContract,
                                                "psCsAddr",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.issubmited_customer &&
                                        _vm.errors.has(
                                          "form-step-customer.psCsAddr"
                                        )
                                          ? _c(
                                              "p",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "form-step-customer.psCsAddr"
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer text-right hidden" })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.step_active == "step-delivery-customer"
              ? _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-tools pull-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          on: {
                            click: function($event) {
                              _vm.step_active = "step-customer"
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-circle-left" }),
                          _vm._v(" Quay lại")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              _vm.save_delivery_customer()
                            }
                          }
                        },
                        [
                          _vm._v("Giỏ hàng "),
                          _c("i", {
                            staticClass: "fa fa-arrow-circle-right",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c(
                      "form",
                      {
                        attrs: {
                          "data-vv-scope": "form-step-delivery-customer"
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-1" },
                            [
                              _c("div", { staticClass: "form-horizontal" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Đơn vị nhận hàng")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9" },
                                    [
                                      _c("Select2", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required",
                                            expression: "'required'"
                                          }
                                        ],
                                        key: "deliverEm",
                                        attrs: {
                                          skey: "deliverEm",
                                          placeholder: "Chọn đơn vị nhận hàng",
                                          name: "deliverEm",
                                          "data-vv-as": "Đơn vị nhận hàng",
                                          templateResult:
                                            _vm.get_deliverycustomer_template_result,
                                          options: _vm.delivery_customers,
                                          templateSelection:
                                            _vm.get_deliverycustomer_template_selection,
                                          matcher:
                                            _vm.get_deliverycustomer_matcher
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.deliveryCustomer_OnChange(
                                              $event
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.webContract.deliverEm,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.webContract,
                                              "deliverEm",
                                              $$v
                                            )
                                          },
                                          expression: "webContract.deliverEm"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.issubmited_delivery_customer &&
                                      _vm.errors.has(
                                        "form-step-delivery-customer.deliverEm"
                                      )
                                        ? _c(
                                            "p",
                                            { staticClass: "text-danger" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "form-step-delivery-customer.deliverEm"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Tên đơn vị")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.dlCsName,
                                          expression: "webContract.dlCsName"
                                        }
                                      ],
                                      key: "dlCsName",
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "dlCsName",
                                        "data-vv-as": "Tên đơn vị nhận hàng",
                                        placeholder: "Tên đơn vị nhận hàng"
                                      },
                                      domProps: {
                                        value: _vm.webContract.dlCsName
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "dlCsName",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_delivery_customer &&
                                    _vm.errors.has(
                                      "form-step-delivery-customer.dlCsName"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-delivery-customer.dlCsName"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                false
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "col-sm-3 control-label span-required",
                                          attrs: { for: "" }
                                        },
                                        [_vm._v("Mã đơn vị")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-9" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required",
                                              expression: "'required'"
                                            },
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.webContract.deliverEm,
                                              expression:
                                                "webContract.deliverEm"
                                            }
                                          ],
                                          key: "deliverEm2",
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            name: "deliverEm2",
                                            "data-vv-as": "Mã đơn vị nhận hàng",
                                            readonly: "readonly",
                                            placeholder: "Mã đơn vị nhận hàng"
                                          },
                                          domProps: {
                                            value: _vm.webContract.deliverEm
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.webContract,
                                                "deliverEm",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.issubmited_delivery_customer &&
                                        _vm.errors.has(
                                          "form-step-delivery-customer.deliverEm2"
                                        )
                                          ? _c(
                                              "p",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "form-step-delivery-customer.deliverEm2"
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "col-sm-3 control-label span-required",
                                      attrs: { for: "" }
                                    },
                                    [_vm._v("Địa chỉ nhận hàng")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        },
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.webContract.dlCsInfo,
                                          expression: "webContract.dlCsInfo"
                                        }
                                      ],
                                      key: "dlCsInfo",
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "dlCsInfo",
                                        "data-vv-as": "Địa chỉ nhận hàng",
                                        placeholder: "Địa chỉ nhận hàng"
                                      },
                                      domProps: {
                                        value: _vm.webContract.dlCsInfo
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.webContract,
                                            "dlCsInfo",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.issubmited_delivery_customer &&
                                    _vm.errors.has(
                                      "form-step-delivery-customer.dlCsInfo"
                                    )
                                      ? _c(
                                          "p",
                                          { staticClass: "text-danger" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-step-delivery-customer.dlCsInfo"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ])
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-footer text-right hidden" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        on: {
                          click: function($event) {
                            _vm.step_active = "step-customer"
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-arrow-circle-left" }),
                        _vm._v(" Quay lại")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: {
                          click: function($event) {
                            _vm.save_delivery_customer()
                          }
                        }
                      },
                      [
                        _vm._v("Giỏ hàng "),
                        _c("i", {
                          staticClass: "fa fa-arrow-circle-right",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.step_active == "step-product"
              ? _c("div", { staticClass: "box box-primary" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-tools pull-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          on: {
                            click: function($event) {
                              _vm.step_active = "step-delivery-customer"
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-circle-left" }),
                          _vm._v(" Quay lại")
                        ]
                      ),
                      _vm._v(" "),
                      _vm.can_edit
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              on: {
                                click: function($event) {
                                  _vm.show_modal_add_product = true
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-plus" }),
                              _vm._v(" Thêm sản phẩm vào giỏ hàng")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              _vm.save_step_product()
                            }
                          }
                        },
                        [
                          _vm._v("Xem đơn hàng "),
                          _c("i", {
                            staticClass: "fa fa-arrow-circle-right",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("div", { staticClass: "wrap-table" }, [
                          _c(
                            "form",
                            { attrs: { "data-vv-scope": "form-step-product" } },
                            [
                              _c(
                                "table",
                                {
                                  staticClass: "table table-bordered",
                                  attrs: { width: "1200" }
                                },
                                [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", [_vm._v(".No")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Mã kho")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Tên sản phẩm")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Tên đơn vị tính")]),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "ETC"
                                        ? _c("th", [_vm._v("Số hợp đồng thầu")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "ETC"
                                        ? _c("th", [_vm._v("Mã lô")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      false
                                        ? _c("th", [_vm._v("Qui cách bán")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "ETC"
                                        ? _c("th", [
                                            _vm._v("SL tồn thầu (đơn vị)")
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("SL bán (đơn vị)")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("SL bán (hộp)")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Giá bán")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Tiền hàng")]),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "OTC"
                                        ? _c("th", [
                                            _vm._v("Tên chương trình KM")
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "OTC"
                                        ? _c("th", [_vm._v("% GG.KM")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "OTC"
                                        ? _c("th", [_vm._v("Tiền GG.KM")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "OTC"
                                        ? _c("th", [_vm._v("% G.Thẻ")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.$store.state.user_info.clnType ==
                                      "OTC"
                                        ? _c("th", [_vm._v("Tiền G.Thẻ")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Thành tiền hàng")]),
                                      _vm._v(" "),
                                      _vm.can_edit
                                        ? _c("th", [_vm._v("#")])
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.web_contract_details, function(
                                      contractDetail,
                                      index
                                    ) {
                                      return _c("tr", { key: index }, [
                                        _c("td", [_vm._v(_vm._s(index + 1))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(contractDetail.storeID))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "strong",
                                            { staticClass: "text-success" },
                                            [
                                              _vm._v(
                                                _vm._s(contractDetail.itemName)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(contractDetail.itemUnitName)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "ETC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(contractDetail.qc_XaBang)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "ETC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(contractDetail.bchCode)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        false
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(contractDetail.boxID)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "ETC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(contractDetail.remnRfQt)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _vm.can_edit
                                              ? [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          contractDetail.storeQtty,
                                                        expression:
                                                          "contractDetail.storeQtty"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "number",
                                                      min: "0",
                                                      max: "200"
                                                    },
                                                    domProps: {
                                                      value:
                                                        contractDetail.storeQtty
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        _vm.store_quantity_change(
                                                          contractDetail
                                                        )
                                                      },
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          contractDetail,
                                                          "storeQtty",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              : [
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        contractDetail.storeQtty
                                                      ) +
                                                      "\n                        "
                                                  )
                                                ]
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _vm.can_edit
                                              ? [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          contractDetail.itemQtty,
                                                        expression:
                                                          "contractDetail.itemQtty"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "number",
                                                      min: "0",
                                                      max: "200"
                                                    },
                                                    domProps: {
                                                      value:
                                                        contractDetail.itemQtty
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        _vm.item_quantity_change(
                                                          contractDetail
                                                        )
                                                      },
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          contractDetail,
                                                          "itemQtty",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ]
                                              : [
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        contractDetail.itemQtty
                                                      ) +
                                                      "\n                        "
                                                  )
                                                ]
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatVnd")(
                                                contractDetail.itemPrice
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatVnd")(
                                                contractDetail.prdcAmnt
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "OTC"
                                          ? _c(
                                              "td",
                                              { staticClass: "text-right" },
                                              [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(
                                                      contractDetail.prmtListItem
                                                    ) +
                                                    "\n                        "
                                                ),
                                                _vm.can_edit
                                                  ? [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-xs btn-success",
                                                          attrs: {
                                                            type: "button"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              _vm.openProductPromotionModal(
                                                                index
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Tìm CTKM")]
                                                      ),
                                                      _vm._v(" "),
                                                      contractDetail.prmtListItem
                                                        ? _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn btn-xs btn-default",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.removeProductPromotion(
                                                                    index
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("X")]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "OTC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(contractDetail.dscnRate)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "OTC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("formatVnd")(
                                                    contractDetail.dscnAmnt
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "OTC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(contractDetail.dscnMbRt)
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.$store.state.user_info.clnType ==
                                        "OTC"
                                          ? _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("formatVnd")(
                                                    contractDetail.dscnMbAm
                                                  )
                                                )
                                              )
                                            ])
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatVnd")(
                                                contractDetail.smPdAmnt
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm.can_edit
                                          ? _c("td", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-xs btn-danger",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.remove_webcontractdetails(
                                                        contractDetail
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v(" Xóa ")]
                                              )
                                            ])
                                          : _vm._e()
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.step_active == "step-review"
              ? _c("div", { staticClass: "box box-primary box-review" }, [
                  _c("div", { staticClass: "box-header with-border" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-tools pull-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          on: {
                            click: function($event) {
                              _vm.step_active = "step-product"
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-circle-left" }),
                          _vm._v(" Quay lại")
                        ]
                      ),
                      _vm._v(" "),
                      _vm.can_approve
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              on: { click: _vm.approve_webContract }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-check-circle-o",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" Duyệt đơn hàng\n          ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.can_return
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-warning",
                              on: { click: _vm.return_webContract }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-check-circle-o",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" Trả đơn hàng về\n          ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.can_save
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              on: { click: _vm.save_webContract }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-floppy-o",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" Lưu đơn hàng")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.can_post
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              on: {
                                click: function($event) {
                                  _vm.post_webContract(true)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-check-circle-o",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" Post đơn hàng\n          ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.can_delete
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-danger",
                              on: { click: _vm.delete_webContract }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(" Xóa đơn hàng")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.can_confirm_receive
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              on: { click: _vm.confirm_webContract }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-ban",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v("Xác nhận hàng đã giao")
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "box-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _vm._m(6),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "table", attrs: { cellpadding: "5" } },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _vm._m(7),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.clnID))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(8),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.clnPath))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(9),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(_vm.webContract.oid))])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(10),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("dateTimeFormat")(
                                        _vm.webContract.odate
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(11),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.saleEmName))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tr",
                                [
                                  _vm._m(12),
                                  _vm._v(" "),
                                  _vm.mode == 1
                                    ? [
                                        _c("td", {
                                          domProps: {
                                            innerHTML: _vm._f("filterStatus")(
                                              _vm.webContract.signNumb
                                            )
                                          }
                                        })
                                      ]
                                    : [_c("td")]
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(13),
                                _vm._v(" "),
                                _c("td", [
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.webContract.descrip,
                                        expression: "webContract.descrip"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { rows: "2" },
                                    domProps: {
                                      value: _vm.webContract.descrip
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.webContract,
                                          "descrip",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(14),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("dateTimeFormat")(
                                        _vm.webContract.crt_Date
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(15),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("dateTimeFormat")(
                                        _vm.webContract.chgeDate
                                      )
                                    )
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("h4", [
                          _c("i", { staticClass: "fa fa-user-circle" }),
                          _vm._v(" "),
                          _c("strong", { staticClass: "text-success" }, [
                            _vm._v("Thông tin khách hàng")
                          ]),
                          _vm._v(" "),
                          _vm.can_edit
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-success",
                                  on: {
                                    click: function($event) {
                                      _vm.step_active = "step-customer"
                                    }
                                  }
                                },
                                [_vm._v("Sửa")]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "table", attrs: { cellpadding: "5" } },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _vm._m(16),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.customerID))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(17),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.memberCardID))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(18),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.membType))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(19),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.dscnMbRt))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(20),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "strong",
                                    { staticClass: "text-primary" },
                                    [_vm._v(_vm._s(_vm.webContract.psCsName))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(21),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.psCsTel))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(22),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.psCsInfo))
                                ])
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("h4", [
                          _c("i", { staticClass: "fa fa-truck" }),
                          _vm._v(" "),
                          _c("strong", { staticClass: "text-success" }, [
                            _vm._v("Đơn vị nhận hàng")
                          ]),
                          _vm._v(" "),
                          _vm.can_edit
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-success",
                                  on: {
                                    click: function($event) {
                                      _vm.step_active = "step-delivery-customer"
                                    }
                                  }
                                },
                                [_vm._v("Sửa")]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "table", attrs: { cellpadding: "5" } },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _vm._m(23),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.deliverEm))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(24),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "strong",
                                    { staticClass: "text-primary" },
                                    [_vm._v(_vm._s(_vm.webContract.dlCsName))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(25),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.webContract.dlCsInfo))
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("p", { staticClass: "text-right" }, [
                          _vm.can_edit
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-success",
                                  on: {
                                    click: function($event) {
                                      _vm.step_active = "step-product"
                                    }
                                  }
                                },
                                [_vm._v("Sửa")]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass: "table table-bordered",
                            attrs: { width: "1200" }
                          },
                          [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v(".No")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Mã kho")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Tên sản phẩm")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Tên đơn vị tính")]),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "ETC"
                                  ? _c("th", [_vm._v("Số hợp đồng thầu")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "ETC"
                                  ? _c("th", [_vm._v("Mã lô")])
                                  : _vm._e(),
                                _vm._v(" "),
                                false
                                  ? _c("th", [_vm._v("Qui cách bán")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "ETC"
                                  ? _c("th", [_vm._v("SL tồn thầu (đơn vị)")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("th", [_vm._v("SL bán (đơn vị)")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("SL bán (hộp)")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Giá bán")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Tiền hàng")]),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "OTC"
                                  ? _c("th", [_vm._v("Tên chương trình KM")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "OTC"
                                  ? _c("th", [_vm._v("% GG.KM")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "OTC"
                                  ? _c("th", [_vm._v("Tiền GG.KM")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "OTC"
                                  ? _c("th", [_vm._v("% G.Thẻ")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.user_info.clnType == "OTC"
                                  ? _c("th", [_vm._v("Tiền G.Thẻ")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("th", [_vm._v("Thành tiền hàng")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.web_contract_details, function(
                                contractDetail,
                                index
                              ) {
                                return _c("tr", { key: index }, [
                                  _c("td", [_vm._v(_vm._s(index + 1))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(contractDetail.storeID))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "strong",
                                      { staticClass: "text-success" },
                                      [_vm._v(_vm._s(contractDetail.itemName))]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(contractDetail.itemUnitName))
                                  ]),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "ETC"
                                    ? _c("td", [
                                        _vm._v(_vm._s(contractDetail.qc_XaBang))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "ETC"
                                    ? _c("td", [
                                        _vm._v(_vm._s(contractDetail.bchCode))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  false
                                    ? _c("td", [
                                        _vm._v(_vm._s(contractDetail.boxID))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "ETC"
                                    ? _c("td", [
                                        _vm._v(_vm._s(contractDetail.remnRfQt))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(contractDetail.storeQtty))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(contractDetail.itemQtty))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatVnd")(
                                          contractDetail.itemPrice
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatVnd")(
                                          contractDetail.prdcAmnt
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "OTC"
                                    ? _c("td", [
                                        _vm._v(
                                          _vm._s(contractDetail.prmtListItem)
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "OTC"
                                    ? _c("td", [
                                        _vm._v(_vm._s(contractDetail.dscnRate))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "OTC"
                                    ? _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatVnd")(
                                              contractDetail.dscnAmnt
                                            )
                                          )
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "OTC"
                                    ? _c("td", [
                                        _vm._v(_vm._s(contractDetail.dscnMbRt))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.$store.state.user_info.clnType == "OTC"
                                    ? _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatVnd")(
                                              contractDetail.dscnMbAm
                                            )
                                          )
                                        )
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatVnd")(
                                          contractDetail.smPdAmnt
                                        )
                                      )
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4 col-md-offset-8" }, [
                        _vm._m(26),
                        _vm._v(" "),
                        _c(
                          "table",
                          { staticClass: "table", attrs: { cellpadding: "5" } },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _vm._m(27),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatVnd")(
                                        _vm.webContract.prdcAmnt
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(28),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatVnd")(
                                        _vm.webContract.dscnAmnt
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(29),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatVnd")(
                                        _vm.webContract.dscnMbAm
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _vm._m(30),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatVnd")(
                                        _vm.webContract.sum_Amnt
                                      )
                                    )
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      [
        _c("CustomerListModal", {
          attrs: { show: _vm.show_modal_customer_list },
          on: {
            hide: function($event) {
              _vm.show_modal_customer_list = false
            },
            selected: _vm.customer_OnChange
          }
        }),
        _vm._v(" "),
        _c("AddProductModal", {
          attrs: {
            show: _vm.show_modal_add_product,
            membType: _vm.webContract.membType,
            customerID: _vm.webContract.customerID
          },
          on: {
            hide: function($event) {
              _vm.show_modal_add_product = false
            },
            selected: _vm.webContractDetail_Selected
          }
        }),
        _vm._v(" "),
        _c("SelectProductPromotionModal", {
          attrs: {
            show: _vm.show_product_promotion_modal,
            membType: _vm.webContract.membType,
            customerID: _vm.webContract.customerID,
            detail_editing: _vm.detail_editing,
            index: _vm.contract_detail_change_promotion_index
          },
          on: {
            hide: _vm.onCloseProductPromotionModal,
            change: _vm.onProductPromotionChange
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-sm btn-default" }, [
      _c("i", { staticClass: "fa fa-plus" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "box-title" }, [
      _c("img", {
        attrs: {
          src: "/dist/img/pharmacy-icon.png",
          width: "30",
          alt: "Thông tin đơn hàng"
        }
      }),
      _vm._v(" "),
      _c("strong", [_vm._v("Thông tin khách hàng")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "box-title" }, [
      _c("img", {
        attrs: {
          src: "/dist/img/truck-icon.svg",
          width: "30",
          alt: "Thông tin đơn vị nhận hàng"
        }
      }),
      _vm._v(" "),
      _c("strong", [_vm._v("Đơn vị nhận hàng")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "box-title" }, [
      _c("img", {
        attrs: {
          src: "/dist/img/shopping-bags.png",
          width: "30",
          alt: "Sản phẩm"
        }
      }),
      _vm._v(" "),
      _c("strong", [_vm._v("Giỏ hàng")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "alert alert-danger alert-dismissible hidden" },
      [
        _c(
          "button",
          {
            staticClass: "close",
            attrs: {
              type: "button",
              "data-dismiss": "alert",
              "aria-hidden": "true"
            }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("h4", [
          _c("i", { staticClass: "icon fa fa-ban" }),
          _vm._v(" Cảnh báo!")
        ]),
        _vm._v(
          "\n              Sản phẩm đã bị trùng lặp trong giỏ hàng\n            "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "box-title" }, [
      _c("img", {
        attrs: { src: "/dist/img/vitamin-c.png", width: "30", alt: "Sản phẩm" }
      }),
      _vm._v(" "),
      _c("strong", [_vm._v("Tổng quan đơn hàng")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("i", { staticClass: "fa fa-first-order" }),
      _vm._v(" "),
      _c("strong", { staticClass: "text-success" }, [
        _vm._v("Thông tin đơn hàng")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { width: "40%" } }, [
      _c("strong", [_vm._v("Số kênh :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Mã kênh :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Số đơn đặt hàng :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Ngày đơn đặt hàng :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tên trình dược viên :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tình trạng :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Ghi chú :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Ngày giờ tạo :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Ngày giờ sửa :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { width: "40%" } }, [
      _c("strong", [_vm._v("Mã khách hàng :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Mã thẻ thành viên :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Loại thẻ :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tỷ lệ giảm thẻ :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tên khách hàng :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Điện thoại :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Địa chỉ :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { width: "40%" } }, [
      _c("strong", [_vm._v("Mã đơn vị nhận :")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tên đơn vị :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Địa chỉ nhận hàng :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("i", { staticClass: "fa fa-money" }),
      _vm._v(" "),
      _c("strong", { staticClass: "text-success" }, [
        _vm._v("Thông tin thanh toán")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tổng tiền hàng :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tiền giảm giá khuyến mãi :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tiền giảm thẻ :")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Tổng thanh toán :")])])
  }
]
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(8)      .rerender("data-v-a28c1f88", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { ref: "modal", staticClass: "modal add-product-modal" }, [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm.show
            ? _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.keyword,
                            expression: "keyword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nhập tên sản phẩm..."
                        },
                        domProps: { value: _vm.keyword },
                        on: {
                          keyup: function($event) {
                            if (
                              !("button" in $event) &&
                              $event.keyCode !== 13
                            ) {
                              return null
                            }
                            return _vm.search($event)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.keyword = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "input-group-btn" }, [
                        _vm.keyword.length > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-defal btn-flat",
                                on: {
                                  click: function() {
                                    _vm.keyword = ""
                                    _vm.search()
                                  }
                                }
                              },
                              [_vm._v("X")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-flat",
                            attrs: { type: "button" },
                            on: { click: _vm.search }
                          },
                          [_vm._v("Tìm kiếm")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-flat btn-primary btn-sm pull-right",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.save_close()
                          }
                        }
                      },
                      [
                        _vm._v("Đưa sản phẩm đã chọn giỏ hàng "),
                        _c("i", {
                          staticClass: "fa fa-floppy-o",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-table" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table-bordered table",
                      staticStyle: { width: "1500px" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v(".No")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Chọn")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Mã sản phẩm")]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { width: "200px" } }, [
                            _vm._v("Tên sản phẩm")
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Tên đơn vị tính")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Số lượng đơn vị/hộp")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Giá hộp")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Giá đơn vị")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("SL được bán (hộp)")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("SL được bán (đơn vị)")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Số hợp đồng thầu")]),
                          _vm._v(" "),
                          _vm.$store.state.user_info.clnType == "ETC"
                            ? _c("th", [_vm._v("Sl tồn thầu (hộp)")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.state.user_info.clnType == "ETC"
                            ? _c("th", [_vm._v("Sl tồn thầu (đơn vị)")])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("th", [_vm._v("Sl dụ trù (hộp)")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Sl dụ trù (đơn vị)")]),
                          _vm._v(" "),
                          _vm.$store.state.user_info.clnType == "ETC"
                            ? _c("th", [_vm._v("Mã lô sản phẩm")])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.products, function(product, index) {
                          return _c(
                            "tr",
                            {
                              key: index,
                              on: {
                                click: function($event) {
                                  _vm.check($event)
                                }
                              }
                            },
                            [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  void 0,
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.selectedsProductID,
                                        expression: "selectedsProductID"
                                      }
                                    ],
                                    attrs: {
                                      id: "checkbox-product-" + index,
                                      type: "checkbox",
                                      name: "selectedsProductID[]",
                                      value: ""
                                    },
                                    domProps: {
                                      value: index,
                                      checked: Array.isArray(
                                        _vm.selectedsProductID
                                      )
                                        ? _vm._i(
                                            _vm.selectedsProductID,
                                            index
                                          ) > -1
                                        : _vm.selectedsProductID
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.selectedsProductID,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = index,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.selectedsProductID = $$a.concat(
                                                [$$v]
                                              ))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.selectedsProductID = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.selectedsProductID = $$c
                                        }
                                      }
                                    }
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.itemID))]),
                              _vm._v(" "),
                              _c("td", { staticClass: "td-checkbox" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "text-info",
                                    attrs: { for: "checkbox-product-" + index }
                                  },
                                  [_vm._v(_vm._s(product.itemName))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.itemUnitName))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.itemPerBox))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(_vm._f("formatVnd")(product.itemPrice))
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatVnd")(product.storePrice)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.slOhItQt))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.slOhQtty))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.qc_XaBang))]),
                              _vm._v(" "),
                              _vm.$store.state.user_info.clnType == "ETC"
                                ? _c("td", [_vm._v(_vm._s(product.rmRfItQt))])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$store.state.user_info.clnType == "ETC"
                                ? _c("td", [_vm._v(_vm._s(product.rmRfQtty))])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(product.rmPlItQt) +
                                    "\n                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(product.rmPlQtty))]),
                              _vm._v(" "),
                              _vm.$store.state.user_info.clnType == "ETC"
                                ? _c("td", [_vm._v(_vm._s(product.bchCode))])
                                : _vm._e()
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right hidden" }, [
                  _c(
                    "ul",
                    { staticClass: "pagination pagination-sm" },
                    [
                      _vm.pagination.currentPage > 1
                        ? [
                            _c("li", [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#", tabindex: "-1" },
                                  on: {
                                    click: function($event) {
                                      _vm.loadPage(
                                        _vm.pagination.currentPage - 1
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-arrow-left" })]
                              )
                            ]),
                            _vm._v(" "),
                            _vm.pagination.currentPage > _vm.pagination.max + 1
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.loadPage(1)
                                        }
                                      }
                                    },
                                    [_vm._v("1")]
                                  )
                                ])
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.start >= _vm.pagination.max
                        ? [
                            _vm.start == _vm.pagination.max
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.loadPage(2)
                                        }
                                      }
                                    },
                                    [_vm._v("2")]
                                  )
                                ])
                              : _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("...")
                                  ])
                                ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.end, function(n) {
                        return n >= _vm.start
                          ? [
                              n == _vm.pagination.currentPage
                                ? [
                                    _c("li", { staticClass: "active" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "page-link",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(n) +
                                              "\n                      "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                : [
                                    _c("li", [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "page-link",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              _vm.loadPage(n)
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(n))]
                                      )
                                    ])
                                  ]
                            ]
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm.end + 1 < _vm.totalPages
                        ? [
                            _vm.end + 2 == _vm.totalPages
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.loadPage(_vm.totalPages - 1)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.totalPages - 1))]
                                  )
                                ])
                              : _c("li", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("...")
                                  ])
                                ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.pagination.currentPage < _vm.totalPages
                        ? [
                            _vm.pagination.currentPage <
                            _vm.totalPages - _vm.pagination.max
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.loadPage(_vm.totalPages)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.totalPages))]
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.pagination.currentPage < _vm.totalPages
                              ? _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.loadPage(
                                            _vm.pagination.currentPage + 1
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-arrow-right"
                                      })
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c("h3", { staticClass: "modal-title" }, [_vm._v("Danh sách sản phẩm")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-danger btn-flat btn-sm pull-right",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _vm._v("Hủy "),
        _c("i", { staticClass: "fa fa-ban", attrs: { "aria-hidden": "true" } })
      ]
    )
  }
]
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(8)      .rerender("data-v-da12cb12", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("35166f07", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(247, function() {
     var newContent = __webpack_require__(247);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("c0e851ce", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(248, function() {
     var newContent = __webpack_require__(248);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("15fb63d9", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(249, function() {
     var newContent = __webpack_require__(249);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("5cc3049f", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(250, function() {
     var newContent = __webpack_require__(250);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("fb7963a4", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(251, function() {
     var newContent = __webpack_require__(251);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map