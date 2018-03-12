
function Persona(){
  this.nombre   = "Felipe";
  this.apellido = "Patiño";
  this.edad     = 21;
  this.pais     = "Colombia";
}

Persona.prototype.imprimirInfo= function(){
  console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")");
}

var pipe = new Persona();


Number.prototype.esPositivo = function(){
  if( this > 0 ){
    return true;
  }else{
    return false;
  }
}
