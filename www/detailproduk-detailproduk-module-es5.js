(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailproduk-detailproduk-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/detailproduk/detailproduk.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailproduk/detailproduk.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDetailprodukDetailprodukPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-header>\r\n  <ion-toolbar [class.show-background]=\"showToolbar\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab1\" src=\"/assets/icon/chevron-back-outline.svg\" [class.change-color]=\"coloricon\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" class=\"warna\" (click)=\"goto_checkout()\">\r\n      <ion-badge class=\"badge_icon\" style=\"top: 0px;\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}\r\n      </ion-badge>\r\n      <ion-icon src=\"/assets/icon/cart-outline.svg\" [class.change-color]=\"coloricon\"\r\n        style=\"font-size: 28px;margin: 10px;\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <div style=\"margin-top: -57px;\">\r\n\r\n    <div class=\"banner\">\r\n      <!-- <img src=\"assets/imgs/produk.jpg\" class=\"crop_img\" > -->\r\n      <ion-slides pager=\"true\" loop=\"true\">\r\n        <ion-slide>\r\n          <div class=\"img_box center_img\">\r\n            <img src=\"{{cover}}\" class=\"crop_img\" onerror=\"this.src = '/assets/img/no_image.png'\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-row style=\"padding: 10px;\">\r\n        <ion-col size=\"12\" style=\"height: fit-content;\">\r\n          <h4 style=\"margin: 0px;font-weight: 500;\">{{nama_pro}}</h4>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"height: fit-content;\" *ngIf=\"akses != null\">\r\n\r\n          <h4 *ngIf=\"data_user.status_pel == 1\" style=\"margin: 0px;color: var(--ion-color-primary);\"> \r\n            {{harga_jual_pro2 - (harga_jual_pro2 * disc_pro / 100) | currency : 'IDR' : 'Rp.' }}\r\n          </h4>\r\n          <h4 *ngIf=\"data_user.status_pel == 2\" style=\"margin: 0px;color: var(--ion-color-primary);\">\r\n            {{harga_jual_reseller - (harga_jual_reseller * disc_pro / 100) | currency : 'IDR' : 'Rp.' }}\r\n          </h4>\r\n          <h4 *ngIf=\"data_user.status_pel == 0\" style=\"margin: 0px;color: var(--ion-color-primary);\">\r\n            {{harga_user - (harga_user * disc_pro / 100) | currency : 'IDR' : 'Rp.' }}\r\n          </h4>\r\n\r\n        </ion-col>\r\n        <!-- <ion-col size=\"12\" style=\"height: fit-content;\">\r\n          <p style=\"margin: 0px;\">{{berat_pro}}gram /pcs</p>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" style=\"height: fit-content;\">\r\n          <p style=\"margin: 0px;\">Review (0)</p>\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"height: fit-content;text-align: right;\">\r\n          <span\r\n            style=\"margin:7px;background:var(--ion-color-primary);color: #fff;padding: 4px 13px;border-radius: 49px;\">\r\n            Total Stok {{stok_pro}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"height: fit-content;margin-top:20px;text-align: center;\">\r\n          <button style=\"background: #0000;\" (click)=\"add_minus()\">\r\n            <ion-icon name=\"remove-circle\" style=\"font-size: 34px;\" color=\"danger\"></ion-icon>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col size=\"8\" style=\"height: fit-content;margin-top:20px;text-align: center;\">\r\n          <p style=\"margin: 0px;\">\r\n            <input type=\"number\" [(ngModel)]=\"input_qty\" style=\"width: 100%;border: unset;height: 35px;\r\n          border-radius: 20px;text-align: center;\">\r\n            <input type=\"text\" name=\"id_pro\" value=\"{{id_pro}}\" #id_pro hidden\r\n              style=\"width: 100%;border: 1px solid #5a5a5a;height: 35px;border-radius: 20px;text-align: center;\">\r\n          </p>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"height: fit-content;margin-top:20px;text-align: center;\">\r\n          <button style=\"background: #0000;\" (click)=\"add_plus()\">\r\n            <ion-icon name=\"add-circle\" style=\"font-size: 34px;\" color=\"secondary\"></ion-icon>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"height: fit-content;text-align: center;\">\r\n          <ion-button size=\"small\" expand=\"block\" (click)=\"insert_cart()\"\r\n            style=\"color: #fff;height: 37px;background: #356d75;width: 100%;border-radius: 20px;\">\r\n            Tambahkan &nbsp; <ion-icon src=\"/assets/icon/cart-outline.svg\" style=\"color: #fff;\"></ion-icon>\r\n\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"height: fit-content;text-align: center;\">\r\n          <ion-button size=\"small\" expand=\"block\" (click)=\"open_wa(kontak.telp)\"\r\n            style=\"color: #fff;height: 37px;background: #356d75;width: 100%;border-radius: 20px;\">\r\n            Pesan via Whatsapp &nbsp;<ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <ion-list lines=\"none\">\r\n      <ion-item [ngClass]=\"faqExpand1 ? 'active' : '' \" (click)=\"faqExpandToggle1()\">\r\n        <div class=\"item_inner\">\r\n          <h2>Deskripsi</h2>\r\n          <p [innerHTML]=\"desc_pro\"></p>\r\n          <br><br><br><br><br><br><br><br><br><br>\r\n          \r\n        </div>\r\n      </ion-item>\r\n      <!-- <ion-item [ngClass]=\"faqExpand3 ? 'active' : '' \" (click)=\"faqExpandToggle3()\">\r\n        <div class=\"item_inner\">\r\n          <h2>Ulasan</h2>\r\n          <p>Belum Ada Ulasan Untuk Produk ini</p>\r\n        </div>\r\n      </ion-item> -->\r\n\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\r\n    <ion-fab-button>\r\n        <img src=\"assets/imgs/bag.png\">\r\n    </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/detailproduk/detailproduk-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/detailproduk/detailproduk-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DetailprodukPageRoutingModule */

    /***/
    function srcAppDetailprodukDetailprodukRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailprodukPageRoutingModule", function () {
        return DetailprodukPageRoutingModule;
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


      var _detailproduk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detailproduk.page */
      "./src/app/detailproduk/detailproduk.page.ts");

      var routes = [{
        path: '',
        component: _detailproduk_page__WEBPACK_IMPORTED_MODULE_3__["DetailprodukPage"]
      }];

      var DetailprodukPageRoutingModule = function DetailprodukPageRoutingModule() {
        _classCallCheck(this, DetailprodukPageRoutingModule);
      };

      DetailprodukPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailprodukPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/detailproduk/detailproduk.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/detailproduk/detailproduk.module.ts ***!
      \*****************************************************/

    /*! exports provided: DetailprodukPageModule */

    /***/
    function srcAppDetailprodukDetailprodukModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailprodukPageModule", function () {
        return DetailprodukPageModule;
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


      var _detailproduk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detailproduk-routing.module */
      "./src/app/detailproduk/detailproduk-routing.module.ts");
      /* harmony import */


      var _detailproduk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detailproduk.page */
      "./src/app/detailproduk/detailproduk.page.ts");

      var DetailprodukPageModule = function DetailprodukPageModule() {
        _classCallCheck(this, DetailprodukPageModule);
      };

      DetailprodukPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detailproduk_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailprodukPageRoutingModule"]],
        declarations: [_detailproduk_page__WEBPACK_IMPORTED_MODULE_6__["DetailprodukPage"]]
      })], DetailprodukPageModule);
      /***/
    },

    /***/
    "./src/app/detailproduk/detailproduk.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/detailproduk/detailproduk.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDetailprodukDetailprodukPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary);\n  transition: all 0.2s;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.sc-ion-buttons-md-s .button {\n  --color:#222;\n}\n\n.change-color {\n  color: #fff !important;\n}\n\n.warna {\n  color: #222;\n}\n\n.cover {\n  width: 100%;\n  height: 180px;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  text-align: center;\n}\n\n.img_product {\n  height: 180px;\n}\n\n.btn_add_plus {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  color: black;\n}\n\n.native-input.sc-ion-input-md {\n  text-align: center;\n}\n\n.input_qty .native-input {\n  text-align: center;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.center_img {\n  position: relative;\n  overflow: hidden;\n}\n\n.center_img img.crop_img {\n  position: unset !important;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: -50% !important;\n  right: -50% !important;\n  margin: auto;\n}\n\n.container {\n  padding: 0px 10px;\n}\n\nion-card {\n  background: var(--bg-color);\n  margin: 0;\n  width: 100%;\n  box-shadow: none;\n  border-radius: 0;\n  padding-bottom: 10px;\n  margin-bottom: 1px;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header {\n  padding: 13px 13px 18px 13px;\n  width: 100%;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header h4 {\n  background: var(--bg-secondary);\n  width: 35px;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 50%;\n  color: var(--primary);\n  font-size: 1rem;\n  margin: 0;\n  margin-right: 13px;\n  font-weight: 400;\n}\n\nion-card .card_header .text_box {\n  width: 100%;\n}\n\nion-card .card_header .text_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  margin: 0;\n  padding-bottom: 2px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\nion-card .card_header .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-card .card_header .text_box h3 span {\n  display: flex;\n  align-items: center;\n}\n\nion-card .card_header .text_box h3 span ion-icon {\n  color: var(--white);\n  font-size: 1.2rem;\n  min-width: 15px;\n}\n\nion-card .scroll_container {\n  white-space: nowrap;\n  overflow: hidden;\n  overflow-x: auto;\n}\n\nion-card .scroll_container .item_scroll {\n  display: inline-block;\n  width: 130px;\n  height: 60px;\n  border-radius: 15px;\n  margin: 10px 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .scroll_container .item_scroll:first-child {\n  margin-left: 13px;\n}\n\nion-card .scroll_container .item_scroll:last-child {\n  margin-right: 13px;\n}\n\nion-card .scroll_container .item_scroll .img_box {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n}\n\n.button-native {\n  border: none;\n}\n\n.button-solid {\n  --border-radius: 15px;\n  --border:none !important;\n}\n\nion-list {\n  padding: 0;\n  background: none;\n  width: calc(100% - 30px);\n  margin: 0 auto;\n  padding-top: 15px;\n}\n\nion-list ion-item {\n  padding: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #969696 !important;\n  padding-bottom: 10px;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h2 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-light);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0;\n  padding-bottom: 8px;\n}\n\nion-list ion-item .item_inner p {\n  font-size: 0.9rem;\n  font-weight: 400;\n  display: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: var(--white);\n  margin: 0;\n}\n\nion-list ion-item .item_inner p:first-of-type {\n  display: block !important;\n}\n\nion-list ion-item.active {\n  padding-bottom: 0;\n  transition: all 0.3s ease-in-out;\n}\n\nion-list ion-item.active .item_inner h2 {\n  margin-bottom: 10px;\n}\n\nion-list ion-item.active .item_inner p {\n  white-space: normal;\n  display: block !important;\n  overflow: visible;\n  margin-bottom: 17px;\n  transition: all 0.3s ease-in-out;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscHJvZHVrL2RldGFpbHByb2R1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksc0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0FBU0o7O0FBTkk7RUFDSSxrQkFBQTtBQVNSOztBQUpRO0VBQ0ksbUJBQUE7QUFPWjs7QUFMWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU9oQjs7QUFFWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNoQjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLUTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSFo7O0FBUUE7RUFFSSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksMkJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0hBQUE7QUFOSjs7QUFTSTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdIQUFBO0FBUFI7O0FBU1E7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBaOztBQVVRO0VBQ0ksV0FBQTtBQVJaOztBQVVZO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUmhCOztBQVdZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQVRoQjs7QUFXZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFUcEI7O0FBV29CO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFUeEI7O0FBZ0JJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZFI7O0FBZ0JRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0hBQUE7QUFkWjs7QUFnQlk7RUFDSSxpQkFBQTtBQWRoQjs7QUFpQlk7RUFDSSxrQkFBQTtBQWZoQjs7QUFrQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBaEJoQjs7QUFzQkE7RUFDSSxZQUFBO0FBbkJKOztBQXFCQTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7QUFsQko7O0FBcUJBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFsQko7O0FBb0JJO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7QUFsQlI7O0FBb0JRO0VBQ0ksV0FBQTtBQWxCWjs7QUFvQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQWxCaEI7O0FBcUJZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFuQmhCOztBQXFCZ0I7RUFDSSx5QkFBQTtBQW5CcEI7O0FBd0JRO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtBQXRCWjs7QUF5QmdCO0VBQ0ksbUJBQUE7QUF2QnBCOztBQTBCZ0I7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBeEJwQjs7QUFtQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBakNKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscHJvZHVrL2RldGFpbHByb2R1ay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uc2hvdy1iYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9ue1xyXG4gICAgLS1jb2xvcjojMjIyO1xyXG59XHJcbi5jaGFuZ2UtY29sb3Ige1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi53YXJuYXtcclxuICAgIGNvbG9yOiMyMjI7XHJcbn1cclxuLmNvdmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1nX3Byb2R1Y3R7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcbi5idG5fYWRkX3BsdXN7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXRfcXR5e1xyXG4gICAgLm5hdGl2ZS1pbnB1dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgICBcclxuICAgIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAubm90aWZpY2F0aW9uLWljb24tYnV0dG9uIHtcclxuICAgICAgICAuYnRuX2JhZGdlIHtcclxuICAgICAgICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhbm5lciB7XHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICBpb24tc2xpZGUge1xyXG4gICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlcl9pbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgICYuY3JvcF9pbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IC01MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcmlnaHQ6IC01MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuXHJcbiAgICAuY2FyZF9oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTNweCAxOHB4IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGxfY29udGFpbmVyIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgICAgICAgLml0ZW1fc2Nyb2xsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idXR0b24tbmF0aXZle1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLmJ1dHRvbi1zb2xpZHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Njk2OTYgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC5pdGVtX2lubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwOyBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAgICAgLml0ZW1faW5uZXIgIHtcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdG9wOiAtOXB4O1xyXG4gICAgLy8gbGVmdDogMThweDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/detailproduk/detailproduk.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/detailproduk/detailproduk.page.ts ***!
      \***************************************************/

    /*! exports provided: DetailprodukPage */

    /***/
    function srcAppDetailprodukDetailprodukPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailprodukPage", function () {
        return DetailprodukPage;
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


      var _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../providers/constant.service */
      "./src/app/providers/constant.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/data-cart.service */
      "./src/app/services/data-cart.service.ts");
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/product.service */
      "./src/app/services/product.service.ts");
      /* harmony import */


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");
      /* harmony import */


      var _services_util_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/util/util.service */
      "./src/app/services/util/util.service.ts");

      var DetailprodukPage = /*#__PURE__*/function () {
        function DetailprodukPage(http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, product_service, route, consta, userdata, util) {
          _classCallCheck(this, DetailprodukPage);

          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.product_service = product_service;
          this.route = route;
          this.consta = consta;
          this.userdata = userdata;
          this.util = util;
          this.data_product_detail = {};
          this.input_qty = 1;
          this.harga_jual_pro2 = 0;
          this.harga_jual_reseller = 0;
          this.harga_user = 0;
          this.data_user = {};
          this.disc_pro = 0;
          this.status_pel = 0;
          this.wa = {};
          this.nomor_rekening = {};
          this.kontak = {
            telp: '',
            email: '',
            wa: ''
          };
          this.akses = [];
          this.showToolbar = false;
          this.coloricon = false; // this.combroadcast.on('broadcast_keranjang', (data : any )=>{
          //     this.get_total_keranjang();
          // })

          this.akses = JSON.parse(localStorage.getItem('akses')) || [];
          console.log('userid', this.akses);
        }

        _createClass(DetailprodukPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.id_pro = this.route.snapshot.paramMap.get('id');
            // this.get_product_detail();
            // this.get_total_keranjang();
          }
        }, {
          key: "onScroll",
          value: function onScroll($event) {
            if ($event && $event.detail && $event.detail.scrollTop) {
              var scrollTop = $event.detail.scrollTop;
              this.showToolbar = scrollTop >= 225;
              this.coloricon = scrollTop >= 225;
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            console.log('view wenter');
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'hasil');

              if (hsl == null) {
                _this.router.navigateByUrl('login');
              } else {
                _this.data_user = hsl;
                _this.id_pro = _this.route.snapshot.paramMap.get('id');
                _this.status_pel = hsl['status_pel']; // this.status_pel = 0;

                _this.get_product_detail();

                _this.get_total_keranjang();

                _this.get_kontak();
              }
            });
          }
        }, {
          key: "get_total_keranjang",
          value: function get_total_keranjang() {
            var _this2 = this;

            this.servcart.get_keranjang(this.data_user.id_pel).then(function (hasil) {
              console.log(hasil, 'keranjang');
              var hsl = {};
              hsl = hasil;
              _this2.total_keranjang = hsl.total_qty;
            });
          }
        }, {
          key: "goto_checkout",
          value: function goto_checkout() {
            var userid = localStorage.getItem('userid');
            console.log('userid', userid);

            if (userid && userid != null && userid != 'null') {
              this.router.navigate(['tabs/tab3']);
            } else {
              this.router.navigate(['./login']);
            } // this.router.navigateByUrl('tabs/tab3');

          }
        }, {
          key: "add_minus",
          value: function add_minus() {
            if (this.input_qty == 1) {
              return false;
            } else {
              this.input_qty--;
            }
          }
        }, {
          key: "add_plus",
          value: function add_plus() {
            this.input_qty++;
          }
        }, {
          key: "get_product_detail",
          value: function get_product_detail() {
            var _this3 = this;

            console.log('idproduk', this.id_pro);
            this.product_service.get_product_detail(this.id_pro).then(function (hsl) {
              _this3.data_product_detail = hsl;
              _this3.nama_pro = _this3.data_product_detail.produk[0].nama_pro;
              _this3.harga_jual_pro = _this3.data_product_detail.produk[0].harga_jual_pro;
              _this3.harga_jual_pro2 = _this3.data_product_detail.produk[0].harga_jual_pro2;
              _this3.harga_jual_reseller = _this3.data_product_detail.produk[0].harga_reseller;
              _this3.harga_user = _this3.data_product_detail.produk[0].harga_user;
              _this3.disc_pro = _this3.data_product_detail.produk[0].disc_pro;
              _this3.stok_pro = _this3.data_product_detail.produk[0].stok_pro; // console.log(this.nama_pro);

              _this3.desc_pro = _this3.data_product_detail.produk[0].desc_pro;
              _this3.cover = _this3.data_product_detail.cover;
              _this3.cover_style = {
                'background-image': 'url("' + _this3.data_product_detail.cover + '")'
              };
              console.log(_this3.status_pel); //debugger;
            });
          }
        }, {
          key: "insert_cart",
          value: function insert_cart() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context.sent;
                      _context.next = 5;
                      return this.loading.present();

                    case 5:
                      this.servcart.save_keranjang(this.id_pro, this.data_user.id_pel, 0, this.input_qty).then(function (hasil) {
                        _this4.loading.dismiss();

                        var hasil2 = {};
                        hasil2 = hasil;
                        console.log(hasil2, 'HASIL');

                        if (hasil2.code == 1) {
                          _this4.util.showToast('Berhasil Menambahkan Ke Keranjang', 'success', 'bottom'); // this.consta.show_alert('', '', hasil2.msg);


                          _this4.ionViewWillEnter;

                          _this4.get_total_keranjang(); // this.combroadcast.broadcast('broadcast_keranjang', '');

                        }
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "get_kontak",
          value: function get_kontak() {
            var _this5 = this;

            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'api_kontak', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              console.log(data, 'KONTAK');
              return data.data;
            })).subscribe(function (hsl) {
              var hasil = {};
              hasil = hsl;
              var konta = hasil;
              console.log('HASIL', konta.kontak);
              var kontaak = konta.kontak[2].link_kontak;
              console.log('WAA', kontaak);
              _this5.kontakk = kontaak;
              _this5.nomor_rekening = hasil.rekening[0].link_kontak;
              _this5.kontak.telp = hasil.kontak[0].isi_kontak;
              _this5.kontak.email = hasil.kontak[1].isi_kontak;
              _this5.whatsapp = hasil.kontak[2].link_kontak;
            }); // console.log('A', kontaak);

            console.log('WA', this.kontakk);
            console.log('TELP', this.kontak.telp);
            console.log('EMAIL', this.kontak.email);
          } // open_wa(phone:string) {
          //   console.log('wa',phone);
          //   window.open('https://api.whatsapp.com/send?phone='+phone, '_system');
          // }

        }, {
          key: "open_wa",
          value: function open_wa(phone) {
            var wa = phone;
            console.log('wa', wa);
            window.open('https://api.whatsapp.com/send?phone=' + wa, '_system');
          }
        }, {
          key: "reset",
          value: function reset() {
            this.faqExpand1 = false;
            this.faqExpand2 = false;
            this.faqExpand3 = false;
          }
        }, {
          key: "faqExpandToggle1",
          value: function faqExpandToggle1() {
            this.reset();
            this.faqExpand1 = !this.faqExpand1;
          }
        }, {
          key: "faqExpandToggle2",
          value: function faqExpandToggle2() {
            this.reset();
            this.faqExpand2 = !this.faqExpand2;
          }
        }, {
          key: "faqExpandToggle3",
          value: function faqExpandToggle3() {
            this.reset();
            this.faqExpand3 = !this.faqExpand3;
          }
        }]);

        return DetailprodukPage;
      }();

      DetailprodukPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__["DataCartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"]
        }, {
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_9__["UserData"]
        }, {
          type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
        }];
      };

      DetailprodukPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailproduk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detailproduk.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/detailproduk/detailproduk.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detailproduk.page.scss */
        "./src/app/detailproduk/detailproduk.page.scss"))["default"]]
      })], DetailprodukPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=detailproduk-detailproduk-module-es5.js.map