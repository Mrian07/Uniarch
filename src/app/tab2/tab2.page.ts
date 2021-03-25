import { Component, OnInit, ViewChild } from '@angular/core';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonSlides } from '@ionic/angular';
// import { ProductFilterPage } from '../../product-filter/product-filter.page';
import { Router } from '@angular/router';
import { DataCartService } from '../services/data-cart.service';
// import { NgxCommunicateService } from 'ngx-communicate';
import { UserData } from '../providers/user-data';
// import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  list_product: any = [];
  arr: any = {};
  queryText: String = '';
  min_price: any;
  max_price: any;
  selected_category: any;
  selected_sub_category: any;
  order: any;
  loading: any;
  total_keranjang: any;
  alertfun: any;
  data_user: any = {};
  data_slider: any;
  hide_header: string = 'shown';
  status_pembayaran: any = '';
  status_order: any = '';

  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public router: Router,
    public navCtrl: NavController,
    public servcart: DataCartService,
    public loadingctrl: LoadingController,
    public alertctrl: AlertController,
    private userdata: UserData
  ) {

  }

  ngOnInit() {
    // console.log('init riwayat order.......');
  }
  ionViewWillEnter() {
    const userid = localStorage.getItem('userid');
    console.log('userid', userid);
    console.log('riwayat order will enter');
    this.userdata.getUsername().then( hsl => {
      console.log(hsl, 'hasil');
      if(hsl==null){
        this.router.navigateByUrl('login');
      }else{
        this.data_user=hsl;
        this.get_total_keranjang();
        this.get_product('refresh', '');
      }
    }); 
    // const userid = localStorage.getItem('userid');
    // console.log('userid', userid);
    // this.get_total_keranjang();
    // this.get_product('refresh', '');
  }
  pilih_pembayaran($event) {
    this.status_pembayaran = $event.target.value;
    console.log(this.status_pembayaran, 'status_pembayaran')
    this.get_product('refresh', null);
  }
  pilih_status($event) {
    this.status_order = $event.target.value;
    console.log(this.status_order, 'status_pembayaran')
    this.get_product('refresh', null);
  }
  get_total_keranjang() {
    this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
      console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
  }
  // async presentFilter() {
  //   const modal = await this.modalCtrl.create({
  //     component: ProductFilterPage,
  //     componentProps: { 
  //       selected_category : this.selected_category,
  //       selected_sub_category : this.selected_sub_category,
  //       min_price : this.min_price,
  //       max_price : this.max_price,
  //       order : this.order,        
  //      }
  //   });
  //   await modal.present();
  //   const { data } = await modal.onWillDismiss();
  //   console.log(data, 'data from modal')
  //   if (data != null) {
  //     this.selected_category = data.selected_category;
  //     this.selected_sub_category = data.selected_sub_category;
  //     this.min_price = data.min_price;
  //     this.max_price = data.max_price;
  //     this.order = data.order;
  //     this.get_product('refresh', '');
  //   }
  // }
  goto_detail(id) {
    this.router.navigateByUrl('/detailtransaksi/' + id);
  }
  konfirmasi(id) {
    this.router.navigateByUrl('/konfirmasi/' + id);
  }
  goto_checkout() {
    this.router.navigateByUrl('checkout');
  }
  doRefresh(event) {
    this.get_product('refresh', event);
  }
  loadData(event) {
    console.log('load more? ', this.list_product);
    if (this.list_product.length == 0) {
      event.target.complete();
      return;
    }
    this.get_product('loadmore', event);
  }
  search_product($event) {
    console.log(this.queryText.length);
    this.get_product('refresh', '');
  }
  get_product(type, event) {
    console.log('get riwayat order.......', type, event);
    console.log('ID_PEL', this.data_user.id_pel)
    if (type == 'refresh')
      this.list_product = [];
    this.http.post(API_URL_SLIDER + 'api_get_riwayat_order', {
      offset: this.list_product.length,
      type: type,
      cari: this.queryText,
      selected_category: this.selected_category,
      selected_sub_category: this.selected_sub_category,
      min_price: this.min_price,
      max_price: this.max_price,
      order: this.order,
      id_pel: this.data_user.id_pel,
      status_pembayaran: this.status_pembayaran,
      status_order: this.status_order
    })
      .pipe(map((data: any) => {
        console.log(data, 'map')
        return data.data;
      }))
      .subscribe(hasil => {
        this.arr = hasil;
        if (type == 'refresh') {
          this.list_product = this.arr;
          if (event)
            event.target.complete();
        } else {
          this.arr.forEach(element => {
            this.list_product.push(element);
          });
          if (event)
            event.target.complete();

        }
        console.log(this.list_product, 'PRODUCT');
      });
  }

}
