import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonfirmasiPage } from './konfirmasi.page';

const routes: Routes = [
  {
    path: '',
    component: KonfirmasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonfirmasiPageRoutingModule {}
