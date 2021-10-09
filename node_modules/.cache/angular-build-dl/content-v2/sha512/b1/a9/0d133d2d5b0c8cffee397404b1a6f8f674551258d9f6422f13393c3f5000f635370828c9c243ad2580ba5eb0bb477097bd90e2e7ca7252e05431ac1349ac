(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~3f784061"],{

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



/***/ }),

/***/ "./src/app/services/data-cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data-cart.service.ts ***!
  \***********************************************/
/*! exports provided: DataCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCartService", function() { return DataCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");




let DataCartService = class DataCartService {
    constructor(http) {
        this.http = http;
    }
    save_keranjang(id_pro, id_pel, id_varian, qty_pro) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'save_keranjang', {
                id_pro: id_pro,
                id_pel: id_pel,
                id_varian: id_varian,
                qty_pro: qty_pro,
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    update_keranjang(id_pel, data_product) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_update_keranjang', {
                id_pel: id_pel,
                data_cart: data_product,
            })
                .subscribe(hasil => {
                console.log('hasil', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    hapus_keranjang(id_pel, data_product) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_hapus_keranjang', {
                id_pel: id_pel,
                data_cart: data_product,
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    get_keranjang(id_pel) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_get_data_keranjang', {
                id_pel: id_pel,
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    get_rajaongkir_provinsi() {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_provinsi', {})
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    get_rajaongkir_kota(id_provinsi) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_kota', { id_provinsi: id_provinsi
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    get_rajaongkir_kecamatan(id_kota) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_kecamatan', { id_kota: id_kota
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    get_rajaongkir_harga(id_kecamatan, kurir) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_harga', { id_kecamatan: id_kecamatan, kurir: kurir })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    get_rajaongkir_summary(cost, id_pel, potongan) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_summary', { cost: cost, id_pel: id_pel, potongan: potongan })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    //   id_pel: 60
    // paket: OKE
    // perkilo: 23000
    // kurir: jne
    // nama: sabar
    // telepon: 087878825659
    // nama_pengirim: 
    // no_pengirim: 
    // pilihan_form: 1
    // ongkir_provinsi: Jawa Timur
    // ongkir_kota: Kab. Bangkalan
    // ongkir_kecamatan: Kwanyar
    // alamat: funyok
    // alamat_pengirim: 
    get_rajaongkir_save_pengiriman(id_pel, email, paket, perkilo, kurir, nama, telepon, nama_pengirim, no_pengirim, pilihan_form, ongkir_provinsi, ongkir_kota, ongkir_kecamatan, alamat, alamat_pengirim, catatan, potongan, stock_kupon) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_save_pengiriman', {
                id_pel: id_pel, email: email, paket: paket, perkilo: perkilo, kurir: kurir, nama: nama, telepon: telepon, nama_pengirim: nama_pengirim,
                no_pengirim: no_pengirim, pilihan_form: pilihan_form, ongkir_provinsi: ongkir_provinsi,
                ongkir_kota: ongkir_kota, ongkir_kecamatan: ongkir_kecamatan, alamat: alamat, alamat_pengirim: alamat_pengirim, catatan: catatan,
                potongan: potongan, stock_kupon: stock_kupon
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            }, error => {
                resolve(JSON.parse(error['error']['text'].slice(error['error']['text'].length - 274, error['error']['text'].length)));
            });
        });
        return promise;
    }
    master_pengiriman(id_pel) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'api_master_pengiriman', {
                id_pel: id_pel,
            })
                .subscribe(hasil => {
                //console.log('hasil', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    getkupon(kode) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'get_kupon', {
                kode: kode,
            })
                .subscribe(hasil => {
                //console.log('kupon', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    getHadiah(kode_pel) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'get_list_poin', {
                kode_pel: kode_pel
            })
                .subscribe(hasil => {
                //console.log('hadiah', 'hasil')
                resolve(hasil);
            });
        });
        return promise;
    }
    getRiwayat(kode_pel) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'get_riwayat_reward', {
                kode_pel: kode_pel
            })
                .subscribe(hasil => {
                console.log('hadiah', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    getPoin(kode_pel) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'get_poin', {
                kode_pel: kode_pel
            })
                .subscribe(hasil => {
                console.log('hadiah', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    getDetailReward(kode_reward) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'get_detail_reward', {
                kode_reward: kode_reward
            })
                .subscribe(hasil => {
                console.log('hadiah', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
    insertPenukaran(kode_reward, kode_pel) {
        var promise = new Promise((resolve, reject) => {
            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'insert_penukaran', {
                kode_reward: kode_reward,
                kode_pel: kode_pel
            })
                .subscribe(hasil => {
                console.log('hadiah', 'hasil');
                resolve(hasil);
            });
        });
        return promise;
    }
};
DataCartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataCartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataCartService);



/***/ })

}]);
//# sourceMappingURL=default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~3f784061-es2015.js.map