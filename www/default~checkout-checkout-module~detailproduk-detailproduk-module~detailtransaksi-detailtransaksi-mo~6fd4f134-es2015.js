(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134"],{

/***/ "./src/app/providers/constant.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/constant.service.ts ***!
  \***********************************************/
/*! exports provided: API_RAJAONKIR, BASE_URL, API_URL, API_URL_SLIDER, IMAGE_URL_PRODUCT, ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_RAJAONKIR", function() { return API_RAJAONKIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL_SLIDER", function() { return API_URL_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_URL_PRODUCT", function() { return IMAGE_URL_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");


// development
// export let API_URL='http://172.20.10.5/msi2/app/';
// export let API_URL_SLIDER='http://172.20.10.5/msi2/app/';
// export let IMAGE_URL_PRODUCT='http://172.20.10.5/msi2/gambar/produk/';
// production
let API_RAJAONKIR = '';
let BASE_URL = 'https://dafacollection.net/';
// export let API_URL = 'https://msidahua.com/app/';
let API_URL = BASE_URL + 'app/';
// export let API_URL_SLIDER='https://msidahua.com/app/';
let API_URL_SLIDER = API_URL;
// export let IMAGE_URL_PRODUCT='https://msidahua.com/gambar/produk/';
let IMAGE_URL_PRODUCT = BASE_URL + 'gambar/produk/';



// export let API_URL='http://192.168.43.80/customerloyalty/rest/';
let ConstantService = class ConstantService {
    constructor(http, alertctrl) {
        this.http = http;
        this.alertctrl = alertctrl;
        this.product_category = [];
    }
    // async show_alert(title, sub_title, message){
    //   this.alertfun = await this.alertctrl.create({
    //     header: title!='' ? title : 'Pemberitahuan',
    //     subHeader: sub_title!='' ? sub_title : '',
    //     message: message,
    //     buttons: ['OK']
    //   });
    //   this.alertfun.present();
    // }
    show_alert(title, sub_title, message) {
        return new Promise((resolve, reject) => {
            const ctl = this.alertctrl;
            let alert = this.alertctrl.create({
                header: title != '' ? title : 'Pemberitahuan',
                subHeader: sub_title != '' ? sub_title : '',
                message: message,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            ctl.dismiss().then(() => { resolve(true); });
                            return false;
                        }
                    },
                ]
            }).then((dlg) => dlg.present());
        });
    }
    get_product_category() {
        this.product_category = [];
        return this.http.post(API_URL + 'get_product_category', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // const datax : any = [];
            // data.data.forEach(element => {
            //   datax.push(element.label)
            // });
            // return datax;
            return data.data;
        }));
    }
};
ConstantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ConstantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConstantService);



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
//# sourceMappingURL=default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~6fd4f134-es2015.js.map