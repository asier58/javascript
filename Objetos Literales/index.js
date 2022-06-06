//Diccionarios
const persona = {
    nombre: 'Tony',
    apellido: "Stark",
    edad: 46,
    direccion:{
        calle: 'consulado de bilbao',
        numero: 27
    }
};

console.log ( {
    persona: persona
} );

console.table(persona);

//Anidar objetos dentro de objetos
//Paso por referencia, se pierde informacición de persona
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona);

//paso por valor spread --> {... persona}
const persona3 = {... persona}
console.log(persona3)


