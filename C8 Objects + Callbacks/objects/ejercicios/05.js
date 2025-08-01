const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el
  //  objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  let keys = Object.keys(objeto)
  let props = []
  for (let k in keys){
    props.push(objeto[k])
  }
  return props
};

module.exports = listarPropiedades;
