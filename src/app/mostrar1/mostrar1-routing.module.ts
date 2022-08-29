import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mostrar1Page } from './mostrar1.page';

const routes: Routes = [
  {
    path: '',
    component: Mostrar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mostrar1PageRoutingModule {}
