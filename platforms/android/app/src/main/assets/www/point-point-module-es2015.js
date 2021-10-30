(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["point-point-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/point/point.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/point/point.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"color: #fff;\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">Poin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"--background: var(--ion-color-bg);\">\n  <ion-card style=\"background: #fff;border-radius: 15px;\">\n    <ion-row style=\"margin:15px\">\n      <ion-col size=\"2\">\n        <p>\n          <ion-icon name=\"cash\" class=\"icon-set\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n        </p>\n      </ion-col>\n      <ion-col size=\"10\">\n        <p class=\"title\" style=\"color: #222;\">{{poin}}</p>\n        <p class=\"title-small\" style=\"color: #222;\">Total Point anda.</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-segment [(ngModel)]=\"segment\">\n    <ion-segment-button value=\"tukar\">\n      TUKAR POIN\n    </ion-segment-button>\n    <ion-segment-button value=\"riwayat\">\n      RIWAYAT TUKAR\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div [ngSwitch]=\"segment\">\n    <ion-list *ngSwitchCase=\"'tukar'\" style=\"background: var(--ion-color-bg);\">\n      <ion-card *ngFor=\"let item of setpoin\" style=\"background: #fff;\">\n        <ion-row style=\"padding:10px\">\n          <!-- <ion-col size=\"1\">\n              <p (click)=\"get_detail(item.id)\">\n                <ion-icon ios=\"ios-more\" md=\"md-more\" class=\"icon-set\"></ion-icon>\n              </p>\n            </ion-col> -->\n          <ion-col size=\"12\" (click)=\"get_detail(item.id)\">\n            <p class=\"title\" style=\"margin-top: 5px;\">{{item.title}}</p>\n            <ion-row>\n              <ion-col size=\"8\">\n                <h6 class=\"title-poin\">{{item.jumlah_poin | currency : 'IDR' : ''}}</h6>\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\" style=\"text-align: center;\">\n            <!-- <span class=\"status\" *ngIf=\"item.jumlah>0\">Menunggu</span> -->\n            <ion-button size=\"mediuum\" *ngIf=\"item.jumlah>0\" color=\"primary\" style=\"--border-radius:10px;width: 100%;\"\n              disabled>Sedang Proses</ion-button>\n            <ion-button size=\"mediuum\" *ngIf=\"item.jumlah==0\" color=\"primary\" style=\"--border-radius:10px;width: 100%;\"\n              (click)=\"goTukar(item.id,item.jumlah_poin)\">Tukar</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'riwayat'\" style=\"background: #fff;\">\n      <ion-card *ngFor=\"let item of riwayat\" style=\"background: #fff;padding: 10px;\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <p class=\"title\" (click)=\"get_detail(item.id)\" style=\"margin-left:3px;\">Hadiah Anda : {{item.hadiah}}</p>\n            <ion-row>\n              <ion-col size=\"6\">\n                <span>{{item.poin | currency : 'IDR' : ''}}</span>\n              </ion-col>\n              <ion-col size=\"6\" style=\"text-align: right;\">\n                <p class=\"status\">{{item.waktu_penukaran}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-list>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222;\n  margin-bottom: 0px;\n}\n\n.title-small {\n  margin-top: 0px;\n  font-size: 14px;\n  color: #222;\n}\n\n.title-poin {\n  margin-top: 7px;\n  margin-bottom: 6px;\n  font-weight: 800;\n  font-size: 16px;\n  color: var(--ion-color-primary);\n}\n\n.icon-set {\n  font-size: 30px;\n  color: #222;\n  margin: auto;\n  display: block;\n}\n\n.status {\n  margin-top: 7px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnQvcG9pbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvcG9pbnQvcG9pbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiMyMjI7XG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG4udGl0bGUtc21hbGx7XG4gICAgbWFyZ2luLXRvcDowcHg7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgY29sb3I6IzIyMjtcbn1cbi50aXRsZS1wb2lue1xuICAgIG1hcmdpbi10b3A6N3B4O1xuICAgIG1hcmdpbi1ib3R0b206NnB4O1xuICAgIGZvbnQtd2VpZ2h0OjgwMDtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uaWNvbi1zZXR7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgY29sb3I6IzIyMjtcbiAgICBtYXJnaW46YXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdGF0dXN7XG4gICAgbWFyZ2luLXRvcDo3cHg7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

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