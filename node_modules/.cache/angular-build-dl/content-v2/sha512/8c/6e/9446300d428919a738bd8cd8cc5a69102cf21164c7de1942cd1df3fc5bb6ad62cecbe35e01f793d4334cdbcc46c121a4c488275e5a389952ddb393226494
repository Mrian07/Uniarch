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


      __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar [class.show-background]=\"showToolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\" src=\"/assets/icon/chevron-back-outline.svg\" [class.change-color]=\"coloricon\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" class=\"warna\" (click)=\"goto_checkout()\">\n      <ion-badge class=\"badge_icon\" style=\"top: 0px;\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}\n      </ion-badge>\n      <ion-icon src=\"/assets/icon/cart-outline.svg\" [class.change-color]=\"coloricon\"\n        style=\"font-size: 28px;margin: 10px;\">\n      </ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" style=\"--background: var(--ion-color-bg);\">\n\n  <div style=\"margin-top: -57px;\">\n\n    <div class=\"banner\">\n      <!-- <img src=\"assets/imgs/produk.jpg\" class=\"crop_img\" > -->\n      <ion-slides pager=\"true\" loop=\"true\">\n        <ion-slide>\n          <div class=\"img_box center_img\">\n            <img src=\"{{cover}}\" class=\"crop_img\" onerror=\"this.src = '/assets/img/no_image.png'\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div>\n      <ion-row style=\"padding: 10px;\">\n        <ion-col size=\"12\" style=\"height: fit-content;\">\n          <h4 style=\"margin: 0px;font-weight: 500;\">{{nama_pro}}</h4>\n        </ion-col>\n        <ion-col size=\"12\" style=\"height: fit-content;\" *ngIf=\"akses != null\">\n\n          <h4 *ngIf=\"data_user.status_pel == 1\" style=\"margin: 0px;color: var(--ion-color-primary);\"> \n            {{harga_jual_pro2 - (harga_jual_pro2 * disc_pro / 100) | currency : 'IDR' : 'Rp.' }}\n          </h4>\n          <h4 *ngIf=\"data_user.status_pel == 2\" style=\"margin: 0px;color: var(--ion-color-primary);\">\n            {{harga_jual_reseller - (harga_jual_reseller * disc_pro / 100) | currency : 'IDR' : 'Rp.' }}\n          </h4>\n          <h4 *ngIf=\"data_user.status_pel == 0\" style=\"margin: 0px;color: var(--ion-color-primary);\">\n            {{harga_user - (harga_user * disc_pro / 100) | currency : 'IDR' : 'Rp.' }}\n          </h4>\n\n        </ion-col>\n        <!-- <ion-col size=\"12\" style=\"height: fit-content;\">\n          <p style=\"margin: 0px;\">{{berat_pro}}gram /pcs</p>\n        </ion-col> -->\n        <ion-col size=\"6\" style=\"height: fit-content;\">\n          <p style=\"margin: 0px;\">Review (0)</p>\n        </ion-col>\n        <ion-col size=\"6\" style=\"height: fit-content;text-align: right;\">\n          <span\n            style=\"margin:7px;background:var(--ion-color-primary);color: #fff;padding: 4px 13px;border-radius: 49px;\">\n            Total Stok {{stok_pro}}\n          </span>\n        </ion-col>\n        <ion-col size=\"2\" style=\"height: fit-content;margin-top:20px;text-align: center;\">\n          <button style=\"background: #0000;\" (click)=\"add_minus()\">\n            <ion-icon name=\"remove-circle\" style=\"font-size: 34px;\" color=\"danger\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col size=\"8\" style=\"height: fit-content;margin-top:20px;text-align: center;\">\n          <p style=\"margin: 0px;\">\n            <input type=\"number\" [(ngModel)]=\"input_qty\" style=\"width: 100%;border: unset;height: 35px;\n          border-radius: 20px;text-align: center;\">\n            <input type=\"text\" name=\"id_pro\" value=\"{{id_pro}}\" #id_pro hidden\n              style=\"width: 100%;border: 1px solid #5a5a5a;height: 35px;border-radius: 20px;text-align: center;\">\n          </p>\n        </ion-col>\n        <ion-col size=\"2\" style=\"height: fit-content;margin-top:20px;text-align: center;\">\n          <button style=\"background: #0000;\" (click)=\"add_plus()\">\n            <ion-icon name=\"add-circle\" style=\"font-size: 34px;\" color=\"secondary\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col size=\"12\" style=\"height: fit-content;text-align: center;\">\n          <ion-button size=\"small\" expand=\"block\" (click)=\"insert_cart()\"\n            style=\"color: #fff;height: 37px;background: #356d75;width: 100%;border-radius: 20px;\">\n            Tambahkan &nbsp; <ion-icon src=\"/assets/icon/cart-outline.svg\" style=\"color: #fff;\"></ion-icon>\n\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\" style=\"height: fit-content;text-align: center;\">\n          <ion-button size=\"small\" expand=\"block\" (click)=\"open_wa(kontak.telp)\"\n            style=\"color: #fff;height: 37px;background: #356d75;width: 100%;border-radius: 20px;\">\n            Pesan via Whatsapp &nbsp;<ion-icon name=\"logo-whatsapp\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-list lines=\"none\">\n      <ion-item [ngClass]=\"faqExpand1 ? 'active' : '' \" (click)=\"faqExpandToggle1()\">\n        <div class=\"item_inner\">\n          <h2>Deskripsi</h2>\n          <p [innerHTML]=\"desc_pro\"></p>\n          <br><br><br><br><br><br><br><br><br><br>\n          \n        </div>\n      </ion-item>\n      <!-- <ion-item [ngClass]=\"faqExpand3 ? 'active' : '' \" (click)=\"faqExpandToggle3()\">\n        <div class=\"item_inner\">\n          <h2>Ulasan</h2>\n          <p>Belum Ada Ulasan Untuk Produk ini</p>\n        </div>\n      </ion-item> -->\n\n    </ion-list>\n\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\n    <ion-fab-button>\n        <img src=\"assets/imgs/bag.png\">\n    </ion-fab-button>\n</ion-fab>\n</ion-content>";
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


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary);\n  transition: all .2s;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.sc-ion-buttons-md-s .button {\n  --color:#222;\n}\n\n.change-color {\n  color: #fff !important;\n}\n\n.warna {\n  color: #222;\n}\n\n.cover {\n  width: 100%;\n  height: 180px;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  text-align: center;\n}\n\n.img_product {\n  height: 180px;\n}\n\n.btn_add_plus {\n  width: 30px;\n  height: 30px;\n  --border-radius: 50%;\n  --background: white;\n  color: black;\n}\n\n.native-input.sc-ion-input-md {\n  text-align: center;\n}\n\n.input_qty .native-input {\n  text-align: center;\n}\n\nion-toolbar .notification-icon-button .btn_badge {\n  --overflow: visible;\n}\n\nion-toolbar .notification-icon-button .btn_badge ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -4px;\n  right: -3px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n}\n\n.banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 400px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.center_img {\n  position: relative;\n  overflow: hidden;\n}\n\n.center_img img.crop_img {\n  position: unset !important;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: -50% !important;\n  right: -50% !important;\n  margin: auto;\n}\n\n.container {\n  padding: 0px 10px;\n}\n\nion-card {\n  background: var(--bg-color);\n  margin: 0;\n  width: 100%;\n  box-shadow: none;\n  border-radius: 0;\n  padding-bottom: 10px;\n  margin-bottom: 1px;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header {\n  padding: 13px 13px 18px 13px;\n  width: 100%;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header h4 {\n  background: var(--bg-secondary);\n  width: 35px;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 50%;\n  color: var(--primary);\n  font-size: 1rem;\n  margin: 0;\n  margin-right: 13px;\n  font-weight: 400;\n}\n\nion-card .card_header .text_box {\n  width: 100%;\n}\n\nion-card .card_header .text_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: .95rem;\n  margin: 0;\n  padding-bottom: 2px;\n  font-weight: 500;\n  letter-spacing: .5px;\n}\n\nion-card .card_header .text_box h3 {\n  color: var(--text-light);\n  font-size: .8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-card .card_header .text_box h3 span {\n  display: flex;\n  align-items: center;\n}\n\nion-card .card_header .text_box h3 span ion-icon {\n  color: var(--white);\n  font-size: 1.2rem;\n  min-width: 15px;\n}\n\nion-card .scroll_container {\n  white-space: nowrap;\n  overflow: hidden;\n  overflow-x: auto;\n}\n\nion-card .scroll_container .item_scroll {\n  display: inline-block;\n  width: 130px;\n  height: 60px;\n  border-radius: 15px;\n  margin: 10px 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .scroll_container .item_scroll:first-child {\n  margin-left: 13px;\n}\n\nion-card .scroll_container .item_scroll:last-child {\n  margin-right: 13px;\n}\n\nion-card .scroll_container .item_scroll .img_box {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n}\n\n.button-native {\n  border: none;\n}\n\n.button-solid {\n  --border-radius: 15px;\n  --border:none !important;\n}\n\nion-list {\n  padding: 0;\n  background: none;\n  width: calc(100% - 30px);\n  margin: 0 auto;\n  padding-top: 15px;\n}\n\nion-list ion-item {\n  padding: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #969696  !important;\n  padding-bottom: 10px;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h2 {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--text-light);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin: 0;\n  padding-bottom: 8px;\n}\n\nion-list ion-item .item_inner p {\n  font-size: .9rem;\n  font-weight: 400;\n  display: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: var(--white);\n  margin: 0;\n}\n\nion-list ion-item .item_inner p:first-of-type {\n  display: block !important;\n}\n\nion-list ion-item.active {\n  padding-bottom: 0;\n  transition: all .3s ease-in-out;\n}\n\nion-list ion-item.active .item_inner h2 {\n  margin-bottom: 10px;\n}\n\nion-list ion-item.active .item_inner p {\n  white-space: normal;\n  display: block !important;\n  overflow: visible;\n  margin-bottom: 17px;\n  transition: all .3s ease-in-out;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscHJvZHVrL2RldGFpbHByb2R1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtFQUNiLHdDQUFpQjtBQUNyQjs7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBRXZCOztBQUFBO0VBQ0ksc0JBQXNCO0FBRzFCOztBQURBO0VBQ0ksaUJBQWU7QUFJbkI7O0FBREE7RUFDSSxZQUFRO0FBSVo7O0FBRkE7RUFDSSxzQkFBcUI7QUFLekI7O0FBSEE7RUFDSSxXQUFVO0FBTWQ7O0FBSkE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUViLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQU10Qjs7QUFKQTtFQUNJLGFBQWE7QUFPakI7O0FBTEE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFnQjtFQUNoQixtQkFBYTtFQUNiLFlBQVk7QUFRaEI7O0FBTkE7RUFDSSxrQkFBa0I7QUFTdEI7O0FBUEE7RUFFUSxrQkFBa0I7QUFTMUI7O0FBTkE7RUFHWSxtQkFBVztBQU92Qjs7QUFWQTtFQU1nQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFRL0I7O0FBRkU7RUFJYyxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFFakM7O0FBSUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBRHBCOztBQURBO0VBTVksMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFEeEI7O0FBTUE7RUFFSSxpQkFBaUI7QUFKckI7O0FBT0E7RUFDSSwyQkFBMkI7RUFDM0IsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0hBQWdIO0FBSnBIOztBQUpBO0VBWVEsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnSEFBZ0g7QUFKeEg7O0FBVkE7RUFpQlksK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUg1Qjs7QUF4QkE7RUErQlksV0FBVztBQUh2Qjs7QUE1QkE7RUFrQ2dCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUZwQzs7QUF0Q0E7RUE0Q2dCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFGekI7O0FBN0NBO0VBa0RvQixhQUFhO0VBQ2IsbUJBQW1CO0FBRHZDOztBQWxEQTtFQXNEd0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQXZDOztBQXhEQTtFQWdFUSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUp4Qjs7QUE5REE7RUFxRVkscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGdIQUFnSDtBQUg1SDs7QUF4RUE7RUE4RWdCLGlCQUFpQjtBQUZqQzs7QUE1RUE7RUFrRmdCLGtCQUFrQjtBQUZsQzs7QUFoRkE7RUFzRmdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBRm5DOztBQVFBO0VBQ0ksWUFBVztBQUxmOztBQU9BO0VBQ0kscUJBQWdCO0VBQ2hCLHdCQUFTO0FBSmI7O0FBT0E7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsaUJBQWlCO0FBSnJCOztBQURBO0VBUVEsVUFBVTtFQUNWLHdCQUFvQjtFQUNwQixvQ0FBbUI7RUFDbkIsOEJBQWE7RUFDYixrQkFBZ0I7RUFDaEIsMkNBQWE7RUFDYixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLG9CQUFvQjtBQUg1Qjs7QUFiQTtFQW1CWSxXQUFXO0FBRnZCOztBQWpCQTtFQXNCZ0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG1CQUFtQjtBQURuQzs7QUE1QkE7RUFpQ2dCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0FBRHpCOztBQXZDQTtFQTJDb0IseUJBQXlCO0FBQTdDOztBQTNDQTtFQWlEWSxpQkFBaUI7RUFDakIsK0JBQWtFO0FBRjlFOztBQWhEQTtFQXNEb0IsbUJBQW1CO0FBRnZDOztBQXBEQTtFQTBEb0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLCtCQUFrRTtBQUZ0Rjs7QUFhQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBRVQsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFYZCIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHByb2R1ay9kZXRhaWxwcm9kdWsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5zaG93LWJhY2tncm91bmQge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b257XG4gICAgLS1jb2xvcjojMjIyO1xufVxuLmNoYW5nZS1jb2xvciB7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuLndhcm5he1xuICAgIGNvbG9yOiMyMjI7XG59XG4uY292ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWdfcHJvZHVjdHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xufVxuLmJ0bl9hZGRfcGx1c3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXRfcXR5e1xuICAgIC5uYXRpdmUtaW5wdXR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgIFxuICAgIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgICAubm90aWZpY2F0aW9uLWljb24tYnV0dG9uIHtcbiAgICAgICAgLmJ0bl9iYWRnZSB7XG4gICAgICAgICAgICAtLW92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBcbiAgICAgICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5iYW5uZXIge1xuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jZW50ZXJfaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGltZyB7XG4gICAgICAgICYuY3JvcF9pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IC01MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHJpZ2h0OiAtNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cblxuICAgIC5jYXJkX2hlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTNweCAxOHB4IDEzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY3JvbGxfY29udGFpbmVyIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgICAgICAuaXRlbV9zY3JvbGwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG4uYnV0dG9uLW5hdGl2ZXtcbiAgICBib3JkZXI6bm9uZTtcbn1cbi5idXR0b24tc29saWR7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC0tYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Njk2OTYgICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDsgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgICAgIC5pdGVtX2lubmVyICB7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5pb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjcwYjBiO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdG9wOiAtOXB4O1xuICAgIC8vIGxlZnQ6IDE4cHg7XG4gICAgcmlnaHQ6IDE3cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiA5O1xufSJdfQ== */";
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