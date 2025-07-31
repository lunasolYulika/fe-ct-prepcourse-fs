function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (const texto of array) {
    if (texto.length >= 5){
      return texto
    }
  }

}


module.exports = obtenerPrimerStringLargo;
