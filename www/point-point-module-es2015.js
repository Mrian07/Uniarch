(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["point-point-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/point/point.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/point/point.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: #fff;\">Poin</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\r\n  <ion-card style=\"background: #fff;border-radius: 15px;\">\r\n    <ion-row style=\"margin:15px\">\r\n      <ion-col size=\"2\">\r\n        <p>\r\n          <ion-icon name=\"cash\" class=\"icon-set\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n        </p>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n        <p class=\"title\" style=\"color: #222;\">{{poin}}</p>\r\n        <p class=\"title-small\" style=\"color: #222;\">Total Point anda.</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-segment [(ngModel)]=\"segment\">\r\n    <ion-segment-button value=\"tukar\">\r\n      TUKAR POIN\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"riwayat\">\r\n      RIWAYAT TUKAR\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n\r\n  <div [ngSwitch]=\"segment\">\r\n    <ion-list *ngSwitchCase=\"'tukar'\" style=\"background: var(--ion-color-bg);\">\r\n      <ion-card *ngFor=\"let item of setpoin\" style=\"background: #fff;\">\r\n        <ion-row style=\"padding:10px\">\r\n          <!-- <ion-col size=\"1\">\r\n              <p (click)=\"get_detail(item.id)\">\r\n                <ion-icon ios=\"ios-more\" md=\"md-more\" class=\"icon-set\"></ion-icon>\r\n              </p>\r\n            </ion-col> -->\r\n          <ion-col size=\"12\" (click)=\"get_detail(item.id)\">\r\n            <p class=\"title\" style=\"margin-top: 5px;\">{{item.title}}</p>\r\n            <ion-row>\r\n              <ion-col size=\"8\">\r\n                <h6 class=\"title-poin\">{{item.jumlah_poin | currency : 'IDR' : ''}}</h6>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"text-align: center;\">\r\n            <!-- <span class=\"status\" *ngIf=\"item.jumlah>0\">Menunggu</span> -->\r\n            <ion-button size=\"mediuum\" *ngIf=\"item.jumlah>0\" color=\"primary\" style=\"--border-radius:10px;width: 100%;\"\r\n              disabled>Sedang Proses</ion-button>\r\n            <ion-button size=\"mediuum\" *ngIf=\"item.jumlah==0\" color=\"primary\" style=\"--border-radius:10px;width: 100%;\"\r\n              (click)=\"goTukar(item.id,item.jumlah_poin)\">Tukar</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-list>\r\n\r\n    <ion-list *ngSwitchCase=\"'riwayat'\" style=\"background: #fff;\">\r\n      <ion-card *ngFor=\"let item of riwayat\" style=\"background: #fff;padding: 10px;\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <p class=\"title\" (click)=\"get_detail(item.id)\" style=\"margin-left:3px;\">Hadiah Anda : {{item.hadiah}}</p>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <span>{{item.poin | currency : 'IDR' : ''}}</span>\r\n              </ion-col>\r\n              <ion-col size=\"6\" style=\"text-align: right;\">\r\n                <p class=\"status\">{{item.waktu_penukaran}}</p>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/point/point-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/point/point-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PointPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointPageRoutingModule", function() { return PointPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _point_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point.page */ "./src/app/point/point.page.ts");




const routes = [
    {
        path: '',
        component: _point_page__WEBPACK_IMPORTED_MODULE_3__["PointPage"]
    }
];
let PointPageRoutingModule = class PointPageRoutingModule {
};
PointPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PointPageRoutingModule);



/***/ }),

/***/ "./src/app/point/point.module.ts":
/*!***************************************!*\
  !*** ./src/app/point/point.module.ts ***!
  \***************************************/
/*! exports provided: PointPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointPageModule", function() { return PointPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _point_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point-routing.module */ "./src/app/point/point-routing.module.ts");
/* harmony import */ var _point_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point.page */ "./src/app/point/point.page.ts");







let PointPageModule = class PointPageModule {
};
PointPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _point_routing_module__WEBPACK_IMPORTED_MODULE_5__["PointPageRoutingModule"]
        ],
        declarations: [_point_page__WEBPACK_IMPORTED_MODULE_6__["PointPage"]]
    })
], PointPageModule);



