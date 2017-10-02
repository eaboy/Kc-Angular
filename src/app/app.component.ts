import { Component } from '@angular/core';


// Con el decoredor '@Component' otorgamos a la clase decorada comportamiento de componente
@Component({
  // El metadato 'selector' indica el selector css encargado de seleccionar el elemento HTML en el cual instanciar el componente
  selector: 'app-root',
  // En el metadato 'templateUrl' indicamos el template (documento html) asociado al componente
  templateUrl: './app.component.html',
  //  En el metadato 'styleUrls' indicamos las hojas de estilo que se aplican al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
