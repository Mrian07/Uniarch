import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BantuanPage } from './bantuan.page';

const routes: Routes = [
  {
    path: '',
    component: BantuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BantuanPageRoutingModule {}
