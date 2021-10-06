let contador = 5;
contador++;
console.log(contador);

contador--;
console.log(contador);

//Si incremento o decremento está antes de una igualdad;

let z = 4;

z = ++contador;
console.log(contador);
console.log(z);

//Primero se le asigna a z y luego se le suma a contador
z = contador++;
console.log(contador);
console.log(z);

//
let a = 10;
if(a % 2 == 0){
    console.log("es par")
}
else{
    console.log("es impar")
}

if(a % 3 == 0){
    console.log("es par")
}
else{
    console.log("es impar")
}

// And ---------------------------> &&

// Or ----------------------------> ||

//Operador ternario

let resultado =  (3>2) ? "tres es mayor que dos" : "dos es mayor que tres";
console.log(resultado)
 
//Convertir string a integer
let minumero = "10";
console.log(typeof minumero);

let edad = Number(minumero);
console.log(typeof edad);

//Isnan para saber si el tipo de la variable es numero IS NOT A NUMBER

let casa = "casa";

if( isNaN(casa) ){
    console.log("no es numero");
}
