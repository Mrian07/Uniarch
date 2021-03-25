(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <ion-toolbar style=\"--background: var(--ion-color-primary);\">\r\n      <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n          <ion-back-button (click)=\"back()\" src=\"/assets/icon/chevron-back-outline.svg\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title style=\"color: #fff;margin-top: 5px;\">Masuk</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n  <!-- <ion-row>\r\n    <h6>Silahkan Masuk / Registrasi Untuk Melanjutkan</h6>\r\n  </ion-row> -->\r\n  <ion-row style=\"text-align: center;padding: 20px;background: var(--ion-color-primary);margin: 15% 8%;border-radius: 20px;\">\r\n    \r\n    <ion-col size=\"12\">\r\n      <h5 style=\"margin: 0px;\"><b style=\"color: #fff;\">LOGIN</b></h5>\r\n    </ion-col>\r\n    <ion-card style=\"margin: auto;padding: 0px;border-radius: 30px;margin-top: 10px;width: 100%;\">\r\n      <ion-item lines=\"none\" style=\"height: 40px;\">\r\n        <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"login.username\" autofocus=\"true\" \r\n        style=\"margin-bottom: 7px;\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card style=\"margin: auto;padding: 0px;border-radius: 30px;margin-top: 10px;width: 100%;\">\r\n      <ion-item lines=\"none\" style=\"height: 40px;\">\r\n        <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"login.password\" style=\"margin-bottom: 7px;\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-col size=\"12\" style=\"text-align: right;\" (click)=\"lupa_password()\">\r\n      <h6 style=\"color: #fff;\">Lupa Password?</h6>\r\n    </ion-col>\r\n    <ion-button size=\"small\" expand=\"block\" fill=\"outline\" class=\"btn\" (click)=\"onLogin()\"\r\n    style=\"height: 37px;background: var(--ion-color-secondary);width: 100%;border-radius: 20px;\">\r\n    <h6 style=\"color: #fff;font-weight: 500;font-size: 15px;text-transform: none;\" *ngIf=\"!isLogin\">\r\n      Masuk\r\n    </h6>\r\n    <ion-spinner name=\"circles\" *ngIf=\"isLogin\" color=\"light\" style=\"color: #fff;\"></ion-spinner>\r\n  </ion-button>\r\n    <ion-col size=\"12\" style=\"text-align: center;\" (click)=\"daftar()\">\r\n      <h6 style=\"color: #fff;margin: 0px;\">Belum Punya akun? <b style=\"color: #fff;\">Daftar</b></h6>\r\n    </ion-col>\r\n  \r\n  </ion-row>\r\n</ion-content>\r\n");

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
                        //this.oneSignal.sendTag('id_pel', this.hasil.id_pel);
                        this.userData.login(this.hasil).then(hasl => {
                            this.loading.dismiss();
                            // this.communicate.broadcast('login_success', 'login_success');
                            this.util.showToast('Berhasil Login', 'success', 'bottom');
                            // this.router.navigateByUrl('');
                            this.router.navigateByUrl('/tabs/tab1');
                            //this.router.navigate(['/tabs/tab1'])
                            //.then(() => {
                            //window.location.reload();
                            //});
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



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map