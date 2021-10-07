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
