(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Keranjang</ion-title>\n    <!-- <ion-buttons slot=\"end\" class=\"notification-icon-button\">\n      </ion-buttons> -->\n  </ion-toolbar> \n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n  <ion-list *ngIf=\"list_detail!=''\" style=\"background: var(--ion-color-bg);padding-top: 0px;\">\n    <div style=\"padding: 0px 5px\" style=\"background: var(--ion-color-bg);\">\n      \n      <ion-item lines=\"none\" style=\"--background: var(--ion-color-bg);\">\n        <ion-checkbox slot=\"start\" style=\" margin: 0px;margin-right: 10px;\" [(ngModel)]=\"checkall\" (click)=\"check_all()\"></ion-checkbox>\n        <ion-label>Pilih Semua</ion-label>\n      </ion-item>\n\n      <ion-item *ngFor=\"let item of list_detail; let i = index\" lines=\"none\" style=\"--background: var(--ion-color-bg);\">\n        \n        <ion-checkbox style=\" margin: 0px;margin-right: 10px;\" slot=\"start\" [(ngModel)]=\"item.isChecked\"\n          (click)=\"pilih_item($event)\">\n        </ion-checkbox>\n       \n        <ion-label style=\"padding: 5px 5px;margin-top: 0px;margin-bottom: 0px;\">\n          <ion-row\n            style=\"margin-top:6px;background:#fff;padding: 5px 10px;box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);border-radius: 15px;\">\n\n            <ion-col size=\"3\" style=\"height: fit-content;\">\n              <img src=\"{{item.gambar_pro}}\" alt=\"Foto\"\n                style=\"border-radius: 50px;width: 60px;height: 60px;object-fit: cover;\">\n            </ion-col>\n\n            <ion-col size=\"9\" style=\"height: fit-content;\">\n              <h5 style=\"font-weight: 500;color: #5a5a5a;overflow: hidden;\n              text-overflow: ellipsis;\n              display: -webkit-box;\n              -webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;\">{{item.nama_pro}}</h5>\n              <p>\n                {{item.qty_pro}} x {{item.harga_pro}}\n              </p>\n            </ion-col>\n\n            <ion-col col-2 style=\"text-align: right;\">\n              <ion-checkbox slot=\"end\" [(ngModel)]=\"item.isChecked\" (click)=\"pilih_item($event)\"></ion-checkbox>\n            </ion-col> \n            \n            <ion-row style=\"width: 100%;\">\n              <ion-col size=\"6\">\n\n                <button style=\"background: #0000;\" (click)=\"add_minus(i)\">\n                  <ion-icon name=\"remove-circle\" style=\"font-size: 23px;\" color=\"danger\"></ion-icon>\n                </button>\n\n                <p style=\"margin: 0px;display: initial;top: -7px;position: relative;\">\n                  <input type=\"number\" name=\"qty_pro\" [(ngModel)]=\"item.qty_pro\" style=\"width: 50px;border: 1px solid #5a5a5a;height: 25px;border-radius: 20px;text-align: center;\" readonly>\n                </p>\n                \n                <button style=\"background: #0000;\" (click)=\"add_plus(i)\">\n                  <ion-icon name=\"add-circle\" style=\"font-size: 23px;\" color=\"secondary\"></ion-icon>\n                </button>\n\n              </ion-col>\n              <ion-col size=\"6\" style=\"text-align: right;margin: auto;\">\n                <p> <b style=\"color: var(--ion-color-primary);\">{{ item.sub_total_real | currency : 'IDR' : 'Rp.'}}</b></p>\n\n              </ion-col>\n            </ion-row>\n\n          </ion-row>\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item lines=\"none\" style=\"--background: var(--ion-color-bg);\">\n        <ion-row\n          style=\"margin-top:30px;background:#fff;padding: 5px 10px;box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          border-radius: 15px;width: 100%;margin-bottom: 10px;margin-left: 10px;margin-right: 10px;\">\n          <ion-col size=\"6\" style=\"text-align: center;\">\n            <ion-button (click)=\"hapus_keranjang()\" style=\"color: #fff;height: 30px;--background: #6b6b6b;width: 100%;--border-radius: 15px;\">\n              Hapus Produk</ion-button>\n          </ion-col>\n          <ion-col size=\"6\" style=\"text-align: center;\">\n            <ion-button (click)=\"update_keranjang()\"  style=\"color: #fff;height: 30px;--background: #6b6b6b;width: 100%;--border-radius: 15px;\" primary>\n              Ubah Qty</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"ke_pengiriman()\"\n              style=\"color: #fff;height: 42px;--background: var(--ion-color-primary);width: 100%;--border-radius: 15px;\">\n              <b style=\"color: #fff;\">Lanjutkan</b>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\" style=\"text-align: right;margin: auto;\">\n            <p> <b style=\"color: var(--ion-color-primary);\">{{total_real | currency : 'IDR' : 'Rp.' }}</b></p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      \n      <br><br><br><br><br><br>\n\n    </div>\n  </ion-list>\n\n  <ion-list *ngIf=\"list_detail==''\" style=\"background: var(--ion-color-bg);\">\n    <ion-row style=\"padding: 70px 55px 12px 55px;text-align: center;background: var(--ion-color-bg);\">\n      <img src=\"assets/imgs/newsnotfound.png\" alt=\"Foto\"><br>\n      <h5 style=\" margin: auto;margin-bottom: 20px;\">\n        <b style=\"color: #afafaf;\">Belum Ada Data</b>\n      </h5>\n    </ion-row>\n    <!-- <ion-item>\n      <div style=\"width: 100%;text-align: center;\">\n          Data Keranjang Kosong\n      </div>\n    </ion-item> -->\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\n    <ion-fab-button>\n        <img src=\"assets/imgs/bag.png\">\n    </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_add_plus {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  color: black;\n}\n\n.button-solid {\n  --border-radius: 15px;\n}\n\nion-toolbar {\n  background: var(--ion-color-primary) !important;\n  --background: var(--ion-color-primary) !important;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9hZGRfcGx1c3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24tc29saWR7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2Y3MGIwYjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRvcDogLTlweDtcbiAgICAvLyBsZWZ0OiAxOHB4O1xuICAgIHJpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgei1pbmRleDogOTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");









