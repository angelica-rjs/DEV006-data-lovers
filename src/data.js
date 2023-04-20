
export function filter (pokemones, type){
    console.log("soy filter")
    let pokemonesFiltrados = pokemones.filter(
    (pokemon) => {
      if(pokemon.type.includes(type)){
      return pokemon
    }})
    console.log({pokemonesFiltrados})
    
    return pokemonesFiltrados

}


export function orderAz (pokemones){
  console.log("estoy en order")
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


export function orderZa (pokemones){
  console.log("estoy en order")
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
  



