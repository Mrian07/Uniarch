(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Wallet</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"notification-icon-button\">\r\n      <ion-button class=\"btn_badge\" (click)=\"goto_checkout()\">\r\n          <ion-icon class=\"fa fa-shopping-cart\"></ion-icon>\r\n          <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <ion-card style=\"background: #fff;border-radius: 15px;\">\r\n    <ion-row style=\"margin:15px\">\r\n      <ion-col size=\"2\">\r\n        <p>\r\n          <ion-icon name=\"wallet\" class=\"icon-set\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n        <h6 class=\"title\" style=\"color: #222;\"><b>\r\n          {{data_wallet.saldo==null ? 0 : data_wallet.saldo | currency : 'IDR' : 'Rp. '}}\r\n        </b></h6>\r\n        <p class=\"title-small\" style=\"color: #222;\">Total Saldo anda.</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card style=\"background: #fff;border-radius: 15px;margin-top: 15px;\">\r\n    <ion-row style=\"margin:15px\">\r\n      <ion-col size=\"12\">Jumlah Penarikan</ion-col>\r\n      <ion-col>\r\n        <ion-input [(ngModel)]=\"total_widthdraw\" type=\"number\" placeholder=\"Masukkan Jumlah\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"save()\" expand=\"full\"\r\n        style=\"--background: var(--ion-color-primary);--border-radius:15px;\">Tarik</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer style=\"background: #fff;\">\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <ion-button size=\"small\" (click)=\"save()\"\r\n        style=\"color: #fff;height: 37px;--background: var(--ion-color-primary);width: 100%;--border-radius: 10px;\">\r\n        <b style=\"color: #fff;\">Tarik</b>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/wallet/wallet-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/wallet/wallet-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: WalletPageRoutingModule */

    /***/
    function srcAppWalletWalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
        return WalletPageRoutingModule;
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/wallet/wallet.page.ts");

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
      }];

      var WalletPageRoutingModule = function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      };

      WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/wallet/wallet.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.module.ts ***!
      \*****************************************/

    /*! exports provided: WalletPageModule */

    /***/
    function srcAppWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
        return WalletPageModule;
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wallet-routing.module */
      "./src/app/wallet/wallet-routing.module.ts");
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/wallet/wallet.page.ts");

      var WalletPageModule = function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      };

      WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
      })], WalletPageModule);
      /***/
    },

    /***/
    "./src/app/wallet/wallet.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "product {\n  font-size: 14px;\n}\n\n#avatar_product {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n\n#icon_cart {\n  color: #e29a9c;\n}\n\n.active_head_kate {\n  border-bottom: 2px solid gray;\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n}\n\n.label_kategori {\n  font-size: 11px;\n  width: 100%;\n  text-align: center;\n}\n\n.head_kate {\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n}\n\n.btn_cart {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  z-index: 10;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.font_12 {\n  font-size: 12px;\n}\n\n.padding_0 {\n  padding: 0px;\n}\n\n.harga_potongan {\n  color: red;\n  text-decoration: line-through;\n  font-weight: bold;\n}\n\n.product_disc {\n  background: red;\n  color: white;\n  font-weight: bold;\n  padding: 2px;\n}\n\n#nama_product {\n  width: 100%;\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  white-space: normal;\n  color: #7e7e7e;\n}\n\n.content_product {\n  width: 100%;\n  padding-top: 5px;\n}\n\n.product_price {\n  font-weight: bold;\n  color: #ccaa52;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n.div_img {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.product_name {\n  white-space: normal;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n.product-image {\n  width: 100%;\n}\n\n.col_product {\n  border: 1px solid #d4cece;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.small-content {\n  width: 95%;\n}\n\n.results-div {\n  border-bottom: 5%;\n}\n\n.results-div .results {\n  text-align: center;\n}\n\n.card-title {\n  font-size: 12px;\n  text-align: center;\n  height: 20px;\n}\n\n.product-description {\n  text-align: center;\n  font-size: 15px;\n  margin: 2px 0px 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.product-description .actual-price {\n  font-weight: 500;\n}\n\n.product-description .previous-price {\n  text-decoration: line-through;\n}\n\n.product-description .previous-price::before {\n  content: \"\";\n  width: 0px;\n  height: 100%;\n  border-right: solid 2px;\n  margin: 0px 6px 0px 3px;\n}\n\n.icon-set {\n  font-size: 30px;\n  color: var(--ion-color-primary);\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBQUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTUo7O0FBRlE7RUFDSSxtQkFBQTtBQUtaOztBQUhZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBS2hCOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUVDLFdBQUE7QUFRRDs7QUFOQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtBQVVKOztBQU5BO0VBRUMsaUJBQUE7QUFRRDs7QUFOQztFQUNDLGtCQUFBO0FBUUY7O0FBSEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDRCxZQUFBO0FBTUQ7O0FBSEE7RUFFSSxrQkFBQTtFQUNILGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtEOztBQUhDO0VBRUMsZ0JBQUE7QUFJRjs7QUFEQztFQUVDLDZCQUFBO0FBRUY7O0FBQUU7RUFFQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNHLHVCQUFBO0FBQ047O0FBR0E7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcm9kdWN0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiNhdmF0YXJfcHJvZHVjdHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiNpY29uX2NhcnR7XHJcbiAgICBjb2xvciA6ICNlMjlhOWM7XHJcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmFjdGl2ZV9oZWFkX2thdGV7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbi5sYWJlbF9rYXRlZ29yaXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxufVxyXG4uaGVhZF9rYXRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuLmJ0bl9jYXJ0e1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLm5vdGlmaWNhdGlvbi1pY29uLWJ1dHRvbiB7XHJcbiAgICAgICAgLmJ0bl9iYWRnZSB7XHJcbiAgICAgICAgICAgIC0tb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbi5mb250XzEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5wYWRkaW5nXzB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmhhcmdhX3BvdG9uZ2Fue1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJvZHVjdF9kaXNje1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuI25hbWFfcHJvZHVjdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGNvbG9yOiM3ZTdlN2U7XHJcbn1cclxuXHJcbi5jb250ZW50X3Byb2R1Y3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wIDogNXB4O1xyXG4gICAgLy8gYm9yZGVyIDogMXB4IHNvbGlkICNkNGNlY2U7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlO1xyXG59XHJcbi5wcm9kdWN0X3ByaWNle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvciA6ICNjY2FhNTI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmRpdl9pbWd7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4ucHJvZHVjdF9uYW1le1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucHJvZHVjdC1pbWFnZVxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbF9wcm9kdWN0e1xyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkICNkNGNlY2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMTIpOyAgICAgXHJcbn1cclxuLnNtYWxsLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogOTUlO1xyXG5cdC8vIGhlaWdodDogMTEwcHg7ICAgXHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI0ZBRUJENztcclxufVxyXG4ucmVzdWx0cy1kaXZ7XHJcblxyXG5cdGJvcmRlci1ib3R0b206IDUlO1xyXG5cclxuXHQucmVzdWx0c3tcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4uY2FyZC10aXRsZXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGVzY3JpcHRpb25cclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRtYXJnaW46IDJweCAwcHggMHB4O1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0LmFjdHVhbC1wcmljZVxyXG5cdHtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG5cclxuXHQucHJldmlvdXMtcHJpY2VcclxuXHR7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHJcblx0XHQmOjpiZWZvcmVcclxuXHRcdHtcclxuXHRcdFx0Y29udGVudDogJyc7XHJcblx0XHRcdHdpZHRoOiAwcHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAycHg7XHJcblx0XHQgICAgbWFyZ2luOiAwcHggNnB4IDBweCAzcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5pY29uLXNldHtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/wallet/wallet.page.ts":
    /*!***************************************!*\
      !*** ./src/app/wallet/wallet.page.ts ***!
      \***************************************/

    /*! exports provided: WalletPage */

    /***/
    function srcAppWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
        return WalletPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");

      var WalletPage = /*#__PURE__*/function () {
        function WalletPage(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, userdata, constant, actionSheetController) {
          _classCallCheck(this, WalletPage);

          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.userdata = userdata;
          this.constant = constant;
          this.actionSheetController = actionSheetController;
          this.data_wallet = {};
        }

        _createClass(WalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('view wenter');
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this.router.navigateByUrl('login');
              } else {
                _this.data_user = hsl;

                _this.get_data_wallet();

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
          key: "goto_checkout",
          value: function goto_checkout() {
            this.router.navigateByUrl('checkout');
          }
        }, {
          key: "save",
          value: function save() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.data_wallet.saldo == null || this.data_wallet.saldo == 0)) {
                        _context.next = 3;
                        break;
                      }

                      this.constant.show_alert('Error', '', 'Saldo anda tidak cukup');
                      return _context.abrupt("return");

                    case 3:
                      if (!(this.data_wallet.saldo < this.total_widthdraw)) {
                        _context.next = 6;
                        break;
                      }

                      this.constant.show_alert('Error', '', 'Total widthdraw melebihi saldo yang tersedia');
                      return _context.abrupt("return");

                    case 6:
                      _context.next = 8;
                      return this.loadingctrl.create({
                        message: 'Silahkan tunggu....'
                      });

                    case 8:
                      this.loading = _context.sent;
                      this.loading.present();
                      this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + 'api_widthdraw', {
                        id_pel: this.data_user.id_pel,
                        total: this.total_widthdraw
                      }).subscribe(function (hsl) {
                        _this3.loading.dismiss();

                        var hasil = {};
                        hasil = hsl;

                        if (hasil.code == 1) {
                          _this3.constant.show_alert('Sukses', '', hasil.msg).then(function (hsl) {
                            _this3.router.navigateByUrl('/product');
                          });
                        } else {
                          _this3.constant.show_alert('Error', '', hasil.msg).then(function (hsl) {});
                        }
                      });

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "get_data_wallet",
          value: function get_data_wallet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

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
                      this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + 'api_wallet', {
                        id_pel: this.data_user.id_pel
                      }).subscribe(function (hsl) {
                        _this4.loading.dismiss();

                        var hasil = {};
                        hasil = hsl;
                        _this4.data_wallet = hasil.data;
                        console.log(hsl, 'HASIL');
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return WalletPage;
      }();

      WalletPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_6__["DataCartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }];
      };

      WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wallet.page.scss */
        "./src/app/wallet/wallet.page.scss"))["default"]]
      })], WalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=wallet-wallet-module-es5.js.map