(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Transaksi</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar style=\"border-radius: 20px;\" [(ngModel)]=\"queryText\" (search)=\"search_product($event)\" placeholder=\"Cari Order Id\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n  <ion-refresher slot=\"fixed\" disabled=\"false\" (ionRefresh)=\"doRefresh($event)\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">  \r\n    <ion-refresher-content  \r\n    pullingIcon=\"arrow-dropdown\"  \r\n    pullingText=\"Tarik untuk Refresh\"  \r\n    refreshingSpinner=\"circles\"  \r\n    refreshingText=\"Memuat Data...\">\r\n  </ion-refresher-content>  \r\n</ion-refresher>   \r\n\r\n<ion-list style=\"background: var(--ion-color-bg);padding-top: 0px;\">\r\n  <div style=\"padding: 0px 10px;--background: var(--ion-color-bg);\" *ngFor=\"let data of list_product; let i = index;\">\r\n    <ion-row \r\n      style=\"padding-right: 0px;margin-top:10px;background:#fff;box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);border-radius: 15px;\">\r\n      <ion-col size=\"3\" style=\"margin: 0px;text-align: center;\"(click)=\"goto_detail(data.id_order)\">\r\n        <img src=\"assets/imgs/bag.png\" alt=\"Foto\"\r\n          style=\"border-radius: 50px;width: 75px;height: 75px;object-fit: cover;\">\r\n      </ion-col>\r\n      <ion-col size=\"9\" style=\"padding-top: 10px;\"(click)=\"goto_detail(data.id_order)\">\r\n        <p style=\"font-weight: 500;color: #5a5a5a;margin: 0px;\">#{{data.id_order}}</p>\r\n        <h6 style=\"margin: 0px;\">{{data.grand_total | currency : 'IDR' : 'Rp. ' }}</h6>\r\n        <h6 style=\"margin: 0px;\" *ngIf=\"data.status_order == 0\">Pesanan Baru</h6>\r\n        <h6 style=\"margin: 0px;\" *ngIf=\"data.status_order == 1\">Menunggu Transfer</h6>\r\n        <h6 style=\"margin: 0px;\" *ngIf=\"data.status_order == 2\">Dalam Proses</h6>\r\n        <h6 style=\"margin: 0px;\" *ngIf=\"data.status_order == 3\">Dalam Pengiriman</h6>\r\n        <h6 style=\"margin: 0px;\" *ngIf=\"data.status_order == 4\">Paket di terima</h6>\r\n        <h6 style=\"margin-top: 3px;padding: 3px 10px;border-radius: 20px;font-size: 14px;text-transform: capitalize;display: inline-block;background: #e13838;color: #fff;\">\r\n          {{data.status_pembayaran == 0 ? 'Belum Lunas' : 'Lunas' }}\r\n        </h6>\r\n      </ion-col>\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <hr style=\"margin: 0px;\">\r\n        <ion-button size=\"small\" *ngIf=\"data.status_pembayaran==0\" (click)=\"konfirmasi(data.id_order)\"\r\n          style=\"color: #fff;height: 32px;--background: var(--ion-color-primary);width: 90%;--border-radius: 10px;margin-top: 10px;\">Konfirmasi\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-list>\r\n\r\n<ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n</ion-infinite-scroll> \r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \r\n  <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n  <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\r\n  <ion-fab-button>\r\n      <img src=\"assets/imgs/bag.png\">\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "product {\n  font-size: 14px;\n}\n\n#avatar_product {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n\n#icon_cart {\n  color: #e29a9c;\n}\n\n.toolbar-background {\n  background: var(--ion-color-primary) !important;\n  --background: var(--ion-color-primary) !important;\n}\n\nion-toolbar {\n  background: var(--ion-color-primary) !important;\n  --background: var(--ion-color-primary) !important;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.font_12 {\n  font-size: 12px;\n}\n\n.padding_0 {\n  padding: 0px;\n}\n\n.harga_potongan {\n  color: red;\n  text-decoration: line-through;\n  font-weight: bold;\n}\n\n.product_disc {\n  background: red;\n  color: white;\n  font-weight: bold;\n  padding: 2px;\n}\n\n#nama_product {\n  width: 100%;\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  white-space: normal;\n  color: #7e7e7e;\n}\n\n.content_product {\n  width: 100%;\n  padding-top: 5px;\n}\n\n.product_price {\n  font-weight: bold;\n  color: #ccaa52;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n.div_img {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.product_name {\n  white-space: normal;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n.product-image {\n  width: 100%;\n}\n\n.col_product {\n  border: 1px solid #d4cece;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.small-content {\n  width: 95%;\n}\n\n.results-div {\n  border-bottom: 5%;\n}\n\n.results-div .results {\n  text-align: center;\n}\n\n.card-title {\n  font-size: 12px;\n  text-align: center;\n  height: 20px;\n}\n\n.product-description {\n  text-align: center;\n  font-size: 15px;\n  margin: 2px 0px 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.product-description .actual-price {\n  font-weight: 500;\n}\n\n.product-description .previous-price {\n  text-decoration: line-through;\n}\n\n.product-description .previous-price::before {\n  content: \"\";\n  width: 0px;\n  height: 100%;\n  border-right: solid 2px;\n  margin: 0px 6px 0px 3px;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  --border-radius: 20px !important;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFBQTtFQUNJLCtDQUFBO0VBQ0EsaURBQUE7QUFHSjs7QUFBQTtFQUNJLCtDQUFBO0VBQ0EsaURBQUE7QUFHSjs7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7O0FBQ1k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDaEI7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBRUMsV0FBQTtBQUlEOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7QUFNSjs7QUFGQTtFQUVDLGlCQUFBO0FBSUQ7O0FBRkM7RUFDQyxrQkFBQTtBQUlGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0QsWUFBQTtBQUVEOztBQUNBO0VBRUksa0JBQUE7RUFDSCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFDQztFQUVDLGdCQUFBO0FBQUY7O0FBR0M7RUFFQyw2QkFBQTtBQUZGOztBQUlFO0VBRUMsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDRyx1QkFBQTtBQUhOOztBQVFBO0VBQ0ksZ0NBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcm9kdWN0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiNhdmF0YXJfcHJvZHVjdHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiNpY29uX2NhcnR7XHJcbiAgICBjb2xvciA6ICNlMjlhOWM7XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgLm5vdGlmaWNhdGlvbi1pY29uLWJ1dHRvbiB7XHJcbiAgICAgICAgLmJ0bl9iYWRnZSB7XHJcbiAgICAgICAgICAgIC0tb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbi5mb250XzEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5wYWRkaW5nXzB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmhhcmdhX3BvdG9uZ2Fue1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJvZHVjdF9kaXNje1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuI25hbWFfcHJvZHVjdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGNvbG9yOiM3ZTdlN2U7XHJcbn1cclxuXHJcbi5jb250ZW50X3Byb2R1Y3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wIDogNXB4O1xyXG4gICAgLy8gYm9yZGVyIDogMXB4IHNvbGlkICNkNGNlY2U7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlO1xyXG59XHJcbi5wcm9kdWN0X3ByaWNle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvciA6ICNjY2FhNTI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmRpdl9pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4ucHJvZHVjdF9uYW1le1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucHJvZHVjdC1pbWFnZVxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbF9wcm9kdWN0e1xyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkICNkNGNlY2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKTsgICAgIFxyXG59XHJcbi5zbWFsbC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDk1JTtcclxuXHQvLyBoZWlnaHQ6IDExMHB4OyAgIFxyXG5cdC8vIGJhY2tncm91bmQtY29sb3I6ICNGQUVCRDc7XHJcbn1cclxuLnJlc3VsdHMtZGl2e1xyXG5cclxuXHRib3JkZXItYm90dG9tOiA1JTtcclxuXHJcblx0LnJlc3VsdHN7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWFyZ2luOiAycHggMHB4IDBweDtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG5cdC5hY3R1YWwtcHJpY2VcclxuXHR7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdH1cclxuXHJcblx0LnByZXZpb3VzLXByaWNlXHJcblx0e1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblxyXG5cdFx0Jjo6YmVmb3JlXHJcblx0XHR7XHJcblx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHR3aWR0aDogMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGJvcmRlci1yaWdodDogc29saWQgMnB4O1xyXG5cdFx0ICAgIG1hcmdpbjogMHB4IDZweCAwcHggM3B4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgLy8gbGVmdDogMThweDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
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


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts"); // import { ProductFilterPage } from '../../product-filter/product-filter.page';
      // import { NgxCommunicateService } from 'ngx-communicate';
      // import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
      // import { trigger, state, style, animate, transition } from '@angular/animations';


      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, userdata) {
          _classCallCheck(this, Tab2Page);

          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.userdata = userdata;
          this.list_product = [];
          this.arr = {};
          this.queryText = '';
          this.data_user = {};
          this.hide_header = 'shown';
          this.status_pembayaran = '';
          this.status_order = '';
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {// console.log('init riwayat order.......');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            var userid = localStorage.getItem('userid');
            console.log('userid', userid);
            console.log('riwayat order will enter');
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this.router.navigateByUrl('login');
              } else {
                _this.data_user = hsl;

                _this.get_total_keranjang();

                _this.get_product('refresh', '');
              }
            }); // const userid = localStorage.getItem('userid');
            // console.log('userid', userid);
            // this.get_total_keranjang();
            // this.get_product('refresh', '');
          }
        }, {
          key: "pilih_pembayaran",
          value: function pilih_pembayaran($event) {
            this.status_pembayaran = $event.target.value;
            console.log(this.status_pembayaran, 'status_pembayaran');
            this.get_product('refresh', null);
          }
        }, {
          key: "pilih_status",
          value: function pilih_status($event) {
            this.status_order = $event.target.value;
            console.log(this.status_order, 'status_pembayaran');
            this.get_product('refresh', null);
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
          } // async presentFilter() {
          //   const modal = await this.modalCtrl.create({
          //     component: ProductFilterPage,
          //     componentProps: { 
          //       selected_category : this.selected_category,
          //       selected_sub_category : this.selected_sub_category,
          //       min_price : this.min_price,
          //       max_price : this.max_price,
          //       order : this.order,        
          //      }
          //   });
          //   await modal.present();
          //   const { data } = await modal.onWillDismiss();
          //   console.log(data, 'data from modal')
          //   if (data != null) {
          //     this.selected_category = data.selected_category;
          //     this.selected_sub_category = data.selected_sub_category;
          //     this.min_price = data.min_price;
          //     this.max_price = data.max_price;
          //     this.order = data.order;
          //     this.get_product('refresh', '');
          //   }
          // }

        }, {
          key: "goto_detail",
          value: function goto_detail(id) {
            this.router.navigateByUrl('/detailtransaksi/' + id);
          }
        }, {
          key: "konfirmasi",
          value: function konfirmasi(id) {
            this.router.navigateByUrl('/konfirmasi/' + id);
          }
        }, {
          key: "goto_checkout",
          value: function goto_checkout() {
            this.router.navigateByUrl('checkout');
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.get_product('refresh', event);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            console.log('load more? ', this.list_product);

            if (this.list_product.length == 0) {
              event.target.complete();
              return;
            }

            this.get_product('loadmore', event);
          }
        }, {
          key: "search_product",
          value: function search_product($event) {
            console.log(this.queryText.length);
            this.get_product('refresh', '');
          }
        }, {
          key: "get_product",
          value: function get_product(type, event) {
            var _this3 = this;

            console.log('get riwayat order.......', type, event);
            console.log('ID_PEL', this.data_user.id_pel);
            if (type == 'refresh') this.list_product = [];
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'api_get_riwayat_order', {
              offset: this.list_product.length,
              type: type,
              cari: this.queryText,
              selected_category: this.selected_category,
              selected_sub_category: this.selected_sub_category,
              min_price: this.min_price,
              max_price: this.max_price,
              order: this.order,
              id_pel: this.data_user.id_pel,
              status_pembayaran: this.status_pembayaran,
              status_order: this.status_order
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              console.log(data, 'map');
              return data.data;
            })).subscribe(function (hasil) {
              _this3.arr = hasil;

              if (type == 'refresh') {
                _this3.list_product = _this3.arr;
                if (event) event.target.complete();
              } else {
                _this3.arr.forEach(function (element) {
                  _this3.list_product.push(element);
                });

                if (event) event.target.complete();
              }

              console.log(_this3.list_product, 'PRODUCT');
            });
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__["DataCartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map