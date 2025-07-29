function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  // -5,5
if (a <= 0 || b <= 0 ) return 0
let min = Math.min(a, b);
let max = Math.max(a, b);
let prod = 1
  for (let i=min; i <= max; i++){
    prod *= i;
  }
  return prod;
}

module.exports = productoEntreNúmeros;