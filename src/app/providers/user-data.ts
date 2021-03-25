import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { HTTP } from '@ionic-native/http/ngx';
import { BehaviorSubject } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_URL_SLIDER, IMAGE_URL_PRODUCT, API_URL, API_RAJAONKIR } from '../providers/constant.service';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  session: any = {};
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  API_URL: 'http://localhost/customerloyalty/rest/';
  authState = new BehaviorSubject(false);

  constructor(
    public storage: Storage,
    private http: HttpClient,
    private platform: Platform,
    private router: Router
  ) { 
    this.platform.ready().then(() => {
      this.isLoggedIn();
    });

  }
  isAuthenticated() {
    console.log(this.authState.value, 'value')
    return this.authState.value;
    // if(this.authState.value==false){
    //   this.router.navigate(['login']);
    // }else{
    //   // this.router.navigate(['checkout']);
    // }
  }
  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(username: any): Promise<any> {
    console.log(username, 'USERNAME')
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      // this.http.get(this.API_URL + 'login', {}, {})
      // .then(data => {
    
      //   console.log(data.status);
      //   console.log(data.data); // data received by server
      //   console.log(data.headers);
    
      // })
      // .catch(error => {
    
      //   console.log(error.status);
      //   console.log(error.error); // error message as string
      //   console.log(error.headers);
    
      // });      
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      this.authState.next(false);
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }

  setUsername(username: any): Promise<any> {
    return this.storage.set('username', username);
  }
  set_referral(referral: any): Promise<any> {
    console.log(referral, 'REFERRAL SET')
    return this.storage.set('referral', referral);
  }
  get_referral(): Promise<any> {
    return this.storage.get('referral').then( ( value )=>{
      console.log(value, 'REFERRAL SET')
      return value;
    });
  }
  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      this.authState.next(true);
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }

  // CUSTOMER LOYALTY
  set_photo_profile(photo_profile: string): Promise<any> {
    return this.getUsername().then(hsl=>{
      this.session=hsl;
      this.session.photo=photo_profile;
      this.setUsername(this.session);
    })
    
  }
  get_photo_profile(): Promise<any> {
    return this.getUsername().then(hsl=>{
      this.session=hsl;
      return this.session.photo;
    });
  }

  get_data_provinsi(){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_data_provinsi', {
      })
      .subscribe(hasil => {
        console.log('hasil', 'hasil')
        resolve(hasil);
      });      
    });
    return promise;
  }
  get_data_kota(provinsi){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_data_kota', { provinsi : provinsi })
      .subscribe(hasil => {
        console.log('hasil', 'hasil')
        resolve(hasil);
      });      
    });
    return promise;
  }  
  get_data_kecamatan(kota){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_data_kecamatan', { kota : kota })
      .subscribe(hasil => {
        console.log('hasil', 'hasil')
        resolve(hasil);
      });      
    });
    return promise;
  }
  short_url(url){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_short_url', { url : url })
      .subscribe(hasil => {
        console.log('hasil', 'hasil')
        resolve(hasil);
      });      
    });
    return promise;
  }
  submit_pendaftaran(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, referral){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_submit_pendaftaran', { 
        nama_pel : nama_pel,
        email_pel : email_pel,
        pass_pel : pass_pel,
        kon_pass : kon_pass,
        no_telp_pel : no_telp_pel,
        provinsi : provinsi,
        kota : kota,
        kecamatan : kecamatan,
        alamat_pel : alamat_pel,
        jk_pel : jk_pel,
        id_ref : referral
       })
      .subscribe(hasil => {
        console.log('hasil', 'hasil')
        resolve(hasil);
      });      
    });
    return promise;
  }
  update_profile(nama_pel, email_pel, pass_pel, kon_pass, no_telp_pel, provinsi, kota, kecamatan, alamat_pel, jk_pel, id_pel, info_lain_pel, nama_bank, rek, an){
    var promise = new Promise((resolve, reject) => {
      this.http.post(API_URL + 'api_update_pel', { 
        nama_pel : nama_pel,
        email_pel : email_pel,
        pass_pel : pass_pel,
        kon_pass : kon_pass,
        no_telp_pel : no_telp_pel,
        provinsi : provinsi,
        kota : kota,
        kecamatan : kecamatan,
        alamat_pel : alamat_pel,
        jk_pel : jk_pel,
        id_pel : id_pel, info_lain_pel : info_lain_pel, nama_bank : nama_bank, rek : rek, an : an
       })
      .subscribe(hasil => {
        console.log('hasil', 'hasil')
        resolve(hasil);
      });      
    });
    return promise;
  }  
}
