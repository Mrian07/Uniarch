import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BantuanPageRoutingModule } from './bantuan-routing.module';

import { BantuanPage } from './bantuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BantuanPageRoutingModule
  ],
  declarations: [BantuanPage]
})
export class BantuanPageModule {}
