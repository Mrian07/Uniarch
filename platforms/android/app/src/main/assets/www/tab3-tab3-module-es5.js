(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Keranjang</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"notification-icon-button\">\r\n      </ion-buttons> -->\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n  <ion-list *ngIf=\"list_detail!=''\" style=\"background: var(--ion-color-bg);padding-top: 0px;\">\r\n    <div style=\"padding: 0px 5px\" style=\"background: var(--ion-color-bg);\">\r\n      \r\n      <ion-item lines=\"none\" style=\"--background: var(--ion-color-bg);\">\r\n        <ion-checkbox slot=\"start\" style=\" margin: 0px;margin-right: 10px;\" [(ngModel)]=\"checkall\" (click)=\"check_all()\"></ion-checkbox>\r\n        <ion-label>Pilih Semua</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let item of list_detail; let i = index\" lines=\"none\" style=\"--background: var(--ion-color-bg);\">\r\n        \r\n        <ion-checkbox style=\" margin: 0px;margin-right: 10px;\" slot=\"start\" [(ngModel)]=\"item.isChecked\"\r\n          (click)=\"pilih_item($event)\">\r\n        </ion-checkbox>\r\n       \r\n        <ion-label style=\"padding: 5px 5px;margin-top: 0px;margin-bottom: 0px;\">\r\n          <ion-row\r\n            style=\"margin-top:6px;background:#fff;padding: 5px 10px;box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);border-radius: 15px;\">\r\n\r\n            <ion-col size=\"3\" style=\"height: fit-content;\">\r\n              <img src=\"{{item.gambar_pro}}\" alt=\"Foto\"\r\n                style=\"border-radius: 50px;width: 60px;height: 60px;object-fit: cover;\">\r\n            </ion-col>\r\n\r\n            <ion-col size=\"9\" style=\"height: fit-content;\">\r\n              <h5 style=\"font-weight: 500;color: #5a5a5a;overflow: hidden;\r\n              text-overflow: ellipsis;\r\n              display: -webkit-box;\r\n              -webkit-line-clamp: 2;\r\n              -webkit-box-orient: vertical;\">{{item.nama_pro}}</h5>\r\n              <p>\r\n                {{item.qty_pro}} x {{item.harga_pro}}\r\n\r\n                \r\n                <ion-item>\r\n                  <ion-label position=\"floating\" color=\"primary\">Varian</ion-label>\r\n                  <ion-select [(ngModel)]=\"item.varianx\" name=\"varian\" type=\"text\" (ionChange)=\"pilih_varian(i)\" style=\"background-color: #cccccc40;border-radius: 5px;padding: 10px;\" required>\r\n                      <ion-select-option *ngFor=\" let varian of item.varian \" [value]=\"varian\">{{varian.nama_varian}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                \r\n\r\n              </p>\r\n            </ion-col>\r\n\r\n            <ion-col col-2 style=\"text-align: right;\">\r\n              <ion-checkbox slot=\"end\" [(ngModel)]=\"item.isChecked\" (click)=\"pilih_item($event)\"></ion-checkbox>\r\n            </ion-col> \r\n            \r\n            <ion-row style=\"width: 100%;\">\r\n              <ion-col size=\"6\">\r\n\r\n                <button style=\"background: #0000;\" (click)=\"add_minus(i)\">\r\n                  <ion-icon name=\"remove-circle\" style=\"font-size: 23px;\" color=\"danger\"></ion-icon>\r\n                </button>\r\n\r\n                <p style=\"margin: 0px;display: initial;top: -7px;position: relative;\">\r\n                  <input type=\"number\" name=\"qty_pro\" [(ngModel)]=\"item.qty_pro\" style=\"width: 50px;border: 1px solid #5a5a5a;height: 25px;border-radius: 20px;text-align: center;\" readonly>\r\n                </p>\r\n                \r\n                <button style=\"background: #0000;\" (click)=\"add_plus(i)\">\r\n                  <ion-icon name=\"add-circle\" style=\"font-size: 23px;\" color=\"secondary\"></ion-icon>\r\n                </button>\r\n\r\n              </ion-col>\r\n              <ion-col size=\"6\" style=\"text-align: right;margin: auto;\">\r\n                <p> <b style=\"color: var(--ion-color-primary);\">{{ item.sub_total_real | currency : 'IDR' : 'Rp.'}}</b></p>\r\n\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-row>\r\n        </ion-label>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" style=\"--background: var(--ion-color-bg);\">\r\n        <ion-row\r\n          style=\"margin-top:30px;background:#fff;padding: 5px 10px;box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n          border-radius: 15px;width: 100%;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;\">\r\n          <ion-col size=\"6\" style=\"text-align: center;\">\r\n            <ion-button (click)=\"hapus_keranjang()\" style=\"color: #fff;height: 30px;--background: #6b6b6b;width: 100%;--border-radius: 15px;\">\r\n              Hapus Produk</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\" style=\"text-align: center;\">\r\n            <ion-button (click)=\"update_keranjang()\"  style=\"color: #fff;height: 30px;--background: #6b6b6b;width: 100%;--border-radius: 15px;\" primary>\r\n              Ubah Qty</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"ke_pengiriman()\"\r\n              style=\"color: #fff;height: 42px;--background: var(--ion-color-primary);width: 100%;--border-radius: 15px;\">\r\n              <b style=\"color: #fff;\">Lanjutkan</b>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\" style=\"text-align: right;margin: auto;\">\r\n            <p> <b style=\"color: var(--ion-color-primary);\">{{total_real | currency : 'IDR' : 'Rp.' }}</b></p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n      \r\n      <br><br><br><br><br><br>\r\n\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"list_detail==''\" style=\"background: var(--ion-color-bg);\">\r\n    <ion-row style=\"padding: 70px 55px 12px 55px;text-align: center;background: var(--ion-color-bg);\">\r\n      <img src=\"assets/imgs/newsnotfound.png\" alt=\"Foto\"><br>\r\n      <h5 style=\" margin: auto;margin-bottom: 20px;\">\r\n        <b style=\"color: #afafaf;\">Belum Ada Data</b>\r\n      </h5>\r\n    </ion-row>\r\n    <!-- <ion-item>\r\n      <div style=\"width: 100%;text-align: center;\">\r\n          Data Keranjang Kosong\r\n      </div>\r\n    </ion-item> -->\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\r\n    <ion-fab-button>\r\n        <img src=\"assets/imgs/bag.png\">\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn_add_plus {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  color: black;\n}\n\n.button-solid {\n  --border-radius: 15px;\n}\n\nion-toolbar {\n  background: var(--ion-color-primary) !important;\n  --background: var(--ion-color-primary) !important;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9hZGRfcGx1c3tcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYnV0dG9uLXNvbGlke1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgLy8gbGVmdDogMThweDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");
      /* harmony import */


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");
      /* harmony import */


      var _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/util/util.service */
      "./src/app/services/util/util.service.ts");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, consta, changeref, userdata, util) {
          _classCallCheck(this, Tab3Page);

          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.consta = consta;
          this.changeref = changeref;
          this.userdata = userdata;
          this.util = util;
          this.list_detail = [];
          this.input_qty = [];
          this.harga_pro_real = [];
          this.sub_total_real = [];
          this.total_real = 0;
          this.checkall = false;
          this.data_user = {};
        }

        _createClass(Tab3Page, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('view wenter');
            this.checkall = false;
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this.router.navigateByUrl('login');
              } else {
                _this.data_user = hsl;

                _this.get_data_keranjang();

                _this.get_total_keranjang();
              }
            });
          }
        }, {
          key: "get_total_keranjang",
          value: function get_total_keranjang() {
            var _this2 = this;

            this.servcart.get_keranjang(this.data_user.id_pel).then(function (hasil) {
              console.log(hasil, 'keranjang');
              var hsl = {};
              hsl = hasil;
              _this2.total_keranjang = hsl.total_qty;
            });
          }
        }, {
          key: "get_data_keranjang",
          value: function get_data_keranjang() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                      this.servcart.get_keranjang(this.data_user.id_pel).then(function (data) {
                        var hsl = {};
                        hsl = data;
                        _this3.data_keranjang = hsl;
                        var x = 0;
                        hsl.detail.forEach(function (el) {
                          hsl.detail[x].val = el.nama_pro;
                          hsl.detail[x].isChecked = false;
                          x++;
                        });
                        _this3.list_detail = hsl.detail; //this.data_varian = hsl.detail;

                        console.log(_this3.list_detail, 'list detail');

                        _this3.loading.dismiss();

                        _this3.total_real = hsl.total_real;
                        console.log(_this3.changeref.detectChanges(), 'change detect');
                        console.log(_this3.total_real, 'DATA KERANJANG');
                      })["catch"](function (err) {
                        console.log(err);

                        _this3.loading.dismiss();

                        _this3.consta.show_alert('Oops', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
                      })["finally"](function () {
                        _this3.loading.dismiss();
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "check_user",
          value: function check_user() {}
        }, {
          key: "set_var",
          value: function set_var(i) {
            console.log(i);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "pilih_item",
          value: function pilih_item($event) {
            var hsl = $event.target.value;
            console.log(hsl);
          }
        }, {
          key: "calculate_total",
          value: function calculate_total() {
            var _this4 = this;

            this.total_real = 0;
            this.list_detail.forEach(function (element) {
              _this4.total_real += element.sub_total_real;
            });
            console.log(this.total_real, 'total real');
          }
        }, {
          key: "add_minus",
          value: function add_minus(index) {
            if (this.list_detail[index].qty_pro == 1) {
              // this.sub_total_real[index] = this.input_qty[index] * this.harga_pro_real[index];
              // this.list_detail[index].input_qty++;
              this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
              this.calculate_total();
              return false;
            } else {
              // this.input_qty[index]--;
              // this.sub_total_real[index] = this.input_qty[index] * this.harga_pro_real[index];
              this.list_detail[index].qty_pro--;
              this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
              this.calculate_total();
            }
          }
        }, {
          key: "pilih_varian",
          value: function pilih_varian(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(this.list_detail[index].qty_pro);
                      console.log(this.list_detail[index].varianx.harga_varian);
                      this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
                      this.calculate_total();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hapus_keranjang",
          value: function hapus_keranjang() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var count, i;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      count = 0;
                      i = 0;
                      this.list_detail.forEach(function (el) {
                        if (_this5.list_detail[i].isChecked == true) {
                          count++;
                        }

                        i++;
                      });

                      if (!(count == 0)) {
                        _context3.next = 7;
                        break;
                      }

                      this.consta.show_alert('Error', '', 'Mohon Pilih Produk Terlebih Dahulu');
                      _context3.next = 12;
                      break;

                    case 7:
                      _context3.next = 9;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 9:
                      this.loading = _context3.sent;
                      this.loading.present();
                      this.servcart.hapus_keranjang(this.data_user.id_pel, this.list_detail).then(function (data) {
                        _this5.loading.dismiss();

                        var hsl = {};
                        hsl = data; // this.consta.show_alert('Success', '', hsl.msg);

                        _this5.util.showToast('Berhasil Menghapus Produk', 'success', 'bottom');

                        _this5.get_data_keranjang(); // this.combroadcast.broadcast('broadcast_keranjang', '');

                      })["catch"](function (err) {
                        _this5.loading.dismiss();

                        _this5.consta.show_alert('Error', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
                      });

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "check_all",
          value: function check_all() {
            var _this6 = this;

            console.log(this.checkall, 'checkall');
            var flag;

            if (this.checkall == false) {
              flag = true;
            } else {
              flag = false;
            }

            var i = 0;
            this.list_detail.forEach(function (el) {
              _this6.list_detail[i].isChecked = flag;
              i++;
            });
          }
        }, {
          key: "update_keranjang",
          value: function update_keranjang() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context4.sent;
                      this.loading.present();
                      this.servcart.update_keranjang(this.data_user.id_pel, this.list_detail).then(function (data) {
                        console.log(data, 'data');

                        _this7.loading.dismiss();

                        var hsl = {};
                        hsl = data;

                        _this7.consta.show_alert('Success', '', hsl.msg);
                      })["catch"](function (err) {
                        _this7.loading.dismiss();

                        _this7.consta.show_alert('Error', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
                      });

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "add_plus",
          value: function add_plus(index) {
            this.list_detail[index].qty_pro++;
            this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
            this.calculate_total();
          }
        }, {
          key: "ke_pengiriman",
          value: function ke_pengiriman() {
            var _this8 = this;

            var count = 0;
            var i = 0;
            this.list_detail.forEach(function (el) {
              if (_this8.list_detail[i].isChecked == true) {
                count++;
              }

              i++;
            });

            if (count == 0) {
              this.consta.show_alert('Oops', '', 'Mohon Pilih Produk Terlebih Dahulu');
            } else {
              this.router.navigateByUrl('checkout');
            }
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__["DataCartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__["ConstantService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
        }, {
          type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      })], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map