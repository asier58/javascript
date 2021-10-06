//String doble comillas
var nombre = "Asier";
console.log(nombre);

//numerico
var numero = 1000;
console.log(numero);

//Objeto
var objeto = {
    nombre: "Juan",
    apellido: "Tremendatula",
    telefono: "6666666666"
}

console.log(objeto);
//Variable dinamica que se puede cambiar de tipo
nombre = 10;

console.log(typeof nombre);

console.log(typeof objeto);

//Boolean
var buleano = true;
console.log(typeof buleano);

// tipo de dato function
function myfunction(){}
console.log(myfunction);

//symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);
//tipo clase
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);

//undefined
var x;
console.log(x);
y = undefined;

//null
var y = null;
console.log(typeof y);

//arrays tipo object
var autos = ["bmw","audi","volvo"];
console.log(autos);
console.log(typeof autos);

//concatenar
var nombre = "asier";
var apellido = "iglu";
var nombrecompleto = nombre + " " + apellido;
console.log(nombrecompleto);

//toma el 219 como cadena
nombrecompleto = nombrecompleto + 129;
console.log(nombrecompleto);

nombre  = nombre +2 +4;
console.log(nombre);

nombre = nombre + (2+4);
console.log(nombre);

nombre = 2 + 4 + nombre;
console.log(nombre);

//************************************************************************************************************************************************************************************************
//Declaración de variables
let nm = "pepe";
console.log(nm);

const nm2 = "jj";
//nm2 = "kk";
console.log(nm2);

//Buenas practicas
let nmbreCompleto = "juan perez";
console.log(nmbreCompleto);

let xx,yy;

xx= 10, yy = 20;
let z = xx + y;
console.log(z);

//
let nombreCCompleto = "sin repetir";
let nombreccompleto = "sin repetir2";
console.log(nombreCCompleto);
console.log(nombreccompleto);






