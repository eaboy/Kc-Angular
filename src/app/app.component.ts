import { Component, OnInit } from '@angular/core';

import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';

// Con el decoredor '@Component' otorgamos a la clase decorada comportamiento de componente
@Component({
  // El metadato 'selector' indica el selector css encargado de seleccionar el elemento HTML en el cual instanciar el componente
  selector: 'app-root',
  // En el metadato 'templateUrl' indicamos el template (documento html) asociado al componente
  templateUrl: './app.component.html',
  //  En el metadato 'styleUrls' indicamos las hojas de estilo que se aplican al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nombres: Contacto[];

  // Para hacer la inyección de dependencias de un servicio debemos hacerlo en el constructor de la clase. Anotamos un parámetro con el tipo de servicio a inyectar y añadimos el modificador de acceso correspondiente al parámetro
  constructor(private _contactosService: ContactosService) {
    console.log('Estoy en el constructor');
  }

  // El hook 'OnInit' se ejecuta cuando el componente tiene asociado su template correspondiente, por tanto es el momento ideal para enlazar datos

  ngOnInit(): void {
    console.log('Estoy en el hook OnInit');
    this.nombres = this._contactosService.obtenerContactos();
  }

  // Para eliminar el contacto indicado lo que hacemos es filtrar la colección y quedarnos con todos aquellos que no sean el indicado
  eliminarContacto(contacto: Contacto): void {
    this._contactosService.eliminarContacto(contacto);
    this.nombres = this._contactosService.obtenerContactos();
  }

}
