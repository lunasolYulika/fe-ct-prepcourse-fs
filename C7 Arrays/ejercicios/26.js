function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  if (n != 0){
    for (nro of secuencia){
      if (nro >= n && nro % n === 0) return nro
    }
  }

}

module.exports = encontrarPrimerMultiploDeN;