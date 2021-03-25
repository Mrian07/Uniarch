import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailprodukPageRoutingModule } from './detailproduk-routing.module';

import { DetailprodukPage } from './detailproduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailprodukPageRoutingModule
  ],
  declarations: [DetailprodukPage]
})
export class DetailprodukPageModule {}
