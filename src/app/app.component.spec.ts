import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

// Los bloques 'describe' agrupamos tests que guarden algún tipo de relación.
describe('AppComponent: testing del componentes', () => {

  let fixture;
  let component;

  // Los bloques 'beforeEach' se ejecutan previamente a los bloques 'it'
  beforeEach(async(() => {

    // 'TestBed' es el encargado de gestionar todo elentorno de testing. Para configurar todo el entorno de la aplicacioón en modo testing, usaremos la función 'configureTestingModule', pasando como parámetro el objeto de metadatos correspondiente
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    // Para instanciar componentes, debemos usar la función 'createComponent' de 'TestBed', nos retornará un 'ComponentFixture<T>' sinedo T el tipo de componente solicitado.
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  // Los bloque 'it' definen los test a realizar sobre la pieza concreta de este documento de especificación.
  it('debería instanciarse', async(() => {

    // Con 'expect' indicamos el resultado esperado del test.
    expect(component).toBeTruthy();
  }));
});

describe('AppComponent: testing del template', () => {

  let fixture;
  let template;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    template = fixture.debugElement;
  }));

  it('debería tener un título con el texto Agenda', () => {
    let h1 = template.query(By.css('h1'));
    let h1Nativo = h1.nativeElement;
    expect(h1Nativo.textContent).toBe('Agenda');
  })

  it('debería tener una zona dinámica donde pintar las secciones', () => {
    let routerOutlet = template.query(By.directive(RouterOutlet));
    expect(routerOutlet).toBeTruthy();
  })

})