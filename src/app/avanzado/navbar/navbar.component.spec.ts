import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavbarComponent],
			// RouterTestingModule.withRoutes([]) le da soporte a nuestro router en las pruebas
			imports: [RouterTestingModule.withRoutes([])],
		});
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Debe de tener un link a la página de médicos', () => {
		const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const linkMedico = debugElements.some((item) => item.attributes['routerLink'] === '/medicos');
    expect(linkMedico).toBeTruthy();
	});
});
