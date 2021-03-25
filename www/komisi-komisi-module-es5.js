(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["komisi-komisi-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/komisi/komisi.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/komisi/komisi.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppKomisiKomisiPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Referral</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"notification-icon-button\">\r\n      <ion-button class=\"btn_badge\" defaultHref=\"/checkout\">\r\n          <ion-icon class=\"fa fa-shopping-cart\"></ion-icon>\r\n          <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n      </ion-button>\r\n    </ion-buttons>     -->\r\n  </ion-toolbar>\r\n\r\n<ion-segment (ionChange)=\"pilih_tab($event)\" style=\"background: var(--ion-color-primary);\">\r\n  <ion-segment-button value=\"1\" checked>\r\n    <ion-label>Share</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"2\">\r\n    <ion-label>List</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<!-- <ion-segment [(ngModel)]=\"segment\" style=\"background: var(--ion-color-primary);\">\r\n  <ion-segment-button value=\"1\">\r\n    TUKAR POIN\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"2\">\r\n    RIWAYAT TUKAR\r\n  </ion-segment-button>\r\n</ion-segment> -->\r\n\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <div *ngIf=\"show_tab=='1'\"  style=\"background: var(--ion-color-bg);\">\r\n    <br>\r\n    <ion-card style=\"border-radius: 20px;background: #fff;padding: 0px 10px;\">\r\n      <ion-row>\r\n        <br>\r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <img src=\"assets/imgs/logo.png\" style=\"width: 50%;margin:auto;\">\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <h6><b>Bagikan Kode/Link</b></h6>\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"text-align: center;\">\r\n          <!-- <img src=\"assets/imgs/facebook.png\" style=\"width: 50%;\"> -->\r\n          <ion-button (click)=\"sharewa()\" style=\"width: 100%;--border-radius:20px;\"> Whatsapp</ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"text-align: center;\">\r\n          <!-- <img src=\"assets/imgs/twitter.png\" style=\"width: 50%;\"> -->\r\n          <ion-button (click)=\"copylink()\" style=\"width: 100%;--border-radius:20px;\"> Salin</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n    </ion-card>\r\n      <!-- <div style=\"width: 100%;margin-top: 10px; text-align: center;\">\r\n          <h2>Bagi link via </h2>\r\n          <ion-button (click)=\"sharewa()\"> Whatsapp</ion-button>\r\n      </div>\r\n      <div style=\"width: 100%;margin-top: 10px; text-align: center;\">\r\n        <h2>Copy link anda</h2>\r\n        <ion-button (click)=\"copylink()\"> Copy</ion-button>\r\n      </div> -->\r\n  </div>\r\n\r\n  <ion-list *ngIf=\"show_tab=='2'\"  style=\"background: var(--ion-color-bg);\">\r\n\r\n    <ion-card *ngFor=\"let item of data_referral\">\r\n      <ion-card-content>\r\n        <div>\r\n          <ion-row style=\"width: 100%;\">\r\n            <ion-col size=\"4\">Nama</ion-col>\r\n            <ion-col>{{item.nama}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col  size=\"4\">Email</ion-col>\r\n            <ion-col>{{item.email}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col  size=\"4\">Telp</ion-col>\r\n            <ion-col>{{item.phone}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col  size=\"4\">Komisi</ion-col>\r\n            <ion-col>{{item.komisi | currency : 'IDR' : 'Rp. ' }}</ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/komisi/komisi-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/komisi/komisi-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: KomisiPageRoutingModule */

    /***/
    function srcAppKomisiKomisiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KomisiPageRoutingModule", function () {
        return KomisiPageRoutingModule;
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


      var _komisi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./komisi.page */
      "./src/app/komisi/komisi.page.ts");

      var routes = [{
        path: '',
        component: _komisi_page__WEBPACK_IMPORTED_MODULE_3__["KomisiPage"]
      }];

      var KomisiPageRoutingModule = function KomisiPageRoutingModule() {
        _classCallCheck(this, KomisiPageRoutingModule);
      };

      KomisiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KomisiPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/komisi/komisi.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/komisi/komisi.module.ts ***!
      \*****************************************/

    /*! exports provided: KomisiPageModule */

    /***/
    function srcAppKomisiKomisiModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KomisiPageModule", function () {
        return KomisiPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _komisi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./komisi-routing.module */
      "./src/app/komisi/komisi-routing.module.ts");
      /* harmony import */


      var _komisi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./komisi.page */
      "./src/app/komisi/komisi.page.ts");

      var KomisiPageModule = function KomisiPageModule() {
        _classCallCheck(this, KomisiPageModule);
      };

      KomisiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _komisi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KomisiPageRoutingModule"]],
        declarations: [_komisi_page__WEBPACK_IMPORTED_MODULE_6__["KomisiPage"]]
      })], KomisiPageModule);
      /***/
    },

    /***/
    "./src/app/komisi/komisi.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/komisi/komisi.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppKomisiKomisiPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".no-scroll {\n  --overflow: hidden;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.sc-ion-segment-md-h {\n  --color-checked: #fff;\n  -moz-columns: #7a7a7a;\n       columns: #7a7a7a;\n}\n\n.segment-button-checked {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29taXNpL2tvbWlzaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdRO0VBQ0ksbUJBQUE7QUFBWjs7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFoQjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0ksV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAva29taXNpL2tvbWlzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2Nyb2xsIHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAubm90aWZpY2F0aW9uLWljb24tYnV0dG9uIHtcclxuICAgICAgICAuYnRuX2JhZGdlIHtcclxuICAgICAgICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2MtaW9uLXNlZ21lbnQtbWQtaHtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIGNvbHVtbnM6ICM3YTdhN2E7O1xyXG4gIH1cclxuXHJcbiAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/komisi/komisi.page.ts":
    /*!***************************************!*\
      !*** ./src/app/komisi/komisi.page.ts ***!
      \***************************************/

    /*! exports provided: KomisiPage */

    /***/
    function srcAppKomisiKomisiPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KomisiPage", function () {
        return KomisiPage;
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


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");

      var KomisiPage = /*#__PURE__*/function () {
        function KomisiPage(socialSharing, userdata, http, router, clipboard, toast, servcart) {
          _classCallCheck(this, KomisiPage);

          this.socialSharing = socialSharing;
          this.userdata = userdata;
          this.http = http;
          this.router = router;
          this.clipboard = clipboard;
          this.toast = toast;
          this.servcart = servcart;
          this.data_user = {};
          this.show_tab = '1';
          this.arr = [];
          this.total_keranjang = 0;
          this.data_referral = [];
        }

        _createClass(KomisiPage, [{
          key: "get_total_keranjang",
          value: function get_total_keranjang() {
            var _this = this;

            this.servcart.get_keranjang(this.data_user.id_pel).then(function (hasil) {
              console.log(hasil, 'keranjang');
              var hsl = {};
              hsl = hasil;
              _this.total_keranjang = hsl.total_qty;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            for (var i = 0; i < 30; i++) {
              this.arr[i] = i;
            }
          }
        }, {
          key: "pilih_tab",
          value: function pilih_tab($event) {
            console.log($event, 'event');
            this.show_tab = $event.detail.value;

            if (this.show_tab == 2) {
              this.get_data_referral();
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this2.router.navigateByUrl('login');
              } else {
                _this2.data_user = hsl;

                _this2.get_data_referral();

                _this2.get_total_keranjang();
              }
            });
          }
        }, {
          key: "get_data_referral",
          value: function get_data_referral() {
            var _this3 = this;

            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_8__["API_URL_SLIDER"] + 'api_get_data_referral', {
              id_pel: this.data_user.id_pel
            }).subscribe(function (hsl) {
              var hasil = {};
              hasil = hsl;
              _this3.data_referral = hasil.data;
              console.log(_this3.data_referral, 'data referral');
            });
          }
        }, {
          key: "sharewa",
          value: function sharewa() {
            var url;
            url = 'https://cctvgrosir.page.link/?link=https://msidahua.com?referral_' + this.data_user.id_pel + '&apn=com.cctvgrosir.app';
            this.socialSharing.shareViaWhatsApp('', '', url).then(function (res) {
              // Success
              console.log(res, 'REST');
            })["catch"](function (e) {
              // Error!
              console.log(e, 'ERROR');
            });
          }
        }, {
          key: "copylink",
          value: function copylink() {
            var _this4 = this;

            var url;
            url = 'https://cctvgrosir.page.link/?link=https://msidahua.com?referral_' + this.data_user.id_pel + '&apn=com.cctvgrosir.app';
            this.clipboard.copy(url).then(function (hsl) {
              _this4.toast.show('Link berhasil di copy', '5000', 'center').subscribe(function (toast) {
                console.log(toast);
              });
            });
          }
        }, {
          key: "sharefb",
          value: function sharefb() {
            var url;
            url = 'https://bit.ly/2EZtGZd';
            this.socialSharing.shareViaFacebook('', '', url).then(function (res) {
              // Success
              console.log(res, 'REST');
            })["catch"](function (e) {
              // Error!
              console.log(e, 'ERROR');
            });
          }
        }]);

        return KomisiPage;
      }();

      KomisiPage.ctorParameters = function () {
        return [{
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_9__["DataCartService"]
        }];
      };

      KomisiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-komisi',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./komisi.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/komisi/komisi.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./komisi.page.scss */
        "./src/app/komisi/komisi.page.scss"))["default"]]
      })], KomisiPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=komisi-komisi-module-es5.js.map