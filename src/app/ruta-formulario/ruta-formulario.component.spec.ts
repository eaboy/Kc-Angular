import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFormularioComponent } from './ruta-formulario.component';

describe('RutaFormularioComponent', () => {
  let component: RutaFormularioComponent;
  let fixture: ComponentFixture<RutaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
