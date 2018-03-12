

try{
  throw new Error('Nombre error');
}

catch(e){
  registroError(e);
}

finally{
  console.log("Finalmente");
}

function registroError(e){
  var ahora = new Date()
  console.log("Se registro un error ", e , "a las: ", ahora);
}
