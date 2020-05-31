import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit, DoCheck {

  public titulo: string;


  constructor() { 

  	this.titulo = "componente prueba";
  	console.log('constructor lanzado');
  }

  ngOnInit() {
  	console.log('OnInit lanzado');
  }

  ngDoCheck() {
  	console.log('DoCheck lanzado');
  }

  ngOnDestroy() {
  	console.log('el componente se va a eliminar');
  }

  cambiarTitulo()  {
   	this.titulo = "otro titulo";
  }

}
