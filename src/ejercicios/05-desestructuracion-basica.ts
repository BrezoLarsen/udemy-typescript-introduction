interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    annio: number;
}

const reprodutor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        annio: 2015
    }
}

console.log('El volumen actual es de: ', reprodutor.volumen);
console.log('El segundo actual es el: ', reprodutor.segundo);
console.log('La canción es: ', reprodutor.cancion);
console.log('El autor es: ', reprodutor.detalles.autor);


/* Desestructuración de objetos - lo que importa es el nombre, no el orden */
const { volumen, segundo, cancion, detalles } = reprodutor; 
const { autor } = detalles;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es el: ', segundo);
console.log('La canción es: ', cancion);
console.log('El autor es: ', autor);

/* Si tenemos otra variable con el nombre autor, podemos ponerle un "nombre" a nuestra variable: */
const { autor: autorCancion } = detalles;
console.log('El autor es: ', autorCancion);



/* Desestructuración de Arrays - lo que importa es el orden, no el nombre  */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);

const [ p1, p2, p3 ] = dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

/* Si por ejm. solo nos interesa la tercera posición, podemos dejar solo las comas: */
const [ , , pos3 ] = dbz;
console.log('Personaje 3: ', pos3);
