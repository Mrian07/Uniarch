import { Component, OnInit } from '@angular/core';
import { DataCartService } from '../services/data-cart.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ConstantService } from '../providers/constant.service';
import { UserData } from '../providers/user-data';

@Component({
  selector: 'app-point',
  templateUrl: './point.page.html',
  styleUrls: ['./point.page.scss'],
})
export class PointPage implements OnInit {

  total_keranjang: any;
  segment = 'tukar';
  constructor(
    public servcart: DataCartService,
    public loadingctrl: LoadingController,
    public navCtrl: NavController,
    private consta: ConstantService,
    public router: Router,
    private userdata: UserData
  ) {
  }
  ngOnInit() {
  }
  data_user: any = {};
  ionViewWillEnter() {
    this.userdata.getUsername().then(hsl => {
      console.log(hsl, 'hasil');
      if (hsl == null) {
        this.router.navigateByUrl('login');
      } else {
        this.data_user = hsl;
        this.getHadiah();
        this.getRiwayat();
        this.getPoin();
      }
    })
  }

  loading1: any;
  setpoin: any;
  async getHadiah() {
    this.loading1 = await this.loadingctrl.create({
      message: 'Mohon Tunggu'
    });
    this.loading1.present();
    let kode_pel = this.data_user.id_pel;
    this.servcart.getHadiah(kode_pel).then(data => {
      this.loading1.dismiss();
      let set: any = {};
      set = data;
      console.log(set.data);
      this.setpoin = set.data;
    });
  }

  riwayat: any;

  async getRiwayat() {
    let kode_pel = this.data_user.id_pel;
    this.servcart.getRiwayat(kode_pel).then(data => {
      let set: any = {};
      set = data;
      console.log(set.data);
      this.riwayat = set.data;
    });
  }

  poin: any;
  async getPoin() {
    let kode_pel = this.data_user.id_pel;
    this.servcart.getPoin(kode_pel).then(data => {
      let set: any = {};
      set = data;
      console.log(set.poin);
      if (set.status === 0) {
        this.poin = 0;
      } else {
        this.poin = set.poin;
      }
    });
  }
  async get_detail(param) {
    let params: NavigationExtras = {
      queryParams: {
        kode_reward: param
      }
    };
    this.navCtrl.navigateForward('poindetail', params);
  }

  loading2: any;

  async goTukar(kode, poin) {

    this.loading2 = await this.loadingctrl.create({
      message: 'Proses Penukaran...'
    });
    this.loading2.present();
    /*if(this.poin<Math.abs(poin)){
      this.consta.show_alert('Notif', '','Poin belum mencukupi.');
      this.loading2.dismiss();
    }else{*/
    this.servcart.insertPenukaran(kode, this.data_user.id_pel).then(data => {
      let set: any = {};
      set = data;
      this.loading2.dismiss();
      this.ionViewWillEnter();
      this.consta.show_alert('Notif', '', set.title);
    })
    //}
  }

  get_total_keranjang() {
    this.servcart.get_keranjang(60).then(hasil => {
      console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
  }
  goto_checkout() {
    this.router.navigateByUrl('checkout');
  }

}
