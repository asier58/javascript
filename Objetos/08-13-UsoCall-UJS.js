let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return this.nombre + ' ' + this.apellido + " "+ titulo + " " + tel ;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto("ingeniero", 67533221) );

console.log( persona1.nombreCompleto.call( persona2, "ingeniero", 67533221 ) );