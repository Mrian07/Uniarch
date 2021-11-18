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
/* harmony default export */ __webpack_exports__["default"] = ("product {\n  font-size: 14px;\n}\n\n#avatar_product {\n  width: 80px;\n  height: 80px;\n  margin-right: 20px;\n}\n\n#icon_cart {\n  color: #e29a9c;\n}\n\n.active_head_kate {\n  border-bottom: 2px solid gray;\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n}\n\n.label_kategori {\n  font-size: 11px;\n  width: 100%;\n  text-align: center;\n}\n\n.head_kate {\n  width: 100%;\n  text-align: center;\n  font-size: 11px;\n}\n\n.btn_cart {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  z-index: 10;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.font_12 {\n  font-size: 12px;\n}\n\n.padding_0 {\n  padding: 0px;\n}\n\n.harga_potongan {\n  color: red;\n  text-decoration: line-through;\n  font-weight: bold;\n}\n\n.product_disc {\n  background: red;\n  color: white;\n  font-weight: bold;\n  padding: 2px;\n}\n\n#nama_product {\n  width: 100%;\n  margin-top: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  white-space: normal;\n  color: #7e7e7e;\n}\n\n.content_product {\n  width: 100%;\n  padding-top: 5px;\n}\n\n.product_price {\n  font-weight: bold;\n  color: #ccaa52;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n.div_img {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.product_name {\n  white-space: normal;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n.product-image {\n  width: 100%;\n}\n\n.col_product {\n  border: 1px solid #d4cece;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.small-content {\n  width: 95%;\n}\n\n.results-div {\n  border-bottom: 5%;\n}\n\n.results-div .results {\n  text-align: center;\n}\n\n.card-title {\n  font-size: 12px;\n  text-align: center;\n  height: 20px;\n}\n\n.product-description {\n  text-align: center;\n  font-size: 15px;\n  margin: 2px 0px 0px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.product-description .actual-price {\n  font-weight: 500;\n}\n\n.product-description .previous-price {\n  text-decoration: line-through;\n}\n\n.product-description .previous-price::before {\n  content: '';\n  width: 0px;\n  height: 100%;\n  border-right: solid 2px;\n  margin: 0px 6px 0px 3px;\n}\n\n.icon-set {\n  font-size: 30px;\n  color: var(--ion-color-primary);\n  margin: auto;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0FBQ25COztBQUNBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFFdEI7O0FBQUE7RUFDSSxjQUFlO0FBR25COztBQUFBO0VBQ0ksNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUduQjs7QUFEQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQW1CO0FBSXZCOztBQUZBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBS25COztBQUhBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBZ0I7RUFDaEIsbUJBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0FBTWY7O0FBSkE7RUFHWSxtQkFBVztBQUt2Qjs7QUFSQTtFQU1nQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFNL0I7O0FBREE7RUFDSSxlQUFlO0FBSW5COztBQUZBO0VBQ0ksWUFBWTtBQUtoQjs7QUFIQTtFQUNJLFVBQVM7RUFDVCw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBTXJCOztBQUpBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQU9oQjs7QUFMQTtFQUNJLFdBQVU7RUFDVixnQkFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWE7QUFRakI7O0FBTEE7RUFDSSxXQUFXO0VBQ1gsZ0JBQWlCO0FBUXJCOztBQUpBO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBT3RCOztBQUxBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQVF0Qjs7QUFOQTtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQW1CO0VBQ25CLGVBQWU7QUFTbkI7O0FBUEE7RUFFQyxXQUFXO0FBU1o7O0FBUEE7RUFDSSx5QkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLCtHQUFvRztBQVV4Rzs7QUFSQTtFQUNJLFVBQVU7QUFXZDs7QUFQQTtFQUVDLGlCQUFpQjtBQVNsQjs7QUFYQTtFQUtFLGtCQUFrQjtBQVVwQjs7QUFMQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbkIsWUFBWTtBQVFiOztBQUxBO0VBRUksa0JBQWtCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFPakI7O0FBZEE7RUFXRSxnQkFBZ0I7QUFPbEI7O0FBbEJBO0VBZ0JFLDZCQUE2QjtBQU0vQjs7QUF0QkE7RUFvQkcsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBQ3BCLHVCQUF1QjtBQU03Qjs7QUFGQTtFQUNJLGVBQWM7RUFDZCwrQkFBK0I7RUFDL0IsWUFBVztFQUNYLGNBQWM7QUFLbEIiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInByb2R1Y3R7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuI2F2YXRhcl9wcm9kdWN0e1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4jaWNvbl9jYXJ0e1xuICAgIGNvbG9yIDogI2UyOWE5YztcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XG59XG4uYWN0aXZlX2hlYWRfa2F0ZXtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLmxhYmVsX2thdGVnb3Jpe1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xufVxuLmhlYWRfa2F0ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLmJ0bl9jYXJ0e1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDVweDtcbiAgICB6LWluZGV4OiAxMDtcbn1cbmlvbi10b29sYmFyIHtcbiAgICAubm90aWZpY2F0aW9uLWljb24tYnV0dG9uIHtcbiAgICAgICAgLmJ0bl9iYWRnZSB7XG4gICAgICAgICAgICAtLW92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuLmZvbnRfMTJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBhZGRpbmdfMHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uaGFyZ2FfcG90b25nYW57XG4gICAgY29sb3I6cmVkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2R1Y3RfZGlzY3tcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDJweDtcbn1cbiNuYW1hX3Byb2R1Y3R7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBjb2xvcjojN2U3ZTdlO1xufVxuXG4uY29udGVudF9wcm9kdWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wIDogNXB4O1xuICAgIC8vIGJvcmRlciA6IDFweCBzb2xpZCAjZDRjZWNlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U7XG59XG4ucHJvZHVjdF9wcmljZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvciA6ICNjY2FhNTI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5kaXZfaW1ne1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0X25hbWV7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tIDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0LWltYWdlXG57XG5cdHdpZHRoOiAxMDAlO1xufVxuLmNvbF9wcm9kdWN0e1xuICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZDRjZWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICBcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDFweCA1cHggMCByZ2JhKDAsMCwwLDAuMTIpOyAgICAgXG59XG4uc21hbGwtY29udGVudHtcbiAgICB3aWR0aDogOTUlO1xuXHQvLyBoZWlnaHQ6IDExMHB4OyAgIFxuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFFQkQ3O1xufVxuLnJlc3VsdHMtZGl2e1xuXG5cdGJvcmRlci1ib3R0b206IDUlO1xuXG5cdC5yZXN1bHRze1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxufVxuXG5cbi5jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblx0aGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvblxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRtYXJnaW46IDJweCAwcHggMHB4O1xuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHQuYWN0dWFsLXByaWNlXG5cdHtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHR9XG5cblx0LnByZXZpb3VzLXByaWNlXG5cdHtcblx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcblxuXHRcdCY6OmJlZm9yZVxuXHRcdHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0d2lkdGg6IDBweDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdGJvcmRlci1yaWdodDogc29saWQgMnB4O1xuXHRcdCAgICBtYXJnaW46IDBweCA2cHggMHB4IDNweDtcblx0XHR9XG5cdH1cbn1cbi5pY29uLXNldHtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

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
        this.data_wallet = [];
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