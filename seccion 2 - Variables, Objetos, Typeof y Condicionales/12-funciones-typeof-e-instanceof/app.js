function identifica(param){
  console.log(typeof param);
  console.log(param instanceof Persona);
}

function Persona(){
  this.nombre = "Felipe";
  this.edad   = 21;
}

var felipe = new Persona();

identifica(felipe);
