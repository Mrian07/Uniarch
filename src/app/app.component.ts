import { Component, ViewChild } from '@angular/core';
import {AlertController, IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NgZone } from '@angular/core';
import { API_URL } from './providers/constant.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private backButtonSubscription: Subscription;
  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet;
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public alertController: AlertController,
    private router: Router,
    public navCtrl: NavController,
    private fcm: FCM,
    private localNotifications: LocalNotifications,
    public inAppBrowser: InAppBrowser,
    public zone: NgZone,
    public http2: HttpClient,
  ) {
    this.initializeApp();
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

  initializeApp() {
    this.platform.ready().then(() => {
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
                th.router.navigateByUrl('/product-detail/' + data.id);
              });
            }else if(data.type == "BLOG") {
              th.zone.run(() => {
                th.router.navigateByUrl('/blog');
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
                    th.router.navigateByUrl('/product-detail/' + notification.data.id);
                  });
                }else if(notification.data.type == "BLOG") {
                  th.zone.run(() => {
                    th.router.navigateByUrl('/blog');
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
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });

        th.fcm.getInitialPushPayload().then(data => {
          if(data != null) {
            if(data.type == "PRODUCT") {
              th.zone.run(() => {
                th.router.navigateByUrl('/detailproduk/' + data.id);
              });
            }else if(data.type == "BLOG") {
              th.zone.run(() => {
                th.router.navigateByUrl('/blog');
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
