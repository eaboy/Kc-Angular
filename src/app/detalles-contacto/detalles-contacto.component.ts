import { Contacto } from '../contacto';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent{

  @Input() contacto: Contacto;
  @Output() botonFacebookPulsado = new EventEmitter<string>();
  @Output() botonTwitterPulsado = new EventEmitter<string>();
  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();
  
  notificarNavegacionFacebook(): void {
    this.botonFacebookPulsado.emit(this.construirRutaFacebook());
  }

  notificarNavegacionTwitter(): void {
    this.botonTwitterPulsado.emit(this.construirRutaTwitter());
  }

  // Notificamos datos al componente padre gracias a la función 'emit' de nuestro 'EventEmitter'
  notificarEliminacionContacto(): void {
    this.botonEliminarPulsado.emit(this.contacto);
  } 
   
  private construirRutaFacebook(): string {
      return this.contacto.facebook 
      ? `https://www.facebook.com/${this.contacto.facebook}`
      : null;
  }

  private construirRutaTwitter(): string {
      return this.contacto.twitter 
      ? `https://www.twitter.com/${this.contacto.twitter}`
      : null;
  }  


}
