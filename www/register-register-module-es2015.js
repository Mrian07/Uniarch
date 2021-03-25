(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"color: #fff;\">Daftar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content  [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\r\n    <div style=\"margin-bottom: 20px;\">\r\n      <h5 style=\"margin: 0px;\"><b style=\"color: #fff;\">Daftar</b></h5>\r\n    </div>\r\n    <br>\r\n  <form #signupForm=\"ngForm\" novalidate>\r\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Nama</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.nama\" name=\"nama\" type=\"text\" #nama=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"nama.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Nama tidak boleh kosong\r\n          </p>\r\n        </ion-text> \r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">No. Telp</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.no_telp\" name=\"no_telp\" type=\"text\" #no_telp=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"no_telp.valid || submitted == false\" class=\"ion-padding-start\">\r\n            No Telp tidak boleh kosong\r\n          </p>\r\n        </ion-text>         \r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Jenis Kelamin</ion-label>\r\n          <ion-select [(ngModel)]=\"signup.jk_pel\" name=\"jk_pel\" type=\"text\" #jk_pel=\"ngModel\" required>\r\n              <ion-select-option value=\"L\">Laki-laki</ion-select-option>\r\n              <ion-select-option value=\"P\">Perempuan</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"jk_pel.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Jenis Kelamin tidak boleh kosong\r\n          </p>\r\n        </ion-text>         \r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Provinsi</ion-label>\r\n          <ion-select [(ngModel)]=\"signup.provinsi\" name=\"provinsi\" type=\"text\" (ionChange)=\"pilih_provinsi($event)\" #provinsi=\"ngModel\" required>\r\n              <ion-select-option *ngFor=\" let item of data_provinsi\" [value]=\"item\">{{item.provinsi}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"provinsi.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Provinsi tidak boleh kosong\r\n          </p>\r\n        </ion-text>         \r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Kota / Kabupaten</ion-label>\r\n          <ion-select [(ngModel)]=\"signup.kota\" (ionChange)=\"pilih_kota($event)\" name=\"kota\" type=\"text\" #kota=\"ngModel\" required>\r\n              <ion-select-option *ngFor=\" let item of data_kota\" [value]=\"item\">{{item.kota}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"kota.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Kota tidak boleh kosong\r\n          </p>\r\n        </ion-text> \r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Kecamatan</ion-label>\r\n          <ion-select [(ngModel)]=\"signup.kecamatan\" name=\"kecamatan\" type=\"text\" #kecamatan=\"ngModel\" required>\r\n              <ion-select-option *ngFor=\" let item of data_kecamatan\" [value]=\"item\">{{item.kecamatan}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"kecamatan.valid || submitted == false\" class=\"ion-padding-start\">\r\n            kecamatan tidak boleh kosong\r\n          </p>\r\n        </ion-text>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Alamat</ion-label>\r\n          <ion-textarea [(ngModel)]=\"signup.alamat\" name=\"alamat\" type=\"text\" #alamat=\"ngModel\" required>\r\n          </ion-textarea>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"alamat.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Alamat tidak boleh kosong\r\n          </p>\r\n        </ion-text>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\r\n          <ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" #email=\"ngModel\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-text color=\"danger\">\r\n          <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\r\n            Email tidak boleh kosong / valid\r\n          </p>\r\n        </ion-text>                 \r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\r\n        <ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n          Password tidak boleh kosong / valid\r\n        </p>\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"primary\">Konfirmasi Password</ion-label>\r\n        <ion-input [(ngModel)]=\"signup.confirm_password\" name=\"confirm_password\" type=\"password\" #confirm_password=\"ngModel\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"confirm_password.valid || submitted == false\" class=\"ion-padding-start\">\r\n          Konfirmasi Password tidak boleh kosong / valid\r\n        </p>\r\n        <p *ngIf=\"error_konfirmasi==true\" class=\"ion-padding-start\">\r\n          Konfirmasi Password harus sama dengan password\r\n        </p>        \r\n      </ion-text>      \r\n    </ion-list>\r\n    <br><br>\r\n    <div >\r\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\" color=\"light\"\r\n      style=\"--border-radius:20px\"><b>Daftar</b></ion-button>\r\n    </div>\r\n  </form>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc2lnbnVwLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");






