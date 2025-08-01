function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let lista = []
  // num : 3

  for (let i = 0; i < 10 ; i++){

    if (i == 4) continue
    num+=2
    lista.push(num)
  }
  return lista
  
  continueStatement(10)



  
  /*let lista = []
  let cantIte = 0
  suma = num
  while (suma != cantIte && cantIte < 10){
    if (cantIte == 5) continue
    suma += 2
    lista.push(suma)
    cantIte++
  }
  return lista*/
}

module.exports = continueStatement;
