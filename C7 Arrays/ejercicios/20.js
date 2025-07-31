function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let index = 0; index < array.length-1; index++) {
    if (array[index]!= array[index+1]) return false    
  }
  return true
}

module.exports = todosIguales;
