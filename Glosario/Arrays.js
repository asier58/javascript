// Sacar información de Arrays

const personajes = [ 'Goku', 'Wigetta', 'Persona Random que muere'];

console.log(personajes);
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;
console.log( p1 );

const [,p2] = personajes;
console.log( p2 );
//

const retonarArray = () => ['ABC', 123];

const arr = retonarArray();
const [letras, numeros] = retonarArray();

console.log(arr);
console.log(letras, numeros);

//
const usestate = (valor) =>  [valor, ()=> {
        console.log('Hola Mundo')
    }];
const arr2 = usestate('Goku' );
arr2[1] ();

//
const [nombre,setNombre] = usestate('Goku');
console.log(nombre);
setNombre();
