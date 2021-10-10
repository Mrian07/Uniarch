
import { Component, ViewChildren, OnInit, ViewEncapsulation, QueryList } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, Platform, ToastController, NavController, LoadingController, AlertController, ActionSheetController, IonRouterOutlet } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';
import {Subscription} from 'rxjs';
import { UserData } from './providers/user-data';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NgxCommunicateService } from 'ngx-communicate';
import { API_URL } from './providers/constant.service';
import { ConstantService } from './providers/constant.service';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private backButtonSubscription: Subscription;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
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
  ];

  valid: any;
  arr_sess: any = {};
  loading: any;
  loggedIn = false;
  actionSheet: HTMLIonActionSheetElement;
  constructor(
    private consta : ConstantService,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private toastCtrl: ToastController,
    private camera: Camera,
    private communicate: NgxCommunicateService,
    public loadingCtrl: LoadingController,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private fcm: FCM,
    private localNotifications: LocalNotifications,
    public http2: HttpClient,
    public zone: NgZone,
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
  ) {
    this.initializeApp();
    this.arr_sess.nama_pel = "";
    this.communicate.on('login_success', (data: any) => {
      //console.log(data, 'LOGIN SUCCESS');
      this.userData.getUsername().then(hsl => {
        //console.log(hsl, this.arr_sess, 'session user');
        if (hsl) {
          // alert('a')
          this.arr_sess = hsl;

          // this.name_user='Hi, '+this.arr_sess.nama_pel;
          // console.log(this.name_user,'nama user 1')

          // this.mystyle['background-image'] = "url('"+this.arr_sess.photo+"'";
        } else {
          // alert('b')
          // this.name_user='';
          this.arr_sess.nama_pel = "";

        }
      })
    });
    this.userData.getUsername().then(hsl => {
      if (hsl) {
        // alert('a')
        this.arr_sess = hsl;

        // this.name_user='Hi, '+this.arr_sess.nama_pel;
        // console.log(this.name_user,'nama user 1')

        // this.mystyle['background-image'] = "url('"+this.arr_sess.photo+"'";
      } else {
        // alert('b')
        // this.name_user='';
        this.arr_sess.nama_pel = "";

      }
    })
  }
  ionViewWillEnter() {
    this.userData.getUsername().then(hsl => {
      if (hsl == null) {
        this.router.navigateByUrl('login')
      } else {

      }
    });

  }
  ionViewDidEnter() {

  }
  ngAfterViewInit(): void {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      if (this.router.url === '/tabs/tab1') {
        navigator['app'].exitApp();
      } else {
        this.navCtrl.navigateForward('/tabs/tab1');
      }
    });
  }
  async keluar_aplikasi() {
    this.actionSheet = await this.actionSheetController.create({
      header: 'Apakah anda yakin ingin keluar aplikasi ? ',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            navigator['app'].exitApp();
          }
        },
        {
          text: 'Tidak',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    await this.actionSheet.present();
  }

  initializeApp() {
    let subs: any;
      this.platform.ready().then(() => {
        // this.platform.backButton.subscribe(hsl=>{
        this.platform.backButton.subscribeWithPriority(0, () => {
          this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
            if (this.router.url == '/tabs/tab1') {
              this.keluar_aplikasi();
            } else if (this.router.url == '/login') {
              this.keluar_aplikasi();
            } else
              if (outlet && outlet.canGoBack()) {
                outlet.pop();
              }
          })
        })
      this.statusBar.backgroundColorByHexString('#5ab1cb');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('username').then(hsl => {
      });
      var th = this;
      setTimeout(function() {
          
        th.fcm.onNotification().subscribe(data => {
          console.log(data);
          if (data.wasTapped) {
            console.log("Received in background");
            if(data.type == "PRODUCT") {
              th.zone.run(() => {
                th.router.navigateByUrl('/detailproduk/' + data.id);
              });
            }else if(data.type == "BLOG") {
              th.zone.run(() => {
                th.router.navigateByUrl('/detailblog');
              });
            }else if(data.type == "LINK") {
              th.inAppBrowser.create(
                data.id,
                '_blank'
              );
            }else {
              th.zone.run(() => {
                th.router.navigateByUrl('/');
              });
            }
          } else {
            console.log("Received in foreground");
            th.localNotifications.schedule({
                id: 1,
                title: data.title,
                text: data.body,
                data: {
                  id: data.id,
                  type: data.type
                }
            });

            th.localNotifications.on("click").subscribe(notification => {
                console.log(notification.data);
                if(notification.data.type == "PRODUCT") {
                  th.zone.run(() => {
                    th.router.navigateByUrl('/detailproduk/' + notification.data.id);
                  });
                }else if(notification.data.type == "BLOG") {
                  th.zone.run(() => {
                    th.router.navigateByUrl('/detailblog');
                  });
                }else if(notification.data.type == "LINK") {
                  th.inAppBrowser.create(
                    notification.data.id,
                    '_blank'
                  );
                }else {
                  th.zone.run(() => {
                    th.router.navigateByUrl('/');
                  });
                }
            });
            
          };
        });

        th.fcm.onTokenRefresh({once:false}).subscribe(token => {
          console.log(token)
        });

        th.fcm.getInitialPushPayload().then(data => {
          if(data != null) {
            if(data.type == "PRODUCT") {
              th.zone.run(() => {
                th.router.navigateByUrl('/detailproduk/' + data.id);
              });
            }else if(data.type == "BLOG") {
              th.zone.run(() => {
                th.router.navigateByUrl('/detailblog');
              });
            }else if(data.type == "LINK") {
              th.inAppBrowser.create(
                data.id,
                '_blank'
              );
            }else {
              th.zone.run(() => {
                th.router.navigateByUrl('/');
              });
            }
          }
        });

      }, 3000)
    });
  }



  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      if (loggedIn) {

        this.getToken();
        this.subscribeToTopic();
      }
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
      this.arr_sess = {};
    });
  }
  logout() {
    this.userData.logout().then(() => {
      this.unsubscribeFromTopic();
      return this.router.navigateByUrl('/login');
    });
  }
  subscribeToTopic() {
    this.fcm.subscribeToTopic('all');
  }
  
  getToken() {
    this.fcm.getToken().then(token => {
      console.log(token)
      this.http2.post(API_URL + 'save_fcm', { id_pel : this.arr_sess.id_pel, token : token }, {} )
      .subscribe(( data ) => {
        console.log(data); 
      })
    });
  }

  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('all');
  }


  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
