(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: #fff;\">Daftar</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content  [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\n    <div style=\"margin-bottom: 20px;\">\n      <h5 style=\"margin: 0px;\"><b style=\"color: #fff;\">Daftar</b></h5>\n    </div>\n    <br>\n  <form #signupForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Nama</ion-label>\n          <ion-input [(ngModel)]=\"signup.nama\" name=\"nama\" type=\"text\" #nama=\"ngModel\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"nama.valid || submitted == false\" class=\"ion-padding-start\">\n            Nama tidak boleh kosong\n          </p>\n        </ion-text> \n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">No. Telp</ion-label>\n          <ion-input [(ngModel)]=\"signup.no_telp\" name=\"no_telp\" type=\"text\" #no_telp=\"ngModel\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"no_telp.valid || submitted == false\" class=\"ion-padding-start\">\n            No Telp tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Jenis Kelamin</ion-label>\n          <ion-select [(ngModel)]=\"signup.jk_pel\" name=\"jk_pel\" type=\"text\" #jk_pel=\"ngModel\" required>\n              <ion-select-option value=\"L\">Laki-laki</ion-select-option>\n              <ion-select-option value=\"P\">Perempuan</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"jk_pel.valid || submitted == false\" class=\"ion-padding-start\">\n            Jenis Kelamin tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Provinsi</ion-label>\n          <ion-select [(ngModel)]=\"signup.provinsi\" name=\"provinsi\" type=\"text\" (ionChange)=\"pilih_provinsi($event)\" #provinsi=\"ngModel\" required>\n              <ion-select-option *ngFor=\" let item of data_provinsi\" [value]=\"item\">{{item.provinsi}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"provinsi.valid || submitted == false\" class=\"ion-padding-start\">\n            Provinsi tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Kota / Kabupaten</ion-label>\n          <ion-select [(ngModel)]=\"signup.kota\" (ionChange)=\"pilih_kota($event)\" name=\"kota\" type=\"text\" #kota=\"ngModel\" required>\n              <ion-select-option *ngFor=\" let item of data_kota\" [value]=\"item\">{{item.kota}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"kota.valid || submitted == false\" class=\"ion-padding-start\">\n            Kota tidak boleh kosong\n          </p>\n        </ion-text> \n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Kecamatan</ion-label>\n          <ion-select [(ngModel)]=\"signup.kecamatan\" name=\"kecamatan\" type=\"text\" #kecamatan=\"ngModel\" required>\n              <ion-select-option *ngFor=\" let item of data_kecamatan\" [value]=\"item\">{{item.kecamatan}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"kecamatan.valid || submitted == false\" class=\"ion-padding-start\">\n            kecamatan tidak boleh kosong\n          </p>\n        </ion-text>\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Alamat</ion-label>\n          <ion-textarea [(ngModel)]=\"signup.alamat\" name=\"alamat\" type=\"text\" #alamat=\"ngModel\" required>\n          </ion-textarea>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"alamat.valid || submitted == false\" class=\"ion-padding-start\">\n            Alamat tidak boleh kosong\n          </p>\n        </ion-text>\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n          <ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" #email=\"ngModel\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n            Email tidak boleh kosong / valid\n          </p>\n        </ion-text>                 \n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password tidak boleh kosong / valid\n        </p>\n      </ion-text>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Konfirmasi Password</ion-label>\n        <ion-input [(ngModel)]=\"signup.confirm_password\" name=\"confirm_password\" type=\"password\" #confirm_password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"confirm_password.valid || submitted == false\" class=\"ion-padding-start\">\n          Konfirmasi Password tidak boleh kosong / valid\n        </p>\n        <p *ngIf=\"error_konfirmasi==true\" class=\"ion-padding-start\">\n          Konfirmasi Password harus sama dengan password\n        </p>        \n      </ion-text>       \n    </ion-list>\n    <br><br>\n    <div >\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\" color=\"light\"\n      style=\"--border-radius:20px\"><b>Daftar</b></ion-button>\n    </div>\n  </form>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/register/register-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/register/register.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/register/register-routing.module.ts");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDdEI7O0FBRUU7RUFDRSxnQkFBZ0I7QUFDcEI7O0FBRUU7RUFDRSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWxvZ28ge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5zaWdudXAtbG9nbyBpbWcge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cbiAgXG4gIC5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(router, userData, loadingctrl, consta) {
          _classCallCheck(this, RegisterPage);

          this.router = router;
          this.userData = userData;
          this.loadingctrl = loadingctrl;
          this.consta = consta;
          this.signup = {
            nama: '',
            password: '',
            email: '',
            provinsi: '',
            kota: '',
            kecamatan: '',
            alamat: '',
            jk_pel: '',
            confirm_password: '',
            no_telp: '',
            username: ''
          };
          this.submitted = false;
          this.data_provinsi = [];
          this.data_kota = [];
          this.data_kecamatan = [];
          this.error_konfirmasi = false;
        }

        _createClass(RegisterPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.signup = {
              nama: '',
              password: '',
              email: '',
              provinsi: '',
              kota: '',
              kecamatan: '',
              alamat: '',
              jk_pel: '',
              confirm_password: '',
              no_telp: '',
              username: ''
            };
            this.error_konfirmasi = false;
            this.get_data_provinsi();
          }
        }, {
          key: "pilih_provinsi",
          value: function pilih_provinsi($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log($event.target.value, 'pilih provinsi');
                      _context.next = 3;
                      return this.loadingctrl.create({
                        message: 'Silahkan tunggu....'
                      });

                    case 3:
                      this.loading = _context.sent;
                      this.loading.present();
                      this.userData.get_data_kota($event.target.value.provinsi).then(function (hsl) {
                        var hasil = {};
                        hasil = hsl;
                        _this.data_kota = hasil.data;
                        console.log(_this.data_provinsi);

                        _this.loading.dismiss();
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
          key: "pilih_kota",
          value: function pilih_kota($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingctrl.create({
                        message: 'Silahkan tunggu....'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      this.loading.present();
                      this.userData.get_data_kecamatan($event.target.value.kota).then(function (hsl) {
                        var hasil = {};
                        hasil = hsl;
                        _this2.data_kecamatan = hasil.data;

                        _this2.loading.dismiss();
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "get_data_provinsi",
          value: function get_data_provinsi() {
            var _this3 = this;

            this.userData.get_data_provinsi().then(function (hsl) {
              var hasil = {};
              hasil = hsl;
              _this3.data_provinsi = hasil.data;
              console.log(_this3.data_provinsi);
            });
          }
        }, {
          key: "onSignup",
          value: function onSignup(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, prov, kot, kec, provinsi, kota, kecamatan, alamat_pel, jk_pel;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.submitted = true;
                      console.log(this.signup, 'signup');
                      nama_pel = this.signup.nama;
                      email_pel = this.signup.email;
                      pass_pel = this.signup.password;
                      kon_pass = this.signup.confirm_password;
                      no_telp_pel = this.signup.no_telp;

                      if (!(pass_pel != kon_pass)) {
                        _context3.next = 10;
                        break;
                      }

                      this.error_konfirmasi = true;
                      return _context3.abrupt("return");

                    case 10:
                      prov = {};
                      kot = {};
                      kec = {};
                      prov = this.signup.provinsi;
                      kot = this.signup.kota;
                      kec = this.signup.kecamatan;
                      provinsi = prov.provinsi;
                      kota = kot.kota;
                      kecamatan = kec.kecamatan;
                      alamat_pel = this.signup.alamat;
                      jk_pel = this.signup.jk_pel;

                      if (!form.valid) {
                        _context3.next = 27;
                        break;
                      }

                      _context3.next = 24;
                      return this.loadingctrl.create({
                        message: 'Silahkan tunggu....'
                      });

                    case 24:
                      this.loading = _context3.sent;
                      this.loading.present();
                      this.userData.get_referral().then(function (val) {
                        console.log(val, 'VAL REFERRAL');
                        _this4.referral = val;

                        _this4.consta.show_alert('Referral', 'test', val);

                        _this4.userData.submit_pendaftaran(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, val).then(function (hsl) {
                          var hasil = {};
                          hasil = hsl;

                          _this4.loading.dismiss();

                          if (hasil.code == 1) {
                            _this4.consta.show_alert('Sukses', '', hasil.msg).then(function (hsl) {
                              if (hsl) {
                                // form.reset();
                                _this4.router.navigateByUrl('login');
                              }
                            });
                          } else {
                            _this4.consta.show_alert('Maaf', '', hasil.msg);
                          }
                        });
                      });

                    case 27:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map