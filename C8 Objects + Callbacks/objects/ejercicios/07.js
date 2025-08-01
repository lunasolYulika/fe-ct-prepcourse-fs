function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   let sorted = []
   if (list.length>0){
      while (list.length > 0){
         let max = list[0]['a']
         let ind_max = 0
         for (let i = 0; i < list.length; i++) {
            if (list[i]['a'] > max ){
               max = list[i]['a']
               ind_max = i
            }            
         }
         sorted.push(list[ind_max])
         list.splice(ind_max,1)
      }
      return sorted 
   }


}  

module.exports = sort;
