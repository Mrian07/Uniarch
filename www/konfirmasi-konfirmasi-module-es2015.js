(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["konfirmasi-konfirmasi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/konfirmasi/konfirmasi.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/konfirmasi/konfirmasi.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-back-button defaultHref=\"/riwayat-order\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Konfirmasi</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\n    <div style=\"margin-bottom: 20px;\">\n      <h6 style=\"margin: 0px;\"><b style=\"color: #fff;\">Konfirmasi Transfer Bank</b></h6>\n    </div>\n    <br>\n  <form #signupForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">ID Order</ion-label>\n          <ion-input [(ngModel)]=\"signup.id_order\" name=\"id_order\" type=\"text\" #id_order=\"ngModel\" readonly required>\n          </ion-input>\n        </ion-item> \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Nama Pemilik Rekening</ion-label>\n          <ion-input [(ngModel)]=\"signup.nama_pemilik\" name=\"nama_pemilik\" type=\"text\" #nama_pemilik=\"ngModel\" required>\n          </ion-input>\n        </ion-item>  \n        <ion-text color=\"danger\">\n          <p [hidden]=\"nama_pemilik.valid || submitted == false\" class=\"ion-padding-start\">\n            Nama Pemilik Rekening tidak boleh kosong\n          </p>\n        </ion-text>                       \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Dari Bank</ion-label>\n          <ion-select [(ngModel)]=\"signup.dari_bank\" name=\"dari_bank\" type=\"text\" #dari_bank=\"ngModel\" required>\n              <ion-select-option value=\"L\">Bank Central Asia</ion-select-option>\n              <ion-select-option value=\"P\">Bank Lainnya</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text color=\"danger\">\n          <p [hidden]=\"dari_bank.valid || submitted == false\" class=\"ion-padding-start\">\n            Dari Bank tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Ke Bank</ion-label>\n          <ion-input [(ngModel)]=\"signup.ke_bank\" name=\"ke_bank\" type=\"text\" #ke_bank=\"ngModel\" readonly required>\n          </ion-input>\n        </ion-item>         \n        <ion-text color=\"danger\">\n          <p [hidden]=\"ke_bank.valid || submitted == false\" class=\"ion-padding-start\">\n            Ke Bank tidak boleh kosong\n          </p>\n        </ion-text>         \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Jumlah Dana</ion-label>\n          <ion-input [(ngModel)]=\"signup.jumlah_dana\" name=\"jumlah_dana\" type=\"number\" #jumlah_dana=\"ngModel\" required>\n          </ion-input>\n        </ion-item>  \n        <ion-text color=\"danger\">\n          <p [hidden]=\"jumlah_dana.valid || submitted == false\" class=\"ion-padding-start\">\n            Jumlah Dana tidak boleh kosong\n          </p>\n        </ion-text>  \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Tanggal Pembayaran</ion-label>\n          <!-- <ion-input [(ngModel)]=\"signup.tanggal_pembayaran\" name=\"tanggal_pembayaran\" type=\"date\" #tanggal_pembayaran=\"ngModel\" required>\n          </ion-input> -->\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Pilih Tanggal\" [(ngModel)]=\"signup.tanggal_pembayaran\" name=\"tanggal_pembayaran\"\n          #tanggal_pembayaran=\"ngModel\" required\n          cancelText=\"Batal\" doneText=\"Pilih\"></ion-datetime>\n        </ion-item>  \n        <ion-text color=\"danger\">\n          <p [hidden]=\"tanggal_pembayaran.valid || submitted == false\" class=\"ion-padding-start\">\n            Tanggal Pembayaran tidak boleh kosong\n          </p>\n        </ion-text>  \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Bukti Foto</ion-label>\n          <ion-input [(ngModel)]=\"signup.bukti\" name=\"bukti\" type=\"hidden\" #bukti=\"ngModel\" required></ion-input>\n        </ion-item> \n\n        <ion-text color=\"danger\">\n          <p [hidden]=\"tanggal_pembayaran.valid || submitted == false\" class=\"ion-padding-start\">\n            Bukti Foto tidak boleh kosong\n          </p>\n        </ion-text>  \n        <div style=\"width: 100%;text-align: center;\" (click)=\"upload_bukti()\">\n          <div style=\"width: 80%;border:2px dashed#c4c4c4;margin:0 auto;border-radius: 20px;\">\n            <img class=\"product-image\" style=\"height: 120px;\" src=\"{{signup.bukti}}\" onerror=\"this.src = '/assets/img/no_image.png'\">\n          </div>         \n        </div>                                  \n    </ion-list>\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"full\" (click)=\"upload_bukti()\" color=\"light\" style=\"--border-radius:20px\">\n            Upload Bukti</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    <div>\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" color=\"light\" expand=\"block\"\n      style=\"--border-radius:20px\"><b style=\"color: var(--ion-color-primary);\">Submit</b></ion-button>\n    </div>\n  </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/konfirmasi/konfirmasi-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/konfirmasi/konfirmasi-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: KonfirmasiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonfirmasiPageRoutingModule", function() { return KonfirmasiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _konfirmasi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./konfirmasi.page */ "./src/app/konfirmasi/konfirmasi.page.ts");




const routes = [
    {
        path: '',
        component: _konfirmasi_page__WEBPACK_IMPORTED_MODULE_3__["KonfirmasiPage"]
    }
];
let KonfirmasiPageRoutingModule = class KonfirmasiPageRoutingModule {
};
KonfirmasiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KonfirmasiPageRoutingModule);



/***/ }),

