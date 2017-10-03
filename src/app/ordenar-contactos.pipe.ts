import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';

@Pipe({
  name: 'ordenarContactos'
})
export class OrdenarContactosPipe implements PipeTransform {

  private obtenerNombreCompleto(contacto: Contacto): string {
    return `${contacto.nombre} ${contacto.apellidos}`.toLowerCase();
  }

  transform(contactos: Contacto[], orden: string): Contacto[] {

    let contactosOrdenados: Contacto[];

    // Comprobamos que contactos está inicializada y tien valor
    if (contactos) {

      if (orden === 'asc') {

        // Orden ascendente por nombre y apellido de contacto.
        contactosOrdenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {
          const nombreCompletoContactoA: string = this.obtenerNombreCompleto(contactoA);
          const nombreCompletoContactoB: string = this.obtenerNombreCompleto(contactoB);

          // Si A va antes que B 
          return nombreCompletoContactoA > nombreCompletoContactoB 
            ? 1 
            // Si A va después que B
            : nombreCompletoContactoA < nombreCompletoContactoB 
              ? -1
              // Si A es igual a B, el orden no importa 
              : 0;
        });
      } else {

        // Orden descendente por nombre y apellido de contacto.
        contactosOrdenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {
          const nombreCompletoContactoA: string = this.obtenerNombreCompleto(contactoA);
          const nombreCompletoContactoB: string = this.obtenerNombreCompleto(contactoB);

          // Si B va antes que A 
          return nombreCompletoContactoA < nombreCompletoContactoB 
            ? 1 
            // Si B va después que A
            : nombreCompletoContactoA > nombreCompletoContactoB 
              ? -1
              // Si B es igual a A, el orden no importa 
              : 0;
        });
      }
    } else { // En caso de que la colección sea nula
      contactosOrdenados = [];
    }

    return contactosOrdenados;
  }

}
