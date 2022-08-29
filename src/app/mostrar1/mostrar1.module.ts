import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mostrar1PageRoutingModule } from './mostrar1-routing.module';

import { Mostrar1Page } from './mostrar1.page';
//IMPORT MODULE VENTANA EMERGENTE.
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mostrar1PageRoutingModule,MatDialogModule
  ],
  declarations: [Mostrar1Page]
})
export class Mostrar1PageModule {}
