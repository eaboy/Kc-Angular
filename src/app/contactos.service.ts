import { Injectable } from '@angular/core';

// El decorador 'Injectable' indica que la clase decorada debe comportarse como un servicio.
@Injectable()
export class ContactosService {

  private _nombres: string[] = [
    'Steve Jobs',
    'Steve Wozniak',
    'Bill Gates',
    'Sundar Pichai',
    'Elon Musk',
    'Bob Esponja'
  ];

  obtenerContactos(): string[] {
    return this._nombres;
  }

  // Para eliminar el contacto indicado lo que hacemos es filtrar la colección y quedarnos con todos aquellos que no sean el indicado
  eliminarContacto(contacto: string): void {
    this._nombres = this._nombres.filter(n => n !== contacto);
  }
}
