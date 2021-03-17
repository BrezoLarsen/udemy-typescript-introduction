function sumar(a:number, b:number): number {
    return a + b;
}

const sumarFecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base;
}

const resultado = multiplicar(5, 10); //returns 10

console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Nani',
    pv: 50,
    mostrarHp() {
        console.log(this.pv);
    }
}

curar(nuevoPersonaje, 20);