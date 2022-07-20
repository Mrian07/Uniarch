(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["komisi-komisi-module"],
  {
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/komisi/komisi.page.html":
      /*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/komisi/komisi.page.html ***!
  \*******************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start" style="color: #fff;">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style="color: #fff;">Referral</ion-title>\n    <!-- <ion-buttons slot="end" class="notification-icon-button">\n      <ion-button class="btn_badge" defaultHref="/checkout">\n          <ion-icon class="fa fa-shopping-cart"></ion-icon>\n          <ion-badge class="badge_icon" color="danger" *ngIf="total_keranjang > 0 ">{{total_keranjang}}</ion-badge>\n      </ion-button>\n    </ion-buttons>     -->\n  </ion-toolbar>\n\n<ion-segment (ionChange)="pilih_tab($event)" style="background: var(--ion-color-primary);">\n  <ion-segment-button value="1" checked>\n    <ion-label>Share</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>List</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<!-- <ion-segment [(ngModel)]="segment" style="background: var(--ion-color-primary);">\n  <ion-segment-button value="1">\n    TUKAR POIN\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    RIWAYAT TUKAR\n  </ion-segment-button>\n</ion-segment> -->\n\n</ion-header>\n\n<ion-content style="--background: var(--ion-color-bg);">\n\n  <div *ngIf="show_tab==\'1\'"  style="background: var(--ion-color-bg);">\n    <br>\n    <ion-card style="border-radius: 20px;background: #fff;padding: 0px 10px;">\n      <ion-row>\n        <br>\n        <ion-col size="12" style="text-align: center;">\n          <img src="assets/imgs/logo.png" style="width: 50%;margin:auto;">\n        </ion-col>\n        <ion-col size="12" style="text-align: center;">\n          <h6><b>Bagikan Kode/Link</b></h6>\n        </ion-col>\n        <ion-col size="6" style="text-align: center;">\n          <!-- <img src="assets/imgs/facebook.png" style="width: 50%;"> -->\n          <ion-button (click)="sharewa()" style="width: 100%;--border-radius:20px;"> Whatsapp</ion-button>\n        </ion-col>\n        <ion-col size="6" style="text-align: center;">\n          <!-- <img src="assets/imgs/twitter.png" style="width: 50%;"> -->\n          <ion-button (click)="copylink()" style="width: 100%;--border-radius:20px;"> Salin</ion-button>\n        </ion-col>\n      </ion-row>\n      <br>\n    </ion-card>\n      <!-- <div style="width: 100%;margin-top: 10px; text-align: center;">\n          <h2>Bagi link via </h2>\n          <ion-button (click)="sharewa()"> Whatsapp</ion-button>\n      </div>\n      <div style="width: 100%;margin-top: 10px; text-align: center;">\n        <h2>Copy link anda</h2>\n        <ion-button (click)="copylink()"> Copy</ion-button>\n      </div> -->\n  </div>\n\n  <ion-list *ngIf="show_tab==\'2\'"  style="background: var(--ion-color-bg);">\n\n    <ion-card *ngFor="let item of data_referral">\n      <ion-card-content>\n        <div>\n          <ion-row style="width: 100%;">\n            <ion-col size="4">Nama</ion-col>\n            <ion-col>{{item.nama}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col  size="4">Email</ion-col>\n            <ion-col>{{item.email}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col  size="4">Telp</ion-col>\n            <ion-col>{{item.phone}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col  size="4">Komisi</ion-col>\n            <ion-col> {{item.komisi==null ? 0 : item.komisi | currency : \'IDR\' : \'Rp. \'}}</ion-col>\n          </ion-row>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>  \n</ion-content>\n';

        /***/
      },

    /***/ "./src/app/komisi/komisi-routing.module.ts":
      /*!*************************************************!*\
  !*** ./src/app/komisi/komisi-routing.module.ts ***!
  \*************************************************/
      /*! exports provided: KomisiPageRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KomisiPageRoutingModule",
          function () {
            return KomisiPageRoutingModule;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _komisi_page__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./komisi.page */ "./src/app/komisi/komisi.page.ts"
          );

        const routes = [
          {
            path: "",
            component: _komisi_page__WEBPACK_IMPORTED_MODULE_3__["KomisiPage"],
          },
        ];
        let KomisiPageRoutingModule = class KomisiPageRoutingModule {};
        KomisiPageRoutingModule = Object(
          tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]
        )(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                  "RouterModule"
                ].forChild(routes),
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
              ],
            }),
          ],
          KomisiPageRoutingModule
        );

        /***/
      },

    /***/ "./src/app/komisi/komisi.module.ts":
      /*!*****************************************!*\
  !*** ./src/app/komisi/komisi.module.ts ***!
  \*****************************************/
      /*! exports provided: KomisiPageModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KomisiPageModule",
          function () {
            return KomisiPageModule;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
          );
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"
          );
        /* harmony import */ var _komisi_routing_module__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./komisi-routing.module */ "./src/app/komisi/komisi-routing.module.ts"
          );
        /* harmony import */ var _komisi_page__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./komisi.page */ "./src/app/komisi/komisi.page.ts"
          );

        let KomisiPageModule = class KomisiPageModule {};
        KomisiPageModule = Object(
          tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]
        )(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _komisi_routing_module__WEBPACK_IMPORTED_MODULE_5__[
                  "KomisiPageRoutingModule"
                ],
              ],
              declarations: [
                _komisi_page__WEBPACK_IMPORTED_MODULE_6__["KomisiPage"],
              ],
            }),
          ],
          KomisiPageModule
        );

        /***/
      },

    /***/ "./src/app/komisi/komisi.page.scss":
      /*!*****************************************!*\
  !*** ./src/app/komisi/komisi.page.scss ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          ".no-scroll {\n  --overflow: hidden;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\nion-segment-button {\n  --indicator-box-shadow: transparent!important;\n  --background:white;\n  --color:#58B1CA;\n  --background-checked: #58B1CA !important;\n  --color-checked: white;\n  --indicator-color: transparent!important;\n  /* this solution */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29taXNpL2tvbWlzaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBVztBQUNmOztBQUNBO0VBR1ksbUJBQVc7QUFBdkI7O0FBSEE7RUFNZ0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQy9COztBQU1FO0VBQ0UsNkNBQXVCO0VBQ3ZCLGtCQUFhO0VBQ2IsZUFBUTtFQUNSLHdDQUFxQjtFQUNyQixzQkFBZ0I7RUFDaEIsd0NBQW1CO0VBQXdCLGtCQUFBO0FBRi9DIiwiZmlsZSI6InNyYy9hcHAva29taXNpL2tvbWlzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2Nyb2xsIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5pb24tdG9vbGJhciB7XG4gICAgLm5vdGlmaWNhdGlvbi1pY29uLWJ1dHRvbiB7XG4gICAgICAgIC5idG5fYmFkZ2Uge1xuICAgICAgICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gICAgLS1jb2xvcjojNThCMUNBO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjNThCMUNBICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICAtLWluZGljYXRvci1jb2xvciA6IHRyYW5zcGFyZW50IWltcG9ydGFudDsgLyogdGhpcyBzb2x1dGlvbiAqL1xuICAgIH0iXX0= */";

        /***/
      },

    /***/ "./src/app/komisi/komisi.page.ts":
      /*!***************************************!*\
  !*** ./src/app/komisi/komisi.page.ts ***!
  \***************************************/
      /*! exports provided: KomisiPage */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "KomisiPage",
          function () {
            return KomisiPage;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
          );
        /* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js"
          );
        /* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../providers/user-data */ "./src/app/providers/user-data.ts"
          );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
          );
        /* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js"
          );
        /* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js"
          );
        /* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../providers/constant.service */ "./src/app/providers/constant.service.ts"
          );
        /* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts"
          );

        let KomisiPage = class KomisiPage {
          constructor(
            socialSharing,
            userdata,
            http,
            router,
            clipboard,
            toast,
            servcart
          ) {
            this.socialSharing = socialSharing;
            this.userdata = userdata;
            this.http = http;
            this.router = router;
            this.clipboard = clipboard;
            this.toast = toast;
            this.servcart = servcart;
            this.data_user = {};
            this.show_tab = "1";
            this.arr = [];
            this.total_keranjang = 0;
            this.data_referral = [];
          }
          get_total_keranjang() {
            this.servcart.get_keranjang(this.data_user.id_pel).then((hasil) => {
              console.log(hasil, "keranjang");
              let hsl = {};
              hsl = hasil;
              this.total_keranjang = hsl.total_qty;
            });
          }
          ngOnInit() {
            for (let i = 0; i < 30; i++) {
              this.arr[i] = i;
            }
          }
          pilih_tab($event) {
            console.log($event, "event");
            this.show_tab = $event.detail.value;
            if (this.show_tab == 2) {
              this.get_data_referral();
            }
          }
          ionViewWillEnter() {
            this.userdata.getUsername().then((hsl) => {
              console.log(hsl, "hasil");
              if (hsl == null) {
                this.router.navigateByUrl("login");
              } else {
                this.data_user = hsl;
                this.get_data_referral();
                this.get_total_keranjang();
              }
            });
          }
          get_data_referral() {
            this.http
              .post(
                _providers_constant_service__WEBPACK_IMPORTED_MODULE_8__[
                  "API_URL"
                ] + "api_get_data_referral",
                { id_pel: this.data_user.id_pel }
              )
              .subscribe((hsl) => {
                let hasil = {};
                hasil = hsl;
                this.data_referral = hasil.data;
                console.log(this.data_referral, "data referral");
              });
          }
          sharewa() {
            let url;
            url =
              "https://uniarch.page.link?link=https://shop.cctvgrosir.com?referral_" +
              this.data_user.id_pel +
              "&apn=com.uniarch.app";
            this.socialSharing
              .shareViaWhatsApp("", "", url)
              .then((res) => {
                // Success
                console.log(res, "REST");
              })
              .catch((e) => {
                // Error!
                console.log(e, "ERROR");
              });
          }
          copylink() {
            let url;
            url =
              "https://uniarch.page.link?link=https://shop.cctvgrosir.com?referral_" +
              this.data_user.id_pel +
              "&apn=com.uniarch.app";
            this.clipboard.copy(url).then((hsl) => {
              this.toast
                .show("Link berhasil di copy", "5000", "center")
                .subscribe((toast) => {
                  console.log(toast);
                });
            });
          }
          sharefb() {
            let url;
            url = "https://bit.ly/2EZtGZd";
            this.socialSharing
              .shareViaFacebook("", "", url)
              .then((res) => {
                // Success
                console.log(res, "REST");
              })
              .catch((e) => {
                // Error!
                console.log(e, "ERROR");
              });
          }
        };
        KomisiPage.ctorParameters = () => [
          {
            type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__[
              "SocialSharing"
            ],
          },
          {
            type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"],
          },
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[
              "HttpClient"
            ],
          },
          { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
          {
            type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__[
              "Clipboard"
            ],
          },
          {
            type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_7__["Toast"],
          },
          {
            type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_9__[
              "DataCartService"
            ],
          },
        ];
        KomisiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-komisi",
              template: Object(
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"]
              )(
                __webpack_require__(
                  /*! raw-loader!./komisi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/komisi/komisi.page.html"
                )
              ).default,
              styles: [
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(
                  __webpack_require__(
                    /*! ./komisi.page.scss */ "./src/app/komisi/komisi.page.scss"
                  )
                ).default,
              ],
            }),
          ],
          KomisiPage
        );

        /***/
      },
  },
]);
//# sourceMappingURL=komisi-komisi-module-es2015.js.map
