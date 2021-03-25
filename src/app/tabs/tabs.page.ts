import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataCartService } from '../services/data-cart.service';
import { UserData } from '../providers/user-data';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  valid: any;
  total_keranjang: any;
  data_user: any = {};
  hsl: any;
  count: any;

  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    public servcart: DataCartService,
    private userdata: UserData,

  ) {
    // this.get_total_keranjang();
  }

  async ionViewWillEnter() {
    const loader = this.loadingCtrl.create();
    (await loader).present();
    const userid = localStorage.getItem('userid');
    
    //console.log('TAB useridxxx', userid);
    
    if ( userid !== null ) {
      this.valid = 'ada';
      //console.log('ADA');
    } else {
      this.valid = 'gaada';
      //console.log('TIDAK ADA');
    }

    //console.log('Valid nya ', this.valid);
    
    this.userdata.getUsername().then(hsl => {
      //console.log('hasilxx : ',hsl);
      
      if (hsl == null) {
        // this.router.navigateByUrl('login');
      } else {
        this.data_user = hsl;
        this.get_total_keranjang();
      }

    });
    (await loader).dismiss();
  }

  //   get_total_keranjang(){
  //     this.servcart.get_keranjang(this.data_user.id_pel).then( hasil => {
  //       console.log(hasil, 'Total keranjang Cart')
  //       let hsl : any = {};
  //       this.hsl = hasil;
  //       this.count = this.hsl.total_qty;
  //       console.log(this.hsl , 'TOTAL CART')
  //       console.log(this.count , 'TOTAL CART2')
  //     })
  // }
  
  get_total_keranjang() {
    this.servcart.get_keranjang(this.data_user.id_pel).then(hasil => {
      //console.log(hasil, 'keranjang')
      let hsl: any = {};
      hsl = hasil;
      this.total_keranjang = hsl.total_qty;
    })
  }

  tab3() {
    this.route.navigate(['./tabs/tab3']);
  }

  login() {
    this.route.navigate(['./login']);
  }
}
