function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  if (string.length > 0){
    let texto_invertido = ""    
    for (let i = string.length-1; i >= 0; i--) {
      texto_invertido += string[i]    
    }
    return texto_invertido === string
  }
}

module.exports = esPalindromo;