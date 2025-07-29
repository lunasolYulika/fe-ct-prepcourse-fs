function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
/* n:5   sum:0    i:1   
   sum:1    i:1    
   sum: 3   i:2
   sum: 6    i:3
   i: 4     sum:10
   i:5    sum:15
   i:6   sum 15
*/

   let sum = 0
   for (let i=1; i<=n ;i++){
      sum +=i
      if (sum >100) break
   }
   return sum
}

module.exports = sumarHastaNConBreak;
