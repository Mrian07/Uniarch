(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs5-tabs5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs5/tabs5.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs5/tabs5.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>tabs5</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tabs5/tabs5-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tabs5/tabs5-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Tabs5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs5PageRoutingModule", function() { return Tabs5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs5.page */ "./src/app/tabs5/tabs5.page.ts");




const routes = [
    {
        path: '',
        component: _tabs5_page__WEBPACK_IMPORTED_MODULE_3__["Tabs5Page"]
    }
];
let Tabs5PageRoutingModule = class Tabs5PageRoutingModule {
};
Tabs5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tabs5PageRoutingModule);



/***/ }),

/***/ "./src/app/tabs5/tabs5.module.ts":
/*!***************************************!*\
  !*** ./src/app/tabs5/tabs5.module.ts ***!
  \***************************************/
/*! exports provided: Tabs5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs5PageModule", function() { return Tabs5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs5-routing.module */ "./src/app/tabs5/tabs5-routing.module.ts");
/* harmony import */ var _tabs5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs5.page */ "./src/app/tabs5/tabs5.page.ts");







let Tabs5PageModule = class Tabs5PageModule {
};
Tabs5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tabs5PageRoutingModule"]
        ],
        declarations: [_tabs5_page__WEBPACK_IMPORTED_MODULE_6__["Tabs5Page"]]
    })
], Tabs5PageModule);



/***/ }),

/***/ "./src/app/tabs5/tabs5.page.scss":
/*!***************************************!*\
  !*** ./src/app/tabs5/tabs5.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnM1L3RhYnM1LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tabs5/tabs5.page.ts":
/*!*************************************!*\
  !*** ./src/app/tabs5/tabs5.page.ts ***!
  \*************************************/
/*! exports provided: Tabs5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs5Page", function() { return Tabs5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tabs5Page = class Tabs5Page {
    constructor() { }
    ngOnInit() {
    }
};
Tabs5Page.ctorParameters = () => [];
Tabs5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs5/tabs5.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs5.page.scss */ "./src/app/tabs5/tabs5.page.scss")).default]
    })
], Tabs5Page);



/***/ })

}]);
//# sourceMappingURL=tabs5-tabs5-module-es2015.js.map