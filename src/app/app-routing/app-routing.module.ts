import { RutaFormularioComponent } from '../ruta-formulario/ruta-formulario.component';
import { RutaListaComponent } from '../ruta-lista/ruta-lista.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const rutas: Routes = [
  {
    path: 'lista-contactos',
    component: RutaListaComponent
  },
  {
    path: 'nuevo-contacto',
    component: RutaFormularioComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/lista-contactos'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
