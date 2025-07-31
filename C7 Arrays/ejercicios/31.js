function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let texto_invertido = ""
  for (let index = texto.length-1; index >= 0; index--) {
    texto_invertido += texto[index]    
  }
  return texto_invertido
}

module.exports = invertirTexto;
