(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Konfirmasi Pembelian</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Tipe Pengiriman</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <!-- <ion-select interface=\"action-sheet\" style=\"width: 100%;display: contents;\" #select_pengiriman\r\n            (ionChange)=\"pilih_tipe_pengiriman($event)\" [selectedText]=\"setselected_pengiriman\">\r\n            <ion-select-option *ngFor=\" let item of type_pengiriman\" value=\"{{item.val}}\">{{item.label}}\r\n            </ion-select-option>\r\n          </ion-select> -->\r\n          <ion-select interface=\"action-sheet\" style=\"width: 100%;display: contents;\" #select_pengiriman\r\n            (ionChange)=\"pilih_tipe_pengiriman($event)\" placeholder=\"Pilih Pengiriman\">\r\n            <ion-select-option *ngFor=\" let item of type_pengiriman\" value=\"{{item.val}}\">{{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">Catatan Pengiriman</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"catatan_pengiriman\"></ion-textarea>\r\n        </ion-item> -->\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list *ngIf=\"pilihan_tipe_pengiriman==2\" lines=\"none\">\r\n    <ion-list-header><b>Pengirim Paket</b></ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nama</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"nama_pengirim\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">No. Telp</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"no_telp_pengirim\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Alamat</ion-label>\r\n      <ion-textarea type=\"text\" [(ngModel)]=\"alamat_pengirim\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\" *ngIf=\"pilihan_tipe_pengiriman==2\" >\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Informasi Penerima</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nama</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"nama_pengirim\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"floating\">No. Telp</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"no_telp_pengirim\"></ion-input>\r\n        </ion-item> \r\n        <ion-item>\r\n            <ion-label position=\"floating\">Alamat</ion-label>\r\n            <ion-textarea type=\"text\" [(ngModel)]=\"alamat_pengirim\"></ion-textarea>\r\n        </ion-item>    \r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list >\r\n      <ion-list-header><b>Penerima Paket</b></ion-list-header>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nama</ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"nama_penerima\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label position=\"floating\">No. Telp</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"no_telp_penerima\"></ion-input>\r\n      </ion-item> \r\n      <ion-item>\r\n          <ion-label position=\"floating\">Alamat</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"alamat_penerima\"></ion-textarea>\r\n      </ion-item> \r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Informasi Penerima</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nama</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"nama_penerima\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">No. Telp</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"no_telp_penerima\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Alamat</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"alamat_penerima\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list *ngIf=\"pilihan_tipe_pengiriman!=3\">\r\n    <ion-list-header><b>Tujuan Pengiriman</b></ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Provinsi</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Propinsi\" #select_provinsi\r\n        (ionChange)=\"pilih_provinsi($event, 'front')\" [selectedText]=\"setselected_provinsi\">\r\n        <ion-select-option *ngFor=\" let item of data_provinsi\" [value]=\"item\">{{item.province}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Kabupaten</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Kota\" #select_kota (ionChange)=\"pilih_kota($event)\"\r\n        [selectedText]=\"setselected_kota\">\r\n        <ion-select-option *ngFor=\" let item of data_kota\" [value]=\"item\">{{item.city_name}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Kecamatan</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Kecamatan\" #select_kecamatan\r\n        (ionChange)=\"pilih_kecamatan($event)\" [selectedText]=\"setselected_kota\">\r\n        <ion-select-option *ngFor=\" let item of data_kecamatan\" [value]=\"item\">{{item.subdistrict_name}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Kurir</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Kurir\" #select_kurir (ionChange)=\"pilih_kurir($event)\"\r\n        [selectedText]=\"setselected_kurir\">\r\n        <ion-select-option *ngFor=\" let item of data_kurir\" [value]=\"item\">{{item.label}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Pilih Paket</ion-label>\r\n      <ion-select interface=\"modal\" placeholder=\"Pilih Paket\" #select_paket (ionChange)=\"pilih_paket($event)\"\r\n        [selectedText]=\"setselected_paket\">\r\n        <ion-select-option *ngFor=\" let item of data_paket\" [value]=\"item\">{{item.service}} - {{item.cost | currency :\r\n          'IDR' : 'Rp.' }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\" *ngIf=\"pilihan_tipe_pengiriman!=3\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Tujuan Pengiriman</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Provinsi\" #select_provinsi \r\n          (ionChange)=\"pilih_provinsi($event)\" [selectedText]=\"setselected_provinsi\" style=\"width: 100%;display: contents;\">\r\n            <ion-select-option *ngFor=\" let item of data_provinsi\" [value]=\"item\" >{{item.province}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Kota\" #select_kota \r\n          (ionChange)=\"pilih_kota($event)\" [selectedText]=\"setselected_kota\" style=\"width: 100%;display: contents;\">\r\n            <ion-select-option *ngFor=\" let item of data_kota\" [value]=\"item\">{{item.city_name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>  \r\n        <ion-item>\r\n          <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Kecamatan\" #select_kecamatan \r\n          (ionChange)=\"pilih_kecamatan($event)\" [selectedText]=\"setselected_kota\" style=\"width: 100%;display: contents;\">\r\n            <ion-select-option *ngFor=\" let item of data_kecamatan\" [value]=\"item\">{{item.subdistrict_name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item> \r\n        <ion-item>\r\n            <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Kurir\" #select_kurir \r\n            (ionChange)=\"pilih_kurir($event)\" [selectedText]=\"setselected_kurir\" style=\"width: 100%;display: contents;\">\r\n              <ion-select-option *ngFor=\" let item of data_kurir\" [value]=\"item\">{{item.label}}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item> \r\n        <ion-item>\r\n            <ion-select  interface=\"action-sheet\" placeholder=\"Pilih Layanan\" #select_paket \r\n            (ionChange)=\"pilih_paket($event)\" [selectedText]=\"setselected_paket\" style=\"width: 100%;display: contents;\">\r\n              <ion-select-option *ngFor=\" let item of data_paket\" [value]=\"item\">{{item.service}} -  {{item.cost | currency : 'IDR' : 'Rp.' }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-list>\r\n    <ion-list-header><b>Total Order</b></ion-list-header>\r\n    <ion-item>\r\n      <ion-col>Total</ion-col>\r\n      <ion-col>{{summary.total | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-col>Ongkos Kirim</ion-col>\r\n      <ion-col>{{summary.ongkir | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-col>Potongan</ion-col>\r\n      <ion-col>{{summary.potongan | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-col>Grand Total</ion-col>\r\n      <ion-col>{{summary.grand_total | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" [(ngModel)]=\"kodekupon\" placeholder=\"Check Kode Kupon\"></ion-input>\r\n    </ion-item>\r\n    <ion-item style=\"text-align: center;\">\r\n      <ion-button (click)=\"getKupon()\" color=\"secondary\">Gunakan Kupon</ion-button>\r\n      <ion-button (click)=\"save_pengiriman()\">Submit</ion-button>\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;margin-top: 10px;\"><b>Total Order</b></h5>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-list style=\"border-radius: 15px;\"  lines=\"none\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Catatan Pengiriman</ion-label>\r\n          <ion-textarea type=\"text\" [(ngModel)]=\"catatan_pengiriman\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input type=\"text\" [(ngModel)]=\"kodekupon\" placeholder=\"Masukkan Kode Kupon\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-col>Total</ion-col>\r\n          <ion-col style=\"text-align: right;\">{{summary.total | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-col>Ongkos Kirim</ion-col>\r\n          <ion-col style=\"text-align: right;\">{{summary.ongkir | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n      </ion-item>      \r\n      <ion-item>\r\n          <ion-col>Potongan</ion-col>\r\n          <ion-col style=\"text-align: right;\">{{summary.potongan | currency : 'IDR' : 'Rp.' }}</ion-col>\r\n      </ion-item>      \r\n      <ion-item>\r\n          <ion-col><b>Grand Total</b></ion-col>\r\n          <ion-col style=\"text-align: right;\"><b>{{summary.grand_total | currency : 'IDR' : 'Rp.' }}</b></ion-col>\r\n      </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n<br><br><br><br>\r\n\r\n</ion-content>\r\n\r\n<ion-footer style=\"background: #fff;\">\r\n\r\n  <ion-row style=\"padding:0px 10px;\">\r\n    <ion-col size=\"12\">\r\n      <ion-button size=\"small\" (click)=\"save_pengiriman()\"\r\n        style=\"color: #fff;height: 37px;--background: var(--ion-color-primary);width: 100%;--border-radius: 10px;\">\r\n        <b style=\"color: #fff;\">Bayar</b>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/checkout/checkout-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".native-input.sc-ion-input-md {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");








let CheckoutPage = class CheckoutPage {
    constructor(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, consta, changeref, userdata) {
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
        this.type_pengiriman = [
            { val: 1, label: 'Dikirim ke alamat sendiri' },
            { val: 2, label: 'Di kirim ke alamat lain (Dropship)' },
            { val: 3, label: 'Paket diambil di toko(COD)' },
        ];
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
    ngOnInit() {
        // this.pilihan_tipe_pengiriman=1;
        this.get_api_provinsi();
    }
    ionViewWillEnter() {
        this.setselected_pengiriman = 'Dikirim ke alamat sendiri';
        this.pilihan_tipe_pengiriman = 1;
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            if (hsl == null) {
                this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.get_master_pengiriman();
                // this.hitung_summary(0, this.data_user.id_pel);
                // this.get_api_provinsi();
            }
        });
        // this.select_pengiriman.value=1;
    }
    pilih_kurir($event) {
        this.kurir_terpilih = $event.target.value.kurir;
        this.data_paket = [];
        this.select_paket.value = null;
        this.select_paket.selectedText = null;
        this.hitung_harga(this.id_kecamatan, this.kurir_terpilih);
    }
    get_prov_cek(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let hasil = data.filter(hasl => {
                    let hasilx = {};
                    hasilx = hasl;
                    return this.data_user.provinsi_pel.match(new RegExp(hasilx.province, 'gi'));
                    // return hasl.province == this.data_user.provinsi_pel;
                });
                resolve(hasil);
            });
        });
    }
    get_prov_kota(data) {
        return new Promise((resolve, reject) => {
            let hasil = data.filter(hasl => {
                let hasilx = {};
                hasilx = hasl;
                return this.data_user.kota_pel.match(new RegExp(hasilx.city_name, 'gi'));
            });
            console.log(hasil, 'HASIIIILxxxxx');
            resolve(hasil);
        });
    }
    get_prov_kecamatan(data) {
        return new Promise((resolve, reject) => {
            let hasil = data.filter(hasl => {
                let hasilx = {};
                hasilx = hasl;
                return this.data_user.kecamatan_pel.match(new RegExp(hasilx.subdistrict_name, 'gi'));
            });
            console.log(hasil, 'HASIIIIL KECAMATAN');
            resolve(hasil);
        });
    }
    get_api_provinsi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading1 = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            this.loading1.present();
            this.servcart.get_rajaongkir_provinsi().then(hsl => {
                console.log(hsl, 'hasil provinsi');
                let hasil = {};
                hasil = hsl;
                this.data_provinsi = hasil.data.rajaongkir.results;
                this.loading1.dismiss();
                this.get_prov_cek(hasil.data.rajaongkir.results).then(hsl => {
                    let hasil = {};
                    hasil = hsl;
                    console.log(hasil, 'HAXXXXXX');
                    //  let even : any = {}
                    //  even = { target : { value : { province_id : hasil[0].province_id } }}
                    if (hsl) {
                        this.loading1.dismiss();
                        // this.pilih_provinsi(even);
                        this.select_provinsi.selectedText = hasil[0].province;
                        this.select_provinsi.value = hasil[0];
                    }
                });
                console.log(this.data_provinsi, 'data provinsi');
            });
        });
    }
    pilih_provinsi($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log($event, 'TYPE');
            this.propinsi_terpilih = $event.detail.value;
            let id_provinsi = $event.detail.value.province_id;
            this.select_provinsi.selectedText = $event.detail.value.province;
            this.loading = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            this.loading.present();
            this.data_kota = [];
            this.select_kota.selectedText = null;
            this.select_kota.value = null;
            if ($event.detail.value == null) {
                return;
            }
            console.log('jancuk1');
            this.servcart.get_rajaongkir_kota(id_provinsi).then(hsl => {
                let hasil = {};
                hasil = hsl;
                this.data_kota = hasil.data.rajaongkir.results;
                this.get_prov_kota(this.data_kota).then(hsl => {
                    console.log(hsl, 'hasil jancuk1');
                    let hasil = {};
                    hasil = hsl;
                    if (hsl != '') {
                        this.loading.dismiss();
                        console.log(hasil, 'get data kota');
                        this.select_kota.selectedText = hasil[0].city_name;
                        this.select_kota.value = hasil[0];
                    }
                    else {
                        this.select_kota.selectedText = null;
                        this.select_kota.value = null;
                        this.setselected_kota = null;
                    }
                });
                this.loading.dismiss();
            });
        });
    }
    pilih_kota($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log($event, 'pilih kota');
            this.data_kecamatan = [];
            this.select_kecamatan.selectedText = null;
            this.select_kecamatan.value = null;
            if ($event.detail.value == null) {
                return;
            }
            this.kota_terpilih = $event.detail.value;
            let id_kota = $event.detail.value.city_id;
            this.select_kota.selectedText = $event.detail.value.city_name;
            this.loading = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            this.loading.present();
            this.servcart.get_rajaongkir_kecamatan(id_kota).then(hsl => {
                let hasil = {};
                hasil = hsl;
                this.data_kecamatan = hasil.data.rajaongkir.results;
                this.get_prov_kecamatan(this.data_kecamatan).then(hsl => {
                    console.log(hsl, 'get data kecamatan');
                    let hasil = {};
                    hasil = hsl;
                    if (hsl != '') {
                        this.loading.dismiss();
                        this.select_kecamatan.selectedText = hasil[0].subdistrict_name;
                        this.select_kecamatan.value = hasil[0];
                    }
                    else {
                        this.select_kecamatan.selectedText = null;
                    }
                });
                this.loading.dismiss();
            });
        });
    }
    pilih_kecamatan($event) {
        if ($event.detail.value == null) {
            return;
        }
        this.kecamatan_terpilih = $event.detail.value;
        this.id_kecamatan = $event.detail.value.subdistrict_id;
        this.hitung_harga(this.id_kecamatan, this.kurir_terpilih);
    }
    hitung_harga(id_kecamatan, kurir) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            this.loading.present();
            this.servcart.get_rajaongkir_harga(id_kecamatan, kurir).then(hsl => {
                let hasil = {};
                hasil = hsl;
                this.data_paket = hasil.arr_paket;
                this.loading.dismiss();
                console.log(this.data_paket.length, 'data paket');
                if (this.data_paket.length === 0 && kurir != '') {
                    this.hitung_summary(0, this.data_user.id_pel, this.potongan);
                    this.ongkir = 0;
                    this.consta.show_alert('Oops', '', 'Layanan pengiriman tidak tersedia.');
                    this.length_paket = 0;
                }
                else if (this.data_paket.length > 0) {
                    this.consta.show_alert('', '', 'Pilih Layanan Pengiriman.');
                    this.length_paket = this.data_paket.length;
                }
            });
        });
    }
    pilih_paket($event) {
        if ($event.detail.value == null) {
            return;
        }
        this.paket_terpilih = $event.detail.value;
        console.log($event, this.paket_terpilih, 'pilih paket');
        this.hitung_summary($event.detail.value.cost, this.data_user.id_pel, this.potongan);
        this.ongkir = $event.detail.value.cost;
    }
    pilih_tipe_pengiriman($event) {
        this.pilihan_tipe_pengiriman = $event.target.value;
        let str = this.type_pengiriman.filter(hsl => {
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
        }
        else {
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
    hitung_summary(cost, id_pel, potongan) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            this.loading.present();
            this.servcart.get_rajaongkir_summary(cost, id_pel, potongan).then(hsl => {
                let hasil = {};
                hasil = hsl;
                this.summary = hasil;
                console.log(hasil, 'summary');
                this.loading.dismiss();
            });
        });
    }
    getKupon() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            let kodekupon = this.kodekupon;
            yield this.loading.present();
            this.servcart.getkupon(kodekupon).then((data) => {
                this.loading.dismiss();
                let set = {};
                set = data;
                console.log(set.stock, 'STOCK');
                this.potongan = set.nominal;
                if (set.code === 0) {
                    this.consta.show_alert('Notif', '', 'Kode Kupon Tidak tersedia.');
                    this.hitung_summary(this.ongkir, this.data_user.id_pel, 0);
                    this.potongan = 0;
                    return false;
                }
                else {
                    if (set.stock === 0) {
                        this.consta.show_alert('Notif', '', 'Kode Kupon Tidak tersedia.');
                        this.hitung_summary(this.ongkir, this.data_user.id_pel, 0);
                        this.potongan = 0;
                        return false;
                    }
                    else {
                        this.stock_kupon = set.stock;
                        this.consta.show_alert('Notif', '', 'Kode Kupon ' + kodekupon + ' tersedia dengan potongan ' + set.nominal + '.');
                        this.hitung_summary(this.ongkir, this.data_user.id_pel, this.potongan);
                    }
                }
            });
        });
    }
    save_pengiriman() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            let id_pel = this.data_user.id_pel;
            let email = this.data_user.email_pel;
            let catatan_pengiriman = this.catatan_pengiriman;
            let ongkir_provinsi = this.propinsi_terpilih.province;
            let ongkir_kota = this.kota_terpilih.city_name;
            let ongkir_kecamatan = this.kecamatan_terpilih.subdistrict_name;
            if (catatan_pengiriman == '' || catatan_pengiriman == null) {
                this.consta.show_alert('Error', '', 'Catatan tidak boleh kosong');
                return false;
            }
            if (this.kurir_terpilih === undefined || this.kurir_terpilih == '') {
                this.consta.show_alert('Error', '', 'Silahkan pilih Kurir dulu');
                return false;
            }
            if (this.length_paket > 0 && this.paket_terpilih === undefined) {
                this.consta.show_alert('Error', '', 'Silahkan pilih Paket dulu');
                return false;
            }
            if (this.length_paket === 0) {
                this.cost = 0;
                this.paket = '';
            }
            else {
                this.cost = this.paket_terpilih.cost;
                this.paket = this.paket_terpilih.service;
            }
            let perkilo = this.cost;
            let paket = this.paket;
            let kurir = this.kurir_terpilih;
            let nama = this.nama_penerima;
            let telepon = this.no_telp_penerima;
            let nama_pengirim = this.nama_pengirim;
            let no_pengirim = this.no_telp_pengirim;
            let pilihan_form = this.pilihan_tipe_pengiriman;
            let alamat = this.alamat_penerima;
            let alamat_pengirim = this.alamat_pengirim;
            let potongan = this.potongan;
            let stock_kupon = this.stock_kupon;
            yield this.loading.present();
            this.servcart.get_rajaongkir_save_pengiriman(id_pel, email, paket, perkilo, kurir, nama, telepon, nama_pengirim, no_pengirim, pilihan_form, ongkir_provinsi, ongkir_kota, ongkir_kecamatan, alamat, alamat_pengirim, catatan_pengiriman, potongan, stock_kupon).then(hsl => {
                console.log(hsl, 'HASIL PENGIRIMAN');
                let hasil = {};
                hasil = hsl;
                this.loading.dismiss();
                if (hasil.code == 1) {
                    this.consta.show_alert('Sukses', '', hasil.msg).then(hsl => {
                        this.router.navigateByUrl('');
                    });
                }
                else {
                    this.consta.show_alert('Gagal', '', hasil.msg);
                }
            }).catch(err => {
                this.loading.dismiss();
            }).finally(() => {
                this.loading.dismiss();
            });
        });
    }
    get_master_pengiriman() {
        this.servcart.master_pengiriman(this.data_user.id_pel).then((data) => {
            let hsl = {};
            hsl = data;
            console.log(hsl, 'hsl');
            this.master_pengiriman = hsl.data;
            this.data_pelanggan = hsl.data.pelanggan[0];
            this.data_kurir = hsl.data.kurir;
            console.log(this.data_kurir, 'data kurir');
            this.nama_pengirim = this.data_pelanggan.nama_pel;
            this.no_telp_pengirim = this.data_pelanggan.no_telp_pel;
            this.alamat_pengirim = this.data_pelanggan.alamat_pel;
            if (this.pilihan_tipe_pengiriman == 1 || this.pilihan_tipe_pengiriman == 3) {
                this.nama_penerima = this.data_pelanggan.nama_pel;
                this.no_telp_penerima = this.data_pelanggan.no_telp_pel;
                this.alamat_penerima = this.data_pelanggan.alamat_pel;
                this.nama_pengirim = '';
                this.no_telp_pengirim = '';
                this.alamat_pengirim = '';
            }
            else {
                this.nama_penerima = '';
                this.no_telp_penerima = '';
                this.alamat_penerima = '';
                this.nama_pengirim = this.data_pelanggan.nama_pel;
                this.no_telp_pengirim = this.data_pelanggan.no_telp_pel;
                this.alamat_pengirim = this.data_pelanggan.alamat_pel;
            }
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__["DataCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__["ConstantService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"] }
];
CheckoutPage.propDecorators = {
    select_pengiriman: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['select_pengiriman', { static: false },] }],
    select_provinsi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['select_provinsi', { static: false },] }],
    select_kota: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['select_kota', { static: false },] }],
    select_kecamatan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['select_kecamatan', { static: false },] }],
    select_paket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['select_paket', { static: false },] }]
};
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")).default]
    })
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map