import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	public user: any;

  constructor() { 
  	this.user = {
  		nombre: '',
  		apellidos: '',
  		bio: '',
  		genero: ''
  	};	 
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	alert("el formulario se ha enviado");
  	console.log(this.user);
  }

  haHechoClick(){
  	alert("ha hecho click");
  }

  haSalido(){
  	alert("ha salido!!");
  }
}
