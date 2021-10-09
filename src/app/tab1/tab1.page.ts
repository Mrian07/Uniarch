import { Component, OnInit, ViewChild } from '@angular/core';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonSlides, ActionSheetController, Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataCartService } from '../services/data-cart.service';
import { UserData } from '../providers/user-data';
import { ConstantService } from '../providers/constant.service';
import { ScrollDetail } from '@ionic/core';
import { UtilService } from '../services/util/util.service';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
}) 
export class Tab1Page {

  @ViewChild(IonSlides) slides: IonSlides;
  url = IMAGE_URL_PRODUCT;
  list_product: any = [];
  arr: any = {};
  queryText: String = '';
  min_price: any;
  max_price: any;
  selected_category: any;
  selected_sub_category: any;
  order: any = 'date_desc';
  loading: any;
  total_keranjang: any;
  alertfun: any;
  data_user: any = {};
  data_slider: any;
  hide_header: string = 'shown';
  head_kategori: any = 0;
  choose_harga: any = 0;
  choose_penjualan: any = 0;
  choose_terbaru: any = 0;
  product_category: any;
  actionSheet: any;
  cat_filter_array = [];

  valid: any;
  fractionSize
  akses: any = [];

  hsl:any;

  constructor(
    public platform: Platform,
    public http: HttpClient,
    public modalCtrl: ModalController,
    public router: Router,
    public navCtrl: NavController,
    public servcart: DataCartService,
    public loadingctrl: LoadingController,
    public alertctrl: AlertController,
    private userdata: UserData,
    public constant: ConstantService,
    public actionSheetController: ActionSheetController,
    private util: UtilService,
    public menu: MenuController,
    private fcm: FCM,

  ) 

  {
    this.akses = JSON.parse(localStorage.getItem('akses')) || [];
    //console.log('useridsss', this.akses);
    this.get_product('refresh', '');
    this.get_product_category();
  }

  showToolbar = false;
  coloricon = false;
  onScroll($event: CustomEvent<ScrollDetail>) {
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
    
    if ( userid !== null ) {
      this.valid = 'ada';
      //console.log('ADA');
    } else {
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
    })
    //console.log('kategori',this.product_category);
  }

  get_product(type, event) {
    // this.loading = this.loadingctrl.create({
    //   message: 'Please wait...'
    // });
    if (type == 'refresh') {
      this.list_product = [];
    }
    this.http.post(API_URL_SLIDER + 'get_product', {
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
      .pipe(map((data: any) => {
        //console.log(data, 'map')
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

  async presentActionSheet(item, dept) {
    let data: any = [];
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
      })
    }
    // console.log(data, 'DATA ITEM')
    this.actionSheet = await this.actionSheetController.create({
      header: 'Sub Kategori',
      buttons: data
    });
    await this.actionSheet.present();
  }

  choose_kate(val) {
    this.head_kategori = val;
    if (val == 1) {
      if (this.choose_harga == 0) {
        this.choose_harga = 1;
        // this.order = 'terendah_ke_termahal';
        this.order = 'price_asc';
      } else {
        this.choose_harga = 0;
        // this.order = 'termahal_ke_terendah';
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

  choose_kategori(val, dept) {
    console.log('choose kategory', val, dept);
    let hasil: any = {}
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
    console.log('view wenter')
    this.userdata.getUsername().then(hsl => {

      console.log(hsl, 'Get Data User : ');

      if (hsl == null) {
        // this.router.navigateByUrl('login');
      } else {
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
    this.http.get(API_URL_SLIDER + 'api_welcome').subscribe(hsl => {
      let hasil: any = {};
      hasil = hsl;
      this.data_slider = hasil.slider;
    })
    // this.loading.dismiss();
  }

  get_total_keranjang() {
    this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
      console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
  }

  async insert_cart(id_pro, i: number){
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.servcart.save_keranjang(id_pro, this.data_user.id_pel, 0, 1).then( hasil => {
      this.loading.dismiss();
      let hasil2 : any = {};
      hasil2=hasil;
      console.log(hasil2, 'HASIL')
      if(hasil2.code==1){
        this.util.showToast('Berhasil Menambahkan Ke Keranjang', 'success', 'bottom');
        // this.consta.show_alert('', '', hasil2.msg);
        this.ionViewWillEnter;
        // this.combroadcast.broadcast('broadcast_keranjang', '');
        
      }
    })
  }  

  async show_alert(title, sub_title, message) {
    this.alertfun = await this.alertctrl.create({
      header: title != '' ? title : 'Pemberitahuan',
      subHeader: sub_title != '' ? sub_title : '',
      message: message,
      buttons: ['OK']
    });
    this.alertfun.present();
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
    } else {
      this.router.navigate(['./login']);
    }
  }

  kosong() {
    const userid = localStorage.getItem('userid');
    
    console.log('useridzzz', userid);

    if (userid && userid != null && userid != 'null') {
      // this.menu.enable(true, 'first');
      this.menu.open();
    } else {
      this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
      this.router.navigate(['./login']);
    }
    // this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
  }

  login() {
    this.router.navigate(['./login']);
  }

  /*
    cart() {
      this.router.navigate(['./tabs/tab3']);
    }

    login() {
      this.router.navigate(['./login']);
    }

  */
}
