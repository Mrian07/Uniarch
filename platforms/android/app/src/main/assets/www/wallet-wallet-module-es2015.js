(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Wallet</ion-title>\n    <!-- <ion-buttons slot=\"end\" class=\"notification-icon-button\">\n      <ion-button class=\"btn_badge\" (click)=\"goto_checkout()\">\n          <ion-icon class=\"fa fa-shopping-cart\"></ion-icon>\n          <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n\n  <ion-card style=\"background: #fff;border-radius: 15px;\">\n    <ion-row style=\"margin:15px\">\n      <ion-col size=\"2\">\n        <p>\n          <ion-icon name=\"wallet\" class=\"icon-set\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n        </p>\n      </ion-col>\n      <ion-col size=\"10\">\n        <h6 class=\"title\" style=\"color: #222;\"><b>\n          {{data_wallet.saldo==null ? 0 : data_wallet.saldo | currency : 'IDR' : 'Rp. '}}\n        </b></h6>\n        <p class=\"title-small\" style=\"color: #222;\">Total Saldo anda.</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card style=\"background: #fff;border-radius: 15px;margin-top: 15px;\">\n    <ion-row style=\"margin:15px\">\n      <ion-col size=\"12\">Jumlah Penarikan</ion-col>\n      <ion-col>\n        <ion-input [(ngModel)]=\"total_widthdraw\" type=\"number\" placeholder=\"Masukkan Jumlah\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n        <ion-button (click)=\"save()\" expand=\"full\"\n        style=\"--background: var(--ion-color-primary);--border-radius:15px;\">Tarik</ion-button>\n      </ion-col>\n    </ion-row> -->\n  </ion-card>\n</ion-content>\n\n<ion-footer style=\"background: #fff;\">\n\n  <ion-row style=\"padding:0px 10px;\">\n    <ion-col size=\"12\">\n      <ion-button size=\"small\" (click)=\"save()\"\n        style=\"color: #fff;height: 37px;--background: var(--ion-color-primary);width: 100%;--border-radius: 10px;\">\n        <b style=\"color: #fff;\">Tarik</b>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/wallet/wallet-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/wallet/wallet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function() { return WalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.page */ "./src/app/wallet/wallet.page.ts");




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ "./src/app/wallet/wallet.module.ts":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.module.ts ***!
  \*****************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-routing.module */ "./src/app/wallet/wallet-routing.module.ts");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/wallet/wallet.page.ts");







let WalletPageModule = class WalletPageModule {
};
WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
    })
], WalletPageModule);



/***/ }),

