import { Component } from '@angular/core';
import html2canvas from "html2canvas"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  titulo = 'Como Convertir el contenido de un Div a Imagen en Angular 10';

  imgcreada = false;

  imagenCreada;

  constructor() {
   
  }

  crearImagen() {
    html2canvas(document.querySelector("#contenido")).then(canvas => {

      this.imagenCreada = canvas.toDataURL();      

    });
    this.imgcreada = true;
  }

}
