import {Jugador} from './class';

describe('Pruebas de classe', () => {
  let jugadorClass: Jugador;

  // Antes que todas lass pruebas
  beforeAll(() => {
    console.log('beforeAll');
  });
  // Antes de cada una de las pruebas
  beforeEach(() => {
    console.log('beforeEach');

    jugadorClass = new Jugador();
  });

  // Después que todas lass pruebas
  afterAll(() => {
    console.log('afterAll');
  });
  // Después que cada una de las pruebas
  afterEach(() => {
    console.log('afterEach');
  });

  it('Se retorna 80 hp si recibe 20 golpes', () => {
    const rep = jugadorClass.resibeGolpes(20);

    // const jugador = new Jugador();

    expect(rep).toBe(80);
  });

  it('Debe de retorna 50 hp si recibe 50 golpes', () => {
    const rep = jugadorClass.resibeGolpes(50);

    // const jugador = new Jugador();

    expect(rep).toBe(50);
  });

  it('Debe de retornar 0 hp si recibe 100 golpes o más', () => {
    const rep = jugadorClass.resibeGolpes(100);
    expect(rep).toBe(0);
  });
});
