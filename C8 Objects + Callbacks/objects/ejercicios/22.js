function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   for (let letra in str1){
      if (str2.includes(letra)==false) return false
   }
   for (let letra in str2){
      if (str1.includes(letra)==false) return false
   }
   return true
   
}

module.exports = esAnagrama;
