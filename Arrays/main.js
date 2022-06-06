//Arrays
let autos =  new Array('BMW','Volvo'); 
//Otra manera
const coches = ['BMW','Volvo'];
console.log(coches);

// Indexar
console.log(coches[0]);
for(let i = 0;i<coches.length;i++){
    console.log(coches[i]);
}

coches[0] = "land rover";
//Maneras de introducir elementos en un array
console.log(coches[0]);

coches.push("BMW");
console.log(coches[0]);

for(let i = 0;i<coches.length;i++){
    console.log(coches[i]);
}

//otra manera
coches[coches.length] = "Tesla";
for(let i = 0;i<coches.length;i++){
    console.log(coches[i]);
}
console.log(typeof coches);

console.log(Array.isArray(coches));

console.log(coches instanceof Array);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//
const arreglo = [1,2,3,4,5,6];
arreglo.push();

let arreglo2 = [arreglo, 7];

arreglo2 = [... arreglo, 6];

// Aplica la función creada al array entero. Es como un for donde numero coge todos los valores del array
const arreglo3 = arreglo2.map(function(numero){

    
    return numero * 2;

});



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);




