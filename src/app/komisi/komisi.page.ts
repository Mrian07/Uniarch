import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UserData } from '../providers/user-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { API_URL } from '../providers/constant.service';
import { DataCartService } from '../services/data-cart.service';

@Component({
  selector: 'app-komisi',
  templateUrl: './komisi.page.html',
  styleUrls: ['./komisi.page.scss'],
})
export class KomisiPage implements OnInit {

  data_user: any = {};
  show_tab: any = '1';
  arr: any = [];
  total_keranjang: any = 0;
  data_referral: any = [];
  constructor(
    private socialSharing: SocialSharing,
    private userdata: UserData,
    public http: HttpClient,
    public router: Router,
    private clipboard: Clipboard,
    private toast: Toast,
    public servcart: DataCartService,

  ) {

  }
  get_total_keranjang() {
    this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
      console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
  }
  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      this.arr[i] = i;
    }
  }
  pilih_tab($event) {
    console.log($event, 'event')
    this.show_tab = $event.detail.value;
    if (this.show_tab == 2) {
      this.get_data_referral();
    }
  }
  ionViewWillEnter() {
    this.userdata.getUsername().then(hsl => {
      console.log(hsl, 'hasil');
      if (hsl == null) {
        this.router.navigateByUrl('login');
      } else {
        this.data_user = hsl;
        this.get_data_referral();
        this.get_total_keranjang();

      }
    });
  }
  get_data_referral() {
    this.http.post(API_URL + 'api_get_data_referral', { id_pel: this.data_user.id_pel })
      .subscribe((hsl) => {
        let hasil: any = {};
        hasil = hsl;
        this.data_referral = hasil.data;
        console.log(this.data_referral, 'data referral')
      })
  }
  sharewa() {
    let url: string;
    url = 'https://uniarch.page.link/?link=https://shop.uniarch.id?referral_' + this.data_user.id_pel + '&apn=com.uniarch.app';
    this.socialSharing.shareViaWhatsApp('', '', url).then((res) => {
      // Success
      console.log(res, 'REST')
    }).catch((e) => {
      // Error!
      console.log(e, 'ERROR')
    });
  }
  copylink() {
    let url: string;
    url = 'https://uniarch.page.link/?link=https://shop.uniarch.id?referral_' + this.data_user.id_pel + '&apn=com.uniarch.app';
    this.clipboard.copy(url).then(hsl => {
      this.toast.show('Link berhasil di copy', '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    })
  }
  sharefb() {
    let url: string;
    url = 'https://bit.ly/2EZtGZd';
    this.socialSharing.shareViaFacebook('', '', url).then((res) => {
      // Success
      console.log(res, 'REST')
    }).catch((e) => {
      // Error!
      console.log(e, 'ERROR')
    });
  }

}
