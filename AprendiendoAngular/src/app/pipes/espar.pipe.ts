import  { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'espar'
})

export class EsParPipe implements PipeTransform {

	transform(value: any){
		var espar = "no es par";
		if (value % 2 ){
			espar = "es par";
		}
		return "el año es: " + value + espar;
	}

}