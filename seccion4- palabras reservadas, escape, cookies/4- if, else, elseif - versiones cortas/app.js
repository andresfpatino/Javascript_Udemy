
var nota = 55;

if (nota >= 90) {
  console.log("A");
}else if( nota >= 80){
  console.log("B");
}else if( nota >= 70){
  console.log("C");
}else if( nota >= 60){
  console.log("D");
}else{
  if (nota < 50) {
    console.log("-F");
  }console.log("Algo más...");

}

console.log("Termino el código");


var a = 10;
var b = 20;
var c= (a > b) ? function(){
    console.log("A es mayor a B");
    return a;
}(): function(){
  console.log("B es mayor a A");
  return b;
}();

console.log(c);


function getNombre (nombre){
  var nomb = null || null || null || null || 123;
  console.log(nomb);
}
getNombre();
