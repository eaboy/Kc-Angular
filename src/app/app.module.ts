import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactosService } from './contactos.service';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

// Usamos el decoredor 'NgModule' para que la clase decorada se comporte como un módulo
@NgModule({
  // En el metadato 'declarations' indicamos todos los componentes, pipes y directivas de mi aplicación
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent
  ],
  // En el metadato 'import' indicamos todos aquellos módulos de los cuales mi aplicación depende
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  // En el metadato 'providers' indicamos todos aquellos proveedores de clase o valores que puedan ser inyectados
  providers: [
    ContactosService
  ],
  // En el metadato 'bootstrap' indicamos el componente raiz a partir del cual se construye toda la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
