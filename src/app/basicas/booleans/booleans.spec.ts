import {usuarioIdentificado} from "./booleans";

describe('Pruebas de booleans', () => {

  it('Debe de regresar un true ', function () {
    const resp = usuarioIdentificado()

    // expect(resp).toBe(true)
    // expect(resp).toBeTrue()
    // expect(resp).toBeTruthy()
    // la Negación puede ser asi o usar uno que evalué un false
    // expect(resp).not.toBeTruthy()

    expect(resp).toBe(true)
  });

})
