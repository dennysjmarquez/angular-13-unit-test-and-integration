import {MedicosComponent} from './medicos.component';
import {MedicosService} from './medicos.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EMPTY, of, throwError} from 'rxjs';

describe('MedicosComponent', () => {
  let component: MedicosComponent;
  let medicosService: MedicosService;
  let fixture: ComponentFixture<MedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicosComponent],
      imports: [HttpClientTestingModule],
      providers: [MedicosService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosComponent);
    component = fixture.componentInstance;
    medicosService = fixture.debugElement.injector.get(MedicosService);
    // fixture.detectChanges();
  });

  it('Init: Debe de cargar los médicos', () => {
    const medicos: any[] = ['dennys', 'jose', 'marquez'];

    spyOn(medicosService, 'getMedicos').and.callFake(() => {
      return of(medicos);
    });

    component.ngOnInit();

    // Comprueba que el valor devuelto sea mayor que el valor especificado, Si no hay ítems no pasa la prueba
    expect(component.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un médico', () => {
    const spy = spyOn(medicosService, 'agregarMedico').and.callFake(() => {
      return EMPTY;
    });
    component.agregarMedico();
    // Comprueba que se llame el spyOn sin en agregarMedico no se llama él subscribe esto fallara
    expect(spy).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
    const medico = {id: 1, nombre: 'dennysjmarqez'};

    /*
    Tanto and.callFake() como and.returnValue() retorna un valor cuando se llama un método de servicio.
    Normalmente, and.callFake() se usa cuando necesitamos pasar parámetros al método de servicio para que realice su lógica
    */
    spyOn(medicosService, 'agregarMedico').and.returnValue(of(medico));
    component.agregarMedico();

    expect(component.medicos.includes(medico, 0)).toBeTrue();
  });

  it('Si falla al agregar un médico, la propiedad mensajeError debe de ser igual al error del servicio', () => {
    const mensajeError = 'No se puede agregar el médico';
    spyOn(medicosService, 'agregarMedico').and.returnValue(throwError(() => mensajeError));
    component.agregarMedico();

    expect(component.mensajeError).toBe(mensajeError);
  });

  it('Debe de llamar al servidor para borrar un Médico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(medicosService, 'borrarMedico').and.returnValue(EMPTY);
    component.borrarMedico('1');

    // toHaveBeenCalledWith Chequea que la función fue llamada con él, id 1
    expect(spy).toHaveBeenCalledWith('1');
  });

  it('No debe de llamar al servidor para borrar un Médico', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(medicosService, 'borrarMedico').and.returnValue(EMPTY);
    component.borrarMedico('1');

    // toHaveBeenCalledWith Chequea que la función fue llamada con él, id 1
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
