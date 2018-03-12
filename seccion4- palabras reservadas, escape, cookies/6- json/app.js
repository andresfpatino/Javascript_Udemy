

var objetoJS = {
  nombre: "Felipe",
  edad: 22,
};

console.log("Objeto Literal", objetoJS);

var jsonString = JSON.stringify(objetoJS);
console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);
