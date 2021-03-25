import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    // {
    //   title: 'Akun',
    //   url: '/login',
    //   icon: 'person-circle'
    // },
    // {
    //   title: 'Tentang Toko',
    //   url: '/about',
    //   icon: 'storefront'
    // },
    {
      title: 'Blog',
      url: '/tabs/tab4',
      icon: 'newspaper'
    },
    {
      title: 'Referral',
      url: '/komisi',
      icon: 'cash'
    },
    {
      title: 'Klaim Point',
      url: '/point',
      icon: 'ribbon'
    },
    {
      title: 'Wallet',
      url: '/wallet',
      icon: 'wallet'
    },
    {
      title: 'Kontak',
      url: '/tabs/tab5',
      icon: 'Call'
    },
    
    // {
    //   title: 'Bantuan',
    //   url: '/bantuan',
    //   icon: 'help-circle'
    // },
  ];

  valid: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private oneSignal: OneSignal,
    private storage: Storage
  ) {
    this.initializeApp();
    // const userid = localStorage.getItem('userid');
    // console.log('TAB userid', userid);
    // if (userid && userid != null && userid != 'null') {
    //   this.valid = 'ada';
    // } else {
    //   this.valid = 'gaada';
    // }
    // console.log(this.valid);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#0572ad');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.oneSignal.startInit('77b3a0fa-a8b6-4973-b1b0-52b889c8370d', '370227405496');
      // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
      this.storage.get('username').then(hsl => {
          // let hasil : any = {};
          // hasil = hsl;
          // if(hasil !='' && hasil.id_pel)
          // this.oneSignal.sendTag('id_pel', hasil.id_pel);
      });
      // this.oneSignal.handleNotificationReceived().subscribe((hsl) => {
        // let hasil : any = {};
        // hasil = hsl;
        // this.consta.show_alert('Pesan', hasil.payload.title, hasil.payload.body);
        // console.log(hsl, 'HASIL');
      // });
      // this.oneSignal.handleNotificationOpened().subscribe((hsl) => {
      //   console.log(hsl, 'HASIL');
      // });
      // this.oneSignal.endInit();

      
    });
    
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
