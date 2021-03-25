(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs4-tabs4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs4/tabs4.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs4/tabs4.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>tabs4</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tabs4/tabs4-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs4/tabs4-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Tabs4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs4PageRoutingModule", function() { return Tabs4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs4.page */ "./src/app/tabs4/tabs4.page.ts");




const routes = [
    {
        path: '',
        component: _tabs4_page__WEBPACK_IMPORTED_MODULE_3__["Tabs4Page"]
    }
];
let Tabs4PageRoutingModule = class Tabs4PageRoutingModule {
};
Tabs4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tabs4PageRoutingModule);



/***/ }),

/***/ "./src/app/tabs4/tabs4.module.ts":
/*!***************************************!*\
  !*** ./src/app/tabs4/tabs4.module.ts ***!
  \***************************************/
/*! exports provided: Tabs4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs4PageModule", function() { return Tabs4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs4-routing.module */ "./src/app/tabs4/tabs4-routing.module.ts");
/* harmony import */ var _tabs4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs4.page */ "./src/app/tabs4/tabs4.page.ts");







let Tabs4PageModule = class Tabs4PageModule {
};
Tabs4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs4PageRoutingModule"]
        ],
        declarations: [_tabs4_page__WEBPACK_IMPORTED_MODULE_6__["Tabs4Page"]]
    })
], Tabs4PageModule);



/***/ }),

/***/ "./src/app/tabs4/tabs4.page.scss":
/*!***************************************!*\
  !*** ./src/app/tabs4/tabs4.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnM0L3RhYnM0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tabs4/tabs4.page.ts":
/*!*************************************!*\
  !*** ./src/app/tabs4/tabs4.page.ts ***!
  \*************************************/
/*! exports provided: Tabs4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs4Page", function() { return Tabs4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tabs4Page = class Tabs4Page {
    constructor() { }
    ngOnInit() {
    }
};
Tabs4Page.ctorParameters = () => [];
Tabs4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs4',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs4/tabs4.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs4.page.scss */ "./src/app/tabs4/tabs4.page.scss")).default]
    })
], Tabs4Page);



/***/ })

}]);
//# sourceMappingURL=tabs4-tabs4-module-es2015.js.map