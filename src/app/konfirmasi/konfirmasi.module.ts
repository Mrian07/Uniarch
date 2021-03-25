import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonfirmasiPageRoutingModule } from './konfirmasi-routing.module';

import { KonfirmasiPage } from './konfirmasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonfirmasiPageRoutingModule
  ],
  declarations: [KonfirmasiPage]
})
export class KonfirmasiPageModule {}
