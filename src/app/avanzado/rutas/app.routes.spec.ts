import { APP_ROUTES } from './app.routes';
import { MedicoComponent } from '../../intermedias2/medico/medico.component';

// Probando la existencia de una ruta en particular
describe('Rutas principales', function () {
	it('Debe de existir la ruta /medico/:id', function () {
		expect(APP_ROUTES).toContain({ path: 'medico/:id', component: MedicoComponent });
	});
});
