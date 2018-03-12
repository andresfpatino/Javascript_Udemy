var arr = [
  true,
  {
    nombre: "Felipe",
    apellido: "Patiño"
  },
  function(){
    console.log("Estoy dentro de un arreglo");
  },
  function( persona ){
    console.log( persona.nombre + " " + persona.apellido);
  },
  [ "Fercho",
    "Carlos",
    "Hernan",
    "Melissa",
    [
      "Juan",
      "Martin",
      "Dilcia",
      function(){
        console.log(this);
      }
    ]
  ]
];

console.log(arr);
console.log( arr[0] );
console.log( arr[1].nombre + " " + arr[1].apellido );

arr[2]();
arr[3]( arr[1] );

console.log( arr[4][4][1] );

var arreglo2 = arr[4][4];

arreglo2[1] = "Pedrito!";

console.log(arreglo2);
console.log(arr);

arreglo2[3]();
