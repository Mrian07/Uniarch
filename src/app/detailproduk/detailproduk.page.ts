import { Component, OnInit } from '@angular/core';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DataCartService } from '../services/data-cart.service';
import { ProductService } from '../services/product.service';
import { ConstantService } from '../providers/constant.service';
import { UserData } from '../providers/user-data';
import { UtilService } from '../services/util/util.service';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-detailproduk',
  templateUrl: './detailproduk.page.html',
  styleUrls: ['./detailproduk.page.scss'],
})
export class DetailprodukPage implements OnInit {

  data_product_detail : any = {}; 
  nama_pro : any;
  id_pro : any;
  cover_style:any;
  total_keranjang: any;
  input_qty: any = 1;
  harga_jual_pro:any;
  harga_jual_pro2=0;
  harga_jual_reseller=0;
  harga_user=0;
  stok_pro:any;
  loading:any;
  cover:any;
  data_user: any = {};
  desc_pro : any;
  disc_pro = 0;
  status_pel=0;
  wa: any = {};

  faqExpand1: boolean;
  faqExpand2: boolean;
  faqExpand3: boolean;
  faqExpand4: boolean;
  faqExpand5: boolean;
  faqExpand6: boolean;
  faqExpand7: boolean;

  nomor_rekening:any = {};
  kontak:any = { telp : '', email : '', wa: ''};
  whatsapp: any;
  akses: any = [];
  kontakk

  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public router: Router,
    public navCtrl: NavController,
    public servcart : DataCartService,
    public loadingctrl : LoadingController,
    public alertctrl: AlertController,
    public product_service : ProductService,
    private route: ActivatedRoute,
    private consta: ConstantService,
    private userdata: UserData,
    private util: UtilService,
  ) {
    // this.combroadcast.on('broadcast_keranjang', (data : any )=>{
    //     this.get_total_keranjang();
    // })
    this.akses = JSON.parse(localStorage.getItem('akses')) || [];
    console.log('userid', this.akses);
   }

  ngOnInit() {
    // this.id_pro = this.route.snapshot.paramMap.get('id');
    // this.get_product_detail();
    // this.get_total_keranjang();
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
 
  ionViewWillEnter() {
    console.log('view wenter')
    this.userdata.getUsername().then( hsl => {
      console.log(hsl, 'hasil');
      if(hsl==null){
        this.router.navigateByUrl('login');
      }else{
        this.data_user=hsl;
        this.id_pro = this.route.snapshot.paramMap.get('id');
        this.status_pel = hsl['status_pel'];
        // this.status_pel = 0;
        this.get_product_detail();
        this.get_total_keranjang();
        this.get_kontak();
      }
    });
  } 
  get_total_keranjang() {
    this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
      console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    });
  }
  goto_checkout(){
    const userid = localStorage.getItem('userid');
    console.log('userid', userid);
    if (userid && userid != null && userid != 'null') {
      this.router.navigate(['tabs/tab3']);
    } else {
      this.router.navigate(['./login']);
    }
    // this.router.navigateByUrl('tabs/tab3');
  }
  add_minus(){
    if(this.input_qty==1){
      return false;
    }else{
      this.input_qty--;
    }
  }
  add_plus(){
    this.input_qty++;
  }
  get_product_detail(){
    console.log('idproduk',this.id_pro)
      this.product_service.get_product_detail(this.id_pro).then(hsl => {
        this.data_product_detail = hsl;
        this.nama_pro= this.data_product_detail.produk[0].nama_pro;
        
        this.harga_jual_pro= this.data_product_detail.produk[0].harga_jual_pro;
        this.harga_jual_pro2 = this.data_product_detail.produk[0].harga_jual_pro2;
        this.harga_jual_reseller = this.data_product_detail.produk[0].harga_reseller;
        this.harga_user = this.data_product_detail.produk[0].harga_user;
        this.disc_pro= this.data_product_detail.produk[0].disc_pro;
        
        this.stok_pro= this.data_product_detail.produk[0].stok_pro;
        // console.log(this.nama_pro);
        this.desc_pro = this.data_product_detail.produk[0].desc_pro;
        this.cover=this.data_product_detail.cover;
        this.cover_style = { 'background-image' : 'url("'+this.data_product_detail.cover+'")'};
        console.log(this.status_pel);
        //debugger;
      })
  }
  async insert_cart(){
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.servcart.save_keranjang(this.id_pro, this.data_user.id_pel, 0, this.input_qty).then( hasil => {
      this.loading.dismiss();
      let hasil2 : any = {};
      hasil2=hasil;
      console.log(hasil2, 'HASIL')
      if(hasil2.code==1){
        this.util.showToast('Berhasil Menambahkan Ke Keranjang', 'success', 'bottom');
        // this.consta.show_alert('', '', hasil2.msg);
        this.ionViewWillEnter;
        this.get_total_keranjang();
        // this.combroadcast.broadcast('broadcast_keranjang', '');
        
      }
    })
  }  

  get_kontak(){
    this.http.post(API_URL_SLIDER + 'api_kontak', {
    })
      .pipe(map((data: any) => {
        console.log(data, 'KONTAK')
        return data.data;
      }))
      .subscribe(hsl => {
        let hasil : any = {};
        hasil = hsl;
        const konta = hasil;
        console.log('HASIL', konta.kontak);
        const kontaak = konta.kontak[2].link_kontak;
        console.log('WAA', kontaak);
        this.kontakk = kontaak;
        this.nomor_rekening = hasil.rekening[0].link_kontak;
        this.kontak.telp = hasil.kontak[0].isi_kontak;
        this.kontak.email = hasil.kontak[1].isi_kontak;
        this.whatsapp = hasil.kontak[2].link_kontak;
      });
      // console.log('A', kontaak);
      console.log('WA', this.kontakk);
      console.log('TELP', this.kontak.telp);
      console.log('EMAIL', this.kontak.email);
      
  }
  // open_wa(phone:string) {
  //   console.log('wa',phone);
  //   window.open('https://api.whatsapp.com/send?phone='+phone, '_system');
  // }
  open_wa(phone:string) {
    const wa = phone;
    console.log('wa',wa);
    window.open('https://api.whatsapp.com/send?phone='+wa, '_system');
  }

  reset() {
    this.faqExpand1 = false;
    this.faqExpand2 = false;
    this.faqExpand3 = false;
  }
  faqExpandToggle1() {
    this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }

  faqExpandToggle2() {
    this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }

  faqExpandToggle3() {
    this.reset();
    this.faqExpand3 = !this.faqExpand3;
  }

}
