function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  if (n === 0)  return 0
  let sum = 0;
  if ( n>0 ) {
    for( let i=1; i<=n ;i++ ){
        sum +=i
    } 
  }else{
    for( let i=1; i>=n ;i-- ){
        sum +=i
    } 
  }
  
  return sum
}

module.exports = sumarHastaN;
