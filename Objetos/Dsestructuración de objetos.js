// Asignación desestructurada
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {

        nombre: 'Tony',
        edad: 45,
        clave: 'IronMan'

};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
//Asignacion desestructurada

const{nombre} = persona;

console.log(nombre);
 
const{ edad:edad2} = persona;

console.log(edad2);

const{ edad, clave, nombre:nombre2} = persona;
console.log(edad, clave, nombre2);

const retornarPersona = (usuario) =>{

    console.log(usuario);
}

retornarPersona(persona);

//Si solo quieres sacar el nombre
const retornarPersona2 = ({ nombre }) =>{

    console.log(nombre);
}

retornarPersona2(persona);

const userContext = ({ clave, edad, nombre }) =>{

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.22,
            lng: -12.34
        }
    }
};

const avenger =  userContext(persona);
console.log(avenger);

const {nombreClave, anios, latlng: {lat, lng}} = userContext(persona);


console.log(nombreClave, anios);
console.log(lat,lng);