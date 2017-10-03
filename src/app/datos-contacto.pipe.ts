import { Contacto } from './contacto';
import { Pipe, PipeTransform } from '@angular/core';


// Con el decorador '@Pipe' otorgamos a la clase decorada comportamiento de Pipe. La clase debe implementar la interfaz 'Pipetransform', que a su vez obliga la implementación de la función 'transform'. Además es necesario indicar en el metadato 'name' un nombre, el cual usaremos en las templates para aplicar el Pipe
@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  transform(contacto: Contacto): string {
    let datos: string;
    // Si tenemos email y movil
    if (contacto.email && contacto.movil) {
      datos = `${contacto.email} | ${contacto.movil}`;
    } else if (contacto.email) { // Si tenemos solo email
      datos = contacto.email;
    } else if (contacto.movil) { // Si tenemos solo móvil
      datos = contacto.movil;
    } else {
      datos = ''; // Si no tenemos nada
    }
    return datos;
  }

}
