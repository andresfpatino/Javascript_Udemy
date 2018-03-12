
// Ejemplo de una funcion
function primeraFuncion() {
    var a = 20;
    console.log(a);
}

primeraFuncion();

// Parametros de las funciones
function imprimir(nombre,apellido){

    apellido = apellido || "xxx"; // si apellido esta vacio coloca las xxx
    console.log(nombre + " " + apellido);
}
imprimir("Felipe", "Patiño");


// Parametros de funciones como arreglos
function imprimir2(persona){
    console.log(persona.nombre + " " + persona.apellido);
}

imprimir2({
    nombre: "Juan",
    apellido: "Padilla"
});

// Funcion anonima
function imprimir3(fn){
    fn();
}
imprimir3(function(){
    console.log("Función anónima");
});

// Funcion explicita
function imprimir4(fn){
    fn();
}
var miFuncion = function(){
    console.log("Función explicita");
}
imprimir4(miFuncion);