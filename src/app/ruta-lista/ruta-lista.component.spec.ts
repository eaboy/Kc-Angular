import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'; // En 'rxjs/add/Observable/x' están las funciones etáticas de Observable, mientras que en 'rxjs/add/operator/x' están los operadores de Observable
import { HttpClientModule } from '@angular/common/http';
import { ContactosService } from '../contactos.service';
import { DatosContactoPipe } from '../datos-contacto.pipe';
import { OrdenarContactosPipe } from '../ordenar-contactos.pipe';
import { DetallesContactoComponent } from '../detalles-contacto/detalles-contacto.component';
import { ListaContactosComponent } from '../lista-contactos/lista-contactos.component';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { RutaListaComponent } from './ruta-lista.component';

describe('RutaListaComponent', () => {
  let component: RutaListaComponent;
  let fixture: ComponentFixture<RutaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RutaListaComponent,
        ListaContactosComponent,
        DetallesContactoComponent,
        OrdenarContactosPipe,
        DatosContactoPipe
      ],
      providers: [
        ContactosService
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Cuando necesitemos hacer inyección de dependencias no sapoyamos en la función 'inject'. En ella indicamos en  el primer parámetro la colección de servicios a inyectar. Como segundo parámetro, indicamos una función anónima con tantos parámetros como servicios a inyectar indicamos: en estos parámetros nos informarán las instancias inyectadas
  it('debería obtener los contactos del servidor', inject([ContactosService], (contactosService: ContactosService) => {
    
    const datosMockeados = [{
      id: 1,
      nombre: 'Bob',
      apellidos: 'Esponja'
    }];

    // Con 'spyOn' observamos una función de un objeto dado. Seguidamente indicamos que acción realizar cuando esta función observada se ejecuta.
    spyOn(contactosService, 'obtenerContactos').and.callFake(() => {

      return Observable.from([datosMockeados]);
    });

    component.ngOnInit();

    component.contactos$.subscribe((datos) => {

      // Como debemos comprobar que los datos que retorna el servicio son los mismos obtenidos en el componenete, nos da igual la 'forma' que tenga: tan solo nos interesa que sean justo los mismos.
      expect(datos).toBe(datosMockeados);
    });

  }));
});
