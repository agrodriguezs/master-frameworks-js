import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponente{

  public  titulo: string;
  public  comentario: string;
  public  year: number;
  public mostrarPrueba: boolean;

  constructor(){

  	this.titulo =  "titulo";
  	this.comentario = "comentario";
  	this.year	= 235353453;
  	this.mostrarPrueba = true;

    console.log("componente cargado con exito !!");


  }

  eliminarlo() {

  	this.mostrarPrueba = false;
  }
}
