import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MedicoComponent', () => {
	let component: MedicoComponent;
	let service: MedicoService;
	let fixture: ComponentFixture<MedicoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MedicoComponent],
			providers: [MedicoService],
			imports: [HttpClientTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		TestBed.inject(MedicoService);
		fixture = TestBed.createComponent(MedicoComponent);
		service = fixture.debugElement.injector.get(MedicoService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Debe de crearse el componente', () => {
		expect(component).toBeTruthy();
	});

	it('Debe de retornar el nombre que se pase', () => {
		const name = 'Dennys';
		const msg = component.holaMundo(name);
		expect(msg).toContain(name);
	});
});
