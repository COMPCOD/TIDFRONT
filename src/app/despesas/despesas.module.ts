import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasPageRoutingModule } from './despesas-routing.module';

import { DespesasPage } from './despesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasPageRoutingModule
  ],
  declarations: [DespesasPage]
})
export class DespesasPageModule {}
