import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../providers/user-data';
import { UserOptions } from '../interfaces/user-options';
import {
  ToastController,
  Platform,
  LoadingController,
  ActionSheetController, 
  AlertController
} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { NgxXml2jsonService } from 'ngx-xml2json';
// import { NgxCommunicateService } from 'ngx-communicate';
import { API_URL } from '../providers/constant.service';
import { UtilService } from '../services/util/util.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  // isSubmitted = false;
  // baseUrl: any = '';
  // email: any;
  // password: any;
  // nama: any;
  isLogin: boolean = false;
  // info : any = {};
  login : UserOptions = { 
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
    username: '',   
  };  
  actionSheet : any;
  submitted = false;
  loading : any;
  alert1 : any;
  hasil : any = {};
  info : any = {};

  constructor(
    public platform : Platform,
    public userData: UserData,
    public router: Router,
    public loadingCtrl: LoadingController,
    public http2: HttpClient,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private util: UtilService,
  ) 

  {
    // this.baseUrl = environment.restURL.baseUrl;
    // this.email = '';
    // this.password = '';
  }

  ngOnInit() {
  }

  async alert(header, sub, msg){
    this.alert1 = await this.alertController.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['OK']
    });  
    await this.alert1.present();  
  }

  ionViewDidEnter() {
    // this.platform.backButton.subscribe(hsl=>{
    //   this.keluar_aplikasi();
    // })
  }

  // async keluar_aplikasi() {
  //   this.actionSheet = await this.actionSheetController.create({
  //     header : 'Apakah anda yakin ingin keluar aplikasi ? ',
  //     buttons : [
  //       {
  //         text : 'Ya',
  //         handler : () => {
  //           navigator['app'].exitApp();
  //         }
  //       },
  //       {
  //         text : 'Tidak',
  //         role: 'cancel',
  //         handler : () =>{
            
  //         }
  //       }
  //     ]
  //   });
  //   await this.actionSheet.present();
  // }  

  async onLogin() {
    console.log('login')
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.submitted = true;
    // if (form.valid) {
      if (this.login.username == '') {
        this.util.showWarningAlert('Email Wajib Diisi');
        return false;
      }
      if (this.login.password == '') {
        this.util.showWarningAlert('Password Wajib Diisi');
        return false;
      } else {
      this.isLogin = true;
      await this.loading.present(); 
      this.http2.post(API_URL + 'api_login', { email : this.login.username, password : this.login.password }, {} )
      .subscribe(( data ) => {
        console.log({email : this.login.username, password : this.login.password})
        console.log(data);
        this.isLogin = false; 
        this.hasil = data;
        this.info = data;
        if(this.hasil.code==1){
          
          console.log('INFO DATA', this.info);
          console.log('id_pel', this.info.id_pel);

          var logindata = JSON.parse(localStorage.getItem('akses')) || [];
          logindata.push(this.info);

          localStorage.setItem('akses', JSON.stringify(logindata));
          localStorage.setItem('userid', this.info.id_pel);
          
          //this.oneSignal.sendTag('id_pel', this.hasil.id_pel);

          this.userData.login(this.hasil).then(hasl => { 

            this.loading.dismiss();

            // this.communicate.broadcast('login_success', 'login_success');

            this.util.showToast('Berhasil Login', 'success', 'bottom');

            // this.router.navigateByUrl('');
            this.router.navigateByUrl('/tabs/tab1');

            //this.router.navigate(['/tabs/tab1'])
              //.then(() => {
                //window.location.reload();
            //});

          });
        }else{ 
          this.loading.dismiss();
          this.util.showToast(this.hasil.msg, 'danger', 'bottom');
        }
      })    
    }

  }

  async loadConfrim(param){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Notifikasi',
      message: param+',<p></p>',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, 
        // {
        //   text: 'Yes',
        //   handler: () => {
        //     let url = 'https://api.whatsapp.com/send?phone=+6281292926955';   
        //     window.open(url, '_system','location=yes');
        //   }
        // }
      ]
    });

    await alert.present();
  }

  lupa_password(){
    this.router.navigateByUrl('/lupa-password');
  }

  back(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  
  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  daftar() {
    this.router.navigateByUrl('/register');
  }

  goWa(){
    
  }

  // ngOnInit() {
  // }

  // login() {
  //   if (this.email == '') {
  //     this.util.showWarningAlert('Email Wajib Diisi');
  //     return false;
  //   }
  //   if (this.password == '') {
  //     this.util.showWarningAlert('Password Wajib Diisi');
  //     return false;
  //   } else {
  //     this.isLogin = true;
  //     const headers = { 'Content-Type': 'application/json' };
  //     const param = {
  //      email: this.email,
  //      password: this.password
  //     };
  //     this.http2.post(this.baseUrl + 'api_login', {email : this.email, password : this.password} , {})
  //     .subscribe(( data ) => {
  //       console.log(data); 
  //       this.isLogin = false;
  //       console.log('form', param);
  //       this.info = data;
  //       console.log('info', this.info);
  //       if (this.info && this.info.status == 'berhasil') {
  //         console.log('INFO DATA', this.info);
  //         console.log('id_pel', this.info.id_pel);
  //         var logindata = JSON.parse(localStorage.getItem('akses')) || [];
  //        logindata.push(this.info);
  //        localStorage.setItem('akses', JSON.stringify(logindata));
  //         localStorage.setItem('userid', this.info.id_pel);
  //         this.util.showToast(`${this.info.msg}`, 'success', 'bottom');
  //         this.navCtrl.pop();
  //       } else {
  //         this.util.showToast(`${this.info.msg}`, 'danger', 'bottom');
  //       }
  //     });
  //   }
  // }
  // sign_up() {
  //   this.route.navigate(['./sign-up']);
  // }

}
