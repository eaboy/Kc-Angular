import { Component, OnInit } from '@angular/core';

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

  nombres: string[] = [
    'Steve Jobs',
    'Steve Wozniak',
    'Bill Gates',
    'Sundar Pichai',
    'Elon Musk',
    'Bob Esponja'
  ];

  constructor() {
    console.log('Estoy en el constructor');
  }

  // El hook 'OnInit' se ejecuta cuando el componente tiene asociado su template correspondiente, por tanto es el momento ideal para enlazar datos

  ngOnInit(): void {
    console.log('Estoy en el hook OnInit');
  }

  // Para eliminar el contacto indicado lo que hacemos es filtrar la colección y quedarnos con todos aquellos que no sean el indicado
  eliminarContacto(contacto: string): void {
    this.nombres = this.nombres.filter(n => n !== contacto);
  }

}
