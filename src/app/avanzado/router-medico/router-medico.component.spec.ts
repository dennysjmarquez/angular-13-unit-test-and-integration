import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

// Esto funciona en Angular < 6 o 6, en la versión actual la 13,
// esto ya no se usa así, actualicé las pruebas a la nueva forma
/*

class FakeRouter {
  navigate( params ) { }
}

class FakeActivatedRoute {
	private subject = new Subject();

	push(value: any) {
		this.subject.next(value);
	}

	get params() {
		return this.subject.asObservable();
	}
}*/

describe('RouterMedicoComponent', () => {
	let component: RouterMedicoComponent;
	let fixture: ComponentFixture<RouterMedicoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RouterMedicoComponent],
      // Angular > 6 0 13
			imports: [RouterTestingModule],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						params: of({ id: 'nuevo' }),
					},
				},
			],

      // Esto funciona en Angular < 6 o 6, en la versión actual la 13,
      // esto ya no se usa así, actualicé las pruebas a la nueva forma
      /*providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]*/

		})
      // Esto ya no necesario SE PUEDE DEJAR O QUITAR NO AFECTA NADA
      // .compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RouterMedicoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('ActivatedRoute params', () => {
    // debe de recibir él, id = nuevo
    // Aquí se está probando es esto
    /*ngOnInit(): void {
      this._activatedRoute.params.subscribe((params: any) => {
        this.id = params['id']; // => nuevo
      });
    }*/
    expect(component.id).toBe('nuevo');
  });

  // Esto funciona en Angular < 6 o 6, en la versión actual la 13,
  // esto ya no se usa así, actualicé las pruebas a la nueva forma
  /*
  it( 'Debe de redireccionar a Médico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( ['medico', '123'] );


  });


  it( 'Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push( { id: 'nuevo' } );

    expect( component.id ).toBe('nuevo');


  });
  */

});
