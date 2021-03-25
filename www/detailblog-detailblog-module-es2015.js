(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailblog-detailblog-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailblog/detailblog.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailblog/detailblog.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>detailblog</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/detailblog/detailblog-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detailblog/detailblog-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailblogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailblogPageRoutingModule", function() { return DetailblogPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailblog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailblog.page */ "./src/app/detailblog/detailblog.page.ts");




const routes = [
    {
        path: '',
        component: _detailblog_page__WEBPACK_IMPORTED_MODULE_3__["DetailblogPage"]
    }
];
let DetailblogPageRoutingModule = class DetailblogPageRoutingModule {
};
DetailblogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailblogPageRoutingModule);



/***/ }),

/***/ "./src/app/detailblog/detailblog.module.ts":
/*!*************************************************!*\
  !*** ./src/app/detailblog/detailblog.module.ts ***!
  \*************************************************/
/*! exports provided: DetailblogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailblogPageModule", function() { return DetailblogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detailblog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailblog-routing.module */ "./src/app/detailblog/detailblog-routing.module.ts");
/* harmony import */ var _detailblog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailblog.page */ "./src/app/detailblog/detailblog.page.ts");







let DetailblogPageModule = class DetailblogPageModule {
};
DetailblogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detailblog_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailblogPageRoutingModule"]
        ],
        declarations: [_detailblog_page__WEBPACK_IMPORTED_MODULE_6__["DetailblogPage"]]
    })
], DetailblogPageModule);



/***/ }),

/***/ "./src/app/detailblog/detailblog.page.scss":
/*!*************************************************!*\
  !*** ./src/app/detailblog/detailblog.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbGJsb2cvZGV0YWlsYmxvZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/detailblog/detailblog.page.ts":
/*!***********************************************!*\
  !*** ./src/app/detailblog/detailblog.page.ts ***!
  \***********************************************/
/*! exports provided: DetailblogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailblogPage", function() { return DetailblogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetailblogPage = class DetailblogPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailblogPage.ctorParameters = () => [];
DetailblogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailblog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detailblog.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailblog/detailblog.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detailblog.page.scss */ "./src/app/detailblog/detailblog.page.scss")).default]
    })
], DetailblogPage);



/***/ })

}]);
//# sourceMappingURL=detailblog-detailblog-module-es2015.js.map