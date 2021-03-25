(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134"], {
    /***/
    "./src/app/providers/constant.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/providers/constant.service.ts ***!
      \***********************************************/

    /*! exports provided: API_RAJAONKIR, BASE_URL, API_URL, API_URL_SLIDER, IMAGE_URL_PRODUCT, ConstantService */

    /***/
    function srcAppProvidersConstantServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_RAJAONKIR", function () {
        return API_RAJAONKIR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BASE_URL", function () {
        return BASE_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL_SLIDER", function () {
        return API_URL_SLIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IMAGE_URL_PRODUCT", function () {
        return IMAGE_URL_PRODUCT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstantService", function () {
        return ConstantService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // development
      // export let API_URL='http://172.20.10.5/msi2/app/';
      // export let API_URL_SLIDER='http://172.20.10.5/msi2/app/';
      // export let IMAGE_URL_PRODUCT='http://172.20.10.5/msi2/gambar/produk/';
      // production


      var API_RAJAONKIR = '';
      var BASE_URL = 'https://dafacollection.net/'; // export let API_URL = 'https://msidahua.com/app/';

      var API_URL = BASE_URL + 'app/'; // export let API_URL_SLIDER='https://msidahua.com/app/';

      var API_URL_SLIDER = API_URL; // export let IMAGE_URL_PRODUCT='https://msidahua.com/gambar/produk/';

      var IMAGE_URL_PRODUCT = BASE_URL + 'gambar/produk/'; // export let API_URL='http://192.168.43.80/customerloyalty/rest/';

      var ConstantService = /*#__PURE__*/function () {
        function ConstantService(http, alertctrl) {
          _classCallCheck(this, ConstantService);

          this.http = http;
          this.alertctrl = alertctrl;
          this.product_category = [];
        } // async show_alert(title, sub_title, message){
        //   this.alertfun = await this.alertctrl.create({
        //     header: title!='' ? title : 'Pemberitahuan',
        //     subHeader: sub_title!='' ? sub_title : '',
        //     message: message,
        //     buttons: ['OK']
        //   });
        //   this.alertfun.present();
        // }


        _createClass(ConstantService, [{
          key: "show_alert",
          value: function show_alert(title, sub_title, message) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var ctl = _this.alertctrl;

              var alert = _this.alertctrl.create({
                header: title != '' ? title : 'Pemberitahuan',
                subHeader: sub_title != '' ? sub_title : '',
                message: message,
                buttons: [{
                  text: 'OK',
                  handler: function handler() {
                    ctl.dismiss().then(function () {
                      resolve(true);
                    });
                    return false;
                  }
                }]
              }).then(function (dlg) {
                return dlg.present();
              });
            });
          }
        }, {
          key: "get_product_category",
          value: function get_product_category() {
            this.product_category = [];
            return this.http.post(API_URL + 'get_product_category', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              // const datax : any = [];
              // data.data.forEach(element => {
              //   datax.push(element.label)
              // });
              // return datax;
              return data.data;
            }));
          }
        }]);

        return ConstantService;
      }();

      ConstantService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ConstantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ConstantService);
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
          var _this2 = this;

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
            _this2.isLoggedIn();
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
            var _this3 = this;

            console.log(username, 'USERNAME');
            return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
              _this3.setUsername(username); // this.http.get(this.API_URL + 'login', {}, {})
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
            var _this4 = this;

            return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
              _this4.setUsername(username);

              return window.dispatchEvent(new CustomEvent('user:signup'));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
              _this5.authState.next(false);

              return _this5.storage.remove('username');
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
            var _this6 = this;

            return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
              _this6.authState.next(true);

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
            var _this7 = this;

            return this.getUsername().then(function (hsl) {
              _this7.session = hsl;
              _this7.session.photo = photo_profile;

              _this7.setUsername(_this7.session);
            });
          }
        }, {
          key: "get_photo_profile",
          value: function get_photo_profile() {
            var _this8 = this;

            return this.getUsername().then(function (hsl) {
              _this8.session = hsl;
              return _this8.session.photo;
            });
          }
        }, {
          key: "get_data_provinsi",
          value: function get_data_provinsi() {
            var _this9 = this;

            var promise = new Promise(function (resolve, reject) {
              _this9.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_provinsi', {}).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "get_data_kota",
          value: function get_data_kota(provinsi) {
            var _this10 = this;

            var promise = new Promise(function (resolve, reject) {
              _this10.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kota', {
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
            var _this11 = this;

            var promise = new Promise(function (resolve, reject) {
              _this11.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kecamatan', {
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
            var _this12 = this;

            var promise = new Promise(function (resolve, reject) {
              _this12.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_short_url', {
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
            var _this13 = this;

            var promise = new Promise(function (resolve, reject) {
              _this13.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_submit_pendaftaran', {
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
            var _this14 = this;

            var promise = new Promise(function (resolve, reject) {
              _this14.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_update_pel', {
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
//# sourceMappingURL=default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134-es5.js.map