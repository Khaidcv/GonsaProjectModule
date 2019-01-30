webpackJsonp([2],{

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47d2ce42_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(34);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(297)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47d2ce42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47d2ce42_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47d2ce42_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "ClientApp\\Components\\Dashboard.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(8)
  hotAPI.install(__webpack_require__(9), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47d2ce42", Component.options)
  } else {
    hotAPI.reload("data-v-47d2ce42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "\n.bg-default[data-v-47d2ce42] {\n  background: #877f7f;\n  color: #fff;\n}\n.bg-teamlead[data-v-47d2ce42] {\n  background: #47aa7c;\n  color: #fff;\n}\n.bg-dlpb[data-v-47d2ce42] {\n  background: #ba5151;\n  color: #fff;\n}\n.bg-dg[data-v-47d2ce42] {\n  background: #3698c9;\n  color: #fff;\n}\n.box-new-web-contract[data-v-47d2ce42] {\n  background: #2980b9 !important;\n}\n.box-new-web-contract[data-v-47d2ce42]:hover {\n  background: #3498db !important;\n}\n.small-box[data-v-47d2ce42] {\n  position: relative;\n}\n.small-box[data-v-47d2ce42]:hover :after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(250, 250, 250, 0.1) !important;\n}\n", "", {"version":3,"sources":["D:/Project/GonsaGithub/GonsaProjectModule/Gonsa.Application/ClientApp/Components/Dashboard.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,YAAY;CAAE;AAEhB;EACE,oBAAoB;EACpB,YAAY;CAAE;AAEhB;EACE,oBAAoB;EACpB,YAAY;CAAE;AAEhB;EACE,oBAAoB;EACpB,YAAY;CAAE;AAEhB;EACE,+BAA+B;CAAE;AAEnC;EACE,+BAA+B;CAAE;AAEnC;EACE,mBAAmB;CAAE;AAEvB;EACE,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,UAAU;EACV,gDAAgD;CAAE","file":"Dashboard.vue","sourcesContent":[".bg-default {\n  background: #877f7f;\n  color: #fff; }\n\n.bg-teamlead {\n  background: #47aa7c;\n  color: #fff; }\n\n.bg-dlpb {\n  background: #ba5151;\n  color: #fff; }\n\n.bg-dg {\n  background: #3698c9;\n  color: #fff; }\n\n.box-new-web-contract {\n  background: #2980b9 !important; }\n\n.box-new-web-contract:hover {\n  background: #3498db !important; }\n\n.small-box {\n  position: relative; }\n\n.small-box:hover :after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(250, 250, 250, 0.1) !important; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 253:
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
              _this.$store.state.show_loading = false;
              _context.prev = 1;
              _context.next = 4;
              return _this.$http.get('/api/ApiAccount/ApiGetMenu');

            case 4:
              response = _context.sent;

              if (response.data) {
                check = response.data.find(function (item) {
                  return item.menuID == "81003";
                });

                if (check) {
                  _this.show = true;
                } else {
                  _this.show = false;
                }
              }
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              _this.$router.push("/");

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 8]]);
    }))();
  }
};

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.show
      ? _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "row navigation" }, [
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-primary",
                    attrs: { to: "/new-web-contract" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Thêm đơn hàng mới")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Thêm "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-default",
                    attrs: { to: "/web-contract" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Danh sách tất cả đơn hàng")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-yellow",
                    attrs: { to: "/web-contract?status=0" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Đơn hàng chờ xử lý")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-primary",
                    attrs: { to: "/web-contract?status=101" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Đơn hàng đã Post")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-teamlead",
                    attrs: { to: "/web-contract?status=201" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Đơn hàng Team Lead đã duyệt")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-dlpb",
                    attrs: { to: "/web-contract?status=301" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Đơn hàng đã lập phiếu bán")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-dg",
                    attrs: { to: "/web-contract?status=401" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Đơn hàng đang giao")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-3 col-xs-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "small-box bg-green",
                    attrs: { to: "/web-contract?status=501" }
                  },
                  [
                    _c("div", { staticClass: "inner" }, [
                      _c("h4", [_vm._v("Đơn hàng hoàn tất")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "small-box-footer" }, [
                      _vm._v("Xem chi tiết "),
                      _c("i", { staticClass: "fa fa-arrow-circle-right" })
                    ])
                  ]
                )
              ],
              1
            )
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
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [
        _vm._v("\n      Bảng điều khiển\n      "),
        _c("small", [_vm._v("Control panel")])
      ]),
      _vm._v(" "),
      _c("ol", { staticClass: "breadcrumb hidden" }, [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "fa fa-dashboard" }),
            _vm._v(" Home")
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [_vm._v("Dashboard")])
      ])
    ])
  }
]
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(8)      .rerender("data-v-47d2ce42", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(106).default
var update = add("c8915032", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(246, function() {
     var newContent = __webpack_require__(246);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=2.js.map