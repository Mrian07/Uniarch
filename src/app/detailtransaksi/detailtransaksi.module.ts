import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailtransaksiPageRoutingModule } from './detailtransaksi-routing.module';

import { DetailtransaksiPage } from './detailtransaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailtransaksiPageRoutingModule
  ],
  declarations: [DetailtransaksiPage]
})
export class DetailtransaksiPageModule {}
