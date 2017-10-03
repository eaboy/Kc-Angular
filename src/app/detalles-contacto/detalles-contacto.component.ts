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
  
  notificarNavegacionFacebook(): void {
    this.botonFacebookPulsado.emit(this.construirRutaFacebook());
  }

  notificarNavegacionTwitter(): void {
    this.botonTwitterPulsado.emit(this.construirRutaTwitter());
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
