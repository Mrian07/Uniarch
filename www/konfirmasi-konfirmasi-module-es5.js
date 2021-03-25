(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["konfirmasi-konfirmasi-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/konfirmasi/konfirmasi.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/konfirmasi/konfirmasi.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppKonfirmasiKonfirmasiPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button defaultHref=\"/riwayat-order\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Konfirmasi</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\r\n    <div style=\"margin-bottom: 20px;\">\r\n      <h6 style=\"margin: 0px;\"><b style=\"color: #fff;\">Konfirmasi Transfer Bank</b></h6>\r\n    </div>\r\n    <br>\r\n  <form #signupForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">ID Order</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.id_order\" name=\"id_order\" type=\"text\" #id_order=\"ngModel\" readonly required>\r\n          </ion-input>\r\n        </ion-item> \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Nama Pemilik Rekening</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.nama_pemilik\" name=\"nama_pemilik\" type=\"text\" #nama_pemilik=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>  \r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"nama_pemilik.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Nama Pemilik Rekening tidak boleh kosong\r\n          </p>\r\n        </ion-text>                       \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Dari Bank</ion-label>\r\n          <ion-select [(ngModel)]=\"signup.dari_bank\" name=\"dari_bank\" type=\"text\" #dari_bank=\"ngModel\" required>\r\n              <ion-select-option value=\"L\">Bank Central Asia</ion-select-option>\r\n              <ion-select-option value=\"P\">Bank Lainnya</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"dari_bank.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Dari Bank tidak boleh kosong\r\n          </p>\r\n        </ion-text>         \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Ke Bank</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.ke_bank\" name=\"ke_bank\" type=\"text\" #ke_bank=\"ngModel\" readonly required>\r\n          </ion-input>\r\n        </ion-item>         \r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"ke_bank.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Ke Bank tidak boleh kosong\r\n          </p>\r\n        </ion-text>         \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Jumlah Dana</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.jumlah_dana\" name=\"jumlah_dana\" type=\"number\" #jumlah_dana=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>  \r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"jumlah_dana.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Jumlah Dana tidak boleh kosong\r\n          </p>\r\n        </ion-text>  \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Tanggal Pembayaran</ion-label>\r\n          <!-- <ion-input [(ngModel)]=\"signup.tanggal_pembayaran\" name=\"tanggal_pembayaran\" type=\"date\" #tanggal_pembayaran=\"ngModel\" required>\r\n          </ion-input> -->\r\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Pilih Tanggal\" [(ngModel)]=\"signup.tanggal_pembayaran\" name=\"tanggal_pembayaran\"\r\n          #tanggal_pembayaran=\"ngModel\" required\r\n          cancelText=\"Batal\" doneText=\"Pilih\"></ion-datetime>\r\n        </ion-item>  \r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"tanggal_pembayaran.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Tanggal Pembayaran tidak boleh kosong\r\n          </p>\r\n        </ion-text>  \r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Bukti Foto</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.bukti\" name=\"bukti\" type=\"hidden\" #bukti=\"ngModel\" required></ion-input>\r\n        </ion-item> \r\n\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"tanggal_pembayaran.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Bukti Foto tidak boleh kosong\r\n          </p>\r\n        </ion-text>  \r\n        <div style=\"width: 100%;text-align: center;\" (click)=\"upload_bukti()\">\r\n          <div style=\"width: 80%;border:2px dashed#c4c4c4;margin:0 auto;border-radius: 20px;\">\r\n            <img class=\"product-image\" style=\"height: 120px;\" src=\"{{signup.bukti}}\" onerror=\"this.src = '/assets/img/no_image.png'\">\r\n          </div>         \r\n        </div>                                  \r\n    </ion-list>\r\n    <!-- <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"full\" (click)=\"upload_bukti()\" color=\"light\" style=\"--border-radius:20px\">\r\n            Upload Bukti</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid> -->\r\n    <div>\r\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" color=\"light\" expand=\"block\"\r\n      style=\"--border-radius:20px\"><b style=\"color: var(--ion-color-primary);\">Submit</b></ion-button>\r\n    </div>\r\n  </form>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/konfirmasi/konfirmasi-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/konfirmasi/konfirmasi-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: KonfirmasiPageRoutingModule */

    /***/
    function srcAppKonfirmasiKonfirmasiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KonfirmasiPageRoutingModule", function () {
        return KonfirmasiPageRoutingModule;
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


      var _konfirmasi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./konfirmasi.page */
      "./src/app/konfirmasi/konfirmasi.page.ts");

      var routes = [{
        path: '',
        component: _konfirmasi_page__WEBPACK_IMPORTED_MODULE_3__["KonfirmasiPage"]
      }];

      var KonfirmasiPageRoutingModule = function KonfirmasiPageRoutingModule() {
        _classCallCheck(this, KonfirmasiPageRoutingModule);
      };

      KonfirmasiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KonfirmasiPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/konfirmasi/konfirmasi.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/konfirmasi/konfirmasi.module.ts ***!
      \*************************************************/

    /*! exports provided: KonfirmasiPageModule */

    /***/
    function srcAppKonfirmasiKonfirmasiModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KonfirmasiPageModule", function () {
        return KonfirmasiPageModule;
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


      var _konfirmasi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./konfirmasi-routing.module */
      "./src/app/konfirmasi/konfirmasi-routing.module.ts");
      /* harmony import */


      var _konfirmasi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./konfirmasi.page */
      "./src/app/konfirmasi/konfirmasi.page.ts");

      var KonfirmasiPageModule = function KonfirmasiPageModule() {
        _classCallCheck(this, KonfirmasiPageModule);
      };

      KonfirmasiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _konfirmasi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KonfirmasiPageRoutingModule"]],
        declarations: [_konfirmasi_page__WEBPACK_IMPORTED_MODULE_6__["KonfirmasiPage"]]
      })], KonfirmasiPageModule);
      /***/
    },

    /***/
    "./src/app/konfirmasi/konfirmasi.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/konfirmasi/konfirmasi.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppKonfirmasiKonfirmasiPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29uZmlybWFzaS9rb25maXJtYXNpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2tvbmZpcm1hc2kva29uZmlybWFzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/konfirmasi/konfirmasi.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/konfirmasi/konfirmasi.page.ts ***!
      \***********************************************/

    /*! exports provided: KonfirmasiPage */

    /***/
    function srcAppKonfirmasiKonfirmasiPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KonfirmasiPage", function () {
        return KonfirmasiPage;
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


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var KonfirmasiPage = /*#__PURE__*/function () {
        function KonfirmasiPage(http, router, userData, loadingctrl, consta, userdata, route, modalCtrl, camera) {
          _classCallCheck(this, KonfirmasiPage);

          this.http = http;
          this.router = router;
          this.userData = userData;
          this.loadingctrl = loadingctrl;
          this.consta = consta;
          this.userdata = userdata;
          this.route = route;
          this.modalCtrl = modalCtrl;
          this.camera = camera;
          this.data_user = {};
          this.submitted = false;
          this.signup = {
            id_order: '',
            nama_pemilik: '',
            dari_bank: '',
            ke_bank: 'BANK CENTRAL ASIA',
            jumlah_dana: '',
            tanggal_pembayaran: '',
            bukti: ''
          };
        }

        _createClass(KonfirmasiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('view wenter');
            this.signup = {
              id_order: '',
              nama_pemilik: '',
              dari_bank: '',
              ke_bank: 'BANK CENTRAL ASIA',
              jumlah_dana: '',
              tanggal_pembayaran: '',
              bukti: ''
            };
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this.router.navigateByUrl('login');
              } else {
                _this.data_user = hsl;
                _this.id_order = _this.route.snapshot.paramMap.get('id');
                _this.signup.id_order = _this.id_order;
              }
            });
          }
        }, {
          key: "upload_bukti",
          value: function upload_bukti() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var options;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // alert('ambil photo');
                      options = {
                        quality: 100,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                      };
                      _context.next = 3;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 3:
                      this.loading = _context.sent;
                      this.camera.getPicture(options).then(function (imageData) {
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64 (DATA_URL):
                        var base64Image = 'data:image/jpeg;base64,' + imageData;
                        _this2.signup.bukti = base64Image;
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSignup",
          value: function onSignup(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.submitted = true;
                      console.log(this.signup, 'signup');

                      if (!form.valid) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 5;
                      return this.loadingctrl.create({
                        message: 'Silahkan tunggu....'
                      });

                    case 5:
                      this.loading = _context2.sent;
                      this.loading.present();
                      this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["API_URL_SLIDER"] + 'api_konfirmasi', this.signup) // .pipe(map((data: any) => {
                      //   console.log(data, 'map')
                      //   return data.data;
                      // }))
                      .subscribe(function (hasil) {
                        var hsl = {};
                        hsl = hasil;

                        if (hsl.code == 1) {
                          // this.signup = {
                          //   id_order : '',
                          //   nama_pemilik : '',
                          //   dari_bank : '',
                          //   ke_bank : 'BANK CENTRAL ASIA',
                          //   jumlah_dana : '',
                          //   tanggal_pembayaran : '',
                          //   bukti : '',
                          // }
                          _this3.consta.show_alert('Sukses', '', hsl.msg).then(function (hsl) {
                            _this3.router.navigateByUrl('/riwayat-order');
                          });
                        } else {
                          _this3.consta.show_alert('Error', '', hsl.msg);
                        }

                        _this3.loading.dismiss();
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

        return KonfirmasiPage;
      }();

      KonfirmasiPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }];
      };

      KonfirmasiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'konfirmasi',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./konfirmasi.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/konfirmasi/konfirmasi.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./konfirmasi.page.scss */
        "./src/app/konfirmasi/konfirmasi.page.scss"))["default"]]
      })], KonfirmasiPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=konfirmasi-konfirmasi-module-es5.js.map