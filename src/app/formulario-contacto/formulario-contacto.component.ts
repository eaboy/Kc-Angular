import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  formulario: FormGroup;

  @Output() botonGuardarPulsado = new EventEmitter<Contacto>(); 

  // Inyectamos como dependencia 'FormBuilder', con esta clase podemos crear nuevos 'FormGroup', indicando todas las propiedades que queremos recoger del formulario Html
  constructor(private _formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  private crearFormulario(): void {

    // Para crear un nuevo 'FormGroup' debemos indicar en un bojeto JSON las prropiedades que recogemos del formulario Html.
    this.formulario = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required]
    });
  }

  notificarGuardadoContacto(): void {

    // Tenemos disponible los valores que el usuario indica en un formulario a través de la propiedad 'value' del 'FormGroup'.
    const contacto: Contacto = this.formulario.value as Contacto;
    this.botonGuardarPulsado.emit(contacto);
  }

}
