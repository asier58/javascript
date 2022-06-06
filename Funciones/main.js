//UNA FUNCION SE PUEDE LLAMAR INCLUSO ANTES DE QUE SEA DECLARADA PORQUE CUANDO SE INICIA EL PROGRAMA SE CARGAN LAS FUNCIONES!!!!!!(HOISTING)
//Declaración de una función LA SUMA ENTRE PARENTESIS AL CONCATENAR!!!!
function myfunction (a,b){
    console.log("La suma es: "+ (a+b))
}

myfunction(5,6);

//Return
function myfunction1 (a,b){
    return (a + b);
}

let suma = myfunction1(20,40);
console.log(suma);

//Asignar función a variable
let x = function(a, b){return a + b};
let variable = x(1,2);
console.log(variable);

//
(function (a , b){
    console.log("ejecutando la funcion " + (a + b ))
})(3 , 4);

//
console.log(typeof myfunction1);

function myfuncton2 (x, y){
    console.log(arguments[1]);

}
myfuncton2(2 , 3);

//Funciones flecha
const sumarFuncionTipoFlecha = (a , b) => a + b;
console.log(sumarFuncionTipoFlecha(20, 30));

//
// let resultado = sumarTodoprueba(1, 3, 4, 6, 7)
// console.log(resultado);

// function sumarTodoprueba(){
//     let suma = 0;
//     for(let i = 0 ; arguments.length; i++){
//         suma += arguments[i];
//     }
//     return suma;
// }

//Paso por valor
let valor = 5;
function cambiarValor(a){
    a = 20;
    return a;
}
console.log(cambiarValor(valor))
console.log(valor);

//Paso por referencia
const persona = {
    nombre: "Illo",
    apellido: "Juan"
}
function cambiarValorPersona(p1){
    p1.nombre = 'Carlos';
}
cambiarValorPersona(persona);
console.log(persona)


//
const saludar = function (nombre){

    return 'Hola, ' + nombre;
}

console.log(saludar('PEPE'));


const saludar2 = (nombre) =>{

    return 'Hola, ' + nombre;
}
const saludar3 = (nombre) => 'Hola, ' + nombre;

const saludar4 = () => 'Hola, PEPE' ;
console.log(saludar2('PEPE'));
console.log(saludar3('PEPE'));
console.log(saludar4('PEPE'));

const getUser = () =>{
    return{
        uid: 'ABCD123',
        username : 'EL GOKU_145'
    }
}

const getUser2 = () =>(
    {
        uid: 'ABCD123',
        username : 'EL GOKU_145'
    })


console.log(getUser() )
console.log(getUser2() )




function getUsuarioActivo (nombre) {

    return {
        uid: 'ABC678',
        username: nombre
    }
};
const activo = getUsuarioActivo('Alberto');
console.log(activo);


const usuarioFlecha = () => {
    return {
        uid: '123salsa',
        username: 'EL LUCAS03'
    }
};

const usuarioFlecha2 = (nombre) => ({
    
        uid: '123salsa',
        username: nombre
    
})
console.log(usuarioFlecha() );
console.log(usuarioFlecha2('PEPE') );