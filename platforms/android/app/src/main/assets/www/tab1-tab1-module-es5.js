(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar [class.show-background]=\"showToolbar\">\n    <!-- <ion-buttons slot=\"start\" class=\"warna\" *ngIf=\"valid == 'ada'\">\n      <ion-menu-button [class.change-color]=\"coloricon\"></ion-menu-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"start\" class=\"warna\" (click)=\"kosong()\">\n      <ion-icon name=\"menu-outline\" [class.change-color]=\"coloricon\" style=\"font-size: 28px;margin: 10px; color: white;\">\n      </ion-icon>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\">\n      <img src=\"assets/imgs/logo.png\" style=\"width: 100%; padding-top: 10px;\">\n    </ion-title>\n    <ion-buttons slot=\"end\" class=\"warna\" (click)=\"profile()\">\n      <ion-icon name=\"person-circle-outline\" [class.change-color]=\"coloricon\" style=\"font-size: 28px; margin: 10px; color: white;\">\n      </ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" style=\"--background: var(--ion-color-bg);\">\n\n  <ion-refresher slot=\"fixed\" disabled=\"false\" (ionRefresh)=\"doRefresh($event)\" pullFactor=\"0.5\" pullMin=\"100\"\n    pullMax=\"200\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"banner\" *ngIf=\"data_slider\">\n    <ion-slides #IonSlides autoplay=\"3000\" loop=\"true\" pager=\"true\">\n      <ion-slide *ngFor=\"let prod of data_slider\">\n        <img src=\"{{prod.gambar_slider}}\" class=\"crop_img\" style=\"border-radius: 20px;padding: 10px;\" />\n      </ion-slide>\n    </ion-slides>\n  </div> \n\n  <ion-row *ngIf=\"!data_slider\">\n    <div class=\"custom-skeleton\" style=\"width: 100%;\">\n      <ion-row class=\"marginbtm\">\n        <ion-col size=\"12\">\n          <ion-skeleton-text animated=\"true\"\n            style=\"width: 100%;height: 167px;--background-rgb: var(--ion-color-light-rgb);\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-row>\n  \n\n  <div class=\"container\">\n    <ion-row style=\"padding:0px 10px\">\n      <!-- <ion-card style=\"margin: 15px 0px;padding: 0px;border-radius: 30px;\">\n        <ion-item lines=\"none\"> -->\n          <ion-searchbar [(ngModel)]=\"queryText\" (search)=\"search_product($event)\" placeholder=\"Cari Produk\"></ion-searchbar>\n          <!-- <ion-input type=\"text\" placeholder=\"Pencarian\" name=\"cari\">\n          </ion-input>\n          <ion-buttons slot=\"end\" style=\"background: #3e8098;color: #fff;border-radius: 100%;\">\n            <ion-icon src=\"/assets/icon/search-outline.svg\" style=\"font-size: 28px;margin: 6px;\">\n            </ion-icon>\n          </ion-buttons> -->\n        <!-- </ion-item>\n      </ion-card> -->\n    </ion-row>\n\n    <div class=\"card_header d-flex\" >\n      <div class=\"text_box\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <h5 style=\"margin: 0px;\"><b>Kategori</b></h5>\n          </ion-col>\n          <!-- <ion-col size=\"6\" style=\"text-align: end;\">\n          <h6 style=\"margin: 0px;\">Lihat Semua</h6>\n        </ion-col> -->\n        </ion-row>\n      </div>\n    </div>\n\n    <ion-card style=\"box-shadow: none;\">\n      <div class=\"scroll_container\">\n        <div class=\"item_scroll\">\n          <div class=\"img_box center_img\">\n            <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 100%;background: var(--ion-color-primary);\n            text-align: center;\" (click)=\"choose_kategori('semua',0)\">\n              <h5 style=\"margin-top: 20px;font-size: 16px;\">\n                <b style=\"color: #fff;\" class=\"wrap-text-dua\">Terbaru</b>\n              </h5>\n            </ion-card>\n          </div>\n        </div>\n        <div class=\"item_scroll\" *ngFor=\"let item of product_category\">\n          <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 100%;background: var(--ion-color-primary);\n            text-align: center;\" (click)=\"choose_kategori(item, 1)\">\n            <h5 style=\"margin-top: 20px;font-size: 16px;\">\n              <b style=\"color: #fff;\" class=\"wrap-text-dua\">{{item.label}}</b>\n            </h5>\n          </ion-card>\n        </div>\n      </div>\n    </ion-card>\n\n    <div class=\"card_header d-flex\">\n      <div class=\"text_box\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <h5 style=\"margin: 0px;\"><b>Semua Produk</b></h5>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <ion-row style=\"padding: 10px 0px 10px 10px;\">\n\n      <ion-col size=\"12\" *ngIf=\"!list_product\" style=\"text-align: center;\"> \n        <ion-spinner name=\"circles\"></ion-spinner>\n      </ion-col>\n\n      <ion-col size=\"6\" *ngFor=\"let data of list_product; let i = index;\" style=\"padding: 0px 10px 10px 0px;\" >\n        \n\n        <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 274px;background: #fff;\">\n         \n          <span *ngIf=\"data.disc_pro != '0'\"\n            style=\"text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;position: absolute;justify-content: right;margin-top: 8px;font-size: 12px;right: 7px;top: 0px;\">\n            {{data.disc_pro}}% OFF\n          </span>\n\n          <img src=\"{{url}}normal-{{data.nama_gbr_pro}}\" onerror=\"this.src = '/assets/img/no_image.png'\" alt=\"Foto\"\n            style=\"height: 150px;object-fit: cover;width: 100%;\" (click)=\"goto_detail(data.id_pro)\">\n\n          <h6 style=\"margin: 10px;text-align: left;margin-top: 7px;margin-bottom: 5px;font-weight: 500;\" class=\"wrap-text\" (click)=\"goto_detail(data.id_pro)\">\n            {{data.nama_pro}}\n          </h6>\n\n          <div *ngIf=\"hsl !== null\"> \n            \n            <div *ngIf=\"data_user.status_pel == 1\">\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | number :\n                  fractionSize}}</b>\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_jual_pro | number : fractionSize}}\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_jual_pro | number : fractionSize}}</b>\n              </h6>\n            </div>\n\n            <div *ngIf=\"data_user.status_pel == 2\">\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | number :\n                  fractionSize}}</b>\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_reseller | number : fractionSize}}\n              </h6>\n\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_reseller | number : fractionSize}}</b>\n              </h6>\n            </div>\n\n            <div *ngIf=\"data_user.status_pel == 0\">\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\n              </h6>\n             \n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_user | number : fractionSize}}\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\n              </h6>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"hsl === null\">\n            <div>\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\n              </h6>\n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_user | number : fractionSize}}\n              </h6>\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\n              </h6>\n\n            </div>\n          </div>\n\n          <ion-row>\n            \n            <ion-col size=\"8\">\n              <h6 style=\"margin: 0px 0px 5px 5px;text-align: left;font-size: 11px;\" class=\"wrap-text-auto\">\n                {{data.kode_pro}}</h6>\n              <span\n                style=\"margin:7px;text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;font-size: 12px;\">\n                {{data.stok_pro}} Pcs\n              </span>\n            </ion-col>\n            \n            <ion-col size=\"4\">\n              <ion-buttons (click)=\"insert_cart(data.id_pro, i)\"\n                style=\"background:var(--ion-color-primary);color: #fff;border-radius: 100%;padding: 10px;width: fit-content;\">\n                <ion-icon name=\"cart\" style=\"font-size: 22px;\"></ion-icon>\n              </ion-buttons>\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card>\n\n\n        <!--\n        <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 274px;background: #fff;\" *ngIf=\"valid === ada\">\n          <span *ngIf=\"data.disc_pro != '0'\"\n            style=\"text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;position: absolute;justify-content: right;margin-top: 8px;font-size: 12px;right: 7px;top: 0px;\">\n            {{data.disc_pro}}% OFF</span>\n\n          <img src=\"{{url}}normal-{{data.nama_gbr_pro}}\" onerror=\"this.src = '/assets/img/no_image.png'\" alt=\"Foto\"\n            style=\"height: 150px;object-fit: cover;width: 100%;\" (click)=\"goto_detail(data.id_pro)\">\n          Login\n          <h6 style=\"margin: 10px;text-align: left;margin-top: 7px;margin-bottom: 5px;font-weight: 500;\"\n            *ngIf=\"data.set_harga_pro == '1'\" class=\"wrap-text\" (click)=\"goto_detail(data.id_pro)\">\n            {{data.nama_pro}}\n          </h6>\n\n          <div *ngIf=\"hsl !== null\"> \n            <div *ngIf=\"data_user.status_pel == 1\">\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | number :\n                  fractionSize}}</b>\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_jual_pro | number : fractionSize}}\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_jual_pro | number : fractionSize}}</b>\n              </h6>\n\n            </div>\n\n            <div *ngIf=\"data_user.status_pel == 2\">\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | number :\n                  fractionSize}}</b>\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_reseller | number : fractionSize}}\n              </h6>\n\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_reseller | number : fractionSize}}</b>\n              </h6>\n\n            </div>\n\n            <div *ngIf=\"data_user.status_pel == 0\">\n\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\n              </h6>\n             \n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_user | number : fractionSize}}\n              </h6>\n              \n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\n              </h6>\n\n            </div>\n\n          </div>\n\n          <div *ngIf=\"hsl === null\">\n            <div>\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\n              </h6>\n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_user | number : fractionSize}}\n              </h6>\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\n              </h6>\n            </div>\n          </div>\n\n          <ion-row>\n            <ion-col size=\"8\">\n              <h6 style=\"margin: 0px 0px 5px 5px;text-align: left;font-size: 11px;\" class=\"wrap-text-auto\">\n                {{data.kode_pro}}</h6>\n              <span\n                style=\"margin:7px;text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;font-size: 12px;\">\n                {{data.stok_pro}} Pcs\n              </span>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-buttons (click)=\"insert_cart(data.id_pro, i)\"\n                style=\"background:var(--ion-color-primary);color: #fff;border-radius: 100%;padding: 10px;width: fit-content;\">\n                <ion-icon name=\"cart\" style=\"font-size: 22px;\"></ion-icon>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 274px;background: #fff;\" *ngIf=\"valid === gaada\">\n          \n          <span *ngIf=\"data.disc_pro != '0'\" style=\"text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;position: absolute;justify-content: right;margin-top: 8px;font-size: 12px;right: 7px;top: 0px;\">\n            {{data.disc_pro}}% OFF\n          </span>\n\n          <img src=\"{{url}}normal-{{data.nama_gbr_pro}}\" onerror=\"this.src = '/assets/img/no_image.png'\" alt=\"Foto\"\n            style=\"height: 150px;object-fit: cover;width: 100%;\" (click)=\"login()\">\n            belom login\n\n            <h6 style=\"margin: 10px;text-align: left;margin-top: 7px;margin-bottom: 5px;font-weight: 500;\"\n            *ngIf=\"data.set_harga_pro == '1'\" class=\"wrap-text\" (click)=\"login()\">\n            {{data.nama_pro}}</h6>\n\n          <div *ngIf=\"hsl !== null\"> \n            <div *ngIf=\"data_user.status_pel == 1\">\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}\n              </h6>\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n            </div>\n            <div *ngIf=\"data_user.status_pel == 2\">\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}\n              </h6>\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n            </div>\n            <div *ngIf=\"data_user.status_pel == 0\">\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}\n              </h6>\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n            </div>\n          </div>\n\n          <div *ngIf=\"hsl == null\">\n            <div>\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\n                <b class=\"warnatextdua\">Rp.\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n              <h6 *ngIf=\"data.disc_pro != '0'\"\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\n                Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}\n              </h6>\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\n                class=\"warnatextdua\">\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}</b>\n              </h6>\n            </div>\n          </div>\n          <ion-row>\n            <ion-col size=\"8\">\n              <h6 style=\"margin: 0px 0px 5px 5px;text-align: left;font-size: 11px;\" class=\"wrap-text-auto\">\n                {{data.kode_pro}}</h6>\n              <span\n                style=\"margin:7px;text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;font-size: 12px;\">\n                {{data.stok_pro}} Pcs\n              </span>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-buttons (click)=\"insert_cart(data.id_pro, i)\"\n                style=\"background:var(--ion-color-primary);color: #fff;border-radius: 100%;padding: 10px;width: fit-content;\">\n                <ion-icon name=\"cart\" style=\"font-size: 22px;\"></ion-icon>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        -->\n\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let data of list_product; let i = index;\" size=\"12\">\n        <ion-button clear class=\"btn_cart\" (click)=\"insert_cart(data.id_pro)\">\n          <span class=\"fa fa-shopping-cart\" id=\"icon_cart\"></span>\n        </ion-button>\n        <div class=\"col_product\" (click)=\"goto_detail(data.id_pro)\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <div class=\"div_img\">\n                <img (click)=\"viewDetails(product.id)\" class=\"product-image\" src=\"{{url}}normal-{{data.nama_gbr_pro}}\"\n                  onerror=\"this.src = '/assets/img/no_image.png'\">\n              </div>\n            </ion-col>\n            <ion-col *ngIf=\"data_user.status_pel==1\">\n              <div class=\"content_product\">\n                <div class=\"product_code \">{{data.nama_pro}}</div>\n                <div class=\"product_name\">{{data.kode_pro}}</div>\n              </div>\n              <ion-row>\n                <ion-col class=\"padding_0 \" style=\"display: flex;\">\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro > 0\">\n                    {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | currency : 'IDR' :\n                    'Rp.' }}\n                  </div>\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro == 0\">\n                    {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}\n                  </div>\n                  <div class=\"product_disc font_12\" *ngIf=\"data.disc_pro > 0\">{{data.disc_pro}}% OFF</div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"padding_0 font_12\">\n                  <div class=\"harga_potongan\" *ngIf=\"data.disc_pro > 0\" style=\"padding-top:5px;\">\n                    {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col *ngIf=\"data_user.status_pel==2\">\n              <div class=\"content_product\">\n                <div class=\"product_code \">{{data.nama_pro}}</div>\n                <div class=\"product_name\">{{data.kode_pro}}</div>\n              </div>\n              <ion-row>\n                <ion-col class=\"padding_0 \" style=\"display: flex;\">\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro > 0\">\n                    {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | currency : 'IDR' :\n                    'Rp.' }}\n                  </div>\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro == 0\">\n                    {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}\n                  </div>\n                  <div class=\"product_disc font_12\" *ngIf=\"data.disc_pro > 0\">{{data.disc_pro}}% OFF</div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"padding_0 font_12\">\n                  <div class=\"harga_potongan\" *ngIf=\"data.disc_pro > 0\" style=\"padding-top:5px;\">\n                    {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col *ngIf=\"data_user.status_pel==0\">\n              <div class=\"content_product\">\n                <div class=\"product_code \">{{data.nama_pro}}</div>\n                <div class=\"product_name\">{{data.kode_pro}}</div>\n              </div>\n              <ion-row>\n                <ion-col class=\"padding_0 \" style=\"display: flex;\">\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro > 0\">\n                    {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.' }}\n                  </div>\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro == 0\">\n                    {{data.harga_user | currency : 'IDR' : 'Rp.'}}\n                  </div>\n                  <div class=\"product_disc font_12\" *ngIf=\"data.disc_pro > 0\">{{data.disc_pro}}% OFF</div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"padding_0 font_12\">\n                  <div class=\"harga_potongan\" *ngIf=\"data.disc_pro > 0\" style=\"padding-top:5px;\">\n                    {{data.harga_user | currency : 'IDR' : 'Rp.'}}\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n    <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"circles\" loadingText=\"Memuat Produk...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\n    <ion-fab-button>\n        <img src=\"assets/imgs/bag.png\">\n    </ion-fab-button>\n</ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #5ab1cb;\n  --ion-color-base: transparent !important;\n}\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary);\n  transition: all 0.2s;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.sc-ion-buttons-md-s .button {\n  --color:#222;\n}\n\n.change-color {\n  color: #fff !important;\n}\n\n.warna {\n  color: #222;\n}\n\n.banner ion-slides ion-slide .img_box {\n  width: 95%;\n  height: 190px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.container {\n  padding: 0px 10px;\n}\n\nion-card {\n  background: var(--bg-color);\n  margin: 0;\n  width: 100%;\n  box-shadow: none;\n  border-radius: 0;\n  padding-bottom: 10px;\n  margin-bottom: 1px;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header {\n  padding: 13px 13px 18px 13px;\n  width: 100%;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header h4 {\n  background: var(--bg-secondary);\n  width: 35px;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 50%;\n  color: var(--primary);\n  font-size: 1rem;\n  margin: 0;\n  margin-right: 13px;\n  font-weight: 400;\n}\n\nion-card .card_header .text_box {\n  width: 100%;\n}\n\nion-card .card_header .text_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  margin: 0;\n  padding-bottom: 2px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\nion-card .card_header .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-card .card_header .text_box h3 span {\n  display: flex;\n  align-items: center;\n}\n\nion-card .card_header .text_box h3 span ion-icon {\n  color: var(--white);\n  font-size: 1.2rem;\n  min-width: 15px;\n}\n\nion-card .scroll_container {\n  white-space: nowrap;\n  overflow: hidden;\n  overflow-x: auto;\n}\n\nion-card .scroll_container .item_scroll {\n  display: inline-block;\n  width: 130px;\n  height: 60px;\n  border-radius: 15px;\n  margin: 10px 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .scroll_container .item_scroll:first-child {\n  margin-left: 13px;\n}\n\nion-card .scroll_container .item_scroll:last-child {\n  margin-right: 13px;\n}\n\nion-card .scroll_container .item_scroll .img_box {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0E7RUFDSSxxQkFBQTtFQUNBLHdDQUFBO0FBckNKOztBQXVDQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQXBDSjs7QUFzQ0E7RUFDSSxzQkFBQTtBQW5DSjs7QUFxQ0E7RUFDSSxpQkFBQTtBQWxDSjs7QUFxQ0E7RUFDSSxZQUFBO0FBbENKOztBQW9DQTtFQUNJLHNCQUFBO0FBakNKOztBQW1DQTtFQUNJLFdBQUE7QUFoQ0o7O0FBc0NZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBbkNoQjs7QUF5Q0E7RUFFSSxpQkFBQTtBQXZDSjs7QUEwQ0E7RUFDSSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnSEFBQTtBQXZDSjs7QUEwQ0k7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnSEFBQTtBQXhDUjs7QUEwQ1E7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXhDWjs7QUEyQ1E7RUFDSSxXQUFBO0FBekNaOztBQTJDWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQXpDaEI7O0FBNENZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQTFDaEI7O0FBNENnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQTFDcEI7O0FBNENvQjtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBMUN4Qjs7QUFpREk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEvQ1I7O0FBaURRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0hBQUE7QUEvQ1o7O0FBaURZO0VBQ0ksaUJBQUE7QUEvQ2hCOztBQWtEWTtFQUNJLGtCQUFBO0FBaERoQjs7QUFtRFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBakRoQjs7QUF3REE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdERKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuLy8gICAgIGlvbi10aXRsZSB7XG4vLyAgICAgICAgIC50aXRsZV9pbm5lciB7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4vLyAgICAgICAgICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIHRvcDogLTEwMCU7XG4vLyAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6IzQyODk5NDtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbi8vICAgICB9XG5cbi8vICAgICAmLnNob3ctYmFja2dyb3VuZCB7XG4vLyAgICAgICAgICY6OmJlZm9yZSB7XG4vLyAgICAgICAgICAgICB0b3A6IDA7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9IFxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNWFiMWNiO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9ue1xuICAgIC0tY29sb3I6IzIyMjtcbn1cbi5jaGFuZ2UtY29sb3Ige1xuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbn1cbi53YXJuYXtcbiAgICBjb2xvcjojMjIyO1xufVxuXG4uYmFubmVyIHtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTkwcHg7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cblxuICAgIC5jYXJkX2hlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTNweCAxOHB4IDEzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY3JvbGxfY29udGFpbmVyIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgICAgICAuaXRlbV9zY3JvbGwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0b3A6IC05cHg7XG4gICAgLy8gbGVmdDogMThweDtcbiAgICByaWdodDogMTdweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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


      var _providers_user_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../providers/user-data */
      "./src/app/providers/user-data.ts");
      /* harmony import */


      var _services_util_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/util/util.service */
      "./src/app/services/util/util.service.ts");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(platform, http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, userdata, constant, actionSheetController, util, menu, fcm) {
          _classCallCheck(this, Tab1Page);

          this.platform = platform;
          this.http = http;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.servcart = servcart;
          this.loadingctrl = loadingctrl;
          this.alertctrl = alertctrl;
          this.userdata = userdata;
          this.constant = constant;
          this.actionSheetController = actionSheetController;
          this.util = util;
          this.menu = menu;
          this.fcm = fcm;
          this.url = _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["IMAGE_URL_PRODUCT"];
          this.list_product = [];
          this.arr = {};
          this.queryText = '';
          this.order = 'date_desc';
          this.data_user = {};
          this.hide_header = 'shown';
          this.head_kategori = 0;
          this.choose_harga = 0;
          this.choose_penjualan = 0;
          this.choose_terbaru = 0;
          this.cat_filter_array = [];
          this.akses = [];
          this.showToolbar = false;
          this.coloricon = false;
          this.akses = JSON.parse(localStorage.getItem('akses')) || []; //console.log('useridsss', this.akses);

          this.get_product('refresh', '');
          this.get_product_category();
        }

        _createClass(Tab1Page, [{
          key: "onScroll",
          value: function onScroll($event) {
            if ($event && $event.detail && $event.detail.scrollTop) {
              var scrollTop = $event.detail.scrollTop;
              this.showToolbar = scrollTop >= 225;
              this.coloricon = scrollTop >= 225;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loading = this.loadingctrl.create({
              message: 'Please wait...'
            });
            this.loading.present();
            var userid = localStorage.getItem('userid'); //console.log('TAB useridxxx', userid);

            if (userid !== null) {
              this.valid = 'ada'; //console.log('ADA');
            } else {
              this.valid = 'gaada'; //console.log('TIDAK ADA');
            } //console.log('Valid nya ', this.valid);


            this.slides.startAutoplay();
            this.loading.dismiss();
          }
        }, {
          key: "get_product_category",
          value: function get_product_category() {
            var _this = this;

            this.constant.get_product_category().subscribe(function (data) {
              //console.log('PRO CATEGORY :', data)
              _this.product_category = data;
            }); //console.log('kategori',this.product_category);
          }
        }, {
          key: "get_product",
          value: function get_product(type, event) {
            var _this2 = this;

            // this.loading = this.loadingctrl.create({
            //   message: 'Please wait...'
            // });
            if (type == 'refresh') {
              this.list_product = [];
            }

            this.http.post(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'get_product', {
              offset: this.list_product.length,
              type: type,
              cari: this.queryText,
              selected_category: this.selected_category,
              selected_sub_category: this.selected_sub_category,
              min_price: this.min_price,
              max_price: this.max_price,
              order: this.order,
              terbaru: this.choose_terbaru
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              //console.log(data, 'map')
              return data.data;
            })).subscribe(function (hasil) {
              _this2.arr = hasil;

              if (type == 'refresh') {
                _this2.list_product = _this2.arr;
                if (event) event.target.complete();
              } else {
                _this2.arr.forEach(function (element) {
                  _this2.list_product.push(element);
                });

                if (event) event.target.complete();
              }

              console.log('PRODUCT : ', _this2.list_product); // this.loading.dismiss();
            });
          }
        }, {
          key: "choose_subcategory",
          value: function choose_subcategory(val) {
            console.log(val);
            this.selected_category = '';
            this.selected_sub_category = val.link;
            this.get_product('refresh', null);
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(item, dept) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var data, _loop, i;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = [];

                      _loop = function _loop(i) {
                        data.push({
                          text: item[i].label,
                          cssClass: 'cat-has-children',
                          // icon: 'arrow-dropright-circle',
                          handler: function handler() {
                            console.log('subcategory selected, show possible has children'); // this.choose_subcategory(item[i])
                            // this.choose_kategori({detail:{value:item[i]}});

                            _this3.choose_kategori(item[i], dept);
                          }
                        }, {
                          text: 'Batal',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        });
                      };

                      for (i = 0; i < item.length; i++) {
                        _loop(i);
                      } // console.log(data, 'DATA ITEM')


                      _context.next = 5;
                      return this.actionSheetController.create({
                        header: 'Sub Kategori',
                        buttons: data
                      });

                    case 5:
                      this.actionSheet = _context.sent;
                      _context.next = 8;
                      return this.actionSheet.present();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "choose_kate",
          value: function choose_kate(val) {
            this.head_kategori = val;

            if (val == 1) {
              if (this.choose_harga == 0) {
                this.choose_harga = 1; // this.order = 'terendah_ke_termahal';

                this.order = 'price_asc';
              } else {
                this.choose_harga = 0; // this.order = 'termahal_ke_terendah';

                this.order = 'price_desc';
              }
            } else if (val == 2) {
              if (this.choose_penjualan == 0) {
                this.choose_penjualan = 1;
                this.order = 'sale_asc';
              } else {
                this.choose_penjualan = 0;
                this.order = 'sale_desc';
              }
            } else if (val == 3) {
              if (this.choose_terbaru == 0) {
                this.choose_terbaru = 1;
                this.order = 'date_asc';
              } else {
                this.choose_terbaru = 0;
                this.order = 'date_desc';
              }
            } else if (val == 0) {
              this.choose_harga = 0;
              this.choose_terbaru = 0;
              this.order = '';
              this.choose_penjualan = 0;
            }

            this.get_product('refresh', null);
          }
        }, {
          key: "choose_kategori",
          value: function choose_kategori(val, dept) {
            console.log('choose kategory', val, dept);
            var hasil = {};

            if (dept <= 1) {
              this.cat_filter_array = [];
            }

            if (val == 'semua') {
              this.selected_category = '';
              this.selected_sub_category = '';
              this.order = 'date_desc';
              this.get_product('refresh', null);
              return;
            }

            console.log('choose kategori argument:', val);

            if (typeof val == 'object') {
              // hasil = val.detail.value;
              hasil = val;
              this.cat_filter_array.push(val);
              console.log('filter category stack', this.cat_filter_array);

              if (hasil.children && hasil.children.length > 0) {
                console.log('show subcategory action sheet');
                this.presentActionSheet(hasil.children, dept + 1);
              } else {
                console.log('req product with filter category');
                this.selected_category = hasil.link;
                this.selected_sub_category = '';
                this.get_product('refresh', null);
              }
            } else {
              console.log('has no children, request product with category filter'); // this.selected_category = hasil.link;

              this.selected_category = '';
              this.selected_sub_category = '';
              this.get_product('refresh', null);
            } // console.log(hasil, this.selected_category, 'hasil')

          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            console.log('view wenter');
            this.userdata.getUsername().then(function (hsl) {
              console.log(hsl, 'Get Data User : ');

              if (hsl == null) {// this.router.navigateByUrl('login');
              } else {
                _this4.data_user = hsl;

                _this4.get_total_keranjang();
              }
            });
            this.get_data_slider();
          }
        }, {
          key: "get_data_slider",
          value: function get_data_slider() {
            var _this5 = this;

            // this.loading = this.loadingctrl.create({
            //   message: 'Please wait...'
            // });
            this.http.get(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'api_welcome').subscribe(function (hsl) {
              var hasil = {};
              hasil = hsl;
              _this5.data_slider = hasil.slider;
            }); // this.loading.dismiss();
          }
        }, {
          key: "get_total_keranjang",
          value: function get_total_keranjang() {
            var _this6 = this;

            this.servcart.get_keranjang(this.data_user.id_pel).then(function (hasil) {
              console.log(hasil, 'keranjang');
              var hsl = {};
              hsl = hasil;
              _this6.total_keranjang = hsl.total_qty;
            });
          }
        }, {
          key: "insert_cart",
          value: function insert_cart(id_pro, i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingctrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context2.sent;
                      _context2.next = 5;
                      return this.loading.present();

                    case 5:
                      this.servcart.save_keranjang(id_pro, this.data_user.id_pel, 0, 1).then(function (hasil) {
                        _this7.loading.dismiss();

                        var hasil2 = {};
                        hasil2 = hasil;
                        console.log(hasil2, 'HASIL');

                        if (hasil2.code == 1) {
                          _this7.util.showToast('Berhasil Menambahkan Ke Keranjang', 'success', 'bottom'); // this.consta.show_alert('', '', hasil2.msg);


                          _this7.ionViewWillEnter; // this.combroadcast.broadcast('broadcast_keranjang', '');
                        }
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "show_alert",
          value: function show_alert(title, sub_title, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertctrl.create({
                        header: title != '' ? title : 'Pemberitahuan',
                        subHeader: sub_title != '' ? sub_title : '',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      this.alertfun = _context3.sent;
                      this.alertfun.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "goto_checkout",
          value: function goto_checkout() {
            this.router.navigateByUrl('checkout');
          }
          /*
            async insert_cart(id_pro, id_pel, id_varian, qty_pro) {
              this.loading = await this.loadingctrl.create({
                message: 'Please wait...'
              });
              await this.loading.present();
                this.servcart.save_keranjang(id_pro, this.data_user.id_pel, 0, 1).then(hasil => {
                  this.loading.dismiss();
                    let hasil2: any = {};
                    hasil2 = hasil;
                    console.log(hasil2, 'HASIL')
                      
                      if (hasil2.code == 1) {
                        this.show_alert('', '', hasil2.msg);
                        this.get_total_keranjang();
                      }
                })
            }
          */

        }, {
          key: "goto_detail",
          value: function goto_detail(id) {
            this.router.navigateByUrl('/tabs/detailprodukk/' + id);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.get_product('refresh', event);
          }
        }, {
          key: "search_product",
          value: function search_product($event) {
            console.log('Data Product : ', this.queryText.length);
            this.get_product('refresh', '');
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            this.get_product('loadmore', event);
          }
          /*
            profile(){
              this.router.navigate(['./profile']);
            }
          */

        }, {
          key: "profile",
          value: function profile() {
            var userid = localStorage.getItem('userid');
            console.log('useridyyy', userid);

            if (userid && userid != null && userid != 'null') {
              this.router.navigate(['./profile']);
            } else {
              this.router.navigate(['./login']);
            }
          }
        }, {
          key: "kosong",
          value: function kosong() {
            var userid = localStorage.getItem('userid');
            console.log('useridzzz', userid);

            if (userid && userid != null && userid != 'null') {
              // this.menu.enable(true, 'first');
              this.menu.open();
            } else {
              this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
              this.router.navigate(['./login']);
            } // this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');

          }
        }, {
          key: "login",
          value: function login() {
            this.router.navigate(['./login']);
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
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
          type: _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"]
        }, {
          type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"]
        }];
      };

      Tab1Page.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"]]
        }]
      };
      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map