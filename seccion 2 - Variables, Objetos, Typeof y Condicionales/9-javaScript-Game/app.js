
function Jugador(nombre){
  this.nombre = nombre;
  this.pointsLive = 100;
  this.specialPoints = 100;

  this.curar = function(jugadorObjetivo){
    if(this.specialPoints >= 40){
      this.specialPoints -= 40;
      jugadorObjetivo.pointsLive += 20;
    }else{
      console.info(this.nombre + " no tiene SpecialPoints");
    }
    this.estado(jugadorObjetivo);
  }

  this.tirarFlecha = function (jugadorObjetivo){
    if (jugadorObjetivo.pointsLive > 40) {
        jugadorObjetivo.pointsLive -= 40;
    }else{
      jugadorObjetivo.pointsLive = 0;
        console.error(jugadorObjetivo.nombre + " MURIO !!");
    }
    jugadorObjetivo.pointsLive -= 40;
    this.estado(jugadorObjetivo);
  }

  this.estado = function (jugadorObjetivo) {
    console.info(this);
    console.info(jugadorObjetivo);
  }

};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);
