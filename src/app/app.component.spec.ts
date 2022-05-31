import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			// RouterTestingModule.withRoutes([]) le da soporte a nuestro router en las pruebas
			imports: [RouterTestingModule.withRoutes([])],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'pruebas'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('pruebas');
	});

	/*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pruebas app is running!');
  });*/

	// Confirmar que exista un router-outlet
	it('Debe de tener un router-outlet', function () {
		const fixture = TestBed.createComponent(AppComponent);
		const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
		expect(debugElement).not.toBeNull();
	});
});
