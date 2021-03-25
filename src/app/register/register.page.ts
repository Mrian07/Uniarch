import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../providers/user-data';
import { UserOptions } from '../interfaces/user-options';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonCheckbox, IonSelect } from '@ionic/angular';
import { ConstantService } from '../providers/constant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  signup: UserOptions = { 
    nama : '', 
    password: '', 
    email : '', 
    provinsi : '',
    kota:'',
    kecamatan:'',
    alamat:'',
    jk_pel : '', 
    confirm_password : '',
    no_telp : '',
    username : '',   
  };
  referral : any;
  submitted = false;
  data_provinsi : any = [];
  data_kota : any = [];
  data_kecamatan : any = [];
  loading: any;
  error_konfirmasi : any = false;
  constructor(
    public router: Router,
    public userData: UserData,
    public loadingctrl: LoadingController,
    private consta: ConstantService,

  ) {}
  ionViewWillEnter() {
    this.signup = { 
      nama : '', 
      password: '', 
      email : '', 
      provinsi : '',
      kota:'',
      kecamatan:'',
      alamat:'',
      jk_pel : '', 
      confirm_password : '',
      no_telp : '',
      username : '',   
    };       
    this.error_konfirmasi = false;
    this.get_data_provinsi();
  }
  async pilih_provinsi($event){
    console.log($event.target.value, 'pilih provinsi')
    this.loading = await this.loadingctrl.create({
      message: 'Silahkan tunggu....'
    });
    this.loading.present();
    this.userData.get_data_kota($event.target.value.provinsi).then( hsl => {
      let hasil : any = {};
      hasil = hsl;
      this.data_kota = hasil.data;
      console.log(this.data_provinsi)
      this.loading.dismiss();
    })    
  }
  async pilih_kota($event){
    this.loading = await this.loadingctrl.create({
      message: 'Silahkan tunggu....'
    });
    this.loading.present();
    this.userData.get_data_kecamatan($event.target.value.kota).then( hsl => {
      let hasil : any = {};
      hasil = hsl;
      this.data_kecamatan = hasil.data;
      this.loading.dismiss();
    })    
  }  
  get_data_provinsi(){
    this.userData.get_data_provinsi().then( hsl => {
      let hasil : any = {};
      hasil = hsl;
      this.data_provinsi = hasil.data;
      console.log(this.data_provinsi)
    })
  }
  async onSignup(form: NgForm) {
    this.submitted = true;
    console.log(this.signup, 'signup')
    let nama_pel = this.signup.nama;
    let email_pel = this.signup.email;
    let pass_pel = this.signup.password;
    let kon_pass = this.signup.confirm_password;
    let no_telp_pel = this.signup.no_telp;
    if(pass_pel!=kon_pass){
      this.error_konfirmasi = true;
      return;
    }
    let prov : any = {};
    let kot : any = {};
    let kec : any = {};
    prov = this.signup.provinsi;
    kot = this.signup.kota;
    kec = this.signup.kecamatan;
    let provinsi = prov.provinsi;
    let kota = kot.kota;
    let kecamatan = kec.kecamatan;
    let alamat_pel = this.signup.alamat;
    let jk_pel =  this.signup.jk_pel;
    if (form.valid) {
      this.loading = await this.loadingctrl.create({
        message: 'Silahkan tunggu....'
      });
      
      this.loading.present();
      this.userData.get_referral().then( val => {
        this.userData.submit_pendaftaran(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, val)
        .then( hsl => {
          let hasil : any = {};
          hasil = hsl;        
          this.loading.dismiss();
          if(hasil.code==1){
            this.consta.show_alert('Sukses', '', hasil.msg).then( hsl => {
              if( hsl ){
                // form.reset();
           
                this.router.navigateByUrl('login');
              }
            })
          }else{
            this.consta.show_alert('Maaf', '', hasil.msg);
          }
        })        
      });
      // this.userData.signup(this.signup.username);

      // this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

}
