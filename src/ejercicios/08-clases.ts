class Hero {
    private alterEgo: string; //esta propiedad solo es visible dentro de esta clase
    public edad: number; //se ve desde fuera de la clase
    static nombreReal: string; //podemos acceder al valor de esta propiedad sin crear una instancia de la clase
}

Hero.nombreReal;

const ironman = new Hero();
ironman.edad;


/* Diferencia entre clase e interface:
    Las interfaces no existen en JS, no aparecen en la consola del navegador, no podemos crear métodos dentro de ellas
    Con las clases podemos crear instancias 
*/
class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;

    imprimirNombre() {
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

interface Personaje2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: string;

    //No podemos crear métodos pero sí declararlos: función que retorna un string
    imprimirEdad?: () => number;
}

const hulk = new Heroe();
const spiderman: Personaje2 = {};



/* Constructor: función que se llama cuando creo una instancia de mi clase */
class Heroe2 {
    alterEgo: string;
    edad: number;
    nombreReal: string;

    constructor(alterEgo: string) {
        this.alterEgo = alterEgo;
    }
}

const batman = new Heroe2('Batman');
console.log(batman);



/*Normalmente veremos los constructores de esta manera: */
class Heroe3 {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal?: string
    ) {}
}

const thor = new Heroe3('Thor', 34);
console.log(thor);




/* Extender una clase */
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe4 extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal?: string
    ) {
        super( nombreReal, 'New York, USA' ); //llama al constructor de Persona Normal
    }
}

