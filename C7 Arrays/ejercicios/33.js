function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let cant1 = str1.length
  let cant2 = str2.length
  let cant3 = str3.length
  let total = ""
  let i = 0

  while (i < cant1 || i < cant2 || i < cant3){
    if (i < cant1)  total += str1[i]
    if (i < cant2)  total += str2[i]
    if (i < cant3)  total += str3[i]
    i++
  }
  return total

}

module.exports = combine;