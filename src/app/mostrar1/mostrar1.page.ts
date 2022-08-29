import { Component, OnInit, Inject } from '@angular/core';
//IMPORTACIÓN DE DIALOG_DATA
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-mostrar1',
  templateUrl: './mostrar1.page.html',
  styleUrls: ['./mostrar1.page.scss'],
})
export class Mostrar1Page implements OnInit {
  //INYECCIÓN DE LOS DATOS A LA VARIABLE DATA.
  constructor(@Inject(MAT_DIALOG_DATA) private data:any, public dialogRef: MatDialogRef<Mostrar1Page>) { 
    
  }

  ngOnInit() {
  }

}
