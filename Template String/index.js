const nombre = "Asier";
const apellido = "iglu";

// Dos maneras de concatenar
// const nombrecompleto = nombre + " " + apellido ;
nombrecompleto = `
${ nombre} 
${ apellido} 
` ;
// Si loe pones así tiene hasta saltos de linea

console.log(nombrecompleto);

function getsaludo(nombre){
    return 'Hola ' + nombre; 
}
 
console.log( `Este es un texto: ${ getsaludo() } `);