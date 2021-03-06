import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';



@Injectable()		

export class PeliculaService {

	public peliculas: Pelicula[]; 

	constructor(){
	  	this.peliculas = [
		  	new Pelicula("La vida loca",2017, "https://ia.media-imdb.com/images/M/MV5BMTg2OTMwNTI4N15BMl5BanBnXkFtZTgwNDg5NTAzMTE@._V1_SX300.jpg"),
		  	new Pelicula(" Plastic Ocean", 2008, "https://m.media-amazon.com/images/M/MV5BMTk5MTU0MTA2OF5BMl5BanBnXkFtZTgwMzQ3MjQ5MDI@._V1_SX300.jpg"),
		  	new Pelicula("Perú: tesoro escondido", 2020, "https://m.media-amazon.com/images/M/MV5BYzY4ZmY3NDMtZjI0Mi00MWZlLWFjNzMtNjAwMjg2ZjdjOWNmXkEyXkFqcGdeQXVyNDE5MDAwODc@._V1_SX300.jpg"),
		  	new Pelicula("Caracas Onto Death", 2001, "https://m.media-amazon.com/images/M/MV5BMTg1MzAxODYxM15BMl5BanBnXkFtZTcwNDA3NTYzMQ@@._V1_SX300.jpg"),
		  	new Pelicula("Snoopy: The Musical", 2018, "https://m.media-amazon.com/images/M/MV5BMTQ2NzQ3MjYxNV5BMl5BanBnXkFtZTcwMzc1MDcxMQ@@._V1_SX300.jpg")
		];
	}

	holaMundo() {

		return "hola Mundo";

	}

	getPeliculas(){
     
     	return this.peliculas;
  	
  	}

}