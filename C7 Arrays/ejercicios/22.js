function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  tabla = []
  for (let index = 0; index < 11; index++) {
    tabla.push(6*index)
  }
  return tabla
}

module.exports = tablaDelSeis;
