function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  /*
  numero = 4
  index = 2 menor a 4
  if 4 % 2 

  */ 
    if (numero <= 1) return false
    for (let index = 2; index < numero; index++) {
      if (numero%index === 0){return false}
    }
    return true
  }


module.exports = esNumeroPrimo;
