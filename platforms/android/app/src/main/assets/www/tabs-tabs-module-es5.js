(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" class=\"my-custom-tab-bar\">\r\n    <ion-tab-button tab=\"tab1\" style=\"background: #f3f3f3;\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\" *ngIf=\"valid == 'ada'\" style=\"background: #f3f3f3;border-top-right-radius: 18px;\"> \r\n      <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"login()\" *ngIf=\"valid != 'ada'\" style=\"background: #f3f3f3;border-top-right-radius: 18px;\">\r\n      <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\" *ngIf=\"valid == 'ada'\" style=\"background: transparent;--padding-start:0px;--padding-end:0px;\">\r\n      <svg tab=\"tab3\" height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#f3f3f3\" fill-rule=\"evenodd\"></path></svg>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"login()\" *ngIf=\"valid != 'ada'\" style=\"background: transparent;--padding-start:0px;--padding-end:0px;\">\r\n      <svg tab=\"tab3\" height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#f3f3f3\" fill-rule=\"evenodd\"></path></svg>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab4\" style=\"background: #f3f3f3;border-top-left-radius: 18px;\">\r\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <!-- <ion-tab-button (click)=\"login()\" *ngIf=\"valid !== 'ada'\">\r\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n    </ion-tab-button> -->\r\n\r\n    <ion-tab-button tab=\"tab5\" style=\"background: #f3f3f3;\">\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <!-- <ion-tab-button (click)=\"login()\" *ngIf=\"valid !== 'ada'\">\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n    </ion-tab-button> -->\r\n\r\n  </ion-tab-bar>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:20px;\" edge > \r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\r\n    <ion-fab-button (click)=\"tab3()\" *ngIf=\"valid == 'ada'\">\r\n        <img src=\"assets/imgs/bag.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button (click)=\"login()\" *ngIf=\"valid !== 'ada'\">\r\n      <img src=\"assets/imgs/bag.png\">\r\n  </ion-fab-button>\r\n</ion-fab> -->\r\n\r\n</ion-tabs>\r\n";
      /***/
    },

    /***/
    "./src/app/tabs/tabs-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "./src/app/tab1/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "./src/app/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "./src/app/tab3/tab3.module.ts")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'tab4',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab4-tab4-module */
            [__webpack_require__.e("default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134"), __webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null,
            /*! ../tab4/tab4.module */
            "./src/app/tab4/tab4.module.ts")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: 'tab5',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab5-tab5-module */
            [__webpack_require__.e("default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134"), __webpack_require__.e("common"), __webpack_require__.e("tab5-tab5-module")]).then(__webpack_require__.bind(null,
            /*! ../tab5/tab5.module */
            "./src/app/tab5/tab5.module.ts")).then(function (m) {
              return m.Tab5PageModule;
            });
          }
        }, {
          path: 'detailprodukk/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | detailproduk-detailproduk-module */
            [__webpack_require__.e("default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134"), __webpack_require__.e("common"), __webpack_require__.e("detailproduk-detailproduk-module")]).then(__webpack_require__.bind(null,
            /*! ../detailproduk/detailproduk.module */
            "./src/app/detailproduk/detailproduk.module.ts")).then(function (m) {
              return m.DetailprodukPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n\nion-tab-bar.my-custom-tab-bar {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  --background: transparent;\n  border-top: none;\n}\n\nion-tab-bar.my-custom-tab-bar svg {\n  width: 72px;\n  margin-top: 19px;\n}\n\nion-tab-bar.my-custom-tab-bar svg path {\n  fill: #f3f3f3;\n}\n\nion-tab-bar.my-custom-tab-bar .button-native {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFFUTtFQUNJLGFBQUE7QUFBWjs7QUFPSTtFQUNJLFlBQUE7QUFMUiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0b3A6IC05cHg7XHJcbiAgICAvLyBsZWZ0OiAxOHB4O1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyLm15LWN1c3RvbS10YWItYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcblxyXG4gICAgc3ZnIHsgICAgXHJcbiAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTlweDtcclxuICAgICAgICBwYXRoe1xyXG4gICAgICAgICAgICBmaWxsOiAgI2YzZjNmMztcclxuICAgICAgICB9XHRcdFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24ge1xyXG4gICAgLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLy8gfVxyXG4gICAgLmJ1dHRvbi1uYXRpdmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(route, loadingCtrl, servcart, userdata) {
          _classCallCheck(this, TabsPage);

          this.route = route;
          this.loadingCtrl = loadingCtrl;
          this.servcart = servcart;
          this.userdata = userdata;
          this.data_user = {}; // this.get_total_keranjang();
        }

        _createClass(TabsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loader, userid;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      loader = this.loadingCtrl.create();
                      _context.next = 3;
                      return loader;

                    case 3:
                      _context.sent.present();

                      userid = localStorage.getItem('userid'); //console.log('TAB useridxxx', userid);

                      if (userid !== null) {
                        this.valid = 'ada'; //console.log('ADA');
                      } else {
                        this.valid = 'gaada'; //console.log('TIDAK ADA');
                      } //console.log('Valid nya ', this.valid);


                      this.userdata.getUsername().then(function (hsl) {
                        //console.log('hasilxx : ',hsl);
                        if (hsl == null) {// this.router.navigateByUrl('login');
                        } else {
                          _this.data_user = hsl;

                          _this.get_total_keranjang();
                        }
                      });
                      _context.next = 9;
                      return loader;

                    case 9:
                      _context.sent.dismiss();

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //   get_total_keranjang(){
          //     this.servcart.get_keranjang(this.data_user.id_pel).then( hasil => {
          //       console.log(hasil, 'Total keranjang Cart')
          //       let hsl : any = {};
          //       this.hsl = hasil;
          //       this.count = this.hsl.total_qty;
          //       console.log(this.hsl , 'TOTAL CART')
          //       console.log(this.count , 'TOTAL CART2')
          //     })
          // }

        }, {
          key: "get_total_keranjang",
          value: function get_total_keranjang() {
            var _this2 = this;

            this.servcart.get_keranjang(this.data_user.id_pel).then(function (hasil) {
              //console.log(hasil, 'keranjang')
              var hsl = {};
              hsl = hasil;
              _this2.total_keranjang = hsl.total_qty;
            });
          }
        }, {
          key: "tab3",
          value: function tab3() {
            this.route.navigate(['./tabs/tab3']);
          }
        }, {
          key: "login",
          value: function login() {
            this.route.navigate(['./login']);
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_4__["DataCartService"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map