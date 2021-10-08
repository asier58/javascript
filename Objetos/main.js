let persona = {
    nombre: "Francisco",
    apellido: "Aguila",
    appelido2: "Real",
    email: "ibmkk",
    edad: 102,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido + " "+ this.appelido2;
    }
}

console.log(persona.nombreCompleto());

let persona2 =  new Object();

persona2.nombre = "Lucas";
persona2.apellido = "Pucas";

console.log(persona2);
console.log(persona2['apellido']);

//for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(persona2);
delete persona2.apellido;
console.log(persona2);

//Variables del objeto como array
let personaArray =  Object.values(persona);
console.log(personaArray);

//Como string variables del objeto
let personaString = JSON.stringify(persona);
console.log(personaString);

//Funcion como propiedad
//Getter y setter en objetos javascript
let persona3 = {
    nombre: "Francisco",
    apellido: "Aguila",
    appelido2: "Real tercero de dios",
    email: "ibmkk",
    edad: 102,
    idioma: "es",
    get nombreCompleto(){
        return this.nombre + " " + this.apellido + " "+ this.appelido2;
    },
   get lenguaje(){
        return this.idioma.toUpperCase();
    },
    set lenguaje(lang){
        return this.idioma = lang.toUpperCase();
    }

}
console.log(persona3.nombreCompleto)
console.log(persona3.lenguaje);
 persona3.lenguaje = "POR";
 console.log(persona3.lenguaje)

 //Construtores
function personaConstructor(nombre, apellido, apellido2, idioma){
        this.nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
        this.idioma = idioma;
        this.nombreCompleto = function(){
            return this.nombre + " " + this.apellido 
        }

}
let padre = new personaConstructor("Juan","perez","perez",);

console.log(padre);
console.log( padre.nombreCompleto() );

let objetoVacio = {};
let objetoVacio2 = new Object();

let array1 =  new Array();
let array2 = [];

//Prototype
personaConstructor.prototype.nombrePrototipo = "Herminio";
let padreej1 = new personaConstructor();
let padreej2 = new personaConstructor();
console.log(padreej1);
console.log(padreej1.nombrePrototipo);
