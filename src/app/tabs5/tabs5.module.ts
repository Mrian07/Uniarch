import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabs5PageRoutingModule } from './tabs5-routing.module';

import { Tabs5Page } from './tabs5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabs5PageRoutingModule
  ],
  declarations: [Tabs5Page]
})
export class Tabs5PageModule {}
