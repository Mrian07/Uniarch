import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { NgxCommunicateModule } from "ngx-communicate";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx'
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    NgxCommunicateModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, HTTP, Camera, SocialSharing, Clipboard, Toast, FCM, LocalNotifications, FirebaseDynamicLinks],
  bootstrap: [AppComponent]
})
export class AppModule {}