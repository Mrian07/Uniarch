import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KomisiPage } from './komisi.page';

const routes: Routes = [
  {
    path: '',
    component: KomisiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KomisiPageRoutingModule {}
