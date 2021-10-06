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