import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailblogPageRoutingModule } from './detailblog-routing.module';

import { DetailblogPage } from './detailblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailblogPageRoutingModule
  ],
  declarations: [DetailblogPage]
})
export class DetailblogPageModule {}