let Tab3Page = class Tab3Page {
    constructor(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, consta, changeref, userdata, util) {
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
        this.util = util;
        this.list_detail = [];
        this.input_qty = [];
        this.harga_pro_real = [];
        this.sub_total_real = [];
        this.total_real = 0;
        this.checkall = false;
        this.data_user = {};
    }
    ionViewWillEnter() {
        console.log('view wenter');
        this.checkall = false;
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            if (hsl == null) {
                this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.get_data_keranjang();
                this.get_total_keranjang();
            }
        });
    }
    get_total_keranjang() {
        this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
            console.log(hasil, 'keranjang');
            let hsl = {};
            hsl = hasil;
            this.total_keranjang = hsl.total_qty;
        });
    }
    get_data_keranjang() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Please wait...'
            });
            yield this.loading.present();
            this.servcart.get_keranjang(this.data_user.id_pel).then(data => {
                let hsl = {};
                hsl = data;
                this.data_keranjang = hsl;
                let x = 0;
                hsl.detail.forEach(el => {
                    hsl.detail[x].val = el.nama_pro;
                    hsl.detail[x].isChecked = false;
                    x++;
                });
                this.list_detail = hsl.detail;
                //this.data_varian = hsl.detail;
                console.log(this.list_detail, 'list detail');
                this.loading.dismiss();
                this.total_real = hsl.total_real;
                console.log(this.changeref.detectChanges(), 'change detect');
                console.log(this.total_real, 'DATA KERANJANG');
            }).catch(err => {
                console.log(err);
                this.loading.dismiss();
                this.consta.show_alert('Oops', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
            }).finally(() => {
                this.loading.dismiss();
            });
        });
    }
    check_user() {
    }
    set_var(i) {
        console.log(i);
    }
    ngOnInit() {
    }
    pilih_item($event) {
        let hsl = $event.target.value;
        console.log(hsl);
    }
    calculate_total() {
        this.total_real = 0;
        this.list_detail.forEach(element => {
            this.total_real += element.sub_total_real;
        });
        console.log(this.total_real, 'total real');
    }
    add_minus(index) {
        if (this.list_detail[index].qty_pro == 1) {
            // this.sub_total_real[index] = this.input_qty[index] * this.harga_pro_real[index];
            // this.list_detail[index].input_qty++;
            this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].harga_pro_real;
            this.calculate_total();
            return false;
        }
        else {
            // this.input_qty[index]--;
            // this.sub_total_real[index] = this.input_qty[index] * this.harga_pro_real[index];
            this.list_detail[index].qty_pro--;
            this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].harga_pro_real;
            this.calculate_total();
        }
    }
    add_plus(index) {
        this.list_detail[index].qty_pro++;
        this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].harga_pro_real;
        this.calculate_total();
    }
    hapus_keranjang() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let count = 0;
            let i = 0;
            this.list_detail.forEach(el => {
                if (this.list_detail[i].isChecked == true) {
                    count++;
                }
                i++;
            });
            if (count == 0) {
                this.consta.show_alert('Error', '', 'Mohon Pilih Produk Terlebih Dahulu');
            }
            else {
                this.loading = yield this.loadingctrl.create({
                    message: 'Please wait...'
                });
                this.loading.present();
                this.servcart.hapus_keranjang(this.data_user.id_pel, this.list_detail).then((data) => {
                    this.loading.dismiss();
                    let hsl = {};
                    hsl = data;
                    // this.consta.show_alert('Success', '', hsl.msg);
                    this.util.showToast('Berhasil Menghapus Produk', 'success', 'bottom');
                    this.get_data_keranjang();
                    // this.combroadcast.broadcast('broadcast_keranjang', '');
                })
                    .catch((err) => {
                    this.loading.dismiss();
                    this.consta.show_alert('Error', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
                });
            }
        });
    }
    check_all() {
        console.log(this.checkall, 'checkall');
        let flag;
        if (this.checkall == false) {
            flag = true;
        }
        else {
            flag = false;
        }
        let i = 0;
        this.list_detail.forEach(el => {
            this.list_detail[i].isChecked = flag;
            i++;
        });
    }
    update_keranjang() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Please wait...'
            });
            this.loading.present();
            this.servcart.update_keranjang(this.data_user.id_pel, this.list_detail).then((data) => {
                console.log(data, 'data');
                this.loading.dismiss();
                let hsl = {};
                hsl = data;
                this.consta.show_alert('Success', '', hsl.msg);
            })
                .catch((err) => {
                this.loading.dismiss();
                this.consta.show_alert('Error', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
            });
        });
    }
    ke_pengiriman() {
        let count = 0;
        let i = 0;
        this.list_detail.forEach(el => {
            if (this.list_detail[i].isChecked == true) {
                count++;
            }
            i++;
        });
        if (count == 0) {
            this.consta.show_alert('Oops', '', 'Mohon Pilih Produk Terlebih Dahulu');
        }
        else {
            this.router.navigateByUrl('checkout');
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__["DataCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_6__["ConstantService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"] },
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map