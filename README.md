# Proyecto (Pruebas de integración y Unitarias (Unit testing) en Angular)

Angular 13

### Las pruebas están separadas en 4 categorías:

* **Básicas**
  <br/><br/>
  En estas pruebas verán la comprobación de Arrays, La comprobación de los booleans y las diferentes formas de hacer
  esto
  <br/><br/>
  Ej.
  `  expect(resp).toBe(true)
  expect(resp).toBeTrue()
  expect(resp).toBeTruthy()
  `
  <br/><br/>
  `// la Negación puede ser asi o usar uno que evalué un false`
  <br/><br/>
  `expect(resp).not.toBeTruthy()`
  <br/><br/>
  También muestro el cómo hacer un test de funciones que están dentro de una class, probando el return de la misma, Pruebas con números usando **toBe**,
  string uso de **toContain** **expect(typeof resp).toBe('string')** familiarización con la evaluación de expect,
  siclos de vida del describe de [Jasmine](https://jasmine.github.io/api/3.10/global), tales como **beforeAll**, **beforeEach**,
  **afterAll**, **afterEach** y en que caso usar cada uno de ellos.
  <br/><br/>

* **Intermedias**
  <br/><br/>
  Esta sección trabaja con pruebas un poco más complejas y reales:

1. Pruebas sobre Event Emitter
2. Formularios
3. Validaciones
4. Saltar pruebas
5. Espías
6. Simular retornos de servicios
7. Simular llamado de funciones

Esta sección da fundamentos muy valiosos para realizar pruebas unitarias y de integración
Se hacen comprobaciones simples de un componente haciendo usos de cosas simples como estas
component = `new Form(new FormBuilder())`,
aquí ya se empieza a ver los `spyOn()` para espiar algunos métodos de algunos servicios y hacer a las pruebas en
relación con los resultados de estos métodos.
<br/><br/>

* **Intermedias 2**
  <br/><br/>
  Esta sección se enfoca en las pruebas de integración:
  <br/>

1. Aprender la configuración básica de una prueba de integración
2. Comprobación básica de un componente
3. TestingModule
4. Archivos SPEC generados automáticamente por el AngularCLI
5. Pruebas en el HTML
6. Revisar inputs y elementos HTML
7. Separación entre pruebas unitarias y pruebas de integración

Ya aquí empiezo a usar a `TestBed`, `ComponentFixture`, `configureTestingModule` que es una copia limitada de lo que
sería el `@NgModule`, pero para las pruebas y
donde se va a poder insertar módulos componentes y servicios, también controlo ya aquí lo que es el siclo de control de
cambios de Angular mediante el uso de detectChanges
para que se puedan hacer pruebas de integración, ya que con esto se actualiza el HTML.
<br/><br/>
En esta sesión ya empiezo a usar a `debugElement.query()` y `By.css` para acceder al HTML y hacer las comprobaciones
necesarias en una prueba de integración.
<br/><br/>

* **Avanzadas**
  <br/><br/>
  Esta sección es un verdadero reto, especialmente entre más te vas acercando al final de la misma. Aquí veremos temas
  como:

1. Revisar la existencia de una ruta
2. Confirmar una directiva de Angular (router-outlet y routerLink)
3. Errores por selectores desconocidos
4. Reemplazar servicios de Angular por servicios falsos controlados por nosotros
5. Comprobar parámetros de elementos que retornen observables
6. Subject
7. Gets

En estas pruebas haremos comprobaciones de los params del **ActivatedRoute**, y comprobaremos la navegación del **Router**,
con **toHaveBeenCalledWith** Verificando que se llame con los parámetros indicados para la ruta ruta en cuestion
<br/><br/> Ej. medico/123
`navigate(['medico', '123'])`
<br/><br/>
Uso de `debugElement.queryAll(By.directive(RouterLinkWithHref))` para encontrar todos los links y comprobar la ruta de uno de ellos, todo esto son proveas ya de integración.
<br/><br/>

## DEMOS:

<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@dennysjmarquez/angular-13-unit-test-and-integration-demo?lite=true"></iframe>


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
