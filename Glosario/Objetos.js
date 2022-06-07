// Extraer información de objetos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);



// const{edad} = persona;
// const{clave} = persona;
const{nombre,edad,clave} = persona;

const{nombre:nombreVariable } = persona;

const retornarpersona = (persona) => {

    console.log(persona)
}
const retornarpersona2 = (nombre, edad, clave = 'Hitler') => {

    console.log(nombre, edad, clave)
}

retornarpersona(persona);
retornarpersona2(nombre,edad);

console.log(edad);
console.log(clave);
console.log(nombreVariable);

// 
const retornarpersona3 = ({nombre, edad, clave, rango= 'Pesado'}) => {

    return{
        nombreClave: clave,
        anios:edad,
        latlng: {
            lat: 14.5,
            lng: -1234.5
        }
    }
}

const avenger = retornarpersona3(persona);
const {nombreClave, anios, latng:lat, lng} = retornarpersona3(persona);
console.log(avenger);
console.log(nombreClave, anios);
//







