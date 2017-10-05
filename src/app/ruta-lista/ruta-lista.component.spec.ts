import { HttpClientModule } from '@angular/common/http';
import { ContactosService } from '../contactos.service';
import { DatosContactoPipe } from '../datos-contacto.pipe';
import { OrdenarContactosPipe } from '../ordenar-contactos.pipe';
import { DetallesContactoComponent } from '../detalles-contacto/detalles-contacto.component';
import { ListaContactosComponent } from '../lista-contactos/lista-contactos.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
