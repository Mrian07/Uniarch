import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KomisiPageRoutingModule } from './komisi-routing.module';

import { KomisiPage } from './komisi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KomisiPageRoutingModule
  ],
  declarations: [KomisiPage]
})
export class KomisiPageModule {}
