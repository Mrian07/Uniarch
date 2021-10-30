(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"valid == 'ada'\">\n      <ion-menu-button style=\"color: #fff;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"valid !== 'ada'\" (click)=\"kosong()\">\n      <ion-icon name=\"menu-outline\" style=\"font-size: 28px;margin: 10px;color: #fff;\">\n      </ion-icon>\n    </ion-buttons>\n    <ion-title style=\"color: #fff;\">News</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background: var(--ion-color-bg);\">\n  <ion-list style=\"background: var(--ion-color-bg);\">\n\n    <ion-card *ngFor=\"let item of hasil\" style=\"padding: 0px;border-radius: 15px;background: #fff;\">\n      <!-- <ion-card-header>\n        <ion-card-title>{{item.nama_blog}}</ion-card-title>\n      </ion-card-header> -->\n      <!-- <ion-card fullscreen>  -->\n      <img src=\"{{item.cover_blog}}\">\n      <ion-row style=\"margin: 10px;\">\n        <h5><b>{{item.nama_blog}}</b></h5>\n      </ion-row>\n      <ion-row style=\"margin: 10px;\">\n        <div [innerHTML]=\"item.isi_blog\"></div>\n      </ion-row>\n      <!-- </ion-card > -->\n    </ion-card>\n    <br>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\n    <ion-fab-button>\n        <img src=\"assets/imgs/bag.png\">\n    </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/tab4/tab4-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "./src/app/tab4/tab4-routing.module.ts");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdG9wOiAtOXB4O1xuICAgIC8vIGxlZnQ6IDE4cHg7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiA5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");








let Tab4Page = class Tab4Page {
    constructor(http2, util, servcart, userdata, router) {
        this.http2 = http2;
        this.util = util;
        this.servcart = servcart;
        this.userdata = userdata;
        this.router = router;
        this.data_user = {};
    }
    ionViewWillEnter() {
        this.get_blog();
        const userid = localStorage.getItem('userid');
        console.log('TAB userid', userid);
        if (userid && userid != null && userid != 'null') {
            this.valid = 'ada';
        }
        else {
            this.valid = 'gaada';
        }
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'hasil');
            if (hsl == null) {
                this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.get_total_keranjang();
            }
        });
    }
    ngOnInit() {
    }
    get_total_keranjang() {
        this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
            console.log(hasil, 'keranjang');
            let hsl = {};
            hsl = hasil;
            this.total_keranjang = hsl.total_qty;
        });
    }
    get_blog() {
        this.http2.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + 'api_blog', {}, {})
            .subscribe((data) => {
            console.log(data);
            let hsl = {};
            hsl = data;
            this.hasil = hsl.blog;
        });
    }
    kosong() {
        this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
    }
};
Tab4Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_5__["DataCartService"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")).default]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es2015.js.map