/***/ "./src/app/wallet/wallet.page.scss":
/*!*****************************************!*\
  !*** ./src/app/wallet/wallet.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("product {\n  font-size: 14px;\n}\n\n#avatar_product {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n\n#icon_cart {\n  color: #e29a9c;\n}\n\n.active_head_kate {\n  border-bottom: 2px solid gray;\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n}\n\n.label_kategori {\n  font-size: 11px;\n  width: 100%;\n  text-align: center;\n}\n\n.head_kate {\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n}\n\n.btn_cart {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  z-index: 10;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.font_12 {\n  font-size: 12px;\n}\n\n.padding_0 {\n  padding: 0px;\n}\n\n.harga_potongan {\n  color: red;\n  text-decoration: line-through;\n  font-weight: bold;\n}\n\n.product_disc {\n  background: red;\n  color: white;\n  font-weight: bold;\n  padding: 2px;\n}\n\n#nama_product {\n  width: 100%;\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  white-space: normal;\n  color: #7e7e7e;\n}\n\n.content_product {\n  width: 100%;\n  padding-top: 5px;\n}\n\n.product_price {\n  font-weight: bold;\n  color: #ccaa52;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n.div_img {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.product_name {\n  white-space: normal;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n.product-image {\n  width: 100%;\n}\n\n.col_product {\n  border: 1px solid #d4cece;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.small-content {\n  width: 95%;\n}\n\n.results-div {\n  border-bottom: 5%;\n}\n\n.results-div .results {\n  text-align: center;\n}\n\n.card-title {\n  font-size: 12px;\n  text-align: center;\n  height: 20px;\n}\n\n.product-description {\n  text-align: center;\n  font-size: 15px;\n  margin: 2px 0px 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.product-description .actual-price {\n  font-weight: 500;\n}\n\n.product-description .previous-price {\n  text-decoration: line-through;\n}\n\n.product-description .previous-price::before {\n  content: \"\";\n  width: 0px;\n  height: 100%;\n  border-right: solid 2px;\n  margin: 0px 6px 0px 3px;\n}\n\n.icon-set {\n  font-size: 30px;\n  color: var(--ion-color-primary);\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBQUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTUo7O0FBRlE7RUFDSSxtQkFBQTtBQUtaOztBQUhZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBS2hCOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUVDLFdBQUE7QUFRRDs7QUFOQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtBQVVKOztBQU5BO0VBRUMsaUJBQUE7QUFRRDs7QUFOQztFQUNDLGtCQUFBO0FBUUY7O0FBSEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDRCxZQUFBO0FBTUQ7O0FBSEE7RUFFSSxrQkFBQTtFQUNILGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtEOztBQUhDO0VBRUMsZ0JBQUE7QUFJRjs7QUFEQztFQUVDLDZCQUFBO0FBRUY7O0FBQUU7RUFFQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNHLHVCQUFBO0FBQ047O0FBR0E7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwcm9kdWN0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbiNhdmF0YXJfcHJvZHVjdHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuI2ljb25fY2FydHtcbiAgICBjb2xvciA6ICNlMjlhOWM7XG4gICAgLy8gZm9udC1zaXplOiAxNHB4O1xufVxuLmFjdGl2ZV9oZWFkX2thdGV7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5sYWJlbF9rYXRlZ29yaXtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbn1cbi5oZWFkX2thdGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5idG5fY2FydHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgei1pbmRleDogMTA7XG59XG5pb24tdG9vbGJhciB7XG4gICAgLm5vdGlmaWNhdGlvbi1pY29uLWJ1dHRvbiB7XG4gICAgICAgIC5idG5fYmFkZ2Uge1xuICAgICAgICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbi5mb250XzEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWRkaW5nXzB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLmhhcmdhX3BvdG9uZ2Fue1xuICAgIGNvbG9yOnJlZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0X2Rpc2N7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAycHg7XG59XG4jbmFtYV9wcm9kdWN0e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgY29sb3I6IzdlN2U3ZTtcbn1cblxuLmNvbnRlbnRfcHJvZHVjdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcCA6IDVweDtcbiAgICAvLyBib3JkZXIgOiAxcHggc29saWQgI2Q0Y2VjZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlO1xufVxuLnByb2R1Y3RfcHJpY2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3IgOiAjY2NhYTUyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZGl2X2ltZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucHJvZHVjdF9uYW1le1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbSA6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1pbWFnZVxue1xuXHR3aWR0aDogMTAwJTtcbn1cbi5jb2xfcHJvZHVjdHtcbiAgICBib3JkZXIgOiAxcHggc29saWQgI2Q0Y2VjZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwLjIpLDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKTsgICAgIFxufVxuLnNtYWxsLWNvbnRlbnR7XG4gICAgd2lkdGg6IDk1JTtcblx0Ly8gaGVpZ2h0OiAxMTBweDsgICBcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogI0ZBRUJENztcbn1cbi5yZXN1bHRzLWRpdntcblxuXHRib3JkZXItYm90dG9tOiA1JTtcblxuXHQucmVzdWx0c3tcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbn1cblxuXG4uY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGhlaWdodDogMjBweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb25cbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0bWFyZ2luOiAycHggMHB4IDBweDtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cblx0LmFjdHVhbC1wcmljZVxuXHR7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXG5cdC5wcmV2aW91cy1wcmljZVxuXHR7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cblx0XHQmOjpiZWZvcmVcblx0XHR7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdHdpZHRoOiAwcHg7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRib3JkZXItcmlnaHQ6IHNvbGlkIDJweDtcblx0XHQgICAgbWFyZ2luOiAwcHggNnB4IDBweCAzcHg7XG5cdFx0fVxuXHR9XG59XG4uaWNvbi1zZXR7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46YXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/wallet/wallet.page.ts":
/*!***************************************!*\
  !*** ./src/app/wallet/wallet.page.ts ***!
  \***************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");









let WalletPage = class WalletPage {
    constructor(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, userdata, constant, actionSheetController) {
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
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('view wenter');
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            if (hsl == null) {
                this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.get_data_wallet();
                this.get_total_keranjang();
            }
        });
    }
    get_total_keranjang() {
        this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
            console.log(hasil, 'keranjang');
            let hsl = {};
            hsl = hasil;
            this.total_keranjang = hsl.total_qty;
        });
    }
    goto_checkout() {
        this.router.navigateByUrl('checkout');
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data_wallet.saldo == null || this.data_wallet.saldo == 0) {
                this.constant.show_alert('Error', '', 'Saldo anda tidak cukup');
                return;
            }
            if (this.data_wallet.saldo < this.total_widthdraw) {
                this.constant.show_alert('Error', '', 'Total widthdraw melebihi saldo yang tersedia');
                return;
            }
            this.loading = yield this.loadingctrl.create({
                message: 'Silahkan tunggu....'
            });
            this.loading.present();
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + 'api_widthdraw', { id_pel: this.data_user.id_pel, total: this.total_widthdraw }).subscribe((hsl) => {
                this.loading.dismiss();
                let hasil = {};
                hasil = hsl;
                if (hasil.code == 1) {
                    this.constant.show_alert('Sukses', '', hasil.msg).then(hsl => {
                        this.router.navigateByUrl('/product');
                    });
                }
                else {
                    this.constant.show_alert('Error', '', hasil.msg).then(hsl => {
                    });
                }
            });
        });
    }
    get_data_wallet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Silahkan tunggu....'
            });
            this.loading.present();
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + 'api_wallet', { id_pel: this.data_user.id_pel }).subscribe((hsl) => {
                this.loading.dismiss();
                let hasil = {};
                hasil = hsl;
                this.data_wallet = hasil.data;
                console.log(hsl, 'HASIL');
            });
        });
    }
};
WalletPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_6__["DataCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wallet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wallet.page.scss */ "./src/app/wallet/wallet.page.scss")).default]
    })
], WalletPage);



/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module-es2015.js.map