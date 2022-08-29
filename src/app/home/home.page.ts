import { Component } from '@angular/core';
//IMPORTACIÓN DE ACTIVATEDROUTE Y ROUTER PARA ENVIAR Y RECIBIR INFORMACIÓN DE PAGES.
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
//IMPORTACIÓN MODULOS VENTANA EMERGENTE LOGIN.
import {MatDialog} from '@angular/material/dialog';
import { Mostrar1Page } from '../mostrar1/mostrar1.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  data: any; // Generamos una variable Any (permite cualquier valor)
  /**
   * En el constructor del HomePage se colocan por parametros
   * todas aquellas propiedades con el siguiente formato
   * private = visibilidad
   * activeRoute = identificador
   * ActiveRoute = Tipo de Objeto
   * : Indica que el identificador sera de la clase posterior a los : puntos
   * MatDialog utilizado para ventana emergente en home.
   */
  constructor(private activeroute: ActivatedRoute, private router: Router, private matDialog: MatDialog ) {

    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
        this.data = this.router.getCurrentNavigation().extras.state.user; // Si tiene extra rescata lo enviado
        console.log(this.data) // Muestra por consola lo traido
      }//else{this.router.navigate(["/login"])} // Si no tiene extra la navegacion actual navegar al login
    });
  
  }
  //CREACIÓN DEL ARREGLO PARA CAPTURAR LOS DATOS DEL USUARIO.
  datos = {
    nombre:'',
    apellido:''
  };
  //FUNCIÓN QUE ENVIARÁ LOS DATOS AL COMPONENT MOSTRAR INICIO DE INTERPOLACIÓN.
  mostrarDatos(){
      console.log("obteniendo datos")
      console.log(this.datos)      

  }
  //FIN CONSTRUCTOR  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.matDialog.open(Mostrar1Page,{
        width: '400px',
        enterAnimationDuration,
        exitAnimationDuration,
        data:this.datos.nombre + " " + this.datos.apellido
 
      });
    
  }
//FIN EXPORT CLASS HOMEPAGE  
}

