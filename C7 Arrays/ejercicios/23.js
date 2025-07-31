function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let lista = []
  let cantIte = 0
  suma = num
  while (suma != cantIte && cantIte < 10){
    suma += 2
    lista.push(suma)
    cantIte++
  }
  if (suma === cantIte) return "Se interrumpió la ejecución"
  else return lista
}

module.exports = breakStatement;
