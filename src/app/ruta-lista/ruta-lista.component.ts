import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-ruta-lista',
  templateUrl: './ruta-lista.component.html',
  styleUrls: ['./ruta-lista.component.css']
})
export class RutaListaComponent implements OnInit {
  
    nombres: Contacto[];
    contactoSeleccionado: Contacto;

  // Para hacer la inyección de dependencias de un servicio debemos hacerlo en el constructor de la clase. Anotamos un parámetro con el tipo de servicio a inyectar y añadimos el modificador de acceso correspondiente al parámetro
  constructor(private _contactosService: ContactosService) { }
  
  // El hook 'OnInit' se ejecuta cuando el componente tiene asociado su template correspondiente, por tanto es el momento ideal para enlazar datos

  ngOnInit(): void {
    this.nombres = this._contactosService.obtenerContactos();
  }
    
  // Para eliminar el contacto indicado lo que hacemos es filtrar la colección y quedarnos con todos aquellos que no sean el indicado
  eliminarContacto(contacto: Contacto): void {
    this._contactosService.eliminarContacto(contacto);
    this.nombres = this._contactosService.obtenerContactos();
  }

  verDetalles(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }

}
