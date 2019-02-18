webpackJsonp([1],{

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a99d1d4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(293)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a99d1d4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_List_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a99d1d4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a99d1d4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_List_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\WebContract\\List.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a99d1d4", Component.options)
  } else {
    hotAPI.reload("data-v-3a99d1d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 241:
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "\n.tl-wrap-table[data-v-3a99d1d4] {\n  overflow-x: scroll;\n}\n.tl-wrap-table th[data-v-3a99d1d4] {\n    white-space: nowrap;\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/WebContract/ClientApp\\Components\\WebContract/List.vue"],"names":[],"mappings":";AA2MA;EACA,mBAAA;CACA;AAEA;IACA,oBAAA;CACA","file":"List.vue","sourcesContent":["<template>\r\n  <div>\r\n    <section class=\"content-header\">\r\n      <h1>\r\n        Danh sách đơn hàng\r\n        <small v-if=\"status\" :inner-html.prop=\"status | filterStatus\"></small>\r\n        <small v-else>\r\n          Tất cả đơn hàng\r\n        </small>\r\n      </h1>\r\n      <ol class=\"breadcrumb\">\r\n        <li><router-link to=\"/\"><i class=\"fa fa-dashboard\"></i> Dashboard</router-link></li>\r\n        <li class=\"active\">Danh sách đơn hàng</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\" v-if=\"show\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <p class=\"text-right\">\r\n            <router-link to=\"/new-web-contract\" class=\"btn btn-primary btn-sm\">\r\n              <i class=\"fa fa-plus\"></i> Thêm đơn hàng mới\r\n            </router-link>\r\n          </p>\r\n          <div class=\"box box-primary\">\r\n            <!-- /.box-header -->\r\n            <div class=\"box-body\">\r\n              <div class=\"tl-wrap-table\">\r\n                <table class=\"table table-bordered\" width=\"1200\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>.No</th>\r\n                      <th>Số DDH</th>\r\n                      <th style=\"width:200px\">Khách hàng</th>\r\n                      <th>Ngày đơn hàng</th>\r\n                      <th>Tình trạng</th>\r\n                      <th>Bước duyệt tiếp theo</th>\r\n                      <th>#</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr v-for=\"(webcontract,index) in web_contract_list\" v-bind:key=\"index\">\r\n                      <td>{{(index+1)}}</td>\r\n                      <td><strong>{{webcontract.oid}}</strong></td>\r\n                      <td><strong class=\"text-primary\">{{webcontract.csName}}</strong></td>\r\n                      <td>{{webcontract.odate | filterOdate}}</td>\r\n                      <!--cách khác $options.filters.linkify(message)-->\r\n                      <td :inner-html.prop=\"webcontract.currSignNumb | filterStatus\"></td>\r\n                      <td>{{webcontract.stepName}}</td>\r\n                      <td width=\"150\">\r\n                        <router-link :to=\"'/web-contract/edit?oid='+webcontract.oid\" class=\"btn btn-xs btn-primary\">Xem đơn hàng</router-link>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"text-right\">\r\n                <ul class=\"pagination pagination-sm\">\r\n                  <template v-if=\"pagination.currentPage>1\">\r\n                    <li>\r\n                      <a class=\"page-link\" href=\"#\" tabindex=\"-1\" @click=\"loadPage(pagination.currentPage - 1)\"><i class=\"fa fa-arrow-left\"></i></a>\r\n                    </li>\r\n                    <li v-if=\"pagination.currentPage > pagination.max + 1\">\r\n                      <a href=\"#\" @click=\"loadPage(1)\">1</a>\r\n                    </li>\r\n                  </template>\r\n                  <template v-if=\"start>=pagination.max\">\r\n                    <li v-if=\"start==pagination.max\">\r\n                      <a href=\"#\" @click=\"loadPage(2)\">2</a>\r\n                    </li>\r\n                    <li v-else>\r\n                      <a href=\"#\">...</a>\r\n                    </li>\r\n                  </template>\r\n\r\n                  <template v-if=\"n >= start\" v-for=\"n in end\">\r\n                    <template v-if=\"n==pagination.currentPage\">\r\n                      <li class=\"active\">\r\n                        <a class=\"page-link\" href=\"#\">{{n}}</a>\r\n                      </li>\r\n                    </template>\r\n                    <template v-else>\r\n                      <li>\r\n                        <a class=\"page-link\" href=\"#\" @click=\"loadPage(n)\">{{n}}</a>\r\n                      </li>\r\n                    </template>\r\n                  </template>\r\n\r\n                  <template v-if=\"end + 1 < totalPages\">\r\n                    <li v-if=\"end + 2 == totalPages\">\r\n                      <a href=\"#\" @click=\"loadPage(totalPages-1)\">{{(totalPages-1)}}</a>\r\n                    </li>\r\n                    <li v-else>\r\n                      <a href=\"#\">...</a>\r\n                    </li>\r\n                  </template>\r\n\r\n                  <template v-if=\"pagination.currentPage< totalPages\">\r\n                    <li v-if=\"pagination.currentPage < totalPages - pagination.max\">\r\n                      <a href=\"#\" @click=\"loadPage(totalPages)\">{{totalPages}}</a>\r\n                    </li>\r\n\r\n                    <li v-if=\"pagination.currentPage<totalPages\">\r\n                      <a class=\"page-link\" href=\"#\" @click=\"loadPage(pagination.currentPage + 1)\"><i class=\"fa fa-arrow-right\"></i></a>\r\n                    </li>\r\n                  </template>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n          </div>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n      <!-- /.row -->\r\n    </section>\r\n    <!-- /.content -->\r\n\r\n  </div>\r\n</template>\r\n<script>\r\n  import WebContractMixin from '../../mixins/WebContract.js'\r\n  export default {\r\n    mixins: [WebContractMixin],\r\n    data() {\r\n      return {\r\n        web_contract_list: [],\r\n        status: null,\r\n        pagination: {\r\n          currentPage: 1,\r\n          total: 0,\r\n          pageSize: 10,\r\n          max: 3\r\n        }\r\n      }\r\n    },\r\n    methods: {\r\n      async load_web_contrac_list() {\r\n        try {\r\n          let url = \"/api/webcontract?page=\" + this.pagination.currentPage + \"&pageSize=\" + this.pagination.pageSize;\r\n          let status = this.$route.query.status;\r\n          if (status) {\r\n            this.status = status;\r\n            url += \"&status=\" + status;\r\n          }\r\n          let response = await this.$http.get(url).catch((error) => {\r\n            console.log(error);\r\n            this.$router.push(\"/web-contract\");\r\n          });\r\n          if (response.data) {\r\n            this.web_contract_list = response.data.data;\r\n            this.pagination.total = response.data.total;\r\n          }\r\n        } catch (e) {\r\n          console.log(e);\r\n        }\r\n      },\r\n      async loadPage(page) {\r\n        this.$store.state.show_loading = true;\r\n        this.pagination.currentPage = page;\r\n        await this.load_web_contrac_list();\r\n        this.$store.state.show_loading = false;\r\n      },\r\n    },\r\n    filters: {\r\n      filterOdate(value) {\r\n        if (value) {\r\n          return value.substring(0, 10);\r\n        } else {\r\n          return \"\";\r\n        }\r\n      }\r\n    },\r\n    async mounted() {\r\n      await this.loadPage(1);\r\n    },\r\n    computed: {\r\n      totalPages: function () {\r\n        return Math.ceil(this.pagination.total / this.pagination.pageSize)\r\n      },\r\n      start() {\r\n        var start = this.pagination.currentPage - this.pagination.max;\r\n        if (start <= 1) {\r\n          return 1;\r\n        } else {\r\n          return start;\r\n        }\r\n      },\r\n      end() {\r\n        var end = this.pagination.currentPage + this.pagination.max;\r\n        if (end > this.totalPages) {\r\n          return this.totalPages;\r\n        } else {\r\n          return end;\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n\r\n  .tl-wrap-table {\r\n    overflow-x: scroll;\r\n  }\r\n\r\n    .tl-wrap-table th {\r\n      white-space: nowrap;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


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

var _WebContract = __webpack_require__(241);

var _WebContract2 = _interopRequireDefault(_WebContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_WebContract2.default],
  data: function data() {
    return {
      web_contract_list: [],
      status: null,
      pagination: {
        currentPage: 1,
        total: 0,
        pageSize: 10,
        max: 3
      }
    };
  },

  methods: {
    load_web_contrac_list: function load_web_contrac_list() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var url, status, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                url = "/api/webcontract?page=" + _this.pagination.currentPage + "&pageSize=" + _this.pagination.pageSize;
                status = _this.$route.query.status;

                if (status) {
                  _this.status = status;
                  url += "&status=" + status;
                }
                _context.next = 6;
                return _this.$http.get(url).catch(function (error) {
                  console.log(error);
                  _this.$router.push("/web-contract");
                });

              case 6:
                response = _context.sent;

                if (response.data) {
                  _this.web_contract_list = response.data.data;
                  _this.pagination.total = response.data.total;
                }
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 10]]);
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
                return _this2.load_web_contrac_list();

              case 4:
                _this2.$store.state.show_loading = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  filters: {
    filterOdate: function filterOdate(value) {
      if (value) {
        return value.substring(0, 10);
      } else {
        return "";
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.loadPage(1);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("h1", [
        _vm._v("\n      Danh sách đơn hàng\n      "),
        _vm.status
          ? _c("small", {
              domProps: { innerHTML: _vm._f("filterStatus")(_vm.status) }
            })
          : _c("small", [_vm._v("\n        Tất cả đơn hàng\n      ")])
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
        _c("li", { staticClass: "active" }, [_vm._v("Danh sách đơn hàng")])
      ])
    ]),
    _vm._v(" "),
    _vm.show
      ? _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c(
                "p",
                { staticClass: "text-right" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary btn-sm",
                      attrs: { to: "/new-web-contract" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-plus" }),
                      _vm._v(" Thêm đơn hàng mới\n          ")
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "box box-primary" }, [
                _c("div", { staticClass: "box-body" }, [
                  _c("div", { staticClass: "tl-wrap-table" }, [
                    _c(
                      "table",
                      {
                        staticClass: "table table-bordered",
                        attrs: { width: "1200" }
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.web_contract_list, function(
                            webcontract,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [_vm._v(_vm._s(webcontract.oid))])
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", { staticClass: "text-primary" }, [
                                  _vm._v(_vm._s(webcontract.csName))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("filterOdate")(webcontract.odate)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: {
                                  innerHTML: _vm._f("filterStatus")(
                                    webcontract.currSignNumb
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(webcontract.stepName))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { attrs: { width: "150" } },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-xs btn-primary",
                                      attrs: {
                                        to:
                                          "/web-contract/edit?oid=" +
                                          webcontract.oid
                                      }
                                    },
                                    [_vm._v("Xem đơn hàng")]
                                  )
                                ],
                                1
                              )
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
                              _vm.pagination.currentPage >
                              _vm.pagination.max + 1
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
                ])
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(".No")]),
        _vm._v(" "),
        _c("th", [_vm._v("Số DDH")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "200px" } }, [_vm._v("Khách hàng")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ngày đơn hàng")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tình trạng")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bước duyệt tiếp theo")]),
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
    __webpack_require__(8)      .rerender("data-v-3a99d1d4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("97a6de1a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(244, function() {
     var newContent = __webpack_require__(244);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=1.js.map