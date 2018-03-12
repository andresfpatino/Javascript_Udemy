
function Persona(nombre,apellido){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 21;

  this.printPerson = function(){
    return this.nombre + " " + this.apellido + " (" + this.edad + ")";;
  }

}

var juan = new Persona("Felipe","Patiño");

console.log(juan.printPerson());
