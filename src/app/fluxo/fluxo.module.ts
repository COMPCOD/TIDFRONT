import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FluxoPageRoutingModule } from './fluxo-routing.module';

import { FluxoPage } from './fluxo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FluxoPageRoutingModule
  ],
  declarations: [FluxoPage]
})
export class FluxoPageModule {}
