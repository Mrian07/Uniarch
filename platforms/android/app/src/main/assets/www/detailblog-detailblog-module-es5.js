(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailblog-detailblog-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/detailblog/detailblog.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailblog/detailblog.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDetailblogDetailblogPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>detailblog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/detailblog/detailblog-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/detailblog/detailblog-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: DetailblogPageRoutingModule */

    /***/
    function srcAppDetailblogDetailblogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailblogPageRoutingModule", function () {
        return DetailblogPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _detailblog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detailblog.page */
      "./src/app/detailblog/detailblog.page.ts");

      var routes = [{
        path: '',
        component: _detailblog_page__WEBPACK_IMPORTED_MODULE_3__["DetailblogPage"]
      }];

      var DetailblogPageRoutingModule = function DetailblogPageRoutingModule() {
        _classCallCheck(this, DetailblogPageRoutingModule);
      };

      DetailblogPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailblogPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/detailblog/detailblog.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/detailblog/detailblog.module.ts ***!
      \*************************************************/

    /*! exports provided: DetailblogPageModule */

    /***/
    function srcAppDetailblogDetailblogModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailblogPageModule", function () {
        return DetailblogPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _detailblog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detailblog-routing.module */
      "./src/app/detailblog/detailblog-routing.module.ts");
      /* harmony import */


      var _detailblog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detailblog.page */
      "./src/app/detailblog/detailblog.page.ts");

      var DetailblogPageModule = function DetailblogPageModule() {
        _classCallCheck(this, DetailblogPageModule);
      };

      DetailblogPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detailblog_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailblogPageRoutingModule"]],
        declarations: [_detailblog_page__WEBPACK_IMPORTED_MODULE_6__["DetailblogPage"]]
      })], DetailblogPageModule);
      /***/
    },

    /***/
    "./src/app/detailblog/detailblog.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/detailblog/detailblog.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDetailblogDetailblogPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbGJsb2cvZGV0YWlsYmxvZy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/detailblog/detailblog.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/detailblog/detailblog.page.ts ***!
      \***********************************************/

    /*! exports provided: DetailblogPage */

    /***/
    function srcAppDetailblogDetailblogPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailblogPage", function () {
        return DetailblogPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetailblogPage = /*#__PURE__*/function () {
        function DetailblogPage() {
          _classCallCheck(this, DetailblogPage);
        }

        _createClass(DetailblogPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetailblogPage;
      }();

      DetailblogPage.ctorParameters = function () {
        return [];
      };

      DetailblogPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailblog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detailblog.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/detailblog/detailblog.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detailblog.page.scss */
        "./src/app/detailblog/detailblog.page.scss"))["default"]]
      })], DetailblogPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detailblog-detailblog-module-es5.js.map