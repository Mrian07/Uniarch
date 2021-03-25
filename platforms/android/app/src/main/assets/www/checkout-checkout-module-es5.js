(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Konfirmasi Pembelian</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Tipe Pengiriman</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <!-- <ion-select interface=\"action-sheet\" style=\"width: 100%;display: contents;\" #select_pengiriman\r\n            (ionChange)=\"pilih_tipe_pengiriman($event)\" [selectedText]=\"setselected_pengiriman\">\r\n            <ion-select-option *ngFor=\" let item of type_pengiriman\" value=\"{{item.val}}\">{{item.label}}\r\n            </ion-select-option>\r\n          </ion-select> -->\r\n          <ion-select interface=\"action-sheet\" style=\"width: 100%;display: contents;\" #select_pengiriman\r\n            (ionChange)=\"pilih_tipe_pengiriman($event)\" placeholder=\"Pilih Pengiriman\">\r\n            <ion-select-option *ngFor=\" let item of type_pengiriman\" value=\"{{item.val}}\">{{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">Catatan Pengiriman</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"catatan_pengiriman\"></ion-textarea>\r\n        </ion-item> -->\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list *ngIf=\"pilihan_tipe_pengiriman==2\" lines=\"none\">\r\n    <ion-list-header><b>Pengirim Paket</b></ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nama</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"nama_pengirim\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">No. Telp</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"no_telp_pengirim\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Alamat</ion-label>\r\n      <ion-textarea type=\"text\" [(ngModel)]=\"alamat_pengirim\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\" *ngIf=\"pilihan_tipe_pengiriman==2\" >\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Informasi Penerima</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nama</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"nama_pengirim\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">No. Telp</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"no_telp_pengirim\"></ion-input>\r\n        </ion-item> \r\n        <ion-item>\r\n            <ion-label position=\"floating\">Alamat</ion-label>\r\n            <ion-textarea type=\"text\" [(ngModel)]=\"alamat_pengirim\"></ion-textarea>\r\n        </ion-item>    \r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list >\r\n      <ion-list-header><b>Penerima Paket</b></ion-list-header>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nama</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"nama_penerima\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label position=\"floating\">No. Telp</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"no_telp_penerima\"></ion-input>\r\n      </ion-item> \r\n      <ion-item>\r\n          <ion-label position=\"floating\">Alamat</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"alamat_penerima\"></ion-textarea>\r\n      </ion-item> \r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Informasi Penerima</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nama</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"nama_penerima\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">No. Telp</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"no_telp_penerima\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Alamat</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"alamat_penerima\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list *ngIf=\"pilihan_tipe_pengiriman!=3\">\r\n    <ion-list-header><b>Tujuan Pengiriman</b></ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Provinsi</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Propinsi\" #select_provinsi\r\n        (ionChange)=\"pilih_provinsi($event, 'front')\" [selectedText]=\"setselected_provinsi\">\r\n        <ion-select-option *ngFor=\" let item of data_provinsi\" [value]=\"item\">{{item.province}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Kabupaten</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Kota\" #select_kota (ionChange)=\"pilih_kota($event)\"\r\n        [selectedText]=\"setselected_kota\">\r\n        <ion-select-option *ngFor=\" let item of data_kota\" [value]=\"item\">{{item.city_name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Kecamatan</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Kecamatan\" #select_kecamatan\r\n        (ionChange)=\"pilih_kecamatan($event)\" [selectedText]=\"setselected_kota\">\r\n        <ion-select-option *ngFor=\" let item of data_kecamatan\" [value]=\"item\">{{item.subdistrict_name}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Kurir</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Kurir\" #select_kurir (ionChange)=\"pilih_kurir($event)\"\r\n        [selectedText]=\"setselected_kurir\">\r\n        <ion-select-option *ngFor=\" let item of data_kurir\" [value]=\"item\">{{item.label}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Pilih Paket</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Paket\" #select_paket (ionChange)=\"pilih_paket($event)\"\r\n        [selectedText]=\"setselected_paket\">\r\n        <ion-select-option *ngFor=\" let item of data_paket\" [value]=\"item\">{{item.service}} - {{item.cost | currency :\r\n          'IDR' : 'Rp.' }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\" *ngIf=\"pilihan_tipe_pengiriman!=3\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Tujuan Pengiriman</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Provinsi\" #select_provinsi \r\n          (ionChange)=\"pilih_provinsi($event)\" [selectedText]=\"setselected_provinsi\" style=\"width: 100%;display: contents;\">\r\n            <ion-select-option *ngFor=\" let item of data_provinsi\" [value]=\"item\" >{{item.province}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Kota\" #select_kota \r\n          (ionChange)=\"pilih_kota($event)\" [selectedText]=\"setselected_kota\" style=\"width: 100%;display: contents;\">\r\n            <ion-select-option *ngFor=\" let item of data_kota\" [value]=\"item\">{{item.city_name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>  \r\n        <ion-item>\r\n          <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Kecamatan\" #select_kecamatan \r\n          (ionChange)=\"pilih_kecamatan($event)\" [selectedText]=\"setselected_kota\" style=\"width: 100%;display: contents;\">\r\n            <ion-select-option *ngFor=\" let item of data_kecamatan\" [value]=\"item\">{{item.subdistrict_name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item> \r\n        <ion-item>\r\n            <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Kurir\" #select_kurir \r\n            (ionChange)=\"pilih_kurir($event)\" [selectedText]=\"setselected_kurir\" style=\"width: 100%;display: contents;\">\r\n              <ion-select-option *ngFor=\" let item of data_kurir\" [value]=\"item\">{{item.label}}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item> \r\n        <ion-item>\r\n            <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Layanan\" #select_paket \r\n            (ionChange)=\"pilih_paket($event)\" [selectedText]=\"setselected_paket\" style=\"width: 100%;display: contents;\">\r\n              <ion-select-option *ngFor=\" let item of data_paket\" [value]=\"item\">{{item.service}} -  {{item.cost | currency : 'IDR' : 'Rp.' }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list>\r\n    <ion-list-header><b>Total Order</b></ion-list-header>\r\n    <ion-item>\r\n      <ion-col>Total</ion-col>\r\n      <ion-col>{{summary.total | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-col>Ongkos Kirim</ion-col>\r\n      <ion-col>{{summary.ongkir | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-col>Potongan</ion-col>\r\n      <ion-col>{{summary.potongan | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-col>Grand Total</ion-col>\r\n      <ion-col>{{summary.grand_total | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" [(ngModel)]=\"kodekupon\" placeholder=\"Check Kode Kupon\"></ion-input>\r\n    </ion-item>\r\n    <ion-item style=\"text-align: center;\">\r\n      <ion-button (click)=\"getKupon()\" color=\"secondary\">Gunakan Kupon</ion-button>\r\n      <ion-button (click)=\"save_pengiriman()\">Submit</ion-button>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Total Order</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\"  lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Catatan Pengiriman</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"catatan_pengiriman\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input type=\"text\" [(ngModel)]=\"kodekupon\" placeholder=\"Masukkan Kode Kupon\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-col>Total</ion-col>\r\n          <ion-col style=\"text-align: right;\">{{summary.total | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-col>Ongkos Kirim</ion-col>\r\n          <ion-col style=\"text-align: right;\">{{summary.ongkir | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n      </ion-item>      \r\n      <ion-item>\r\n          <ion-col>Potongan</ion-col>\r\n          <ion-col style=\"text-align: right;\">{{summary.potongan | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n      </ion-item>      \r\n      <ion-item>\r\n          <ion-col><b>Grand Total</b></ion-col>\r\n          <ion-col style=\"text-align: right;\"><b>{{summary.grand_total | currency : 'IDR' : 'Rp.' }}</b></ion-col>\r\n      </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n<br><br><br><br>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"background: #fff;\">\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <ion-button size=\"small\" (click)=\"save_pengiriman()\"\r\n        style=\"color: #fff;height: 37px;--background: var(--ion-color-primary);width: 100%;--border-radius: 10px;\">\r\n        <b style=\"color: #fff;\">Bayar</b>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/checkout/checkout-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/checkout/checkout-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CheckoutPageRoutingModule */

    /***/
    function srcAppCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
        return CheckoutPageRoutingModule;
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


      var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/checkout/checkout.page.ts");

      var routes = [{
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
      }];

      var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
        _classCallCheck(this, CheckoutPageRoutingModule);
      };

      CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CheckoutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/checkout/checkout.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.module.ts ***!
      \*********************************************/

    /*! exports provided: CheckoutPageModule */

    /***/
    function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
        return CheckoutPageModule;
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


      var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./checkout-routing.module */
      "./src/app/checkout/checkout-routing.module.ts");
      /* harmony import */


      var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./checkout.page */
      "./src/app/checkout/checkout.page.ts");

      var CheckoutPageModule = function CheckoutPageModule() {
        _classCallCheck(this, CheckoutPageModule);
      };

      CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
      })], CheckoutPageModule);
      /***/
    },

    /***/
    "./src/app/checkout/checkout.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/checkout/checkout.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".native-input.sc-ion-input-md {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/checkout/checkout.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/checkout/checkout.page.ts ***!
      \*******************************************/

    /*! exports provided: CheckoutPage */

    /***/
    function srcAppCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
        return CheckoutPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");
      /* harmony import */


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");

      var CheckoutPage = /*#__PURE__*/function () {
        function CheckoutPage(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, consta, changeref, userdata) {
          _classCallCheck(this, CheckoutPage);

          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.consta = consta;
          this.changeref = changeref;
          this.userdata = userdata;
          this.data_pelanggan = {};
          this.type_pengiriman = [{
            val: 1,
            label: 'Dikirim ke alamat sendiri'
          }, {
            val: 2,
            label: 'Di kirim ke alamat lain (Dropship)'
          }, {
            val: 3,
            label: 'Paket diambil di toko(COD)'
          }];
          this.data_user = {};
          this.setselected_pengiriman = {};
          this.kurir_terpilih = '';
          this.data_provinsi = [];
          this.id_kecamatan = '';
          this.summary = {};
          this.ongkir = 0;
          this.potongan = 0;
          this.stock_kupon = 0;
          this.length_paket = 0;
          this.cost = 0;
        }

        _createClass(CheckoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.pilihan_tipe_pengiriman=1;
            this.get_api_provinsi();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.setselected_pengiriman = 'Dikirim ke alamat sendiri';
            this.pilihan_tipe_pengiriman = 1;
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this.router.navigateByUrl('login');
              } else {
                _this.data_user = hsl;

                _this.get_master_pengiriman(); // this.hitung_summary(0, this.data_user.id_pel);
                // this.get_api_provinsi();

              }
            }); // this.select_pengiriman.value=1;
          }
        }, {
          key: "pilih_kurir",
          value: function pilih_kurir($event) {
            this.kurir_terpilih = $event.target.value.kurir;
            this.data_paket = [];
            this.select_paket.value = null;
            this.select_paket.selectedText = null;
            this.hitung_harga(this.id_kecamatan, this.kurir_terpilih);
          }
        }, {
          key: "get_prov_cek",
          value: function get_prov_cek(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        var hasil = data.filter(function (hasl) {
                          var hasilx = {};
                          hasilx = hasl;
                          return _this2.data_user.provinsi_pel.match(new RegExp(hasilx.province, 'gi')); // return hasl.province == this.data_user.provinsi_pel;
                        });
                        resolve(hasil);
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "get_prov_kota",
          value: function get_prov_kota(data) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var hasil = data.filter(function (hasl) {
                var hasilx = {};
                hasilx = hasl;
                return _this3.data_user.kota_pel.match(new RegExp(hasilx.city_name, 'gi'));
              });
              console.log(hasil, 'HASIIIILxxxxx');
              resolve(hasil);
            });
          }
        }, {
          key: "get_prov_kecamatan",
          value: function get_prov_kecamatan(data) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var hasil = data.filter(function (hasl) {
                var hasilx = {};
                hasilx = hasl;
                return _this4.data_user.kecamatan_pel.match(new RegExp(hasilx.subdistrict_name, 'gi'));
              });
              console.log(hasil, 'HASIIIIL KECAMATAN');
              resolve(hasil);
            });
          }
        }, {
          key: "get_api_provinsi",
          value: function get_api_provinsi() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 2:
                      this.loading1 = _context2.sent;
                      this.loading1.present();
                      this.servcart.get_rajaongkir_provinsi().then(function (hsl) {
                        console.log(hsl, 'hasil provinsi');
                        var hasil = {};
                        hasil = hsl;
                        _this5.data_provinsi = hasil.data.rajaongkir.results;

                        _this5.loading1.dismiss();

                        _this5.get_prov_cek(hasil.data.rajaongkir.results).then(function (hsl) {
                          var hasil = {};
                          hasil = hsl;
                          console.log(hasil, 'HAXXXXXX'); //  let even : any = {}
                          //  even = { target : { value : { province_id : hasil[0].province_id } }}

                          if (hsl) {
                            _this5.loading1.dismiss(); // this.pilih_provinsi(even);


                            _this5.select_provinsi.selectedText = hasil[0].province;
                            _this5.select_provinsi.value = hasil[0];
                          }
                        });

                        console.log(_this5.data_provinsi, 'data provinsi');
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pilih_provinsi",
          value: function pilih_provinsi($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var id_provinsi;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log($event, 'TYPE');
                      this.propinsi_terpilih = $event.detail.value;
                      id_provinsi = $event.detail.value.province_id;
                      this.select_provinsi.selectedText = $event.detail.value.province;
                      _context3.next = 6;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 6:
                      this.loading = _context3.sent;
                      this.loading.present();
                      this.data_kota = [];
                      this.select_kota.selectedText = null;
                      this.select_kota.value = null;

                      if (!($event.detail.value == null)) {
                        _context3.next = 13;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 13:
                      console.log('jancuk1');
                      this.servcart.get_rajaongkir_kota(id_provinsi).then(function (hsl) {
                        var hasil = {};
                        hasil = hsl;
                        _this6.data_kota = hasil.data.rajaongkir.results;

                        _this6.get_prov_kota(_this6.data_kota).then(function (hsl) {
                          console.log(hsl, 'hasil jancuk1');
                          var hasil = {};
                          hasil = hsl;

                          if (hsl != '') {
                            _this6.loading.dismiss();

                            console.log(hasil, 'get data kota');
                            _this6.select_kota.selectedText = hasil[0].city_name;
                            _this6.select_kota.value = hasil[0];
                          } else {
                            _this6.select_kota.selectedText = null;
                            _this6.select_kota.value = null;
                            _this6.setselected_kota = null;
                          }
                        });

                        _this6.loading.dismiss();
                      });

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "pilih_kota",
          value: function pilih_kota($event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var id_kota;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log($event, 'pilih kota');
                      this.data_kecamatan = [];
                      this.select_kecamatan.selectedText = null;
                      this.select_kecamatan.value = null;

                      if (!($event.detail.value == null)) {
                        _context4.next = 6;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 6:
                      this.kota_terpilih = $event.detail.value;
                      id_kota = $event.detail.value.city_id;
                      this.select_kota.selectedText = $event.detail.value.city_name;
                      _context4.next = 11;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 11:
                      this.loading = _context4.sent;
                      this.loading.present();
                      this.servcart.get_rajaongkir_kecamatan(id_kota).then(function (hsl) {
                        var hasil = {};
                        hasil = hsl;
                        _this7.data_kecamatan = hasil.data.rajaongkir.results;

                        _this7.get_prov_kecamatan(_this7.data_kecamatan).then(function (hsl) {
                          console.log(hsl, 'get data kecamatan');
                          var hasil = {};
                          hasil = hsl;

                          if (hsl != '') {
                            _this7.loading.dismiss();

                            _this7.select_kecamatan.selectedText = hasil[0].subdistrict_name;
                            _this7.select_kecamatan.value = hasil[0];
                          } else {
                            _this7.select_kecamatan.selectedText = null;
                          }
                        });

                        _this7.loading.dismiss();
                      });

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "pilih_kecamatan",
          value: function pilih_kecamatan($event) {
            if ($event.detail.value == null) {
              return;
            }

            this.kecamatan_terpilih = $event.detail.value;
            this.id_kecamatan = $event.detail.value.subdistrict_id;
            this.hitung_harga(this.id_kecamatan, this.kurir_terpilih);
          }
        }, {
          key: "hitung_harga",
          value: function hitung_harga(id_kecamatan, kurir) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 2:
                      this.loading = _context5.sent;
                      this.loading.present();
                      this.servcart.get_rajaongkir_harga(id_kecamatan, kurir).then(function (hsl) {
                        var hasil = {};
                        hasil = hsl;
                        _this8.data_paket = hasil.arr_paket;

                        _this8.loading.dismiss();

                        console.log(_this8.data_paket.length, 'data paket');

                        if (_this8.data_paket.length === 0 && kurir != '') {
                          _this8.hitung_summary(0, _this8.data_user.id_pel, _this8.potongan);

                          _this8.ongkir = 0;

                          _this8.consta.show_alert('Oops', '', 'Layanan pengiriman tidak tersedia.');

                          _this8.length_paket = 0;
                        } else if (_this8.data_paket.length > 0) {
                          _this8.consta.show_alert('', '', 'Pilih Layanan Pengiriman.');

                          _this8.length_paket = _this8.data_paket.length;
                        }
                      });

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "pilih_paket",
          value: function pilih_paket($event) {
            if ($event.detail.value == null) {
              return;
            }

            this.paket_terpilih = $event.detail.value;
            console.log($event, this.paket_terpilih, 'pilih paket');
            this.hitung_summary($event.detail.value.cost, this.data_user.id_pel, this.potongan);
            this.ongkir = $event.detail.value.cost;
          }
        }, {
          key: "pilih_tipe_pengiriman",
          value: function pilih_tipe_pengiriman($event) {
            this.pilihan_tipe_pengiriman = $event.target.value;
            var str = this.type_pengiriman.filter(function (hsl) {
              return hsl.val == $event.target.value;
            });
            console.log($event.target.value, str, 'xxxx');
            this.setselected_pengiriman = str.label;

            if (this.pilihan_tipe_pengiriman == 1 || this.pilihan_tipe_pengiriman == 2) {
              this.nama_penerima = this.data_pelanggan.nama_pel;
              this.no_telp_penerima = this.data_pelanggan.no_telp_pel;
              this.alamat_penerima = this.data_pelanggan.alamat_pel;
              this.nama_pengirim = '';
              this.no_telp_pengirim = '';
              this.alamat_pengirim = '';
            } else {
              this.nama_penerima = '';
              this.no_telp_penerima = '';
              this.alamat_penerima = '';
              this.nama_pengirim = this.data_pelanggan.nama_pel;
              this.no_telp_pengirim = this.data_pelanggan.no_telp_pel;
              this.alamat_pengirim = this.data_pelanggan.alamat_pel;
              this.hitung_summary(0, this.data_user.id_pel, this.potongan);
              this.ongkir = $event.detail.value.cost;
            }
          }
        }, {
          key: "hitung_summary",
          value: function hitung_summary(cost, id_pel, potongan) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 2:
                      this.loading = _context6.sent;
                      this.loading.present();
                      this.servcart.get_rajaongkir_summary(cost, id_pel, potongan).then(function (hsl) {
                        var hasil = {};
                        hasil = hsl;
                        _this9.summary = hasil;
                        console.log(hasil, 'summary');

                        _this9.loading.dismiss();
                      });

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getKupon",
          value: function getKupon() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this10 = this;

              var kodekupon;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 2:
                      this.loading = _context7.sent;
                      kodekupon = this.kodekupon;
                      _context7.next = 6;
                      return this.loading.present();

                    case 6:
                      this.servcart.getkupon(kodekupon).then(function (data) {
                        _this10.loading.dismiss();

                        var set = {};
                        set = data;
                        console.log(set.stock, 'STOCK');
                        _this10.potongan = set.nominal;

                        if (set.code === 0) {
                          _this10.consta.show_alert('Notif', '', 'Kode Kupon Tidak tersedia.');

                          _this10.hitung_summary(_this10.ongkir, _this10.data_user.id_pel, 0);

                          _this10.potongan = 0;
                          return false;
                        } else {
                          if (set.stock === 0) {
                            _this10.consta.show_alert('Notif', '', 'Kode Kupon Tidak tersedia.');

                            _this10.hitung_summary(_this10.ongkir, _this10.data_user.id_pel, 0);

                            _this10.potongan = 0;
                            return false;
                          } else {
                            _this10.stock_kupon = set.stock;

                            _this10.consta.show_alert('Notif', '', 'Kode Kupon ' + kodekupon + ' tersedia dengan potongan ' + set.nominal + '.');

                            _this10.hitung_summary(_this10.ongkir, _this10.data_user.id_pel, _this10.potongan);
                          }
                        }
                      });

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "save_pengiriman",
          value: function save_pengiriman() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this11 = this;

              var id_pel, email, catatan_pengiriman, ongkir_provinsi, ongkir_kota, ongkir_kecamatan, perkilo, paket, kurir, nama, telepon, nama_pengirim, no_pengirim, pilihan_form, alamat, alamat_pengirim, potongan, stock_kupon;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingctrl.create({
                        message: 'Mohon Tunggu'
                      });

                    case 2:
                      this.loading = _context8.sent;
                      id_pel = this.data_user.id_pel;
                      email = this.data_user.email_pel;
                      catatan_pengiriman = this.catatan_pengiriman;
                      ongkir_provinsi = this.propinsi_terpilih.province;
                      ongkir_kota = this.kota_terpilih.city_name;
                      ongkir_kecamatan = this.kecamatan_terpilih.subdistrict_name;

                      if (!(catatan_pengiriman == '' || catatan_pengiriman == null)) {
                        _context8.next = 12;
                        break;
                      }

                      this.consta.show_alert('Error', '', 'Catatan tidak boleh kosong');
                      return _context8.abrupt("return", false);

                    case 12:
                      if (!(this.kurir_terpilih === undefined || this.kurir_terpilih == '')) {
                        _context8.next = 15;
                        break;
                      }

                      this.consta.show_alert('Error', '', 'Silahkan pilih Kurir dulu');
                      return _context8.abrupt("return", false);

                    case 15:
                      if (!(this.length_paket > 0 && this.paket_terpilih === undefined)) {
                        _context8.next = 18;
                        break;
                      }

                      this.consta.show_alert('Error', '', 'Silahkan pilih Paket dulu');
                      return _context8.abrupt("return", false);

                    case 18:
                      if (this.length_paket === 0) {
                        this.cost = 0;
                        this.paket = '';
                      } else {
                        this.cost = this.paket_terpilih.cost;
                        this.paket = this.paket_terpilih.service;
                      }

                      perkilo = this.cost;
                      paket = this.paket;
                      kurir = this.kurir_terpilih;
                      nama = this.nama_penerima;
                      telepon = this.no_telp_penerima;
                      nama_pengirim = this.nama_pengirim;
                      no_pengirim = this.no_telp_pengirim;
                      pilihan_form = this.pilihan_tipe_pengiriman;
                      alamat = this.alamat_penerima;
                      alamat_pengirim = this.alamat_pengirim;
                      potongan = this.potongan;
                      stock_kupon = this.stock_kupon;
                      _context8.next = 33;
                      return this.loading.present();

                    case 33:
                      this.servcart.get_rajaongkir_save_pengiriman(id_pel, email, paket, perkilo, kurir, nama, telepon, nama_pengirim, no_pengirim, pilihan_form, ongkir_provinsi, ongkir_kota, ongkir_kecamatan, alamat, alamat_pengirim, catatan_pengiriman, potongan, stock_kupon).then(function (hsl) {
                        console.log(hsl, 'HASIL PENGIRIMAN');
                        var hasil = {};
                        hasil = hsl;

                        _this11.loading.dismiss();

                        if (hasil.code == 1) {
                          _this11.consta.show_alert('Sukses', '', hasil.msg).then(function (hsl) {
                            _this11.router.navigateByUrl('');
                          });
                        } else {
                          _this11.consta.show_alert('Gagal', '', hasil.msg);
                        }
                      })["catch"](function (err) {
                        _this11.loading.dismiss();
                      })["finally"](function () {
                        _this11.loading.dismiss();
                      });

                    case 34:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "get_master_pengiriman",
          value: function get_master_pengiriman() {
            var _this12 = this;

            this.servcart.master_pengiriman(this.data_user.id_pel).then(function (data) {
              var hsl = {};
              hsl = data;
              console.log(hsl, 'hsl');
              _this12.master_pengiriman = hsl.data;
              _this12.data_pelanggan = hsl.data.pelanggan[0];
              _this12.data_kurir = hsl.data.kurir;
              console.log(_this12.data_kurir, 'data kurir');
              _this12.nama_pengirim = _this12.data_pelanggan.nama_pel;
              _this12.no_telp_pengirim = _this12.data_pelanggan.no_telp_pel;
              _this12.alamat_pengirim = _this12.data_pelanggan.alamat_pel;

              if (_this12.pilihan_tipe_pengiriman == 1 || _this12.pilihan_tipe_pengiriman == 3) {
                _this12.nama_penerima = _this12.data_pelanggan.nama_pel;
                _this12.no_telp_penerima = _this12.data_pelanggan.no_telp_pel;
                _this12.alamat_penerima = _this12.data_pelanggan.alamat_pel;
                _this12.nama_pengirim = '';
                _this12.no_telp_pengirim = '';
                _this12.alamat_pengirim = '';
              } else {
                _this12.nama_penerima = '';
                _this12.no_telp_penerima = '';
                _this12.alamat_penerima = '';
                _this12.nama_pengirim = _this12.data_pelanggan.nama_pel;
                _this12.no_telp_pengirim = _this12.data_pelanggan.no_telp_pel;
                _this12.alamat_pengirim = _this12.data_pelanggan.alamat_pel;
              }
            });
          }
        }]);

        return CheckoutPage;
      }();

      CheckoutPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__["DataCartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__["ConstantService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
        }];
      };

      CheckoutPage.propDecorators = {
        select_pengiriman: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['select_pengiriman', {
            "static": false
          }]
        }],
        select_provinsi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['select_provinsi', {
            "static": false
          }]
        }],
        select_kota: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['select_kota', {
            "static": false
          }]
        }],
        select_kecamatan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['select_kecamatan', {
            "static": false
          }]
        }],
        select_paket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['select_paket', {
            "static": false
          }]
        }]
      };
      CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkout.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkout.page.scss */
        "./src/app/checkout/checkout.page.scss"))["default"]]
      })], CheckoutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=checkout-checkout-module-es5.js.map