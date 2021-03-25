(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lupa-password-lupa-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/lupa-password/lupa-password.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lupa-password/lupa-password.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLupaPasswordLupaPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Lupa Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <!-- <div style=\"width: 100%;text-align:center;margin-top: 60px; margin-bottom: 30px;\">\r\n    <img src=\"assets/img/logo.png\" style=\"width:180px;\" alt=\"Ionic logo\">\r\n  </div> -->\r\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\r\n    <div style=\"margin-bottom: 20px;\">\r\n      <h5 style=\"margin: 0px;\"><b style=\"color: #fff;\">Lupa Password</b></h5>\r\n    </div>\r\n    <br>\r\n  <form #signupForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" placeholder=\"Silahkan masukkan email anda\" #email=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item> \r\n        <ion-item>\r\n          <ion-button (click)=\"kirim_kode()\">Kirim Kode</ion-button>\r\n        </ion-item> \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Kode Unik</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.kode_unik\" name=\"kode_unik\" type=\"text\" placeholder=\"Silahkan masukkan kode unik\" #email=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-button (click)=\"reset_password()\" color=\"light\"\r\n          style=\"--border-radius:15px;\">Reset Password</ion-button>\r\n        </ion-item>                             \r\n    </ion-list>\r\n  </form>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/lupa-password/lupa-password-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/lupa-password/lupa-password-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: LupaPasswordPageRoutingModule */

    /***/
    function srcAppLupaPasswordLupaPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LupaPasswordPageRoutingModule", function () {
        return LupaPasswordPageRoutingModule;
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


      var _lupa_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lupa-password.page */
      "./src/app/lupa-password/lupa-password.page.ts");

      var routes = [{
        path: '',
        component: _lupa_password_page__WEBPACK_IMPORTED_MODULE_3__["LupaPasswordPage"]
      }];

      var LupaPasswordPageRoutingModule = function LupaPasswordPageRoutingModule() {
        _classCallCheck(this, LupaPasswordPageRoutingModule);
      };

      LupaPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LupaPasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/lupa-password/lupa-password.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/lupa-password/lupa-password.module.ts ***!
      \*******************************************************/

    /*! exports provided: LupaPasswordPageModule */

    /***/
    function srcAppLupaPasswordLupaPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LupaPasswordPageModule", function () {
        return LupaPasswordPageModule;
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


      var _lupa_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lupa-password-routing.module */
      "./src/app/lupa-password/lupa-password-routing.module.ts");
      /* harmony import */


      var _lupa_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lupa-password.page */
      "./src/app/lupa-password/lupa-password.page.ts");

      var LupaPasswordPageModule = function LupaPasswordPageModule() {
        _classCallCheck(this, LupaPasswordPageModule);
      };

      LupaPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lupa_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["LupaPasswordPageRoutingModule"]],
        declarations: [_lupa_password_page__WEBPACK_IMPORTED_MODULE_6__["LupaPasswordPage"]]
      })], LupaPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/lupa-password/lupa-password.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/lupa-password/lupa-password.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLupaPasswordLupaPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1cGEtcGFzc3dvcmQvbHVwYS1wYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/lupa-password/lupa-password.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/lupa-password/lupa-password.page.ts ***!
      \*****************************************************/

    /*! exports provided: LupaPasswordPage */

    /***/
    function srcAppLupaPasswordLupaPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LupaPasswordPage", function () {
        return LupaPasswordPage;
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


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var LupaPasswordPage = /*#__PURE__*/function () {
        function LupaPasswordPage(router, userData, loadingctrl, consta, http) {
          _classCallCheck(this, LupaPasswordPage);

          this.router = router;
          this.userData = userData;
          this.loadingctrl = loadingctrl;
          this.consta = consta;
          this.http = http;
          this.signup = {
            kode_unik: '',
            email: ''
          };
          this.submitted = false;
          this.data_provinsi = [];
          this.data_kota = [];
          this.data_kecamatan = [];
          this.error_konfirmasi = false;
        }

        _createClass(LupaPasswordPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.signup = {
              kode_unik: '',
              email: ''
            };
            this.error_konfirmasi = false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "kirim_kode",
          value: function kirim_kode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.signup.email == '')) {
                        _context.next = 3;
                        break;
                      }

                      this.consta.show_alert('Error', '', 'Silahkan isi email terlebih dulu');
                      return _context.abrupt("return", false);

                    case 3:
                      _context.next = 5;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 5:
                      this.loading = _context.sent;
                      this.loading.present();
                      this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + 'api_kirim_kode_lupa_password', {
                        email_pel: this.signup.email
                      }).subscribe(function (hsl) {
                        var hasil = {};
                        hasil = hsl;

                        _this.loading.dismiss();

                        if (hasil.code == 1) {
                          _this.consta.show_alert('Selamat', '', hasil.msg).then(function () {});
                        } else {
                          _this.consta.show_alert('Maaf', '', hasil.msg).then(function () {});
                        }
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "reset_password",
          value: function reset_password() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.signup.kode_unik == '')) {
                        _context2.next = 3;
                        break;
                      }

                      this.consta.show_alert('Error', '', 'Silahkan isi kode unik terlebih dulu');
                      return _context2.abrupt("return", false);

                    case 3:
                      _context2.next = 5;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 5:
                      this.loading = _context2.sent;
                      this.loading.present();
                      this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + 'api_reset_pass', {
                        kode_unik: this.signup.kode_unik
                      }).subscribe(function (hsl) {
                        var hasil = {};
                        hasil = hsl;

                        _this2.loading.dismiss();

                        if (hasil.code == 1) {
                          _this2.consta.show_alert('Selamat', '', hasil.msg).then(function () {});
                        } else {
                          _this2.consta.show_alert('Maaf', '', hasil.msg).then(function () {});
                        }
                      });

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LupaPasswordPage;
      }();

      LupaPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      };

      LupaPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lupa-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./lupa-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/lupa-password/lupa-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./lupa-password.page.scss */
        "./src/app/lupa-password/lupa-password.page.scss"))["default"]]
      })], LupaPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=lupa-password-lupa-password-module-es5.js.map