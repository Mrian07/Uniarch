(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lupa-password-lupa-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lupa-password/lupa-password.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lupa-password/lupa-password.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Lupa Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: var(--ion-color-bg);\">\n\n  <!-- <div style=\"width: 100%;text-align:center;margin-top: 60px; margin-bottom: 30px;\">\n    <img src=\"assets/img/logo.png\" style=\"width:180px;\" alt=\"Ionic logo\">\n  </div> -->\n  <div style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 3% 3%;border-radius: 20px;\">\n    <div style=\"margin-bottom: 20px;\">\n      <h5 style=\"margin: 0px;\"><b style=\"color: #fff;\">Lupa Password</b></h5>\n    </div>\n    <br>\n  <form #signupForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\" style=\"border-radius: 20px;\">\n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\n          <ion-input [(ngModel)]=\"signup.email\" name=\"email\" type=\"email\" placeholder=\"Silahkan masukkan email anda\" #email=\"ngModel\" required>\n          </ion-input>\n        </ion-item> \n        <ion-item>\n          <ion-button (click)=\"kirim_kode()\">Kirim Kode</ion-button>\n        </ion-item> \n        <ion-item>\n          <ion-label position=\"stacked\" color=\"primary\">Kode Unik</ion-label>\n          <ion-input [(ngModel)]=\"signup.kode_unik\" name=\"kode_unik\" type=\"text\" placeholder=\"Silahkan masukkan kode unik\" #email=\"ngModel\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-button (click)=\"reset_password()\" color=\"light\"\n          style=\"--border-radius:15px;\">Reset Password</ion-button>\n        </ion-item>                             \n    </ion-list>\n  </form>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/lupa-password/lupa-password-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/lupa-password/lupa-password-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LupaPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LupaPasswordPageRoutingModule", function() { return LupaPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lupa_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lupa-password.page */ "./src/app/lupa-password/lupa-password.page.ts");




const routes = [
    {
        path: '',
        component: _lupa_password_page__WEBPACK_IMPORTED_MODULE_3__["LupaPasswordPage"]
    }
];
let LupaPasswordPageRoutingModule = class LupaPasswordPageRoutingModule {
};
LupaPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LupaPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/lupa-password/lupa-password.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lupa-password/lupa-password.module.ts ***!
  \*******************************************************/
/*! exports provided: LupaPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LupaPasswordPageModule", function() { return LupaPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lupa_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lupa-password-routing.module */ "./src/app/lupa-password/lupa-password-routing.module.ts");
/* harmony import */ var _lupa_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lupa-password.page */ "./src/app/lupa-password/lupa-password.page.ts");







let LupaPasswordPageModule = class LupaPasswordPageModule {
};
LupaPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lupa_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["LupaPasswordPageRoutingModule"]
        ],
        declarations: [_lupa_password_page__WEBPACK_IMPORTED_MODULE_6__["LupaPasswordPage"]]
    })
], LupaPasswordPageModule);



/***/ }),

/***/ "./src/app/lupa-password/lupa-password.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/lupa-password/lupa-password.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1cGEtcGFzc3dvcmQvbHVwYS1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/lupa-password/lupa-password.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/lupa-password/lupa-password.page.ts ***!
  \*****************************************************/
/*! exports provided: LupaPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LupaPasswordPage", function() { return LupaPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







let LupaPasswordPage = class LupaPasswordPage {
    constructor(router, userData, loadingctrl, consta, http) {
        this.router = router;
        this.userData = userData;
        this.loadingctrl = loadingctrl;
        this.consta = consta;
        this.http = http;
        this.signup = {
            kode_unik: '',
            email: '',
        };
        this.submitted = false;
        this.data_provinsi = [];
        this.data_kota = [];
        this.data_kecamatan = [];
        this.error_konfirmasi = false;
    }
    ionViewWillEnter() {
        this.signup = {
            kode_unik: '',
            email: '',
        };
        this.error_konfirmasi = false;
    }
    ngOnInit() {
    }
    kirim_kode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signup.email == '') {
                this.consta.show_alert('Error', '', 'Silahkan isi email terlebih dulu');
                return false;
            }
            this.loading = yield this.loadingctrl.create({
                message: 'Please wait...'
            });
            this.loading.present();
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + 'api_kirim_kode_lupa_password', { email_pel: this.signup.email })
                .subscribe(hsl => {
                let hasil = {};
                hasil = hsl;
                this.loading.dismiss();
                if (hasil.code == 1) {
                    this.consta.show_alert('Selamat', '', hasil.msg).then(() => {
                    });
                }
                else {
                    this.consta.show_alert('Maaf', '', hasil.msg).then(() => {
                    });
                }
            });
        });
    }
    reset_password() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signup.kode_unik == '') {
                this.consta.show_alert('Error', '', 'Silahkan isi kode unik terlebih dulu');
                return false;
            }
            this.loading = yield this.loadingctrl.create({
                message: 'Please wait...'
            });
            this.loading.present();
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + 'api_reset_pass', { kode_unik: this.signup.kode_unik })
                .subscribe(hsl => {
                let hasil = {};
                hasil = hsl;
                this.loading.dismiss();
                if (hasil.code == 1) {
                    this.consta.show_alert('Selamat', '', hasil.msg).then(() => {
                    });
                }
                else {
                    this.consta.show_alert('Maaf', '', hasil.msg).then(() => {
                    });
                }
            });
        });
    }
};
LupaPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
LupaPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lupa-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lupa-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lupa-password/lupa-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lupa-password.page.scss */ "./src/app/lupa-password/lupa-password.page.scss")).default]
    })
], LupaPasswordPage);



