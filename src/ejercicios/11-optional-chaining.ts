/*
    En TS, este símbolo: ? significa varias cosas.
*/


interface Pasajero {
    nombre: string;
    hijos?: string[];   // Esta propiedad es opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}

const pasajero2: Pasajero = {
    nombre: 'Luis',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero):void {

    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);

}

imprimeHijos(pasajero2); // Devuelve 2
imprimeHijos(pasajero1); // Devuelve 0 porque pasajero.hijos?.length es undefined