// describe('Pruebas de String')
// it('Prueba Debe de retornar un String')

import {mensaje} from "./string";

describe('Pruebas de Strings', () => {

  it('Debe de retornar un String', () => {
    const resp = mensaje('Dennys')

    expect(typeof resp).toBe('string')

  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Dennys'

    const resp = mensaje(nombre)

    expect(resp).toContain(nombre)

  });

})
