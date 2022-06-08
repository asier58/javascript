//Dos maneras de hacer una funcion
const saludar = function ( nombre ) {
    return ( 'Hola '  + nombre);
}
console.log(saludar('Antonio'));

//------------------------------------
const saludar2 = function ( nombre ) {
    return (`Hola, ${ nombre}`);
}
console.log(saludar2('Juan'));

// Expresiones lambda
const saludar3 = nombre => {
    return (`Hola, ${ nombre}`);
}
//Si le quitas los corchetes tienes que quitar el return
const saludar4 = nombre =>   (`Hola, ${ nombre}`);

// Si no le pasas parametros tienes que poner parentesis vacíos
const saludar5 = () =>   (`Hola, Mundo`);

console.log(saludar3('PEPE'));
console.log(saludar4('Goku'));
console.log(saludar5());

//Devolver Objeto. Para que no falle hay que abrir y cerrar parentesis entre los corchetes
const getUser = () => ({
        uid:'ABC',
        username: 'Cositas' 
    });
const user = getUser();
console.log(getUser());
console.log(user);
