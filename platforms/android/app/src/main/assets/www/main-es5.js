(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy recursive":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy namespace object ***!
      \************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesCordovaPluginFcmWithDependecyUpdatedIonicNgxNode_modulesAngularCoreFesm2015LazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/node_modules/@angular/core/fesm2015 lazy recursive";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n      <ion-menu contentId=\"main-content\" type=\"overlay\">\n          <ion-content style=\"--background:var(--ion-color-primary);\">\n\n              <ion-list  id=\"inbox-list\" style=\"background:var(--ion-color-primary);\" lines=\"none\">\n                  <ion-list-header style=\"color: #fff;font-size: 17px;font-weight: 700;\">\n                    MENU\n                  </ion-list-header>\n                  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n                      <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n                                detail=\"false\" [class.selected]=\"selectedIndex == i\" style=\"--background:var(--ion-color-primary);\">\n                          <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"style=\"color: #fff;\"></ion-icon>\n                          <ion-label style=\"color: #fff;\">{{ p.title }}</ion-label>\n                      </ion-item>\n                  </ion-menu-toggle>\n              </ion-list>\n\n              <!-- <ion-list *ngIf=\"valid !== 'ada'\" id=\"inbox-list\" style=\"background:#428994;\" lines=\"none\">\n                <ion-list-header style=\"color: #fff;font-size: 17px;font-weight: 700;\">\n                  MENU\n                </ion-list-header>\n                <ion-menu-toggle autoHide=\"false\">\n                    <ion-item routerLink=\"/\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\"\n                    style=\"--background:#428994;\">\n                    <ion-icon slot=\"start\" name=\"home-outline\" style=\"color: #fff;\"></ion-icon>\n                      <ion-label style=\"color: #fff;\">\n                        Beranda\n                      </ion-label>\n                    </ion-item>\n                  </ion-menu-toggle>\n        \n                  <ion-menu-toggle autoHide=\"false\">\n                    <ion-item routerLink=\"/login\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\"\n                    style=\"--background:#428994;\">\n                    <ion-icon slot=\"start\" name=\"log-in-outline\" style=\"color: #fff;\"></ion-icon>\n                      <ion-label style=\"color: #fff;\">\n                        Login\n                      </ion-label>\n                    </ion-item>\n                  </ion-menu-toggle>\n        \n                  <ion-menu-toggle autoHide=\"false\">\n                    <ion-item routerLink=\"/register\" routerLinkActive=\"active\" routerDirection=\"root\" detail=\"false\"\n                    style=\"--background:#428994;\">\n                    <ion-icon slot=\"start\" name=\"log-in-outline\" style=\"color: #fff;\"></ion-icon>\n                      <ion-label style=\"color: #fff;\">\n                        Daftar\n                      </ion-label>\n                    </ion-item>\n                  </ion-menu-toggle>\n            </ion-list> -->\n\n          </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tabs-tabs-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'sign-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sign-up-sign-up-module */
          "sign-up-sign-up-module").then(__webpack_require__.bind(null,
          /*! ./sign-up/sign-up.module */
          "./src/app/sign-up/sign-up.module.ts")).then(function (m) {
            return m.SignUpPageModule;
          });
        }
      }, {
        path: 'about',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | about-about-module */
          "about-about-module").then(__webpack_require__.bind(null,
          /*! ./about/about.module */
          "./src/app/about/about.module.ts")).then(function (m) {
            return m.AboutPageModule;
          });
        }
      }, {
        path: 'bantuan',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | bantuan-bantuan-module */
          "bantuan-bantuan-module").then(__webpack_require__.bind(null,
          /*! ./bantuan/bantuan.module */
          "./src/app/bantuan/bantuan.module.ts")).then(function (m) {
            return m.BantuanPageModule;
          });
        }
      }, {
        path: 'checkout',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | checkout-checkout-module */
          [__webpack_require__.e("common"), __webpack_require__.e("checkout-checkout-module")]).then(__webpack_require__.bind(null,
          /*! ./checkout/checkout.module */
          "./src/app/checkout/checkout.module.ts")).then(function (m) {
            return m.CheckoutPageModule;
          });
        }
      }, {
        path: 'detailblog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | detailblog-detailblog-module */
          "detailblog-detailblog-module").then(__webpack_require__.bind(null,
          /*! ./detailblog/detailblog.module */
          "./src/app/detailblog/detailblog.module.ts")).then(function (m) {
            return m.DetailblogPageModule;
          });
        }
      }, {
        path: 'detailproduk/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | detailproduk-detailproduk-module */
          [__webpack_require__.e("common"), __webpack_require__.e("detailproduk-detailproduk-module")]).then(__webpack_require__.bind(null,
          /*! ./detailproduk/detailproduk.module */
          "./src/app/detailproduk/detailproduk.module.ts")).then(function (m) {
            return m.DetailprodukPageModule;
          });
        }
      }, // {
      //   path: 'detailprodukk/:id',
      //   loadChildren: () => import('./detailproduk/detailproduk.module').then( m => m.DetailprodukPageModule)
      // },
      {
        path: 'komisi',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | komisi-komisi-module */
          [__webpack_require__.e("common"), __webpack_require__.e("komisi-komisi-module")]).then(__webpack_require__.bind(null,
          /*! ./komisi/komisi.module */
          "./src/app/komisi/komisi.module.ts")).then(function (m) {
            return m.KomisiPageModule;
          });
        }
      }, {
        path: 'konfirmasi/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | konfirmasi-konfirmasi-module */
          "konfirmasi-konfirmasi-module").then(__webpack_require__.bind(null,
          /*! ./konfirmasi/konfirmasi.module */
          "./src/app/konfirmasi/konfirmasi.module.ts")).then(function (m) {
            return m.KonfirmasiPageModule;
          });
        }
      }, {
        path: 'point',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | point-point-module */
          [__webpack_require__.e("common"), __webpack_require__.e("point-point-module")]).then(__webpack_require__.bind(null,
          /*! ./point/point.module */
          "./src/app/point/point.module.ts")).then(function (m) {
            return m.PointPageModule;
          });
        }
      }, {
        path: 'detailtransaksi/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | detailtransaksi-detailtransaksi-module */
          [__webpack_require__.e("common"), __webpack_require__.e("detailtransaksi-detailtransaksi-module")]).then(__webpack_require__.bind(null,
          /*! ./detailtransaksi/detailtransaksi.module */
          "./src/app/detailtransaksi/detailtransaksi.module.ts")).then(function (m) {
            return m.DetailtransaksiPageModule;
          });
        }
      }, {
        path: 'tabs4',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs4-tabs4-module */
          "tabs4-tabs4-module").then(__webpack_require__.bind(null,
          /*! ./tabs4/tabs4.module */
          "./src/app/tabs4/tabs4.module.ts")).then(function (m) {
            return m.Tabs4PageModule;
          });
        }
      }, {
        path: 'tabs5',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs5-tabs5-module */
          "tabs5-tabs5-module").then(__webpack_require__.bind(null,
          /*! ./tabs5/tabs5.module */
          "./src/app/tabs5/tabs5.module.ts")).then(function (m) {
            return m.Tabs5PageModule;
          });
        }
      }, {
        path: 'tab4',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab4-tab4-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null,
          /*! ./tab4/tab4.module */
          "./src/app/tab4/tab4.module.ts")).then(function (m) {
            return m.Tab4PageModule;
          });
        }
      }, {
        path: 'tab5',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tab5-tab5-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tab5-tab5-module")]).then(__webpack_require__.bind(null,
          /*! ./tab5/tab5.module */
          "./src/app/tab5/tab5.module.ts")).then(function (m) {
            return m.Tab5PageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'lupa-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lupa-password-lupa-password-module */
          "lupa-password-lupa-password-module").then(__webpack_require__.bind(null,
          /*! ./lupa-password/lupa-password.module */
          "./src/app/lupa-password/lupa-password.module.ts")).then(function (m) {
            return m.LupaPasswordPageModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | wallet-wallet-module */
          [__webpack_require__.e("common"), __webpack_require__.e("wallet-wallet-module")]).then(__webpack_require__.bind(null,
          /*! ./wallet/wallet.module */
          "./src/app/wallet/wallet.module.ts")).then(function (m) {
            return m.WalletPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./providers/user-data */
      "./src/app/providers/user-data.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ngx_communicate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-communicate */
      "./node_modules/ngx-communicate/__ivy_ngcc__/fesm2015/ngx-communicate.js");
      /* harmony import */


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/firebase-dynamic-links/ngx */
      "./node_modules/@ionic-native/firebase-dynamic-links/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(consta, menu, platform, router, splashScreen, statusBar, storage, userData, toastCtrl, camera, communicate, loadingCtrl, alertController, actionSheetController, fcm, localNotifications, http2, zone, navCtrl, inAppBrowser, firebaseDynamicLinks) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.consta = consta;
          this.menu = menu;
          this.platform = platform;
          this.router = router;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.storage = storage;
          this.userData = userData;
          this.toastCtrl = toastCtrl;
          this.camera = camera;
          this.communicate = communicate;
          this.loadingCtrl = loadingCtrl;
          this.alertController = alertController;
          this.actionSheetController = actionSheetController;
          this.fcm = fcm;
          this.localNotifications = localNotifications;
          this.http2 = http2;
          this.zone = zone;
          this.navCtrl = navCtrl;
          this.inAppBrowser = inAppBrowser;
          this.firebaseDynamicLinks = firebaseDynamicLinks;
          this.selectedIndex = 0;
          this.appPages = [{
            title: 'Home',
            url: '/',
            icon: 'home'
          }, {
            title: 'Blog',
            url: '/tabs/tab4',
            icon: 'newspaper'
          }, {
            title: 'Referral',
            url: '/komisi',
            icon: 'cash'
          }, {
            title: 'Klaim Point',
            url: '/point',
            icon: 'ribbon'
          }, {
            title: 'Wallet',
            url: '/wallet',
            icon: 'wallet'
          }, {
            title: 'Kontak',
            url: '/tabs/tab5',
            icon: 'Call'
          }];
          this.arr_sess = {};
          this.loggedIn = false;
          this.initializeApp();
          this.arr_sess.nama_pel = "";
          this.communicate.on('login_success', function (data) {
            //console.log(data, 'LOGIN SUCCESS');
            _this.userData.getUsername().then(function (hsl) {
              //console.log(hsl, this.arr_sess, 'session user');
              if (hsl) {
                // alert('a')
                _this.arr_sess = hsl; // this.name_user='Hi, '+this.arr_sess.nama_pel;
                // console.log(this.name_user,'nama user 1')
                // this.mystyle['background-image'] = "url('"+this.arr_sess.photo+"'";
              } else {
                _this.arr_sess.nama_pel = "";
              }
            });
          });
          this.userData.getUsername().then(function (hsl) {
            if (hsl) {
              // alert('a')
              _this.arr_sess = hsl; // this.name_user='Hi, '+this.arr_sess.nama_pel;
              // console.log(this.name_user,'nama user 1')
              // this.mystyle['background-image'] = "url('"+this.arr_sess.photo+"'";
            } else {
              // alert('b')
              // this.name_user='';
              _this.arr_sess.nama_pel = "";
            }
          });
        }

        _createClass(AppComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.userData.getUsername().then(function (hsl) {
              if (hsl == null) {
                _this2.router.navigateByUrl('login');
              } else {}
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.backButtonSubscription = this.platform.backButton.subscribe(function () {
              if (_this3.router.url === '/tabs/tab1') {
                navigator['app'].exitApp();
              } else {
                _this3.navCtrl.navigateForward('/tabs/tab1');
              }
            });
          }
        }, {
          key: "keluar_aplikasi",
          value: function keluar_aplikasi() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Apakah anda yakin ingin keluar aplikasi ? ',
                        buttons: [{
                          text: 'Ya',
                          handler: function handler() {
                            navigator['app'].exitApp();
                          }
                        }, {
                          text: 'Tidak',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      this.actionSheet = _context.sent;
                      _context.next = 5;
                      return this.actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "alert",
          value: function alert(header, sub, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: header,
                        subHeader: sub,
                        message: msg,
                        buttons: ['OK']
                      });

                    case 2:
                      this.alert1 = _context2.sent;
                      _context2.next = 5;
                      return this.alert1.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this4 = this;

            var subs;
            this.platform.ready().then(function () {
              // this.platform.backButton.subscribe(hsl=>{
              _this4.platform.backButton.subscribeWithPriority(0, function () {
                _this4.routerOutlets.forEach(function (outlet) {
                  if (_this4.router.url == '/tabs/tab1') {
                    _this4.keluar_aplikasi();
                  } else if (_this4.router.url == '/login') {
                    _this4.keluar_aplikasi();
                  } else if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                  }
                });
              });

              _this4.statusBar.backgroundColorByHexString('#5ab1cb');

              _this4.statusBar.styleDefault();

              _this4.splashScreen.hide();

              _this4.firebaseDynamicLinks.onDynamicLink().subscribe(function (res) {
                var hasil = {};
                hasil = res;
                var str;
                str = hasil.deepLink;
                var arr;
                arr = str.split('referral_');

                _this4.alert('referral', 'test referral', arr[1]);

                _this4.userData.set_referral(arr[1]);

                console.log(arr, 'arr dynamic link'); //this.userData.set_referral()

                console.log(res, 'firebase dynamic link');
              }, function (error) {
                return console.log(error);
              });

              console.log("Tesss");
              var th = _this4;

              _this4.storage.get('username').then(function (hsl) {});

              var th = _this4;
              setTimeout(function () {
                th.fcm.onNotification().subscribe(function (data) {
                  console.log(data);

                  if (data.wasTapped) {
                    console.log("Received in background");

                    if (data.type == "PRODUCT") {
                      th.zone.run(function () {
                        th.router.navigateByUrl('/detailproduk/' + data.id);
                      });
                    } else if (data.type == "BLOG") {
                      th.zone.run(function () {
                        th.router.navigateByUrl('/detailblog');
                      });
                    } else if (data.type == "LINK") {
                      th.inAppBrowser.create(data.id, '_blank');
                    } else {
                      th.zone.run(function () {
                        th.router.navigateByUrl('/');
                      });
                    }
                  } else {
                    console.log("Received in foreground");
                    th.localNotifications.schedule({
                      id: 1,
                      title: data.title,
                      text: data.body,
                      data: {
                        id: data.id,
                        type: data.type
                      }
                    });
                    th.localNotifications.on("click").subscribe(function (notification) {
                      console.log(notification.data);

                      if (notification.data.type == "PRODUCT") {
                        th.zone.run(function () {
                          th.router.navigateByUrl('/detailproduk/' + notification.data.id);
                        });
                      } else if (notification.data.type == "BLOG") {
                        th.zone.run(function () {
                          th.router.navigateByUrl('/detailblog');
                        });
                      } else if (notification.data.type == "LINK") {
                        th.inAppBrowser.create(notification.data.id, '_blank');
                      } else {
                        th.zone.run(function () {
                          th.router.navigateByUrl('/');
                        });
                      }
                    });
                  }

                  ;
                });
                th.fcm.onTokenRefresh({
                  once: false
                }).subscribe(function (token) {
                  console.log(token);
                });
                th.fcm.getInitialPushPayload().then(function (data) {
                  if (data != null) {
                    if (data.type == "PRODUCT") {
                      th.zone.run(function () {
                        th.router.navigateByUrl('/detailproduk/' + data.id);
                      });
                    } else if (data.type == "BLOG") {
                      th.zone.run(function () {
                        th.router.navigateByUrl('/detailblog');
                      });
                    } else if (data.type == "LINK") {
                      th.inAppBrowser.create(data.id, '_blank');
                    } else {
                      th.zone.run(function () {
                        th.router.navigateByUrl('/');
                      });
                    }
                  }
                });
              }, 3000);
            });
          }
        }, {
          key: "checkLoginStatus",
          value: function checkLoginStatus() {
            var _this5 = this;

            return this.userData.isLoggedIn().then(function (loggedIn) {
              return _this5.updateLoggedInStatus(loggedIn);
            });
          }
        }, {
          key: "updateLoggedInStatus",
          value: function updateLoggedInStatus(loggedIn) {
            var _this6 = this;

            setTimeout(function () {
              if (loggedIn) {
                _this6.getToken();

                _this6.subscribeToTopic();
              }

              _this6.loggedIn = loggedIn;
            }, 300);
          }
        }, {
          key: "listenForLoginEvents",
          value: function listenForLoginEvents() {
            var _this7 = this;

            window.addEventListener('user:login', function () {
              _this7.updateLoggedInStatus(true);
            });
            window.addEventListener('user:signup', function () {
              _this7.updateLoggedInStatus(true);
            });
            window.addEventListener('user:logout', function () {
              _this7.updateLoggedInStatus(false);

              _this7.arr_sess = {};
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this8 = this;

            this.userData.logout().then(function () {
              _this8.unsubscribeFromTopic();

              return _this8.router.navigateByUrl('/login');
            });
          }
        }, {
          key: "subscribeToTopic",
          value: function subscribeToTopic() {
            this.fcm.subscribeToTopic('all');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var _this9 = this;

            this.fcm.getToken().then(function (token) {
              console.log(token);

              _this9.http2.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + 'save_fcm', {
                id_pel: _this9.arr_sess.id_pel,
                token: token
              }, {}).subscribe(function (data) {
                console.log(data);
              });
            });
          }
        }, {
          key: "unsubscribeFromTopic",
          value: function unsubscribeFromTopic() {
            this.fcm.unsubscribeFromTopic('all');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname.split('/')[1];
            console.log(path);

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_10__["ConstantService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: ngx_communicate__WEBPACK_IMPORTED_MODULE_9__["NgxCommunicateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"]
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_12__["LocalNotifications"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"]
        }, {
          type: _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_15__["FirebaseDynamicLinks"]
        }];
      };

      AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ngx_communicate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-communicate */
      "./node_modules/ngx-communicate/__ivy_ngcc__/fesm2015/ngx-communicate.js");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "./node_modules/@ionic-native/clipboard/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/firebase-dynamic-links/ngx */
      "./node_modules/@ionic-native/firebase-dynamic-links/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), ngx_communicate__WEBPACK_IMPORTED_MODULE_14__["NgxCommunicateModule"].forRoot()],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__["HTTP"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_16__["Clipboard"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_17__["Toast"], cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_18__["FCM"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_19__["LocalNotifications"], _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_20__["FirebaseDynamicLinks"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

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
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var API_RAJAONKIR = '';
      var BASE_URL = 'https://shop.uniarch.id/';
      var API_URL = BASE_URL + 'app/';
      var API_URL_SLIDER = API_URL;
      var IMAGE_URL_PRODUCT = BASE_URL + 'gambar/produk/';

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
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              var ctl = _this10.alertctrl;

              var alert = _this10.alertctrl.create({
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
          var _this11 = this;

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
            _this11.isLoggedIn();
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
            var _this12 = this;

            console.log(username, 'USERNAME');
            return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
              _this12.setUsername(username); // this.http.get(this.API_URL + 'login', {}, {})
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
            var _this13 = this;

            return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
              _this13.setUsername(username);

              return window.dispatchEvent(new CustomEvent('user:signup'));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this14 = this;

            return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
              _this14.authState.next(false);

              return _this14.storage.remove('username');
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
            var _this15 = this;

            return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
              _this15.authState.next(true);

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
            var _this16 = this;

            return this.getUsername().then(function (hsl) {
              _this16.session = hsl;
              _this16.session.photo = photo_profile;

              _this16.setUsername(_this16.session);
            });
          }
        }, {
          key: "get_photo_profile",
          value: function get_photo_profile() {
            var _this17 = this;

            return this.getUsername().then(function (hsl) {
              _this17.session = hsl;
              return _this17.session.photo;
            });
          }
        }, {
          key: "get_data_provinsi",
          value: function get_data_provinsi() {
            var _this18 = this;

            var promise = new Promise(function (resolve, reject) {
              _this18.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_provinsi', {}).subscribe(function (hasil) {
                console.log('hasil', 'hasil');
                resolve(hasil);
              });
            });
            return promise;
          }
        }, {
          key: "get_data_kota",
          value: function get_data_kota(provinsi) {
            var _this19 = this;

            var promise = new Promise(function (resolve, reject) {
              _this19.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kota', {
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
            var _this20 = this;

            var promise = new Promise(function (resolve, reject) {
              _this20.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kecamatan', {
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
            var _this21 = this;

            var promise = new Promise(function (resolve, reject) {
              _this21.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_short_url', {
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
            var _this22 = this;

            var promise = new Promise(function (resolve, reject) {
              _this22.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_submit_pendaftaran', {
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
            var _this23 = this;

            var promise = new Promise(function (resolve, reject) {
              _this23.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_update_pel', {
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
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        API_URL: 'http://localhost/customerloyalty/rest/',
        restURL: {
          baseUrl: 'https://dafacollection.net/app/',
          imagePath: 'https://dafacollection.net/gambar/produk/'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/mrian07/repo/Uniarch/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map