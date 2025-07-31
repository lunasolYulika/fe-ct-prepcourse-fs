function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  console.log(string)
  if (string.length > 0){
    let texto_invertido = ""    
    for (let i = string.length-1; i >= 0; i--) {
      texto_invertido += string[i]    
    }
    console.log(texto_invertido === string)
    return texto_invertido === string
  }


}
  esPalindromo("laal")

module.exports = esPalindromo;