/***/ "./src/app/konfirmasi/konfirmasi.module.ts":
/*!*************************************************!*\
  !*** ./src/app/konfirmasi/konfirmasi.module.ts ***!
  \*************************************************/
/*! exports provided: KonfirmasiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonfirmasiPageModule", function() { return KonfirmasiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _konfirmasi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./konfirmasi-routing.module */ "./src/app/konfirmasi/konfirmasi-routing.module.ts");
/* harmony import */ var _konfirmasi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./konfirmasi.page */ "./src/app/konfirmasi/konfirmasi.page.ts");







let KonfirmasiPageModule = class KonfirmasiPageModule {
};
KonfirmasiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _konfirmasi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KonfirmasiPageRoutingModule"]
        ],
        declarations: [_konfirmasi_page__WEBPACK_IMPORTED_MODULE_6__["KonfirmasiPage"]]
    })
], KonfirmasiPageModule);



/***/ }),

/***/ "./src/app/konfirmasi/konfirmasi.page.scss":
/*!*************************************************!*\
  !*** ./src/app/konfirmasi/konfirmasi.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h {\n  color: #222;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29uZmlybWFzaS9rb25maXJtYXNpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2tvbmZpcm1hc2kva29uZmlybWFzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oe1xuICAgIGNvbG9yOiAjMjIyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/konfirmasi/konfirmasi.page.ts":
/*!***********************************************!*\
  !*** ./src/app/konfirmasi/konfirmasi.page.ts ***!
  \***********************************************/
/*! exports provided: KonfirmasiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonfirmasiPage", function() { return KonfirmasiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let KonfirmasiPage = class KonfirmasiPage {
    constructor(http, router, userData, loadingctrl, consta, userdata, route, modalCtrl, camera) {
        this.http = http;
        this.router = router;
        this.userData = userData;
        this.loadingctrl = loadingctrl;
        this.consta = consta;
        this.userdata = userdata;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.data_user = {};
        this.submitted = false;
        this.signup = {
            id_order: '',
            nama_pemilik: '',
            dari_bank: '',
            ke_bank: 'BANK CENTRAL ASIA',
            jumlah_dana: '',
            tanggal_pembayaran: '',
            bukti: '',
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log('view wenter');
        this.signup = {
            id_order: '',
            nama_pemilik: '',
            dari_bank: '',
            ke_bank: 'BANK CENTRAL ASIA',
            jumlah_dana: '',
            tanggal_pembayaran: '',
            bukti: '',
        };
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            if (hsl == null) {
                this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.id_order = this.route.snapshot.paramMap.get('id');
                this.signup.id_order = this.id_order;
            }
        });
    }
    upload_bukti() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // alert('ambil photo');
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.loading = yield this.loadingctrl.create({
                message: 'Please wait...'
            });
            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                const base64Image = 'data:image/jpeg;base64,' + imageData;
                this.signup.bukti = base64Image;
            });
        });
    }
    onSignup(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            console.log(this.signup, 'signup');
            if (form.valid) {
                this.loading = yield this.loadingctrl.create({
                    message: 'Silahkan tunggu....'
                });
                this.loading.present();
                this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["API_URL_SLIDER"] + 'api_konfirmasi', this.signup)
                    // .pipe(map((data: any) => {
                    //   console.log(data, 'map')
                    //   return data.data;
                    // }))
                    .subscribe(hasil => {
                    let hsl = {};
                    hsl = hasil;
                    if (hsl.code == 1) {
                        // this.signup = {
                        //   id_order : '',
                        //   nama_pemilik : '',
                        //   dari_bank : '',
                        //   ke_bank : 'BANK CENTRAL ASIA',
                        //   jumlah_dana : '',
                        //   tanggal_pembayaran : '',
                        //   bukti : '',
                        // }
                        this.consta.show_alert('Sukses', '', hsl.msg).then(hsl => {
                            this.router.navigateByUrl('/riwayat-order');
                        });
                    }
                    else {
                        this.consta.show_alert('Error', '', hsl.msg);
                    }
                    this.loading.dismiss();
                });
            }
        });
    }
};
KonfirmasiPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] }
];
KonfirmasiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'konfirmasi',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./konfirmasi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/konfirmasi/konfirmasi.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./konfirmasi.page.scss */ "./src/app/konfirmasi/konfirmasi.page.scss")).default]
    })
], KonfirmasiPage);



/***/ })

}]);
//# sourceMappingURL=konfirmasi-konfirmasi-module-es2015.js.map