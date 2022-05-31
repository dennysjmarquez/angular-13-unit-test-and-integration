import { EventEmitter } from '@angular/core';

export class Jugador2 {
	hp: number;
	hpChange = new EventEmitter<number>();

	constructor() {
		this.hp = 100;
	}

	resibeGolpes(golpe: number) {
		if (golpe >= this.hp) {
			this.hp = 0;
		} else {
			this.hp -= golpe;
		}

		this.hpChange.emit(this.hp);
	}
}
