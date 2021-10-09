(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"valid == 'ada'\">\n      <ion-menu-button style=\"color: #fff;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"valid !== 'ada'\" (click)=\"kosong()\">\n      <ion-icon name=\"menu-outline\" style=\"font-size: 28px;margin: 10px;color: #fff;\">\n      </ion-icon>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Kontak</ion-title>\n  </ion-toolbar>\n</ion-header> \n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n<br>\n  <ion-card style=\"border-radius: 20px;background: #fff;\" >\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center;\">\n        <h6><b>Informasi Pembayaran</b></h6>\n      </ion-col>\n    </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"judul_detail_order\">Bank</ion-col>\n        <ion-col size=\"6\" class=\"item_detail_order\">: {{nomor_rekening.nama_bank}}</ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"6\" class=\"judul_detail_order\">Nomor Rekening</ion-col>\n        <ion-col size=\"6\" class=\"item_detail_order\">: {{nomor_rekening.no_rekening}}</ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"6\" class=\"judul_detail_order\">Atas Nama</ion-col>\n        <ion-col size=\"6\" class=\"item_detail_order\">: {{nomor_rekening.nama_pemilik}}</ion-col>\n      </ion-row> \n    <br>\n  </ion-card>\n  <ion-card style=\"border-radius: 20px;background: #fff;margin-top: 10px;\">\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center;\">\n        <h6><b>Hubungi Kami di</b></h6>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <a ion-button href=\"mailto:{{kontak.email}}\">\n          <img src=\"assets/imgs/email.png\" style=\"width: 50%;margin: auto;\">\n        </a>\n        <h6 style=\"color: #222;\">Kirim Email</h6>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <a ion-button href=\"tel:{{kontak.telp}}\">\n        <img src=\"assets/imgs/call.png\" style=\"width: 50%;margin: auto;\">\n        </a>\n        <h6 style=\"color: #222;\">Telepon</h6>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\" (click)=\"open_wa(kontak.telp)\">\n        <img src=\"assets/imgs/wa.png\" style=\"width: 50%;margin: auto;\">\n        <h6 style=\"color: #222;\">Whatsapp</h6>\n      </ion-col>\n    </ion-row>\n    <br>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\n    <ion-fab-button>\n        <img src=\"assets/imgs/bag.png\">\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<!-- <ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle  class=\"judul_detail_order\">Untuk transaksi pembayaran bisa melalui rekening bank yang terdaftar di bawah ini</ion-card-subtitle>\n      </ion-card-header>    \n    <ion-card-content style=\"border-bottom: 1px solid gray;\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"judul_detail_order\">Bank</ion-col>\n        <ion-col size=\"6\" class=\"item_detail_order\">{{nomor_rekening.nama_bank}}</ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"6\" class=\"judul_detail_order\">Nomor Rekening</ion-col>\n        <ion-col size=\"6\" class=\"item_detail_order\">{{nomor_rekening.no_rekening}}</ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"6\" class=\"judul_detail_order\">Atas Nama</ion-col>\n        <ion-col size=\"6\" class=\"item_detail_order\">{{nomor_rekening.nama_pemilik}}</ion-col>\n      </ion-row>                              \n    </ion-card-content>  \n  </ion-card>  \n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle  class=\"judul_detail_order\">Jika ada keluhan, saran atau pertanyaan tentang produk dan transaksi silahkan hubungi customer care kami</ion-card-subtitle>\n      </ion-card-header>    \n    <ion-card-content style=\"border-bottom: 1px solid gray;\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"judul_detail_order\">Marketing</ion-col>\n        <ion-col size=\"8\" class=\"item_detail_order\">\n          <a ion-button href=\"tel:{{kontak.telp}}\">{{kontak.telp}}</a></ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"4\" class=\"judul_detail_order\">Email</ion-col>\n        <ion-col size=\"8\" class=\"item_detail_order\">\n          <a ion-button href=\"mailto:{{kontak.email}}\">{{kontak.email}}</a>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col size=\"4\" class=\"judul_detail_order\">Whatsapp</ion-col>\n        <ion-col size=\"8\" class=\"item_detail_order\">\n          <a ion-button (click)=\"open_wa(kontak.telp)\">Open</a>\n        </ion-col>\n      </ion-row>                              \n    </ion-card-content>  \n  </ion-card>\n</ion-content> -->\n");

/***/ }),

/***/ "./src/app/tab5/tab5-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "./src/app/tab5/tab5-routing.module.ts");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNS90YWI1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBRVQsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFBZCIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdG9wOiAtOXB4O1xuICAgIC8vIGxlZnQ6IDE4cHg7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiA5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");












let Tab5Page = class Tab5Page {
    constructor(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, product_service, route, consta, userdata, util) {
        // this.combroadcast.on('broadcast_keranjang', (data : any )=>{
        //     this.get_total_keranjang();
        // })
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
        this.util = util;
        this.data_product_detail = {};
        this.input_qty = 1;
        this.data_user = {};
        this.arr = {};
        this.data_order = {};
        this.detail_order = [];
        this.nomor_rekening = {};
        this.kontak = { telp: '', email: '' };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.kontak = { telp: '', email: '' };
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            this.data_user = hsl;
            this.get_product_detail();
            this.get_total_keranjang();
        });
        const userid = localStorage.getItem('userid');
        console.log('TAB userid', userid);
        if (userid && userid != null && userid != 'null') {
            this.valid = 'ada';
        }
        else {
            this.valid = 'gaada';
        }
    }
    konfirmasi(id) {
        this.router.navigateByUrl('/konfirmasi/' + id);
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
    open_wa(phone) {
        window.open('https://api.whatsapp.com/send?phone=' + phone, '_system');
    }
    get_product_detail() {
        this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'api_kontak', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log(data, 'map');
            return data.data;
        }))
            .subscribe(hsl => {
            let hasil = {};
            hasil = hsl;
            this.nomor_rekening = hasil.rekening[0];
            this.kontak.telp = hasil.kontak[0].isi_kontak;
            this.kontak.email = hasil.kontak[1].isi_kontak;
            this.kontak.wa = hasil.kontak[2].isi_kontak;
            console.log(this.kontak.email);
        });
    }
    kosong() {
        this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
    }
};
Tab5Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__["DataCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_9__["UserData"] },
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"] }
];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")).default]
    })
], Tab5Page);



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module-es2015.js.map