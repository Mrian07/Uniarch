(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bantuan-bantuan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bantuan/bantuan.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bantuan/bantuan.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>bantuan</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/bantuan/bantuan-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bantuan/bantuan-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BantuanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BantuanPageRoutingModule", function() { return BantuanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bantuan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bantuan.page */ "./src/app/bantuan/bantuan.page.ts");




const routes = [
    {
        path: '',
        component: _bantuan_page__WEBPACK_IMPORTED_MODULE_3__["BantuanPage"]
    }
];
let BantuanPageRoutingModule = class BantuanPageRoutingModule {
};
BantuanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BantuanPageRoutingModule);



/***/ }),

/***/ "./src/app/bantuan/bantuan.module.ts":
/*!*******************************************!*\
  !*** ./src/app/bantuan/bantuan.module.ts ***!
  \*******************************************/
/*! exports provided: BantuanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BantuanPageModule", function() { return BantuanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bantuan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bantuan-routing.module */ "./src/app/bantuan/bantuan-routing.module.ts");
/* harmony import */ var _bantuan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bantuan.page */ "./src/app/bantuan/bantuan.page.ts");







let BantuanPageModule = class BantuanPageModule {
};
BantuanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bantuan_routing_module__WEBPACK_IMPORTED_MODULE_5__["BantuanPageRoutingModule"]
        ],
        declarations: [_bantuan_page__WEBPACK_IMPORTED_MODULE_6__["BantuanPage"]]
    })
], BantuanPageModule);



/***/ }),

/***/ "./src/app/bantuan/bantuan.page.scss":
/*!*******************************************!*\
  !*** ./src/app/bantuan/bantuan.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbnR1YW4vYmFudHVhbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/bantuan/bantuan.page.ts":
/*!*****************************************!*\
  !*** ./src/app/bantuan/bantuan.page.ts ***!
  \*****************************************/
/*! exports provided: BantuanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BantuanPage", function() { return BantuanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BantuanPage = class BantuanPage {
    constructor() { }
    ngOnInit() {
    }
};
BantuanPage.ctorParameters = () => [];
BantuanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bantuan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bantuan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bantuan/bantuan.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bantuan.page.scss */ "./src/app/bantuan/bantuan.page.scss")).default]
    })
], BantuanPage);



/***/ })

}]);
//# sourceMappingURL=bantuan-bantuan-module-es2015.js.map