function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  /*
  c 0 num 5
  num 10 c1
  num 15 c2
  num 20 c3
  num 25 c4
  num 30 c5
  num 35 c6
  num 40 c7
  num 50 c8
  */
  let c= 0
  do{
    num+=5
    c++
  }while (c < 8)
  return num  
}

module.exports = doWhile;