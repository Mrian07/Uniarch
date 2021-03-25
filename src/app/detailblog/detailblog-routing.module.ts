import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailblogPage } from './detailblog.page';

const routes: Routes = [
  {
    path: '',
    component: DetailblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailblogPageRoutingModule {}
