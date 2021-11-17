import { Component, OnInit, ViewChild } from '@angular/core';
import { API_URL, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonSlides, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataCartService } from '../services/data-cart.service';
import { UserData } from '../providers/user-data';
import { ConstantService } from '../providers/constant.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  data_user : any;
  loading : any;
  total_keranjang: any;
  data_wallet : any = [];
  total_widthdraw : any;
  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public router: Router,
    public navCtrl: NavController,
    public servcart : DataCartService,
    public loadingctrl : LoadingController,
    public alertctrl: AlertController,
    private userdata: UserData,
    public constant: ConstantService,
    public actionSheetController: ActionSheetController    
  ) { }

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
        this.get_data_wallet();
        this.get_total_keranjang();
      }
    });
  }
  get_total_keranjang(){
    this.servcart.get_keranjang(this.data_user.id_pel).then( hasil => {
      console.log(hasil, 'keranjang')
      let hsl : any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
}  
  goto_checkout(){
    this.router.navigateByUrl('checkout');
  }
  async save(){
    if(this.data_wallet.saldo==null || this.data_wallet.saldo==0){
      this.constant.show_alert('Error', '', 'Saldo anda tidak cukup');
      return;
    }
    if(this.data_wallet.saldo < this.total_widthdraw){
      this.constant.show_alert('Error', '', 'Total widthdraw melebihi saldo yang tersedia');
      return;
    }
    this.loading = await this.loadingctrl.create({
      message: 'Silahkan tunggu....'
    });
    this.loading.present();
    this.http.post(API_URL + 'api_widthdraw', {id_pel : this.data_user.id_pel, total : this.total_widthdraw }).subscribe((hsl)=>{
      this.loading.dismiss();
      let hasil : any = {};
      hasil = hsl;
      if(hasil.code==1){
        this.constant.show_alert('Sukses', '', hasil.msg).then(hsl=>{
          this.router.navigateByUrl('/product');
        });
      }else{
        this.constant.show_alert('Error', '', hasil.msg).then(hsl=>{
        });
      }
    })    
  }
  async get_data_wallet(){
    this.loading = await this.loadingctrl.create({
      message: 'Silahkan tunggu....'
    });
    this.loading.present();
    this.http.post(API_URL + 'api_wallet', {id_pel : this.data_user.id_pel }).subscribe((hsl)=>{
      this.loading.dismiss();
      let hasil : any = {};
      hasil = hsl;
      this.data_wallet = hasil.data;
      console.log(hsl, 'HASIL')
    })
  }

}
