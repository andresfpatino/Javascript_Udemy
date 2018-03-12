
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        pais: "Colombia",
        ciudad: "Cali",
        edificio: {
            nombre: "Santa Monica",
            telefono: "222-333",
        }
    }
};

// Notacion de punto
persona.direccion.zipcode = 0057;
var edificio = persona.direccion.edificio;
edificio.numPiso = "8vo piso";
//console.log(persona);


// Notacion de corchete
var campo = "edad";
console.log(persona["direccion"]["pais"]);
console.log(persona[campo]);

