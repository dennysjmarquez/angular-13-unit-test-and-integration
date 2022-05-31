import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
	selector: 'app-medico',
	templateUrl: './medico.component.html',
	styles: [],
})
export class MedicoComponent implements OnInit {
	private medicos: any[] = [];

	constructor(private medicoService: MedicoService) {}

	ngOnInit(): void {}

	holaMundo(name: string) {
		return `Hola Mundo ${name}`;
	}

	getMedicos() {
		this.medicoService.getMedicos().subscribe((medicos) => (this.medicos = medicos));
	}
}
