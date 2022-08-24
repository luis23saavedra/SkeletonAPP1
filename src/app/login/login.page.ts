import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  //CREACIÓN DEL ARREGLO PARA CAPTURAR LOS DATOS DEL USUARIO.
  usuario = {
    nombre:'',
    password:''
  };
  constructor() { }

  ngOnInit() {
  }
  //CREACIÓN DE FUNCIÓN QUE SE EJECUTARÁ AL MOMENTO DE HACER SUBMIT EN EL FORMULARIO.
  onSubmitTemplate(){
    console.log("guardado")
    console.log(this.usuario)
  }

}
