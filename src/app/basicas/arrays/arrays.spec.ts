import {obtenerRobots} from "./arrays";


/*
* Para Saltar pruebas se agrega una x a describe o a it
* ej: xdescribe, xit
* */

xdescribe('Prueba de Arrays', () => {

  it('Debe de retornar almenos 3 Robots', ()=>{
    const rep = obtenerRobots()

    expect(rep.length).toBeGreaterThanOrEqual(3)

  })

  it('Debe de existir en el Array Terminator y Cosmic Hulk', ()=>{
    const rep = obtenerRobots()

    expect(rep).toContain('Terminator')
    expect(rep).toContain('Cosmic Hulk')

  })

})
