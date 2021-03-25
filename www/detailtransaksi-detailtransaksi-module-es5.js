(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailtransaksi-detailtransaksi-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/detailtransaksi/detailtransaksi.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailtransaksi/detailtransaksi.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDetailtransaksiDetailtransaksiPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button defaultHref=\"/riwayat-order\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Detail Transaksi</ion-title>\r\n      <!-- <ion-buttons slot=\"end\" class=\"notification-icon-button\">\r\n        <ion-button class=\"btn_badge\" (click)=\"goto_checkout()\">\r\n            <ion-icon class=\"fa fa-shopping-cart\"></ion-icon>\r\n            <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n        </ion-button>\r\n      </ion-buttons>-->\r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">\r\n        Data Order\r\n      </ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content [innerHTML] = \"data_order.data_order\"></ion-card-content>\r\n  </ion-card>\r\n\r\n <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">Pengiriman</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content [innerHTML] = \"data_order.pengiriman\"></ion-card-content>\r\n  </ion-card> \r\n\r\n  <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">Penerima</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content [innerHTML] = \"data_order.penerima\"></ion-card-content>\r\n  </ion-card> \r\n\r\n  <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">Informasi Produk</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"border-bottom: 1px solid gray;\" *ngFor=\"let item of detail_order\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"judul_detail_order\">Nama Produk</ion-col>\r\n          <ion-col size=\"6\" class=\"item_detail_order\">{{item.nama_pro_order}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"judul_detail_order\">Jumlah</ion-col>\r\n          <ion-col size=\"6\" class=\"item_detail_order\">{{item.qty_pro_order}}</ion-col>\r\n        </ion-row>   \r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"judul_detail_order\">Berat</ion-col>\r\n          <ion-col size=\"6\" class=\"item_detail_order\">{{item.berat}} Kg</ion-col>\r\n        </ion-row> \r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"judul_detail_order\">Harga</ion-col>\r\n          <ion-col size=\"6\" class=\"item_detail_order\">{{item.harga_pro_order | currency : 'IDR' : 'Rp. '}}</ion-col>\r\n        </ion-row> \r\n        <ion-row>\r\n          <ion-col size=\"6\" class=\"judul_detail_order\">Sub Total</ion-col>\r\n          <ion-col size=\"6\" class=\"item_detail_order\">{{item.total_berat_harga | currency : 'IDR' : 'Rp. '}}</ion-col>\r\n        </ion-row>                               \r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">Ringkasan</ion-card-subtitle>\r\n      </ion-card-header>    \r\n    <ion-card-content style=\"border-bottom: 1px solid gray;\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Total Berat</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{data_order.total_berat}} Kg</ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Total</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{data_order.total_harga | currency : 'IDR' : 'Rp. '}}</ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Harga Ongkir</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{data_order.total_ongkir | currency : 'IDR' : 'Rp. '}}</ion-col>\r\n      </ion-row>   \r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Potongan</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{data_order.total_potongan | currency : 'IDR' : 'Rp. '}}</ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Grand Total</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{data_order.grand_total | currency : 'IDR' : 'Rp. '}}</ion-col>\r\n      </ion-row>                         \r\n    </ion-card-content>  \r\n  </ion-card>  \r\n\r\n  <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">Metode Pembayaran</ion-card-subtitle>\r\n      </ion-card-header>    \r\n    <ion-card-content style=\"border-bottom: 1px solid gray;\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Bank</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{nomor_rekening.nama_bank}}</ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Nomor Rekening</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{nomor_rekening.no_rekening}}</ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"judul_detail_order\">Atas Nama</ion-col>\r\n        <ion-col size=\"6\" class=\"item_detail_order\">{{nomor_rekening.nama_pemilik}}</ion-col>\r\n      </ion-row>                              \r\n    </ion-card-content>  \r\n  </ion-card> \r\n\r\n  <ion-card style=\"background: #fff;border-radius: 20px;\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle  class=\"judul_detail_order\" \r\n      style=\"font-size: 17px;font-weight: 600;color: var(--ion-color-primary);\">Bantuan</ion-card-subtitle>\r\n      </ion-card-header>    \r\n    <ion-card-content style=\"border-bottom: 1px solid gray;\">\r\n      <ion-row>\r\n        <ion-col size=\"4\" style=\"text-align: center;\">\r\n          <a ion-button href=\"tel:{{kontak.telp}}\">\r\n            <img src=\"assets/imgs/email.png\" style=\"width: 50%;margin: auto;\">\r\n          </a>\r\n          <h6 style=\"color: #222;\">Kirim Email</h6>\r\n        </ion-col>\r\n        <ion-col size=\"4\" style=\"text-align: center;\">\r\n          <a ion-button href=\"mailto:{{kontak.email}}\">\r\n          <img src=\"assets/imgs/call.png\" style=\"width: 50%;margin: auto;\">\r\n          </a>\r\n          <h6 style=\"color: #222;\">Telepon</h6>\r\n        </ion-col>\r\n        <ion-col size=\"4\" style=\"text-align: center;\" (click)=\"open_wa(kontak.telp)\">\r\n          <img src=\"assets/imgs/wa.png\" style=\"width: 50%;margin: auto;\">\r\n          <h6 style=\"color: #222;\">Whatsapp</h6>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"4\" class=\"judul_detail_order\">Marketing</ion-col>\r\n        <ion-col size=\"8\" class=\"item_detail_order\">\r\n          <a ion-button href=\"tel:{{kontak.telp}}\">{{kontak.telp}}</a></ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"judul_detail_order\">Email</ion-col>\r\n        <ion-col size=\"8\" class=\"item_detail_order\">\r\n          <a ion-button href=\"mailto:{{kontak.email}}\">{{kontak.email}}</a>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"judul_detail_order\">Whatsapp</ion-col>\r\n        <ion-col size=\"8\" class=\"item_detail_order\">\r\n          <a ion-button (click)=\"open_wa(kontak.telp)\">Open</a>\r\n        </ion-col>\r\n      </ion-row>                               -->\r\n    </ion-card-content>  \r\n  </ion-card>\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"full\" (click)=\"konfirmasi(id_pro)\">Konfirmasi</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>      -->\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/detailtransaksi/detailtransaksi-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/detailtransaksi/detailtransaksi-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailtransaksiPageRoutingModule */

    /***/
    function srcAppDetailtransaksiDetailtransaksiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailtransaksiPageRoutingModule", function () {
        return DetailtransaksiPageRoutingModule;
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


      var _detailtransaksi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detailtransaksi.page */
      "./src/app/detailtransaksi/detailtransaksi.page.ts");

      var routes = [{
        path: '',
        component: _detailtransaksi_page__WEBPACK_IMPORTED_MODULE_3__["DetailtransaksiPage"]
      }];

      var DetailtransaksiPageRoutingModule = function DetailtransaksiPageRoutingModule() {
        _classCallCheck(this, DetailtransaksiPageRoutingModule);
      };

      DetailtransaksiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailtransaksiPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/detailtransaksi/detailtransaksi.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/detailtransaksi/detailtransaksi.module.ts ***!
      \***********************************************************/

    /*! exports provided: DetailtransaksiPageModule */

    /***/
    function srcAppDetailtransaksiDetailtransaksiModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailtransaksiPageModule", function () {
        return DetailtransaksiPageModule;
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


      var _detailtransaksi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detailtransaksi-routing.module */
      "./src/app/detailtransaksi/detailtransaksi-routing.module.ts");
      /* harmony import */


      var _detailtransaksi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detailtransaksi.page */
      "./src/app/detailtransaksi/detailtransaksi.page.ts");

      var DetailtransaksiPageModule = function DetailtransaksiPageModule() {
        _classCallCheck(this, DetailtransaksiPageModule);
      };

      DetailtransaksiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detailtransaksi_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailtransaksiPageRoutingModule"]],
        declarations: [_detailtransaksi_page__WEBPACK_IMPORTED_MODULE_6__["DetailtransaksiPage"]]
      })], DetailtransaksiPageModule);
      /***/
    },

    /***/
    "./src/app/detailtransaksi/detailtransaksi.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/detailtransaksi/detailtransaksi.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDetailtransaksiDetailtransaksiPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cover {\n  width: 100%;\n  height: 180px;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  text-align: center;\n}\n\n.img_product {\n  height: 180px;\n}\n\n.btn_add_plus {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  color: black;\n}\n\n.native-input.sc-ion-input-md {\n  text-align: center;\n}\n\n.input_qty .native-input {\n  text-align: center;\n}\n\n.judul_detail_order {\n  font-weight: bold;\n}\n\n.item_detail_order {\n  white-space: normal;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsdHJhbnNha3NpL2RldGFpbHRyYW5zYWtzaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQUFJO0VBQ0ksa0JBQUE7QUFHUjs7QUFBQTtFQUNJLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtBQUlKOztBQUFRO0VBQ0ksbUJBQUE7QUFHWjs7QUFEWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdoQiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHRyYW5zYWtzaS9kZXRhaWx0cmFuc2Frc2kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1nX3Byb2R1Y3R7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcbi5idG5fYWRkX3BsdXN7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXRfcXR5e1xyXG4gICAgLm5hdGl2ZS1pbnB1dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICBcclxuICAgIH1cclxufVxyXG4uanVkdWxfZGV0YWlsX29yZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLml0ZW1fZGV0YWlsX29yZGVye1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAubm90aWZpY2F0aW9uLWljb24tYnV0dG9uIHtcclxuICAgICAgICAuYnRuX2JhZGdlIHtcclxuICAgICAgICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/detailtransaksi/detailtransaksi.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/detailtransaksi/detailtransaksi.page.ts ***!
      \*********************************************************/

    /*! exports provided: DetailtransaksiPage */

    /***/
    function srcAppDetailtransaksiDetailtransaksiPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailtransaksiPage", function () {
        return DetailtransaksiPage;
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


      var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/product.service */
      "./src/app/services/product.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");

      var DetailtransaksiPage = /*#__PURE__*/function () {
        function DetailtransaksiPage(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, product_service, route, consta, userdata) {
          _classCallCheck(this, DetailtransaksiPage);

          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.product_service = product_service;
          this.route = route;
          this.consta = consta;
          this.userdata = userdata;
          this.data_product_detail = {};
          this.input_qty = 1;
          this.data_user = {};
          this.arr = {};
          this.data_order = {};
          this.detail_order = [];
          this.nomor_rekening = {};
          this.kontak = {
            telp: '',
            email: ''
          };
        }

        _createClass(DetailtransaksiPage, [{
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
                _this.id_pro = _this.route.snapshot.paramMap.get('id');

                _this.get_product_detail();

                _this.get_total_keranjang();
              }
            });
          }
        }, {
          key: "konfirmasi",
          value: function konfirmasi(id) {
            this.router.navigateByUrl('/konfirmasi/' + id);
          }
        }, {
          key: "get_total_keranjang",
          value: function get_total_keranjang() {
            var _this2 = this;

            this.servcart.get_keranjang(60).then(function (hasil) {
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
          key: "open_wa",
          value: function open_wa(phone) {
            window.open('https://api.whatsapp.com/send?phone=' + phone, '_system');
          }
        }, {
          key: "get_product_detail",
          value: function get_product_detail() {
            var _this3 = this;

            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'api_detail_order', {
              id_order: this.id_pro
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              console.log(data, 'map');
              return data.data;
            })).subscribe(function (hsl) {
              var hasil = {};
              hasil = hsl;
              _this3.arr = hasil.invoice;
              _this3.nomor_rekening = hasil.rekening[0];
              _this3.kontak.telp = hasil.kontak[0].isi_kontak;
              _this3.kontak.email = hasil.kontak[1].isi_kontak;
              console.log(_this3.kontak, _this3.nomor_rekening, 'REKENING');
              _this3.data_order = hasil.invoice.order[0];
              _this3.detail_order = hasil.invoice.detail_order;
            });
          }
        }]);

        return DetailtransaksiPage;
      }();

      DetailtransaksiPage.ctorParameters = function () {
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
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_9__["UserData"]
        }];
      };

      DetailtransaksiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailtransaksi',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detailtransaksi.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/detailtransaksi/detailtransaksi.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detailtransaksi.page.scss */
        "./src/app/detailtransaksi/detailtransaksi.page.scss"))["default"]]
      })], DetailtransaksiPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detailtransaksi-detailtransaksi-module-es5.js.map