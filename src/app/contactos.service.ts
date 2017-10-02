import { Injectable } from '@angular/core';
import { Contacto } from './contacto';

// El decorador 'Injectable' indica que la clase decorada debe comportarse como un servicio.
@Injectable()
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(1, 'Steve','Jobs', '566 555 666', 'steve.j@apple.com'),
    new Contacto(2, 'Steve','Wozniak', '566 555 55', 'steve.w@apple.com'),
    new Contacto(3, 'Bill','Gates', null, 'bill.g@microsoft.com'),
    new Contacto(4, 'Sundar','Pichai', '566 555 777', null),
    new Contacto(5, 'Elon','Musk'),
    new Contacto(6, 'Bob','Esponja', '111 111 111', 'bob.e@bikkinib.com')
  ];

  obtenerContactos(): Contacto[] {
    return this._nombres;
  }

  // Para eliminar el contacto indicado lo que hacemos es filtrar la colección y quedarnos con todos aquellos que no sean el indicado
  eliminarContacto(contacto: Contacto): void {
    this._nombres = this._nombres.filter(n => n.id !== contacto.id);
  }

  agregarContacto(contacto: Contacto): void {
    this._nombres.push(contacto);
  }
}
