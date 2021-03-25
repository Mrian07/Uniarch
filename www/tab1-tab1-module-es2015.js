(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar [class.show-background]=\"showToolbar\">\r\n    <!-- <ion-buttons slot=\"start\" class=\"warna\" *ngIf=\"valid == 'ada'\">\r\n      <ion-menu-button [class.change-color]=\"coloricon\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-buttons slot=\"start\" class=\"warna\" (click)=\"kosong()\">\r\n      <ion-icon name=\"menu-outline\" [class.change-color]=\"coloricon\" style=\"font-size: 28px;margin: 10px;\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">\r\n      <img src=\"assets/imgs/logo.png\" style=\"width: 100%;\">\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"warna\" (click)=\"profile()\">\r\n      <ion-icon name=\"person-circle-outline\" [class.change-color]=\"coloricon\" style=\"font-size: 28px;margin: 10px;\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" style=\"--background: var(--ion-color-bg);\">\r\n\r\n  <ion-refresher slot=\"fixed\" disabled=\"false\" (ionRefresh)=\"doRefresh($event)\" pullFactor=\"0.5\" pullMin=\"100\"\r\n    pullMax=\"200\">\r\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"banner\" *ngIf=\"data_slider\">\r\n    <ion-slides #IonSlides autoplay=\"3000\" loop=\"true\" pager=\"true\">\r\n      <ion-slide *ngFor=\"let prod of data_slider\">\r\n        <img src=\"{{prod.gambar_slider}}\" class=\"crop_img\" style=\"border-radius: 20px;padding: 10px;\" />\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div> \r\n\r\n  <ion-row *ngIf=\"!data_slider\">\r\n    <div class=\"custom-skeleton\" style=\"width: 100%;\">\r\n      <ion-row class=\"marginbtm\">\r\n        <ion-col size=\"12\">\r\n          <ion-skeleton-text animated=\"true\"\r\n            style=\"width: 100%;height: 167px;--background-rgb: var(--ion-color-light-rgb);\"></ion-skeleton-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-row>\r\n  \r\n\r\n  <div class=\"container\">\r\n    <ion-row style=\"padding:0px 10px\">\r\n      <!-- <ion-card style=\"margin: 15px 0px;padding: 0px;border-radius: 30px;\">\r\n        <ion-item lines=\"none\"> -->\r\n          <ion-searchbar [(ngModel)]=\"queryText\" (search)=\"search_product($event)\" placeholder=\"Cari Produk\"></ion-searchbar>\r\n          <!-- <ion-input type=\"text\" placeholder=\"Pencarian\" name=\"cari\">\r\n          </ion-input>\r\n          <ion-buttons slot=\"end\" style=\"background: #3e8098;color: #fff;border-radius: 100%;\">\r\n            <ion-icon src=\"/assets/icon/search-outline.svg\" style=\"font-size: 28px;margin: 6px;\">\r\n            </ion-icon>\r\n          </ion-buttons> -->\r\n        <!-- </ion-item>\r\n      </ion-card> -->\r\n    </ion-row>\r\n\r\n    <div class=\"card_header d-flex\" >\r\n      <div class=\"text_box\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <h5 style=\"margin: 0px;\"><b>Kategori</b></h5>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"6\" style=\"text-align: end;\">\r\n          <h6 style=\"margin: 0px;\">Lihat Semua</h6>\r\n        </ion-col> -->\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-card style=\"box-shadow: none;\">\r\n      <div class=\"scroll_container\">\r\n        <div class=\"item_scroll\">\r\n          <div class=\"img_box center_img\">\r\n            <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 100%;background: var(--ion-color-primary);\r\n            text-align: center;\" (click)=\"choose_kategori('semua',0)\">\r\n              <h5 style=\"margin-top: 20px;font-size: 16px;\">\r\n                <b style=\"color: #fff;\" class=\"wrap-text-dua\">Terbaru</b>\r\n              </h5>\r\n            </ion-card>\r\n          </div>\r\n        </div>\r\n        <div class=\"item_scroll\" *ngFor=\"let item of product_category\">\r\n          <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 100%;background: var(--ion-color-primary);\r\n            text-align: center;\" (click)=\"choose_kategori(item, 1)\">\r\n            <h5 style=\"margin-top: 20px;font-size: 16px;\">\r\n              <b style=\"color: #fff;\" class=\"wrap-text-dua\">{{item.label}}</b>\r\n            </h5>\r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n\r\n    <div class=\"card_header d-flex\">\r\n      <div class=\"text_box\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <h5 style=\"margin: 0px;\"><b>Semua Produk</b></h5>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-row style=\"padding: 10px 0px 10px 10px;\">\r\n\r\n      <ion-col size=\"12\" *ngIf=\"!list_product\" style=\"text-align: center;\"> \r\n        <ion-spinner name=\"circles\"></ion-spinner>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngFor=\"let data of list_product; let i = index;\" style=\"padding: 0px 10px 10px 0px;\" >\r\n        \r\n\r\n        <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 274px;background: #fff;\">\r\n         \r\n          <span *ngIf=\"data.disc_pro != '0'\"\r\n            style=\"text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;position: absolute;justify-content: right;margin-top: 8px;font-size: 12px;right: 7px;top: 0px;\">\r\n            {{data.disc_pro}}% OFF\r\n          </span>\r\n\r\n          <img src=\"{{url}}normal-{{data.nama_gbr_pro}}\" onerror=\"this.src = '/assets/img/no_image.png'\" alt=\"Foto\"\r\n            style=\"height: 150px;object-fit: cover;width: 100%;\" (click)=\"goto_detail(data.id_pro)\">\r\n\r\n          <h6 style=\"margin: 10px;text-align: left;margin-top: 7px;margin-bottom: 5px;font-weight: 500;\" class=\"wrap-text\" (click)=\"goto_detail(data.id_pro)\">\r\n            {{data.nama_pro}}\r\n          </h6>\r\n\r\n          <div *ngIf=\"hsl !== null\"> \r\n            \r\n            <div *ngIf=\"data_user.status_pel == 1\">\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | number :\r\n                  fractionSize}}</b>\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_jual_pro | number : fractionSize}}\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_jual_pro | number : fractionSize}}</b>\r\n              </h6>\r\n            </div>\r\n\r\n            <div *ngIf=\"data_user.status_pel == 2\">\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | number :\r\n                  fractionSize}}</b>\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_reseller | number : fractionSize}}\r\n              </h6>\r\n\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_reseller | number : fractionSize}}</b>\r\n              </h6>\r\n            </div>\r\n\r\n            <div *ngIf=\"data_user.status_pel == 0\">\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\r\n              </h6>\r\n             \r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_user | number : fractionSize}}\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\r\n              </h6>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"hsl === null\">\r\n            <div>\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_user | number : fractionSize}}\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\r\n              </h6>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <ion-row>\r\n            \r\n            <ion-col size=\"8\">\r\n              <h6 style=\"margin: 0px 0px 5px 5px;text-align: left;font-size: 11px;\" class=\"wrap-text-auto\">\r\n                {{data.kode_pro}}</h6>\r\n              <span\r\n                style=\"margin:7px;text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;font-size: 12px;\">\r\n                {{data.stok_pro}} Pcs\r\n              </span>\r\n            </ion-col>\r\n            \r\n            <ion-col size=\"4\">\r\n              <ion-buttons (click)=\"insert_cart(data.id_pro, i)\"\r\n                style=\"background:var(--ion-color-primary);color: #fff;border-radius: 100%;padding: 10px;width: fit-content;\">\r\n                <ion-icon name=\"cart\" style=\"font-size: 22px;\"></ion-icon>\r\n              </ion-buttons>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n\r\n        </ion-card>\r\n\r\n\r\n        <!--\r\n        <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 274px;background: #fff;\" *ngIf=\"valid === ada\">\r\n          <span *ngIf=\"data.disc_pro != '0'\"\r\n            style=\"text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;position: absolute;justify-content: right;margin-top: 8px;font-size: 12px;right: 7px;top: 0px;\">\r\n            {{data.disc_pro}}% OFF</span>\r\n\r\n          <img src=\"{{url}}normal-{{data.nama_gbr_pro}}\" onerror=\"this.src = '/assets/img/no_image.png'\" alt=\"Foto\"\r\n            style=\"height: 150px;object-fit: cover;width: 100%;\" (click)=\"goto_detail(data.id_pro)\">\r\n          Login\r\n          <h6 style=\"margin: 10px;text-align: left;margin-top: 7px;margin-bottom: 5px;font-weight: 500;\"\r\n            *ngIf=\"data.set_harga_pro == '1'\" class=\"wrap-text\" (click)=\"goto_detail(data.id_pro)\">\r\n            {{data.nama_pro}}\r\n          </h6>\r\n\r\n          <div *ngIf=\"hsl !== null\"> \r\n            <div *ngIf=\"data_user.status_pel == 1\">\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | number :\r\n                  fractionSize}}</b>\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_jual_pro | number : fractionSize}}\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_jual_pro | number : fractionSize}}</b>\r\n              </h6>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"data_user.status_pel == 2\">\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | number :\r\n                  fractionSize}}</b>\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_reseller | number : fractionSize}}\r\n              </h6>\r\n\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_reseller | number : fractionSize}}</b>\r\n              </h6>\r\n\r\n            </div>\r\n\r\n            <div *ngIf=\"data_user.status_pel == 0\">\r\n\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\r\n              </h6>\r\n             \r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_user | number : fractionSize}}\r\n              </h6>\r\n              \r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\r\n              </h6>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"hsl === null\">\r\n            <div>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | number : fractionSize}}</b>\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_user | number : fractionSize}}\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | number : fractionSize}}</b>\r\n              </h6>\r\n            </div>\r\n          </div>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"8\">\r\n              <h6 style=\"margin: 0px 0px 5px 5px;text-align: left;font-size: 11px;\" class=\"wrap-text-auto\">\r\n                {{data.kode_pro}}</h6>\r\n              <span\r\n                style=\"margin:7px;text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;font-size: 12px;\">\r\n                {{data.stok_pro}} Pcs\r\n              </span>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-buttons (click)=\"insert_cart(data.id_pro, i)\"\r\n                style=\"background:var(--ion-color-primary);color: #fff;border-radius: 100%;padding: 10px;width: fit-content;\">\r\n                <ion-icon name=\"cart\" style=\"font-size: 22px;\"></ion-icon>\r\n              </ion-buttons>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"width: 100%;border-radius: 10px;margin-top: 0px;height: 274px;background: #fff;\" *ngIf=\"valid === gaada\">\r\n          \r\n          <span *ngIf=\"data.disc_pro != '0'\" style=\"text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;position: absolute;justify-content: right;margin-top: 8px;font-size: 12px;right: 7px;top: 0px;\">\r\n            {{data.disc_pro}}% OFF\r\n          </span>\r\n\r\n          <img src=\"{{url}}normal-{{data.nama_gbr_pro}}\" onerror=\"this.src = '/assets/img/no_image.png'\" alt=\"Foto\"\r\n            style=\"height: 150px;object-fit: cover;width: 100%;\" (click)=\"login()\">\r\n            belom login\r\n\r\n            <h6 style=\"margin: 10px;text-align: left;margin-top: 7px;margin-bottom: 5px;font-weight: 500;\"\r\n            *ngIf=\"data.set_harga_pro == '1'\" class=\"wrap-text\" (click)=\"login()\">\r\n            {{data.nama_pro}}</h6>\r\n\r\n          <div *ngIf=\"hsl !== null\"> \r\n            <div *ngIf=\"data_user.status_pel == 1\">\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n            </div>\r\n            <div *ngIf=\"data_user.status_pel == 2\">\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n            </div>\r\n            <div *ngIf=\"data_user.status_pel == 0\">\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"hsl == null\">\r\n            <div>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <ion-icon name=\"pricetag\" style=\"color: var(--ion-color-primary);\"></ion-icon>\r\n                <b class=\"warnatextdua\">Rp.\r\n                  {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro != '0'\"\r\n                style=\"margin: 5px 15px 0px 10px;;text-align: left;text-decoration: line-through;font-size: 11px;\">\r\n                Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}\r\n              </h6>\r\n              <h6 *ngIf=\"data.disc_pro == '0'\" style=\"margin: 0px 15px 0px 10px; text-align: left;\"\r\n                class=\"warnatextdua\">\r\n                <b class=\"warnatextdua\">Rp. {{data.harga_user | currency : 'IDR' : 'Rp.'}}</b>\r\n              </h6>\r\n            </div>\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size=\"8\">\r\n              <h6 style=\"margin: 0px 0px 5px 5px;text-align: left;font-size: 11px;\" class=\"wrap-text-auto\">\r\n                {{data.kode_pro}}</h6>\r\n              <span\r\n                style=\"margin:7px;text-align: right;background:var(--ion-color-primary);color: #fff;padding: 2px 7px;border-radius: 49px;font-size: 12px;\">\r\n                {{data.stok_pro}} Pcs\r\n              </span>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-buttons (click)=\"insert_cart(data.id_pro, i)\"\r\n                style=\"background:var(--ion-color-primary);color: #fff;border-radius: 100%;padding: 10px;width: fit-content;\">\r\n                <ion-icon name=\"cart\" style=\"font-size: 22px;\"></ion-icon>\r\n              </ion-buttons>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        -->\r\n\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let data of list_product; let i = index;\" size=\"12\">\r\n        <ion-button clear class=\"btn_cart\" (click)=\"insert_cart(data.id_pro)\">\r\n          <span class=\"fa fa-shopping-cart\" id=\"icon_cart\"></span>\r\n        </ion-button>\r\n        <div class=\"col_product\" (click)=\"goto_detail(data.id_pro)\">\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <div class=\"div_img\">\r\n                <img (click)=\"viewDetails(product.id)\" class=\"product-image\" src=\"{{url}}normal-{{data.nama_gbr_pro}}\"\r\n                  onerror=\"this.src = '/assets/img/no_image.png'\">\r\n              </div>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"data_user.status_pel==1\">\r\n              <div class=\"content_product\">\r\n                <div class=\"product_code \">{{data.nama_pro}}</div>\r\n                <div class=\"product_name\">{{data.kode_pro}}</div>\r\n              </div>\r\n              <ion-row>\r\n                <ion-col class=\"padding_0 \" style=\"display: flex;\">\r\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro > 0\">\r\n                    {{ ( data.harga_jual_pro - ( data.harga_jual_pro * data.disc_pro ) / 100 ) | currency : 'IDR' :\r\n                    'Rp.' }}\r\n                  </div>\r\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro == 0\">\r\n                    {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}\r\n                  </div>\r\n                  <div class=\"product_disc font_12\" *ngIf=\"data.disc_pro > 0\">{{data.disc_pro}}% OFF</div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col class=\"padding_0 font_12\">\r\n                  <div class=\"harga_potongan\" *ngIf=\"data.disc_pro > 0\" style=\"padding-top:5px;\">\r\n                    {{data.harga_jual_pro | currency : 'IDR' : 'Rp.'}}\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"data_user.status_pel==2\">\r\n              <div class=\"content_product\">\r\n                <div class=\"product_code \">{{data.nama_pro}}</div>\r\n                <div class=\"product_name\">{{data.kode_pro}}</div>\r\n              </div>\r\n              <ion-row>\r\n                <ion-col class=\"padding_0 \" style=\"display: flex;\">\r\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro > 0\">\r\n                    {{ ( data.harga_reseller - ( data.harga_reseller * data.disc_pro ) / 100 ) | currency : 'IDR' :\r\n                    'Rp.' }}\r\n                  </div>\r\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro == 0\">\r\n                    {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}\r\n                  </div>\r\n                  <div class=\"product_disc font_12\" *ngIf=\"data.disc_pro > 0\">{{data.disc_pro}}% OFF</div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col class=\"padding_0 font_12\">\r\n                  <div class=\"harga_potongan\" *ngIf=\"data.disc_pro > 0\" style=\"padding-top:5px;\">\r\n                    {{data.harga_reseller | currency : 'IDR' : 'Rp.'}}\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"data_user.status_pel==0\">\r\n              <div class=\"content_product\">\r\n                <div class=\"product_code \">{{data.nama_pro}}</div>\r\n                <div class=\"product_name\">{{data.kode_pro}}</div>\r\n              </div>\r\n              <ion-row>\r\n                <ion-col class=\"padding_0 \" style=\"display: flex;\">\r\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro > 0\">\r\n                    {{ ( data.harga_user - ( data.harga_user * data.disc_pro ) / 100 ) | currency : 'IDR' : 'Rp.' }}\r\n                  </div>\r\n                  <div class=\"product_price\" *ngIf=\"data.disc_pro == 0\">\r\n                    {{data.harga_user | currency : 'IDR' : 'Rp.'}}\r\n                  </div>\r\n                  <div class=\"product_disc font_12\" *ngIf=\"data.disc_pro > 0\">{{data.disc_pro}}% OFF</div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col class=\"padding_0 font_12\">\r\n                  <div class=\"harga_potongan\" *ngIf=\"data.disc_pro > 0\" style=\"padding-top:5px;\">\r\n                    {{data.harga_user | currency : 'IDR' : 'Rp.'}}\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n    <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"circles\" loadingText=\"Memuat Produk...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:9px;z-index: 999;\" edge > \r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\r\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\r\n    <ion-fab-button>\r\n        <img src=\"assets/imgs/bag.png\">\r\n    </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #0572ad;\n  --ion-color-base: transparent !important;\n}\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-primary);\n  transition: all 0.2s;\n}\n\n.header-md::after {\n  background-image: none;\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0;\n}\n\n.sc-ion-buttons-md-s .button {\n  --color:#222;\n}\n\n.change-color {\n  color: #fff !important;\n}\n\n.warna {\n  color: #222;\n}\n\n.banner ion-slides ion-slide .img_box {\n  width: 95%;\n  height: 190px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.container {\n  padding: 0px 10px;\n}\n\nion-card {\n  background: var(--bg-color);\n  margin: 0;\n  width: 100%;\n  box-shadow: none;\n  border-radius: 0;\n  padding-bottom: 10px;\n  margin-bottom: 1px;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header {\n  padding: 13px 13px 18px 13px;\n  width: 100%;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .card_header h4 {\n  background: var(--bg-secondary);\n  width: 35px;\n  min-width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 50%;\n  color: var(--primary);\n  font-size: 1rem;\n  margin: 0;\n  margin-right: 13px;\n  font-weight: 400;\n}\n\nion-card .card_header .text_box {\n  width: 100%;\n}\n\nion-card .card_header .text_box h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  margin: 0;\n  padding-bottom: 2px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n\nion-card .card_header .text_box h3 {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin: 0;\n}\n\nion-card .card_header .text_box h3 span {\n  display: flex;\n  align-items: center;\n}\n\nion-card .card_header .text_box h3 span ion-icon {\n  color: var(--white);\n  font-size: 1.2rem;\n  min-width: 15px;\n}\n\nion-card .scroll_container {\n  white-space: nowrap;\n  overflow: hidden;\n  overflow-x: auto;\n}\n\nion-card .scroll_container .item_scroll {\n  display: inline-block;\n  width: 130px;\n  height: 60px;\n  border-radius: 15px;\n  margin: 10px 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\nion-card .scroll_container .item_scroll:first-child {\n  margin-left: 13px;\n}\n\nion-card .scroll_container .item_scroll:last-child {\n  margin-right: 13px;\n}\n\nion-card .scroll_container .item_scroll .img_box {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n}\n\nion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0E7RUFDSSxxQkFBQTtFQUNBLHdDQUFBO0FBckNKOztBQXVDQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQXBDSjs7QUFzQ0E7RUFDSSxzQkFBQTtBQW5DSjs7QUFxQ0E7RUFDSSxpQkFBQTtBQWxDSjs7QUFxQ0E7RUFDSSxZQUFBO0FBbENKOztBQW9DQTtFQUNJLHNCQUFBO0FBakNKOztBQW1DQTtFQUNJLFdBQUE7QUFoQ0o7O0FBc0NZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBbkNoQjs7QUF5Q0E7RUFFSSxpQkFBQTtBQXZDSjs7QUEwQ0E7RUFDSSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnSEFBQTtBQXZDSjs7QUEwQ0k7RUFDSSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnSEFBQTtBQXhDUjs7QUEwQ1E7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXhDWjs7QUEyQ1E7RUFDSSxXQUFBO0FBekNaOztBQTJDWTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQXpDaEI7O0FBNENZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQTFDaEI7O0FBNENnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQTFDcEI7O0FBNENvQjtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBMUN4Qjs7QUFpREk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEvQ1I7O0FBaURRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0hBQUE7QUEvQ1o7O0FBaURZO0VBQ0ksaUJBQUE7QUEvQ2hCOztBQWtEWTtFQUNJLGtCQUFBO0FBaERoQjs7QUFtRFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBakRoQjs7QUF3REE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdERKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHJcbi8vICAgICBpb24tdGl0bGUge1xyXG4vLyAgICAgICAgIC50aXRsZV9pbm5lciB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJjo6YmVmb3JlIHtcclxuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICB0b3A6IC0xMDAlO1xyXG4vLyAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IzQyODk5NDtcclxuLy8gICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYuc2hvdy1iYWNrZ3JvdW5kIHtcclxuLy8gICAgICAgICAmOjpiZWZvcmUge1xyXG4vLyAgICAgICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9IFxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDU3MmFkO1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uc2hvdy1iYWNrZ3JvdW5kIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9ue1xyXG4gICAgLS1jb2xvcjojMjIyO1xyXG59XHJcbi5jaGFuZ2UtY29sb3Ige1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi53YXJuYXtcclxuICAgIGNvbG9yOiMyMjI7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gICAgaW9uLXNsaWRlcyB7XHJcbiAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgLmltZ19ib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuXHJcbiAgICAuY2FyZF9oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTNweCAxOHB4IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0X2JveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGxfY29udGFpbmVyIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgICAgICAgLml0ZW1fc2Nyb2xsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1nX2JveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3MGIwYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHRvcDogLTlweDtcclxuICAgIC8vIGxlZnQ6IDE4cHg7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/constant.service */ "./src/app/providers/constant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _services_util_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/util/util.service */ "./src/app/services/util/util.service.ts");











let Tab1Page = class Tab1Page {
    constructor(platform, http, modalCtrl, router, navCtrl, servcart, loadingctrl, alertctrl, userdata, constant, actionSheetController, util, menu) {
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
        this.akses = JSON.parse(localStorage.getItem('akses')) || [];
        //console.log('useridsss', this.akses);
        this.get_product('refresh', '');
        this.get_product_category();
    }
    onScroll($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 225;
            this.coloricon = scrollTop >= 225;
        }
    }
    ionViewDidEnter() {
        this.loading = this.loadingctrl.create({
            message: 'Please wait...'
        });
        this.loading.present();
        const userid = localStorage.getItem('userid');
        //console.log('TAB useridxxx', userid);
        if (userid !== null) {
            this.valid = 'ada';
            //console.log('ADA');
        }
        else {
            this.valid = 'gaada';
            //console.log('TIDAK ADA');
        }
        //console.log('Valid nya ', this.valid);
        this.slides.startAutoplay();
        this.loading.dismiss();
    }
    get_product_category() {
        this.constant.get_product_category().subscribe(data => {
            //console.log('PRO CATEGORY :', data)
            this.product_category = data;
        });
        //console.log('kategori',this.product_category);
    }
    get_product(type, event) {
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
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            //console.log(data, 'map')
            return data.data;
        }))
            .subscribe(hasil => {
            this.arr = hasil;
            if (type == 'refresh') {
                this.list_product = this.arr;
                if (event)
                    event.target.complete();
            }
            else {
                this.arr.forEach(element => {
                    this.list_product.push(element);
                });
                if (event)
                    event.target.complete();
            }
            console.log('PRODUCT : ', this.list_product);
            // this.loading.dismiss();
        });
    }
    choose_subcategory(val) {
        console.log(val);
        this.selected_category = '';
        this.selected_sub_category = val.link;
        this.get_product('refresh', null);
    }
    presentActionSheet(item, dept) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = [];
            for (let i = 0; i < item.length; i++) {
                data.push({
                    text: item[i].label,
                    cssClass: 'cat-has-children',
                    // icon: 'arrow-dropright-circle',
                    handler: () => {
                        console.log('subcategory selected, show possible has children');
                        // this.choose_subcategory(item[i])
                        // this.choose_kategori({detail:{value:item[i]}});
                        this.choose_kategori(item[i], dept);
                    }
                }, {
                    text: 'Batal',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                });
            }
            // console.log(data, 'DATA ITEM')
            this.actionSheet = yield this.actionSheetController.create({
                header: 'Sub Kategori',
                buttons: data
            });
            yield this.actionSheet.present();
        });
    }
    choose_kate(val) {
        this.head_kategori = val;
        if (val == 1) {
            if (this.choose_harga == 0) {
                this.choose_harga = 1;
                // this.order = 'terendah_ke_termahal';
                this.order = 'price_asc';
            }
            else {
                this.choose_harga = 0;
                // this.order = 'termahal_ke_terendah';
                this.order = 'price_desc';
            }
        }
        else if (val == 2) {
            if (this.choose_penjualan == 0) {
                this.choose_penjualan = 1;
                this.order = 'sale_asc';
            }
            else {
                this.choose_penjualan = 0;
                this.order = 'sale_desc';
            }
        }
        else if (val == 3) {
            if (this.choose_terbaru == 0) {
                this.choose_terbaru = 1;
                this.order = 'date_asc';
            }
            else {
                this.choose_terbaru = 0;
                this.order = 'date_desc';
            }
        }
        else if (val == 0) {
            this.choose_harga = 0;
            this.choose_terbaru = 0;
            this.order = '';
            this.choose_penjualan = 0;
        }
        this.get_product('refresh', null);
    }
    choose_kategori(val, dept) {
        console.log('choose kategory', val, dept);
        let hasil = {};
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
            }
            else {
                console.log('req product with filter category');
                this.selected_category = hasil.link;
                this.selected_sub_category = '';
                this.get_product('refresh', null);
            }
        }
        else {
            console.log('has no children, request product with category filter');
            // this.selected_category = hasil.link;
            this.selected_category = '';
            this.selected_sub_category = '';
            this.get_product('refresh', null);
        }
        // console.log(hasil, this.selected_category, 'hasil')
    }
    ionViewWillEnter() {
        console.log('view wenter');
        this.userdata.getUsername().then(hsl => {
            console.log(hsl, 'Get Data User : ');
            if (hsl == null) {
                // this.router.navigateByUrl('login');
            }
            else {
                this.data_user = hsl;
                this.get_total_keranjang();
            }
        });
        this.get_data_slider();
    }
    get_data_slider() {
        // this.loading = this.loadingctrl.create({
        //   message: 'Please wait...'
        // });
        this.http.get(_providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["API_URL_SLIDER"] + 'api_welcome').subscribe(hsl => {
            let hasil = {};
            hasil = hsl;
            this.data_slider = hasil.slider;
        });
        // this.loading.dismiss();
    }
    get_total_keranjang() {
        this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
            console.log(hasil, 'keranjang');
            let hsl = {};
            hsl = hasil;
            this.total_keranjang = hsl.total_qty;
        });
    }
    insert_cart(id_pro, i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingctrl.create({
                message: 'Please wait...'
            });
            yield this.loading.present();
            this.servcart.save_keranjang(id_pro, this.data_user.id_pel, 0, 1).then(hasil => {
                this.loading.dismiss();
                let hasil2 = {};
                hasil2 = hasil;
                console.log(hasil2, 'HASIL');
                if (hasil2.code == 1) {
                    this.util.showToast('Berhasil Menambahkan Ke Keranjang', 'success', 'bottom');
                    // this.consta.show_alert('', '', hasil2.msg);
                    this.ionViewWillEnter;
                    // this.combroadcast.broadcast('broadcast_keranjang', '');
                }
            });
        });
    }
    show_alert(title, sub_title, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alertfun = yield this.alertctrl.create({
                header: title != '' ? title : 'Pemberitahuan',
                subHeader: sub_title != '' ? sub_title : '',
                message: message,
                buttons: ['OK']
            });
            this.alertfun.present();
        });
    }
    goto_checkout() {
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
    goto_detail(id) {
        this.router.navigateByUrl('/tabs/detailprodukk/' + id);
    }
    doRefresh(event) {
        this.get_product('refresh', event);
    }
    search_product($event) {
        console.log('Data Product : ', this.queryText.length);
        this.get_product('refresh', '');
    }
    loadData(event) {
        this.get_product('loadmore', event);
    }
    /*
      profile(){
        this.router.navigate(['./profile']);
      }
    */
    profile() {
        const userid = localStorage.getItem('userid');
        console.log('useridyyy', userid);
        if (userid && userid != null && userid != 'null') {
            this.router.navigate(['./profile']);
        }
        else {
            this.router.navigate(['./login']);
        }
    }
    kosong() {
        const userid = localStorage.getItem('userid');
        console.log('useridzzz', userid);
        if (userid && userid != null && userid != 'null') {
            // this.menu.enable(true, 'first');
            this.menu.open();
        }
        else {
            this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
            this.router.navigate(['./login']);
        }
        // this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
    }
    login() {
        this.router.navigate(['./login']);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_7__["DataCartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"] },
    { type: _providers_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _services_util_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
Tab1Page.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"],] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map