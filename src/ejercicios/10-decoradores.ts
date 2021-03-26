/* 
    Son propios de Typescript
    Los decoradores sirven para cambiar las clases en el momento en el que son definidas (expanden o añaden funcionalidad)
    Angular los utiliza mucho
    A veces VS nos devuleve un error y debemos colocar experimentalDecorators=true en tsconfig.json
*/


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
      reportingURL = "http://www...";
      hello = "override"
    };
  }

@reportableClassDecorator
class MiClase {
    public miPropiedad: string = 'ABCDE';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiClase);

// IMPRIME
/* class extends constructor {
        constructor() {
            super(...arguments);
            this.reportingURL = "http://www...";
            this.hello = "override";
        }
    }
*/



const miClase = new MiClase;
console.log(miClase.imprimir);

