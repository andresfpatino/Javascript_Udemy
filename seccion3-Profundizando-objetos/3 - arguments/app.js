
var arguments = 10;

function miFuncion(a,b,c,d){

  if (arguments.length !=4) {
    console.error("La funcion necesita 4 parametros");
    alert("La funcion necesita 4 parametros")
    return;
  }
  //console.log( arguments );
  console.log(a + b + c + d);
}

miFuncion(10, 20, 30, 40, 50, 60, 70);
