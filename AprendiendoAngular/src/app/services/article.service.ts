import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Global } from './global';



@Injectable()		

export class ArticleService {

	public url: string; 

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	pruebas(){
		return "soy el servicio de Articulos!!";
	}

	getArticles(last:any = null):Observable<any>{

		var articles = 'articulos';

		if(last != null){

			articles  = articles+'/true';
		}
		
		return this._http.get(this.url+articles);
	}

	getArticle(articleId):Observable<any>{

	
		return this._http.get(this.url+'articulo/'+articleId);
	}

	search(searchString):Observable<any>{

		return this._http.get(this.url+'search/'+searchString);
	}

}