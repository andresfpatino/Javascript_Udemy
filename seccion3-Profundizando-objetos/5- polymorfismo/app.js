function determinaDato(a){
    if(a === undefined){
      console.log("A es undefined...");
    }
    if( typeof a === "number"){
      console.log("A es un numero ");
    }

    if( typeof a === "string"){
      console.log("A es un texto");
    }

    if(typeof a === "object"){
      console.log("A es un objeto");
      if( a instanceof Number){
        console.log("A es un objeto numerico");
      }
    }
}

var b = new Number(3);

console.log(b);

determinaDato (b);
