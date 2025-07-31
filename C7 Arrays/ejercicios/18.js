function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0 
  for (let index = 0; index < resultadosTest.length; index++) {
    suma += resultadosTest[index]
  }
  return suma/resultadosTest.length
}

module.exports = promedioResultadosTest;
