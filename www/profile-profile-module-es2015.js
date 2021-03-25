(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--background: var(--ion-color-primary);\">\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Profil</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"pencil-outline\" style=\"font-size: 28px;margin: 10px;color: #fff;\"></ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <ion-card style=\"border-radius: 20px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" style=\"text-align: center;\">\r\n        <img src=\"assets/imgs/user.png\" style=\"width: 50%;\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"padding: 0px 15px;\">\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Nama</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Nama\" [(ngModel)]=\"nama_pel\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">No Telp</ion-label>\r\n          <ion-input type=\"number\" placeholder=\"Masukkan No Telp\" [(ngModel)]=\"no_telp_pel\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Jenis Kelamin</ion-label>\r\n          <ion-select interface=\"action-sheet\" cancelText=\"Batal\" placeholder=\"Jenis Kelamin\" style=\"width: 100%;\"\r\n            [(ngModel)]=\"jk_pel\">\r\n            <ion-select-option value=\"P\">Perempuan</ion-select-option>\r\n            <ion-select-option value=\"L\">Laki - Laki</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input type=\"email\" placeholder=\"Masukkan Email\" [(ngModel)]=\"email_pel\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Info Tambahan</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Info Tambahan\" [(ngModel)]=\"info_lain_pel\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Provinsi</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Nama\" [(ngModel)]=\"provinsi_pel\" disabled></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Kota</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Kota\" [(ngModel)]=\"kota_pel\" disabled></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Kecamatan</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Kecamatan\" [(ngModel)]=\"kecamatan_pel\" disabled></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Alamat Lengkap</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Alamat\" [(ngModel)]=\"alamat_pel\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">Nama Bank</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Nama Bank\" [(ngModel)]=\"nama_bank\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item style=\"--background: #fff;padding: 0px;--border-color:#c7c7c7;\">\r\n          <ion-label position=\"floating\">No Rekening</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Masukkan Rekening\" [(ngModel)]=\"rek\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <br><br>\r\n    <ion-row >\r\n      <ion-button size=\"small\" expand=\"block\"  style=\"color: #fff;height: 37px;\r\n    background: #356d75;width: 100%;border-radius: 20px;margin: 0px;\">Simpan\r\n      </ion-button>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card style=\"border-radius: 20px;margin-top: 20px;\">\r\n    <ion-button size=\"small\" expand=\"block\" (click)=\"keluar()\" style=\"color: #fff;height: 37px;\r\n  background: #356d75;width: 100%;border-radius: 20px;margin: 0px;\">Keluar\r\n    </ion-button>\r\n  </ion-card>\r\n\r\n  <br>\r\n  <br>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");






let ProfilePage = class ProfilePage {
    constructor(route, storage, navCtrl, actionSheet, util, loadingCtrl) {
        this.route = route;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.actionSheet = actionSheet;
        this.util = util;
        this.loadingCtrl = loadingCtrl;
        this.akses = [];
        // const aks = localStorage.getItem('akses');
        this.akses = JSON.parse(localStorage.getItem('akses')) || [];
        console.log('userid', this.akses);
        console.log('nama', this.akses[0].nama_pel);
        this.nama_pel = this.akses[0].nama_pel;
        this.jk_pel = this.akses[0].jk_pel;
        this.no_telp_pel = this.akses[0].no_telp_pel;
        this.email_pel = this.akses[0].email_pel;
        this.info_lain_pel = this.akses[0].info_lain_pel;
        this.provinsi_pel = this.akses[0].provinsi_pel;
        this.kota_pel = this.akses[0].kota_pel;
        this.kecamatan_pel = this.akses[0].kecamatan_pel;
        this.alamat_pel = this.akses[0].alamat_pel;
        this.nama_bank = this.akses[0].nama_bank;
        this.rek = this.akses[0].rek;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.util.show();
        this.util.hide();
    }
    keluar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheet.create({
                header: 'Anda yakin ingin keluar?',
                cssClass: 'putih',
                buttons: [{
                        text: 'Ya',
                        handler: () => {
                            this.fungsilogout();
                            console.log('Logout');
                        }
                    }, {
                        text: 'Tidak',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    fungsilogout() {
        this.util.showToast('Anda Berhasil Keluar', 'success', 'bottom');
        localStorage.removeItem('akses');
        localStorage.removeItem('userid');
        localStorage.clear();
        this.storage.clear();
        //this.route.navigate(['']);
        this.route.navigate(['/tabs/tab1'])
            .then(() => {
            window.location.reload();
        });
    }
    ganti() {
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map