/***/ }),

/***/ "./src/app/point/point.page.scss":
/*!***************************************!*\
  !*** ./src/app/point/point.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222;\n  margin-bottom: 0px;\n}\n\n.title-small {\n  margin-top: 0px;\n  font-size: 14px;\n  color: #222;\n}\n\n.title-poin {\n  margin-top: 7px;\n  margin-bottom: 6px;\n  font-weight: 800;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n}\n\n.icon-set {\n  font-size: 30px;\n  color: #222;\n  margin: auto;\n  display: block;\n}\n\n.status {\n  margin-top: 7px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnQvcG9pbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvcG9pbnQvcG9pbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiMyMjI7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxufVxyXG4udGl0bGUtc21hbGx7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6IzIyMjtcclxufVxyXG4udGl0bGUtcG9pbntcclxuICAgIG1hcmdpbi10b3A6N3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo2cHg7XHJcbiAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uaWNvbi1zZXR7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIGNvbG9yOiMyMjI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zdGF0dXN7XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/point/point.page.ts":
/*!*************************************!*\
  !*** ./src/app/point/point.page.ts ***!
  \*************************************/
/*! exports provided: PointPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointPage", function() { return PointPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");







let PointPage = class PointPage {
    constructor(servcart, loadingctrl, navCtrl, consta, router, userdata) {
        this.servcart = servcart;
        this.loadingctrl = loadingctrl;
        this.navCtrl = navCtrl;
        this.consta = consta;
        this.router = router;
        this.userdata = userdata;
        this.segment = 'tukar';
        this.data_user = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            if (hsl == null) {
                this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.getHadiah();
                this.getRiwayat();
                this.getPoin();
            }
        });
    }
    getHadiah() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading1 = yield this.loadingctrl.create({
                message: 'Mohon Tunggu'
            });
            this.loading1.present();
            let kode_pel = this.data_user.id_pel;
            this.servcart.getHadiah(kode_pel).then(data => {
                this.loading1.dismiss();
                let set = {};
                set = data;
                console.log(set.data);
                this.setpoin = set.data;
            });
        });
    }
    getRiwayat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let kode_pel = this.data_user.id_pel;
            this.servcart.getRiwayat(kode_pel).then(data => {
                let set = {};
                set = data;
                console.log(set.data);
                this.riwayat = set.data;
            });
        });
    }
    getPoin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let kode_pel = this.data_user.id_pel;
            this.servcart.getPoin(kode_pel).then(data => {
                let set = {};
                set = data;
                console.log(set.poin);
                if (set.status === 0) {
                    this.poin = 0;
                }
                else {
                    this.poin = set.poin;
                }
            });
        });
    }
    get_detail(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = {
                queryParams: {
                    kode_reward: param
                }
            };
            this.navCtrl.navigateForward('poindetail', params);
        });
    }
    goTukar(kode, poin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading2 = yield this.loadingctrl.create({
                message: 'Proses Penukaran...'
            });
            this.loading2.present();
            /*if(this.poin<Math.abs(poin)){
              this.consta.show_alert('Notif', '','Poin belum mencukupi.');
              this.loading2.dismiss();
            }else{*/
            this.servcart.insertPenukaran(kode, this.data_user.id_pel).then(data => {
                let set = {};
                set = data;
                this.loading2.dismiss();
                this.ionViewWillEnter();
                this.consta.show_alert('Notif', '', set.title);
            });
            //}
        });
    }
    get_total_keranjang() {
        this.servcart.get_keranjang(60).then(hasil => {
            console.log(hasil, 'keranjang');
            let hsl = {};
            hsl = hasil;
            this.total_keranjang = hsl.total_qty;
        });
    }
    goto_checkout() {
        this.router.navigateByUrl('checkout');
    }
};
PointPage.ctorParameters = () => [
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_2__["DataCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] }
];
PointPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-point',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./point.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/point/point.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./point.page.scss */ "./src/app/point/point.page.scss")).default]
    })
], PointPage);



/***/ })

}]);
//# sourceMappingURL=point-point-module-es2015.js.map