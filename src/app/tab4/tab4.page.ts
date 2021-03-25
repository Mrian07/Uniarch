import { Component, OnInit, ViewChild } from '@angular/core';
import { API_URL_SLIDER, API_URL, IMAGE_URL_PRODUCT } from '../providers/constant.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController, IonList, LoadingController, ModalController, NavController, ToastController, Config, IonSlides, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataCartService } from '../services/data-cart.service';
import { UserData } from '../providers/user-data';
import { ConstantService } from '../providers/constant.service';
import { UtilService } from '../services/util/util.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  hasil:any;
  valid:any;
  total_keranjang: any;
  data_user: any = {};


  constructor(
    public http2: HttpClient,
    private util: UtilService,
    public servcart: DataCartService,
    private userdata: UserData,
    public router: Router,


  ) { }
  ionViewWillEnter() {
    this.get_blog();
    const userid = localStorage.getItem('userid');
    console.log('TAB userid', userid);
    if (userid && userid != null && userid != 'null') {
      this.valid = 'ada';
    } else {
      this.valid = 'gaada';
    }
    this.userdata.getUsername().then( hsl => {
      console.log(hsl, 'hasil');
      if(hsl==null){
        this.router.navigateByUrl('login');
      }else{
        this.data_user=hsl;
        this.get_total_keranjang();
      }
    });
  }
  ngOnInit() {
  }

  get_total_keranjang() {
    this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
      console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    });
  }

  get_blog(){
    this.http2.post(API_URL + 'api_blog', { }, {} )
    .subscribe(( data ) => {
      console.log(data); 
      let hsl : any = {};
      hsl = data;
      this.hasil = hsl.blog;
    })
  }

  kosong(){
    this.util.showToast('Silahkan Login Dahulu', 'success', 'bottom');
  }

}
