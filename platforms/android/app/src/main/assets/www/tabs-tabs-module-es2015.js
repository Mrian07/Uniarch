(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" class=\"my-custom-tab-bar\">\n    <ion-tab-button tab=\"tab1\" style=\"background: #f3f3f3;\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\" *ngIf=\"valid == 'ada'\" style=\"background: #f3f3f3;border-top-right-radius: 18px;\"> \n      <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"login()\" *ngIf=\"valid != 'ada'\" style=\"background: #f3f3f3;border-top-right-radius: 18px;\">\n      <ion-icon name=\"swap-horizontal-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\" *ngIf=\"valid == 'ada'\" style=\"background: transparent;--padding-start:0px;--padding-end:0px;\">\n      <svg tab=\"tab3\" height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#f3f3f3\" fill-rule=\"evenodd\"></path></svg>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"login()\" *ngIf=\"valid != 'ada'\" style=\"background: transparent;--padding-start:0px;--padding-end:0px;\">\n      <svg tab=\"tab3\" height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#f3f3f3\" fill-rule=\"evenodd\"></path></svg>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\" style=\"background: #f3f3f3;border-top-left-radius: 18px;\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button (click)=\"login()\" *ngIf=\"valid !== 'ada'\">\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\n    </ion-tab-button> -->\n\n    <ion-tab-button tab=\"tab5\" style=\"background: #f3f3f3;\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button (click)=\"login()\" *ngIf=\"valid !== 'ada'\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-tab-button> -->\n\n  </ion-tab-bar>\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" style=\"bottom:20px;\" edge > \n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang > 0 \">{{total_keranjang}}</ion-badge>\n    <ion-badge class=\"badge_icon\" color=\"danger\" *ngIf=\"total_keranjang == 0 \">0</ion-badge>\n    <ion-fab-button (click)=\"tab3()\" *ngIf=\"valid == 'ada'\">\n        <img src=\"assets/imgs/bag.png\">\n    </ion-fab-button>\n    <ion-fab-button (click)=\"login()\" *ngIf=\"valid !== 'ada'\">\n      <img src=\"assets/imgs/bag.png\">\n  </ion-fab-button>\n</ion-fab> -->\n\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => Promise.all(/*! import() | tab4-tab4-module */[__webpack_require__.e("default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~3f784061"), __webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null, /*! ../tab4/tab4.module */ "./src/app/tab4/tab4.module.ts")).then(m => m.Tab4PageModule)
            },
            {
                path: 'tab5',
                loadChildren: () => Promise.all(/*! import() | tab5-tab5-module */[__webpack_require__.e("default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~3f784061"), __webpack_require__.e("common"), __webpack_require__.e("tab5-tab5-module")]).then(__webpack_require__.bind(null, /*! ../tab5/tab5.module */ "./src/app/tab5/tab5.module.ts")).then(m => m.Tab5PageModule)
            },
            {
                path: 'detailprodukk/:id',
                loadChildren: () => Promise.all(/*! import() | detailproduk-detailproduk-module */[__webpack_require__.e("default~checkout-checkout-module~detailproduk-detailproduk-module~detailtransaksi-detailtransaksi-mo~3f784061"), __webpack_require__.e("common"), __webpack_require__.e("detailproduk-detailproduk-module")]).then(__webpack_require__.bind(null, /*! ../detailproduk/detailproduk.module */ "./src/app/detailproduk/detailproduk.module.ts")).then(m => m.DetailprodukPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-badge {\n  position: absolute;\n  background: #f70b0b;\n  border-radius: 50%;\n  opacity: 0.9;\n  top: -9px;\n  right: 17px;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  z-index: 9;\n}\n\nion-tab-bar.my-custom-tab-bar {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  --background: transparent;\n  border-top: none;\n}\n\nion-tab-bar.my-custom-tab-bar svg {\n  width: 72px;\n  margin-top: 19px;\n}\n\nion-tab-bar.my-custom-tab-bar svg path {\n  fill: #f3f3f3;\n}\n\nion-tab-bar.my-custom-tab-bar .button-native {\n  padding: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBRVQsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFEZDs7QUFJQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUFhO0VBQ2IsZ0JBQWdCO0FBRHBCOztBQUpBO0VBUVEsV0FBVztFQUNYLGdCQUFnQjtBQUF4Qjs7QUFUQTtFQVdZLGFBQWM7QUFFMUI7O0FBYkE7RUFtQlEsWUFBWTtBQUZwQiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmNzBiMGI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0b3A6IC05cHg7XG4gICAgLy8gbGVmdDogMThweDtcbiAgICByaWdodDogMTdweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbmlvbi10YWItYmFyLm15LWN1c3RvbS10YWItYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgIHN2ZyB7ICAgIFxuICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTlweDtcbiAgICAgICAgcGF0aHtcbiAgICAgICAgICAgIGZpbGw6ICAjZjNmM2YzO1xuICAgICAgICB9XHRcdFxuICAgIH1cbiAgXG4gICAgLy8gaW9uLXRhYi1idXR0b24ge1xuICAgIC8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAvLyB9XG4gICAgLmJ1dHRvbi1uYXRpdmUge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-cart.service */ "./src/app/services/data-cart.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/user-data */ "./src/app/providers/user-data.ts");






let TabsPage = class TabsPage {
    constructor(route, loadingCtrl, servcart, userdata) {
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.servcart = servcart;
        this.userdata = userdata;
        this.data_user = {};
        // this.get_total_keranjang();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.loadingCtrl.create();
            (yield loader).present();
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
            this.userdata.getUsername().then(hsl => {
                //console.log('hasilxx : ',hsl);
                if (hsl == null) {
                    // this.router.navigateByUrl('login');
                }
                else {
                    this.data_user = hsl;
                    this.get_total_keranjang();
                }
            });
            (yield loader).dismiss();
        });
    }
    //   get_total_keranjang(){
    //     this.servcart.get_keranjang(this.data_user.id_pel).then( hasil => {
    //       console.log(hasil, 'Total keranjang Cart')
    //       let hsl : any = {};
    //       this.hsl = hasil;
    //       this.count = this.hsl.total_qty;
    //       console.log(this.hsl , 'TOTAL CART')
    //       console.log(this.count , 'TOTAL CART2')
    //     })
    // }
    get_total_keranjang() {
        this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
            //console.log(hasil, 'keranjang')
            let hsl = {};
            hsl = hasil;
            this.total_keranjang = hsl.total_qty;
        });
    }
    tab3() {
        this.route.navigate(['./tabs/tab3']);
    }
    login() {
        this.route.navigate(['./login']);
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _services_data_cart_service__WEBPACK_IMPORTED_MODULE_4__["DataCartService"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map