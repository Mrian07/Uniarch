import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs5Page } from './tabs5.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabs5PageRoutingModule {}
