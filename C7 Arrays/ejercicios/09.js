function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if (array.length > 0 )
      return array[Math.random()* array.length]
}

module.exports = obtenerElementoAleatorio;
