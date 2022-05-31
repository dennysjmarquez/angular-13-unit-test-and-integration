import { FormBuilder } from '@angular/forms';

import { Form } from './form';

describe('Froms', () => {
	let component: Form;

	// Antes de cada una de las pruebas
	beforeEach(() => {
		component = new Form(new FormBuilder());
	});

	it('Debe de crear un formulario con dos campos, email y password', () => {
		expect(component.form.contains('email')).toBeTruthy();
		expect(component.form.contains('password')).toBeTruthy();
	});

	it('El email debe de ser obligatorio', () => {
		const control = component.form.get('email');
		control?.setValue('dennysjmarqez@gmail.com');
		expect(control?.errors?.['required']).not.toBeTruthy();
	});

	it('El email debe de ser un correo válido', () => {
		const control = component.form.get('email');
		control?.setValue('dennysjmarqez@gmail.com');
		expect(control?.errors?.['email']).not.toBeTruthy();
	});
});
