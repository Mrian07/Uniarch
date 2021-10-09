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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-back-button defaultHref=\"/riwayat-order\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Konfirmasi</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\n    <div style=\"margin-bottom: 20px;\">\n      <h6 style=\"margin: 0px;\"><b style=\"color: #fff;\">Konfirmasi Transfer Bank</b></h6>\n    </div>\n    <br>\n  <form #signupForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">ID Order</ion-label>\n          <ion-input [(ngModel)]=\"signup.id_order\" name=\"id_order\" type=\"text\" #id_order=\"ngModel\" readonly required>\n          </ion-input>\n        </ion-item> \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Nama Pemilik Rekening</ion-label>\n          <ion-input [(ngModel)]=\"signup.nama_pemilik\" name=\"nama_pemilik\" type=\"text\" #nama_pemilik=\"ngModel\" required>\n          </ion-input>\n        </ion-item>  \n        <ion-text color=\"danger\">\n          <p [hidden]=\"nama_pemilik.valid || submitted == false\" class=\"ion-padding-start\">\n            Nama Pemilik Rekening tidak boleh kosong\n          </p>\n        </ion-text>                       \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Dari Bank</ion-label>\n          <ion-select [(ngModel)]=\"signup.dari_bank\" name=\"dari_bank\" type=\"text\" #dari_bank=\"ngModel\" required>\n              <ion-select-option value=\"L\">Bank Central Asia</ion-select-option>\n              <ion-select-option value=\"P\">Bank Lainnya</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"dari_bank.valid || submitted == false\" class=\"ion-padding-start\">\n            Dari Bank tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Ke Bank</ion-label>\n          <ion-input [(ngModel)]=\"signup.ke_bank\" name=\"ke_bank\" type=\"text\" #ke_bank=\"ngModel\" readonly required>\n          </ion-input>\n        </ion-item>         \n        <ion-text color=\"danger\">\n          <p [hidden]=\"ke_bank.valid || submitted == false\" class=\"ion-padding-start\">\n            Ke Bank tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Jumlah Dana</ion-label>\n          <ion-input [(ngModel)]=\"signup.jumlah_dana\" name=\"jumlah_dana\" type=\"number\" #jumlah_dana=\"ngModel\" required>\n          </ion-input>\n        </ion-item>  \n        <ion-text color=\"danger\">\n          <p [hidden]=\"jumlah_dana.valid || submitted == false\" class=\"ion-padding-start\">\n            Jumlah Dana tidak boleh kosong\n          </p>\n        </ion-text>  \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Tanggal Pembayaran</ion-label>\n          <!-- <ion-input [(ngModel)]=\"signup.tanggal_pembayaran\" name=\"tanggal_pembayaran\" type=\"date\" #tanggal_pembayaran=\"ngModel\" required>\n          </ion-input> -->\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Pilih Tanggal\" [(ngModel)]=\"signup.tanggal_pembayaran\" name=\"tanggal_pembayaran\"\n          #tanggal_pembayaran=\"ngModel\" required\n          cancelText=\"Batal\" doneText=\"Pilih\"></ion-datetime>\n        </ion-item>  \n        <ion-text color=\"danger\">\n          <p [hidden]=\"tanggal_pembayaran.valid || submitted == false\" class=\"ion-padding-start\">\n            Tanggal Pembayaran tidak boleh kosong\n          </p>\n        </ion-text>  \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Bukti Foto</ion-label>\n          <ion-input [(ngModel)]=\"signup.bukti\" name=\"bukti\" type=\"hidden\" #bukti=\"ngModel\" required></ion-input>\n        </ion-item> \n\n        <ion-text color=\"danger\">\n          <p [hidden]=\"tanggal_pembayaran.valid || submitted == false\" class=\"ion-padding-start\">\n            Bukti Foto tidak boleh kosong\n          </p>\n        </ion-text>  \n        <div style=\"width: 100%;text-align: center;\" (click)=\"upload_bukti()\">\n          <div style=\"width: 80%;border:2px dashed#c4c4c4;margin:0 auto;border-radius: 20px;\">\n            <img class=\"product-image\" style=\"height: 120px;\" src=\"{{signup.bukti}}\" onerror=\"this.src = '/assets/img/no_image.png'\">\n          </div>         \n        </div>                                  \n    </ion-list>\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"full\" (click)=\"upload_bukti()\" color=\"light\" style=\"--border-radius:20px\">\n            Upload Bukti</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    <div>\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" color=\"light\" expand=\"block\"\n      style=\"--border-radius:20px\"><b style=\"color: var(--ion-color-primary);\">Submit</b></ion-button>\n    </div>\n  </form>\n  </div>\n</ion-content>\n";
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


      __webpack_exports__["default"] = ".label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h {\n  color: #222;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29uZmlybWFzaS9rb25maXJtYXNpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2tvbmZpcm1hc2kva29uZmlybWFzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oe1xuICAgIGNvbG9yOiAjMjIyO1xufSJdfQ== */";
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
    },

    /***/
    "./src/app/providers/user-data.ts":
    /*!****************************************!*\
      !*** ./src/app/providers/user-data.ts ***!
      \****************************************/

    /*! exports provided: UserData */

    /***/
    function srcAppProvidersUserDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserData", function () {
        return UserData;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts"); // import { HTTP } from '@ionic-native/http/ngx';


      var UserData = /*#__PURE__*/function () {
        function UserData(storage, http, platform, router) {
          var _this4 = this;

          _classCallCheck(this, UserData);

          this.storage = storage;
          this.http = http;
          this.platform = platform;
          this.router = router;
          this._favorites = [];
          this.session = {};
          this.HAS_LOGGED_IN = 'hasLoggedIn';
          this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
          this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.platform.ready().then(function () {
            _this4.isLoggedIn();
          });
        }

        _createClass(UserData, [{
          key: "isAuthenticated",
          value: function isAuthenticated() {
            console.log(this.authState.value, 'value');
            return this.authState.value; // if(this.authState.value==false){
            //   this.router.navigate(['login']);
            // }else{
            //   // this.router.navigate(['checkout']);
            // }
          }
        }, {
          key: "hasFavorite",
          value: function hasFavorite(sessionName) {
            return this._favorites.indexOf(sessionName) > -1;
          }
        }, {
          key: "addFavorite",
          value: function addFavorite(sessionName) {
            this._favorites.push(sessionName);
          }
        }, {
          key: "removeFavorite",
          value: function removeFavorite(sessionName) {
            var index = this._favorites.indexOf(sessionName);

            if (index > -1) {
              this._favorites.splice(index, 1);
            }
          }
        }, {
          key: "login",
          value: function login(username) {
            var _this5 = this;

            console.log(username, 'USERNAME');
            return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
              _this5.setUsername(username); // this.http.get(this.API_URL + 'login', {}, {})
              // .then(data => {
              //   console.log(data.status);
              //   console.log(data.data); // data received by server
              //   console.log(data.headers);
              // })
              // .catch(error => {
              //   console.log(error.status);
              //   console.log(error.error); // error message as string
              //   console.log(error.headers);
              // });      


              return window.dispatchEvent(new CustomEvent('user:login'));
            });
          }
        }, {
          key: "signup",
          value: function signup(username) {
            var _this6 = this;

            return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
              _this6.setUsername(username);

              return window.dispatchEvent(new CustomEvent('user:signup'));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this7 = this;

            return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
              _this7.authState.next(false);

              return _this7.storage.remove('username');
            }).then(function () {
              window.dispatchEvent(new CustomEvent('user:logout'));
            });
          }
        }, {
          key: "setUsername",
          value: function setUsername(username) {
            return this.storage.set('username', username);
          }
        }, {
          key: "set_referral",
          value: function set_referral(referral) {
            console.log(referral, 'REFERRAL SET');
            return this.storage.set('referral', referral);
          }
        }, {
          key: "get_referral",
          value: function get_referral() {
            return this.storage.get('referral').then(function (value) {
              console.log(value, 'REFERRAL SET');
              return value;
            });
          }
        }, {
          key: "getUsername",
          value: function getUsername() {
            return this.storage.get('username').then(function (value) {
              return value;
            });
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var _this8 = this;

            return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
              _this8.authState.next(true);

              return value === true;
            });
          }
        }, {
          key: "checkHasSeenTutorial",
          value: function checkHasSeenTutorial() {
            return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
              return value;
            });
          } // CUSTOMER LOYALTY

        }, {
          key: "set_photo_profile",
          value: function set_photo_profile(photo_profile) {
            var _this9 = this;

            return this.getUsername().then(function (hsl) {
              _this9.session = hsl;
              _this9.session.photo = photo_profile;

              _this9.setUsername(_this9.session);
            });
          }
        }, {
          key: "get_photo_profile",
          value: function get_photo_profile() {
            var _this10 = this;

            return this.getUsername().then(function (hsl) {
              _this10.session = hsl;
              return _this10.session.photo;
            });
          }
        }, {
          key: "get_data_provinsi",
          value: function get_data_provinsi() {
            var _this11 = this;

            var promise = new Promise(function (resolve, reject) {
              _this11.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_provinsi', {}).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "get_data_kota",
          value: function get_data_kota(provinsi) {
            var _this12 = this;

            var promise = new Promise(function (resolve, reject) {
              _this12.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kota', {
                provinsi: provinsi
              }).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "get_data_kecamatan",
          value: function get_data_kecamatan(kota) {
            var _this13 = this;

            var promise = new Promise(function (resolve, reject) {
              _this13.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kecamatan', {
                kota: kota
              }).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "short_url",
          value: function short_url(url) {
            var _this14 = this;

            var promise = new Promise(function (resolve, reject) {
              _this14.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_short_url', {
                url: url
              }).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "submit_pendaftaran",
          value: function submit_pendaftaran(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, referral) {
            var _this15 = this;

            var promise = new Promise(function (resolve, reject) {
              _this15.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_submit_pendaftaran', {
                nama_pel: nama_pel,
                email_pel: email_pel,
                pass_pel: pass_pel,
                kon_pass: kon_pass,
                no_telp_pel: no_telp_pel,
                provinsi: provinsi,
                kota: kota,
                kecamatan: kecamatan,
                alamat_pel: alamat_pel,
                jk_pel: jk_pel,
                id_ref: referral
              }).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "update_profile",
          value: function update_profile(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, id_pel, info_lain_pel, nama_bank, rek, an) {
            var _this16 = this;

            var promise = new Promise(function (resolve, reject) {
              _this16.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_update_pel', {
                nama_pel: nama_pel,
                email_pel: email_pel,
                pass_pel: pass_pel,
                kon_pass: kon_pass,
                no_telp_pel: no_telp_pel,
                provinsi: provinsi,
                kota: kota,
                kecamatan: kecamatan,
                alamat_pel: alamat_pel,
                jk_pel: jk_pel,
                id_pel: id_pel,
                info_lain_pel: info_lain_pel,
                nama_bank: nama_bank,
                rek: rek,
                an: an
              }).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }]);

        return UserData;
      }();

      UserData.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      UserData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserData);
      /***/
    }
  }]);
})();
//# sourceMappingURL=konfirmasi-konfirmasi-module-es5.js.map