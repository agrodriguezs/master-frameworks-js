
// importar los modulos de router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';

//Array de rutas
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
	{ path: 'formulario', component: FormularioComponent },
	{ path: 'peliculas', component: PeliculasComponent },
	{ path: 'pagina-de-prueba', component: PaginaComponent },
	{ path: 'pagina-de-prueba/:nombre', component: PaginaComponent },
	{ path: 'pagina-de-prueba/:nombre/:apellido', component: PaginaComponent },
	{ path: '**', component: ErrorComponent }
];

//exportar el modulo de rutas para poder utilizarlo
export const appRoutingProviders: any[]	= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);