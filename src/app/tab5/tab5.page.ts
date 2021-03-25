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

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

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
  valid:any;

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

   }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.kontak = { telp : '', email : ''};
    this.userdata.getUsername().then( hsl => {
      console.log(hsl, 'hasil');
        this.data_user=hsl;
        this.get_product_detail();
        this.get_total_keranjang();
    });
    const userid = localStorage.getItem('userid');
    console.log('TAB userid', userid);
    if (userid && userid != null && userid != 'null') {
      this.valid = 'ada';
    } else {
      this.valid = 'gaada';
    }
  } 

  
  konfirmasi(id){
    this.router.navigateByUrl('/konfirmasi/' + id );
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
    this.router.navigateByUrl('checkout');
  }
  open_wa(phone:string):void {
    window.open('https://api.whatsapp.com/send?phone='+phone, '_system');
  }
  get_product_detail(){
    this.http.post(API_URL_SLIDER + 'api_kontak', {
    })
      .pipe(map((data: any) => {
        console.log(data, 'map')
        return data.data;
      }))
      .subscribe(hsl => {
        let hasil : any = {};
        hasil = hsl;
        this.nomor_rekening = hasil.rekening[0];
        this.kontak.telp = hasil.kontak[0].isi_kontak;
        this.kontak.email = hasil.kontak[1].isi_kontak;
        this.kontak.wa = hasil.kontak[2].isi_kontak;
        console.log(this.kontak.email);
      });
  }

  kosong(){
    this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
  }

}
