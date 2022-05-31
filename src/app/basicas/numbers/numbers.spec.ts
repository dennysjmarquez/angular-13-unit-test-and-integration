import {incrementar} from "./numbers";

describe('Pruebas de números', () => {

  it('Debe de retornar 100 si el número enviado es mayor que 100', function () {
    const numero = 300

    const resp = incrementar(numero)

    expect(resp).toBe(100)
  });

  it('Debe de retornar el número enviado + 1 si es menor a 100', function () {
    const numero = 30

    const resp = incrementar(numero)

    expect(resp).toBe(numero +1)
  });

})
