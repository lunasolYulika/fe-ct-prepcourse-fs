function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  if (numero < 1) return false
  if (numero === 1) return true;
  let resultado = 1
  while (resultado < numero){
        resultado *=2
  }

  return resultado === numero
}

module.exports = esPotenciaDeDos;
