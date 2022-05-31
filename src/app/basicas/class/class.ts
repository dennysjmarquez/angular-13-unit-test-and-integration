export class Jugador {
	hp: number;

	constructor() {
		this.hp = 100;
	}

	resibeGolpes(golpe: number) {
		if (golpe >= 100) {
			this.hp = 0;
		} else if (this.hp - golpe < 0) {
			this.hp = 0;
		} else {
			this.hp -= golpe;
		}

		return this.hp;
	}
}
