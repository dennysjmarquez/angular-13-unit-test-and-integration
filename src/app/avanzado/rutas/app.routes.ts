import { Routes } from '@angular/router';
import { HospitalComponent } from 'src/app/intermedias2/hospital/hospital.component';
import { IncrementadorComponent } from 'src/app/intermedias2/incrementador/incrementador.component';
import { MedicoComponent } from 'src/app/intermedias2/medico/medico.component';

export const APP_ROUTES: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent },
];
