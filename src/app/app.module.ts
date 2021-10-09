import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule, 
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [InAppBrowser, SplashScreen, StatusBar, Camera, SocialSharing, Clipboard, Toast, FCM],
  bootstrap: [AppComponent]
})
export class AppModule {}
