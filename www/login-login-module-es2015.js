(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar style=\"--background: var(--ion-color-primary);\">\n      <ion-buttons slot=\"start\" style=\"color: #fff;\">\n          <ion-back-button (click)=\"back()\" src=\"/assets/icon/chevron-back-outline.svg\"></ion-back-button>\n      </ion-buttons>\n      <ion-title style=\"color: #fff;margin-top: 5px;\">Masuk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n  <!-- <ion-row>\n    <h6>Silahkan Masuk / Registrasi Untuk Melanjutkan</h6>\n  </ion-row> -->\n  <ion-row style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 15% 8%;border-radius: 20px;\">\n    \n    <ion-col size=\"12\">\n      <h5 style=\"margin: 0px;\"><b style=\"color: #fff;\">LOGIN</b></h5>\n    </ion-col>\n    <ion-card style=\"margin: auto;padding: 0px;border-radius: 30px;margin-top: 10px;width: 100%;\">\n      <ion-item lines=\"none\" style=\"height: 40px;\">\n        <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"login.username\" autofocus=\"true\" \n        style=\"margin-bottom: 7px;\">\n        </ion-input>\n      </ion-item>\n    </ion-card>\n\n    <ion-card style=\"margin: auto;padding: 0px;border-radius: 30px;margin-top: 10px;width: 100%;\">\n      <ion-item lines=\"none\" style=\"height: 40px;\">\n        <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"login.password\" style=\"margin-bottom: 7px;\">\n        </ion-input>\n      </ion-item>\n    </ion-card>\n    <ion-col size=\"12\" style=\"text-align: right;\" (click)=\"lupa_password()\">\n      <h6 style=\"color: #fff;\">Lupa Password?</h6>\n    </ion-col>\n    <ion-button size=\"small\" expand=\"block\" fill=\"outline\" class=\"btn\" (click)=\"onLogin()\"\n    style=\"height: 37px;background: var(--ion-color-secondary);width: 100%;border-radius: 20px;\">\n    <h6 style=\"color: #fff;font-weight: 500;font-size: 15px;text-transform: none;\" *ngIf=\"!isLogin\">\n      Masuk\n    </h6>\n    <ion-spinner name=\"circles\" *ngIf=\"isLogin\" color=\"light\" style=\"color: #fff;\"></ion-spinner>\n  </ion-button>\n    <ion-col size=\"12\" style=\"text-align: center;\" (click)=\"daftar()\">\n      <h6 style=\"color: #fff;margin: 0px;\">Belum Punya akun? <b style=\"color: #fff;\">Daftar</b></h6>\n    </ion-col>\n  \n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");






// import { NgxXml2jsonService } from 'ngx-xml2json';
// import { NgxCommunicateService } from 'ngx-communicate';


let LoginPage = class LoginPage {
    constructor(platform, userData, router, loadingCtrl, http2, alertController, actionSheetController, util) {
        this.platform = platform;
        this.userData = userData;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.http2 = http2;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.util = util;
        // isSubmitted = false;
        // baseUrl: any = '';
        // email: any;
        // password: any;
        // nama: any;
        this.isLogin = false;
        // info : any = {};
        this.login = {
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
        this.hasil = {};
        this.info = {};
        // this.baseUrl = environment.restURL.baseUrl;
        // this.email = '';
        // this.password = '';
    }
    ngOnInit() {
    }
    alert(header, sub, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alert1 = yield this.alertController.create({
                header: header,
                subHeader: sub,
                message: msg,
                buttons: ['OK']
            });
            yield this.alert1.present();
        });
    }
    ionViewDidEnter() {
        // this.platform.backButton.subscribe(hsl=>{
        //   this.keluar_aplikasi();
        // })
    }
    // async keluar_aplikasi() {
    //   this.actionSheet = await this.actionSheetController.create({
    //     header : 'Apakah anda yakin ingin keluar aplikasi ? ',
    //     buttons : [
    //       {
    //         text : 'Ya',
    //         handler : () => {
    //           navigator['app'].exitApp();
    //         }
    //       },
    //       {
    //         text : 'Tidak',
    //         role: 'cancel',
    //         handler : () =>{
    //         }
    //       }
    //     ]
    //   });
    //   await this.actionSheet.present();
    // }  
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('login');
            this.loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            this.submitted = true;
            // if (form.valid) {
            if (this.login.username == '') {
                this.util.showWarningAlert('Email Wajib Diisi');
                return false;
            }
            if (this.login.password == '') {
                this.util.showWarningAlert('Password Wajib Diisi');
                return false;
            }
            else {
                this.isLogin = true;
                yield this.loading.present();
                this.http2.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_6__["API_URL"] + 'api_login', { email: this.login.username, password: this.login.password }, {})
                    .subscribe((data) => {
                    console.log({ email: this.login.username, password: this.login.password });
                    console.log(data);
                    this.isLogin = false;
                    this.hasil = data;
                    this.info = data;
                    if (this.hasil.code == 1) {
                        console.log('INFO DATA', this.info);
                        console.log('id_pel', this.info.id_pel);
                        var logindata = JSON.parse(localStorage.getItem('akses')) || [];
                        logindata.push(this.info);
                        localStorage.setItem('akses', JSON.stringify(logindata));
                        localStorage.setItem('userid', this.info.id_pel);
                        this.userData.login(this.hasil).then(hasl => {
                            this.loading.dismiss();
                            this.util.showToast('Berhasil Login', 'success', 'bottom');
                            this.router.navigateByUrl('/tabs/tab1');
                        });
                    }
                    else {
                        this.loading.dismiss();
                        this.util.showToast(this.hasil.msg, 'danger', 'bottom');
                    }
                });
            }
        });
    }
    loadConfrim(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Notifikasi',
                message: param + ',<p></p>',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    lupa_password() {
        this.router.navigateByUrl('/lupa-password');
    }
    back() {
        this.router.navigateByUrl('/tabs/tab1');
    }
    onSignup() {
        this.router.navigateByUrl('/signup');
    }
    daftar() {
        this.router.navigateByUrl('/register');
    }
    goWa() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



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
//# sourceMappingURL=login-login-module-es2015.js.map