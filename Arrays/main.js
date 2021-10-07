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




