/* Desestructuración de argumentos en una función */

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung',
    precio: 150
}

const tablet: Producto = {
    desc: 'iPad',
    precio: 250
}

function calcularIVA(productos: Producto[]): number {
    
    let total = 0;

    productos.forEach((producto) => {
        total += producto.precio;
    })

    return total * 0.21;

}

const articulos = [telefono, tablet];
const iva = calcularIVA( articulos );

console.log('IVA: ', iva);



/* Desestructurando... */
export function calcularIVA2(productos: Producto[]): [number, number] {
    
    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    })

    return [total, total * 0.21];

}

const articulos2 = [telefono, tablet];
const [total, iva2] = calcularIVA2( articulos );

console.log('IVA: ', iva);


