import data from './data/pokemon/pokemon.js';
const pokemones = data.pokemon;


// funcion que entrega los pokemoned
export function mostrarData(){

  return pokemones
}


export function filter (pokemones, type){
  if(!Array.isArray(pokemones)){
    throw new TypeError("pokemones debe ser un array.");
  }
  if(typeof type !== 'string'){
    throw new  TypeError("type debe ser un string")
  }
  const pokemonesFiltrados = pokemones.filter(
    (pokemon) => {
      if(pokemon.type.includes(type)){
        return pokemon
      }}
  )
  return pokemonesFiltrados
}

export function filterEgg (pokemones, egg){
  /*if(!Array.isArray(pokemones)){
    throw new TypeError("pokemones debe ser un array.");
  }
  if(typeof type !== 'string'){
    throw new  TypeError("type debe ser un string")
  }*/
  const pokemonesEgg = pokemones.filter(
    (pokemon) => {
      if(pokemon.egg === egg){
        return pokemon
      }
    })

  return pokemonesEgg
}


export function orderAz (pokemones){
  pokemones.sort((a,b) => {
    if (a.name < b.name ){
      return -1
    } else if (a.name > b.name){
      return 1
    } else {
      return 0
    }
  })
  return pokemones
}


export function calculoAgregado (Km){

  const tiempoTotal = (Km)/ 5
  const horas = Math.trunc(tiempoTotal)
  let minutos = tiempoTotal * 60
  minutos = minutos % 60 
  const resultadoFinal = "Lo que debes caminar para consegir este huevo es " + horas + " horas y "+ minutos + " minutos"
  return resultadoFinal


}


export function orderZa (pokemones){
  pokemones.sort((a,b) => {
    if (a.name > b.name ){
      return -1
    } else if (a.name < b.name){
      return 1
    } else {
      return 0
    }
  })
  return pokemones
}
