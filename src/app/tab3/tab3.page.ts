import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonCheckbox } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataCartService } from '../services/data-cart.service';
import { ConstantService } from '../providers/constant.service';
import { UserData } from '../providers/user-data';
import { UtilService } from '../services/util/util.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data_keranjang: any;
  list_detail: any = [];
  loading: any;
  input_qty: any = [];
  harga_pro_real: any = [];
  sub_total_real: any = [];
  total_real: any = 0;
  checkall : any = false;
  data_user: any = {};
  total_keranjang: any;

  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public router: Router,
    public navCtrl: NavController,
    public servcart: DataCartService,
    public loadingctrl: LoadingController,
    public alertctrl: AlertController,
    private consta: ConstantService,
    public changeref : ChangeDetectorRef,
    private userdata: UserData,
    private util: UtilService,

  ) {
  }

  ionViewWillEnter() {
    console.log('view wenter')
    this.checkall=false;
    this.userdata.getUsername().then( hsl => {
      console.log(hsl, 'hasil');
      if(hsl==null){
        this.router.navigateByUrl('login');
      }else{
        this.data_user=hsl;
        this.get_data_keranjang();
        this.get_total_keranjang();
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

  async get_data_keranjang() {
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.servcart.get_keranjang(this.data_user.id_pel).then(data => {

      let hsl: any = {};
      hsl = data;

      this.data_keranjang = hsl;
      let x: any = 0;

      hsl.detail.forEach(el => {
        hsl.detail[x].val = el.nama_pro;
        hsl.detail[x].isChecked = false;
        x++;
      })
      
      this.list_detail = hsl.detail;
      //this.data_varian = hsl.detail;

      console.log(this.list_detail, 'list detail');

      this.loading.dismiss();
      this.total_real = hsl.total_real;

      console.log(this.changeref.detectChanges(), 'change detect');
      console.log(this.total_real, 'DATA KERANJANG')

    }).catch(err => {

      console.log(err)

      this.loading.dismiss();
      this.consta.show_alert('Oops', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');

    }).finally(() => {

      this.loading.dismiss();

    });
  }
  
  check_user(){

  }

  set_var(i) {
    console.log(i);
  }

  ngOnInit() {
  }

  pilih_item($event) {
    let hsl = $event.target.value;
    console.log(hsl);
  }

  calculate_total() {
    this.total_real = 0;
    this.list_detail.forEach(element => {
      this.total_real += element.sub_total_real;
    });
    console.log(this.total_real, 'total real')
  }

  add_minus(index) {
    if (this.list_detail[index].qty_pro == 1) {
      // this.sub_total_real[index] = this.input_qty[index] * this.harga_pro_real[index];
      // this.list_detail[index].input_qty++;
      this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
      this.calculate_total();
      return false;
    } else {
      // this.input_qty[index]--;
      // this.sub_total_real[index] = this.input_qty[index] * this.harga_pro_real[index];
      this.list_detail[index].qty_pro--;
      this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
      this.calculate_total();

    }
  }

async pilih_varian(index) {

  console.log(this.list_detail[index].qty_pro);
  console.log(this.list_detail[index].varianx.harga_varian);

  this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
  this.calculate_total();

  }

  async hapus_keranjang(){
    let count : any = 0;
    let i : any = 0;
    this.list_detail.forEach( el => {
      if(this.list_detail[i].isChecked == true){
        count++;
      }
      i++;
    })
    if(count == 0 ){
      this.consta.show_alert('Error', '', 'Mohon Pilih Produk Terlebih Dahulu');
    }else{
      this.loading = await this.loadingctrl.create({
        message: 'Please wait...'
      });
      this.loading.present();      
      this.servcart.hapus_keranjang(this.data_user.id_pel, this.list_detail).then((data)=>{
        this.loading.dismiss();
        let hsl : any = {};
        hsl = data;
        // this.consta.show_alert('Success', '', hsl.msg);
        this.util.showToast('Berhasil Menghapus Produk', 'success', 'bottom');
        this.get_data_keranjang();
        // this.combroadcast.broadcast('broadcast_keranjang', '');
      })
      .catch((err)=>{
        this.loading.dismiss();
        this.consta.show_alert('Error', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
      })
    }
  }

  check_all(){
    console.log(this.checkall, 'checkall')
    let flag : any;
    if(this.checkall==false){
      flag=true;
    }else{
      flag=false;
    }
    let i : any  = 0;
    this.list_detail.forEach( el => {
      this.list_detail[i].isChecked = flag;
      i++;
    })
  }

  async update_keranjang() {
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });
    this.loading.present();
    this.servcart.update_keranjang(this.data_user.id_pel, this.list_detail).then((data) => {
      console.log(data, 'data');
      this.loading.dismiss();
      let hsl : any = {};
      hsl = data;
      this.consta.show_alert('Success', '', hsl.msg);
    })
    .catch((err)=>{
      this.loading.dismiss();
      this.consta.show_alert('Error', '', 'Terjadi kesalahan periksa koneksi anda, jika masih berlanjut silahkan hubungi tim support kami');
    })
    ;
  }

  add_plus(index) {
    this.list_detail[index].qty_pro++;
    this.list_detail[index].sub_total_real = this.list_detail[index].qty_pro * this.list_detail[index].varianx.harga_varian;
    this.calculate_total();
  }

  ke_pengiriman(){
    let count : any = 0;
    let i : any = 0;
    this.list_detail.forEach( el => {
      if(this.list_detail[i].isChecked == true){
        count++;
      }
      i++;
    })
    if  (count == 0 ){
      this.consta.show_alert('Oops', '', 'Mohon Pilih Produk Terlebih Dahulu');
    }else{    
      this.router.navigateByUrl('checkout');
    }
  }

}
