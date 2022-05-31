import {Jugador2} from './jugador2';

describe('Jugador 2 emit', () => {
  let jugador: Jugador2;

  // Antes de cada una de las pruebas
  beforeEach(() => (jugador = new Jugador2()));

  it('Debe de emitir un evento cuando el jugador recibe un golpe', () => {
    let newHp = 0;

    jugador.hpChange.subscribe((hp) => (newHp = hp));

    jugador.resibeGolpes(1000);

    expect(newHp).toBe(0);
  });

  it('Debe de emitir un evento cuando el jugador recibe un golpe y sobrevivir cuando es menos de 100', () => {
    let newHp = 0;

    jugador.hpChange.subscribe((hp) => (newHp = hp));

    jugador.resibeGolpes(50);

    expect(newHp).toBe(50);
  });
});
