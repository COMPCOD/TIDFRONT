import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluxoPage } from './fluxo.page';

const routes: Routes = [
  {
    path: '',
    component: FluxoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluxoPageRoutingModule {}