/***/ }),

/***/ "./src/app/providers/user-data.ts":
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");



// import { HTTP } from '@ionic-native/http/ngx';





let UserData = class UserData {
    constructor(storage, http, platform, router) {
        this.storage = storage;
        this.http = http;
        this.platform = platform;
        this.router = router;
        this._favorites = [];
        this.session = {};
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.platform.ready().then(() => {
            this.isLoggedIn();
        });
    }
    isAuthenticated() {
        console.log(this.authState.value, 'value');
        return this.authState.value;
        // if(this.authState.value==false){
        //   this.router.navigate(['login']);
        // }else{
        //   // this.router.navigate(['checkout']);
        // }
    }
    hasFavorite(sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    }
    addFavorite(sessionName) {
        this._favorites.push(sessionName);
    }
    removeFavorite(sessionName) {
        const index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    }
    login(username) {
        console.log(username, 'USERNAME');
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            // this.http.get(this.API_URL + 'login', {}, {})
            // .then(data => {
            //   console.log(data.status);
            //   console.log(data.data); // data received by server
            //   console.log(data.headers);
            // })
            // .catch(error => {
            //   console.log(error.status);
            //   console.log(error.error); // error message as string
            //   console.log(error.headers);
            // });      
            return window.dispatchEvent(new CustomEvent('user:login'));
        });
    }
    signup(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:signup'));
        });
    }
    logout() {
        return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
            this.authState.next(false);
            return this.storage.remove('username');
        }).then(() => {
            window.dispatchEvent(new CustomEvent('user:logout'));
        });
    }
    setUsername(username) {
        return this.storage.set('username', username);
    }
    set_referral(referral) {
        console.log(referral, 'REFERRAL SET');
        return this.storage.set('referral', referral);
    }
    get_referral() {
        return this.storage.get('referral').then((value) => {
            console.log(value, 'REFERRAL SET');
            return value;
        });
    }
    getUsername() {
        return this.storage.get('username').then((value) => {
            return value;
        });
    }
    isLoggedIn() {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            this.authState.next(true);
            return value === true;
        });
    }
    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value;
        });
    }
    // CUSTOMER LOYALTY
    set_photo_profile(photo_profile) {
        return this.getUsername().then(hsl => {
            this.session = hsl;
            this.session.photo = photo_profile;
            this.setUsername(this.session);
        });
    }
    get_photo_profile() {
        return this.getUsername().then(hsl => {
            this.session = hsl;
            return this.session.photo;
        });
    }
    get_data_provinsi() {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_provinsi', {})
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    get_data_kota(provinsi) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kota', { provinsi: provinsi })
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    get_data_kecamatan(kota) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_data_kecamatan', { kota: kota })
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    short_url(url) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_short_url', { url: url })
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    submit_pendaftaran(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, referral) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_submit_pendaftaran', {
                nama_pel: nama_pel,
                email_pel: email_pel,
                pass_pel: pass_pel,
                kon_pass: kon_pass,
                no_telp_pel: no_telp_pel,
                provinsi: provinsi,
                kota: kota,
                kecamatan: kecamatan,
                alamat_pel: alamat_pel,
                jk_pel: jk_pel,
                id_ref: referral
            })
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    update_profile(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, id_pel, info_lain_pel, nama_bank, rek, an) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_7__["API_URL"] + 'api_update_pel', {
                nama_pel: nama_pel,
                email_pel: email_pel,
                pass_pel: pass_pel,
                kon_pass: kon_pass,
                no_telp_pel: no_telp_pel,
                provinsi: provinsi,
                kota: kota,
                kecamatan: kecamatan,
                alamat_pel: alamat_pel,
                jk_pel: jk_pel,
                id_pel: id_pel, info_lain_pel: info_lain_pel, nama_bank: nama_bank, rek: rek, an: an
            })
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
};
UserData.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserData);



/***/ })

}]);
//# sourceMappingURL=lupa-password-lupa-password-module-es2015.js.map