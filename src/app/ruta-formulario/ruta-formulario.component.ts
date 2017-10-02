import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-ruta-formulario',
  templateUrl: './ruta-formulario.component.html',
  styleUrls: ['./ruta-formulario.component.css']
})
export class RutaFormularioComponent {

  constructor(
    private _contactosService: ContactosService,
    private _router: Router
  ) { }
  
  crearContacto(contacto: Contacto): void {
    this._contactosService.agregarContacto(contacto);
    this._router.navigate(['/lista-contactos']);
  }

}
