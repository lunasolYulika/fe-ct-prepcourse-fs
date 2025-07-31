function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let indiceRepetido
  for (let index = 0; index < numeros.length-1; index++) {
    indiceRepetido = numeros.indexOf(numeros[index],index+1)
    if (indiceRepetido != -1){
      return numeros[index]
    }
  }
}

module.exports = encontrarElementoRepetido;