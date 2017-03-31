import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import {RouterModule,Routes} from '@angular/router';//Ruta 


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaEncontradaComponent } from './pagina-encontrada/pagina-encontrada.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
///Array de rutas
const RutaDeNavegacion : Routes =[{path:'Login',component:LoginComponent},
                                  {path:'',redirectTo:'/Login',pathMatch:'full'},
                                  {path:'**',component:PaginaNoEncontradaComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaEncontradaComponent,
    PaginaNoEncontradaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RutaDeNavegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
