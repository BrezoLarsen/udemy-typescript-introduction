/* Exportando desde el archivo: 6-desestructuracion-funciones.ts */
import { calcularIVA2, Producto } from './06-desestructuracion-funciones';

const carrito: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    }
];

const [total, iva] = calcularIVA2( carrito );

console.log('Total: ', total);
console.log('IVA: ', iva);

/* cuando importamos una función desde otro archivo, TS ejecuta todo el archivo
con la excepción de las interfaces (que no ejecuta todo el archivo) */