let RegisterPage = class RegisterPage {
    constructor(router, userData, loadingctrl, consta) {
        this.router = router;
        this.userData = userData;
        this.loadingctrl = loadingctrl;
        this.consta = consta;
        this.signup = {
            nama: '',
            password: '',
            email: '',
            provinsi: '',
            kota: '',
            kecamatan: '',
            alamat: '',
            jk_pel: '',
            confirm_password: '',
            no_telp: '',
            username: '',
        };
        this.submitted = false;
        this.data_provinsi = [];
        this.data_kota = [];
        this.data_kecamatan = [];
        this.error_konfirmasi = false;
    }
    ionViewWillEnter() {
        this.signup = {
            nama: '',
            password: '',
            email: '',
            provinsi: '',
            kota: '',
            kecamatan: '',
            alamat: '',
            jk_pel: '',
            confirm_password: '',
            no_telp: '',
            username: '',
        };
        this.error_konfirmasi = false;
        this.get_data_provinsi();
    }
    pilih_provinsi($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log($event.target.value, 'pilih provinsi');
            this.loading = yield this.loadingctrl.create({
                message: 'Silahkan tunggu....'
            });
            this.loading.present();
            this.userData.get_data_kota($event.target.value.provinsi).then(hsl => {
                let hasil = {};
                hasil = hsl;
                this.data_kota = hasil.data;
                console.log(this.data_provinsi);
                this.loading.dismiss();
            });
        });
    }
    pilih_kota($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Silahkan tunggu....'
            });
            this.loading.present();
            this.userData.get_data_kecamatan($event.target.value.kota).then(hsl => {
                let hasil = {};
                hasil = hsl;
                this.data_kecamatan = hasil.data;
                this.loading.dismiss();
            });
        });
    }
    get_data_provinsi() {
        this.userData.get_data_provinsi().then(hsl => {
            let hasil = {};
            hasil = hsl;
            this.data_provinsi = hasil.data;
            console.log(this.data_provinsi);
        });
    }
    onSignup(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            console.log(this.signup, 'signup');
            let nama_pel = this.signup.nama;
            let email_pel = this.signup.email;
            let pass_pel = this.signup.password;
            let kon_pass = this.signup.confirm_password;
            let no_telp_pel = this.signup.no_telp;
            if (pass_pel != kon_pass) {
                this.error_konfirmasi = true;
                return;
            }
            let prov = {};
            let kot = {};
            let kec = {};
            prov = this.signup.provinsi;
            kot = this.signup.kota;
            kec = this.signup.kecamatan;
            let provinsi = prov.provinsi;
            let kota = kot.kota;
            let kecamatan = kec.kecamatan;
            let alamat_pel = this.signup.alamat;
            let jk_pel = this.signup.jk_pel;
            if (form.valid) {
                this.loading = yield this.loadingctrl.create({
                    message: 'Silahkan tunggu....'
                });
                this.loading.present();
                this.userData.get_referral().then(val => {
                    this.userData.submit_pendaftaran(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, val)
                        .then(hsl => {
                        let hasil = {};
                        hasil = hsl;
                        this.loading.dismiss();
                        if (hasil.code == 1) {
                            this.consta.show_alert('Sukses', '', hasil.msg).then(hsl => {
                                if (hsl) {
                                    // form.reset();
                                    this.router.navigateByUrl('login');
                                }
                            });
                        }
                        else {
                            this.consta.show_alert('Maaf', '', hasil.msg);
                        }
                    });
                });
                // this.userData.signup(this.signup.username);
                // this.router.navigateByUrl('/app/tabs/schedule');
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map