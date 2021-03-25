import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailtransaksiPage } from './detailtransaksi.page';

const routes: Routes = [
  {
    path: '',
    component: DetailtransaksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailtransaksiPageRoutingModule {}
