
const activo = true;

let mensaje = '';

if(activo){
    mensaje= 'activo'
} else{
    mensaje = 'Inactivo'
}
console.log(mensaje);

const mensaje2 = (activo) ? 'Activo' :  'Inactivo';
console.log(mensaje2);
// Cuando solo quieres hacer algo si se cumple la condición
// if(activo){
//     mensaje= 'activo'
// }
const mensaje3 = activo && 'Activo';

console.log(mensaje3);