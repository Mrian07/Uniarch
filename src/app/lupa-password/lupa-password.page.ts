import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../providers/user-data';
import { UserOptions } from '../interfaces/user-options';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonCheckbox, IonSelect } from '@ionic/angular';
import { ConstantService, API_URL } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lupa-password',
  templateUrl: './lupa-password.page.html',
  styleUrls: ['./lupa-password.page.scss'],
})
export class LupaPasswordPage implements OnInit {

  signup: any = { 
    kode_unik : '',
    email : '', 
  };
  referral : any;
  submitted = false;
  data_provinsi : any = [];
  data_kota : any = [];
  data_kecamatan : any = [];
  loading: any;
  error_konfirmasi : any = false;
  kode_uniknya : any;
  constructor(
    public router: Router,
    public userData: UserData,
    public loadingctrl: LoadingController,
    private consta: ConstantService,
    private http: HttpClient,

  ) {}
  ionViewWillEnter() {
    this.signup = { 
      kode_unik : '',
      email : '', 
    };
    this.error_konfirmasi = false;

  }
  ngOnInit(){

  }
  async kirim_kode(){
    if(this.signup.email==''){
      this.consta.show_alert('Error', '', 'Silahkan isi email terlebih dulu');
      return false;
    }
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });
    this.loading.present();
    this.http.post(API_URL + 'api_kirim_kode_lupa_password', {email_pel : this.signup.email })
    .subscribe( hsl =>{
      let hasil : any = {};
      hasil = hsl;
      this.loading.dismiss();
      if(hasil.code==1){
        this.consta.show_alert('Selamat', '', hasil.msg).then(()=>{

        })
      }else{
        this.consta.show_alert('Maaf', '', hasil.msg).then(()=>{

        })        
      }
    })
  }
  async reset_password(){
    if(this.signup.kode_unik==''){
      this.consta.show_alert('Error', '', 'Silahkan isi kode unik terlebih dulu');
      return false;
    }
    this.loading = await this.loadingctrl.create({
      message: 'Please wait...'
    });
    this.loading.present();
    this.http.post(API_URL + 'api_reset_pass', {kode_unik : this.signup.kode_unik })
    .subscribe( hsl =>{
      let hasil : any = {};
      hasil = hsl;
      this.loading.dismiss();
      if(hasil.code==1){
        this.consta.show_alert('Selamat', '', hasil.msg).then(()=>{

        })
      }else{
        this.consta.show_alert('Maaf', '', hasil.msg).then(()=>{

        })        
      }
    })
  }
}
