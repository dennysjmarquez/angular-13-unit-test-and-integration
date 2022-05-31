import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedias/spies/medicos.component';
import { MedicoComponent } from './intermedias2/medico/medico.component';
import { HospitalComponent } from './intermedias2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedias2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './avanzado/rutas/app.routes';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
	declarations: [
		AppComponent,
		MedicosComponent,
		MedicoComponent,
		HospitalComponent,
		IncrementadorComponent,
		NavbarComponent,
  RouterMedicoComponent,
	],
	imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
