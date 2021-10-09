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
@Component({
  selector: 'app-detailtransaksi',
  templateUrl: './detailtransaksi.page.html',
  styleUrls: ['./detailtransaksi.page.scss'],
})
export class DetailtransaksiPage implements OnInit {

  data_product_detail : any = {}; 
  nama_pro : any;
  id_pro : any;
  cover_style:any;
  total_keranjang: any;
  input_qty: any = 1;
  harga_jual_pro:any;
  stok_pro:any;
  loading:any;
  cover:any;
  data_user: any = {};
  arr : any = {};
  data_order : any = {};
  detail_order : any = [];
  nomor_rekening:any = {};
  kontak:any = { telp : '', email : ''};
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
    private userdata: UserData
  ) {

   }

  ngOnInit() {
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
        this.get_product_detail();
        this.get_total_keranjang();
      }
    });
  } 
  konfirmasi(id){
    this.router.navigateByUrl('/konfirmasi/' + id );
  }
  get_total_keranjang(){
    this.servcart.get_keranjang(60).then( hasil => {
      console.log(hasil, 'keranjang')
      let hsl : any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
  }
  goto_checkout(){
    this.router.navigateByUrl('checkout');
  }
  open_wa(phone:string):void {
    window.open('https://api.whatsapp.com/send?phone='+phone, '_system');
  }
  get_product_detail(){
    this.http.post(API_URL_SLIDER + 'api_detail_order', {
      id_order: this.id_pro
    })
      .pipe(map((data: any) => {
        console.log(data, 'map')
        return data.data;
      }))
      .subscribe(hsl => {
        let hasil : any = {};
        hasil = hsl;
        this.arr = hasil.invoice;
        this.nomor_rekening = hasil.rekening[0];
        console.log(this.kontak, this.nomor_rekening, 'REKENING')
        this.data_order = hasil.invoice.order[0];
        this.detail_order = hasil.invoice.detail_order;
      });
  }

}
