function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let cantPar = 0
  for (const n of numeros) {
    if (n % 2 === 0) cantPar++
  }
  return cantPar
}

module.exports = contarParesConContinue;
