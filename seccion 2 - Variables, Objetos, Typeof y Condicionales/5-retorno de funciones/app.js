function obtenerAleatorio(){
  return Math.random();
}
console.log(obtenerAleatorio()+5);

function obtenerNombre(){
  return "Felipe";
}
var nombre = obtenerNombre();
console.log(nombre + " Patiño");

function esMayor05(){
  if(obtenerAleatorio()>0.5){
    return true;
  }else{
    return false;
  }
}

if (esMayor05()) {
  console.log("Es mayor a 0.5");
}else{
  console.log("Es Menor a 0.5");
}


function crearPersona(nombre,apellido){
  return{
    nombre: nombre,
    apellido: apellido
  }
}
var persona = crearPersona("Felipe","Patiño");
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

function creaFuncion(){
  return function(nombre){
    console.log("Me creo "+nombre);
    return function(){
      console.log("Segunda funcion");
    }
  }
}

var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();
