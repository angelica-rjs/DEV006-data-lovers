//import data from './data/pokemon/pokemon.js';
import {filter} from "./data.js";
import {orderAz} from "./data.js";
import {orderZa} from "./data.js";
import {mostrarData} from "./data.js";
import {filterEgg} from "./data.js"
import {calculoAgregado} from "./data.js"




export const pokemones = mostrarData()

const contenedorPokemon = document.getElementById("pokemones");
contenedorPokemon.innerHTML=` `
const buscadores = document.getElementById("buscadores")

/*-------------------------------mostrar pokemones-------------------------------*/
function mostrarPokemones(contenedorPokemon, pokemones){
  contenedorPokemon.innerHTML=` `
  
  pokemones.forEach((pokemon) => {
        
    //se crean los div por cada pokemon
    const tarjetasPokemones = document.createElement("div")
    //se crean id para cada div
    tarjetasPokemones.id = `${pokemon.num}`
    // clase para dar estilo al div
    tarjetasPokemones.classList.add("bloquePokemones");
    tarjetasPokemones.classList.add("pokemon");         
    //clase para agregar imagen segun el tipo de pokemon
    tarjetasPokemones.classList.add(`pokemon-${pokemon.type[0]}`);
    // creacion de las tarjetitas de los pokemones 
    tarjetasPokemones.innerHTML = `<div class="bloquetransparente"> <h2 class="letrastarjetas" > ${pokemon.name}
         </h2> <img src="${pokemon.img}"> <div> <img class="iconType" src=./img/type/${pokemon.type[0]}.png>
         </div> <h2 class="letrastarjetas">${pokemon.num}</h2> </div></div>`;
    //al contenedor le agrego como hijo los div (asigno donde quiero que este)
    contenedorPokemon.appendChild(tarjetasPokemones);
        
    const pokemonClick =document.getElementById(`${pokemon.num}`)
    pokemonClick.addEventListener("click", ()=>{
      cararacteristicasPokemones(pokemon);

    })
  })
} 

/*------------------------------Huevos-------------------------------------------*/
const huevos = document.getElementById("huevos")
function opcionesHuevos (){
  huevos.innerHTML= `<div class="cajaEgg">
<div class="tarjetaEgg" data-km="2 km">
<img class="imgEgg" src="./img/icons/egg.png" alt="egg">
<h4 class="h4">2km</h4>
</div>
<div class="tarjetaEgg" data-km="5 km">
<img class="imgEgg" src="./img/icons/egg.png" alt="egg">
<h4 class="h4">5km</h4>
</div>
<div class="tarjetaEgg" data-km="7 km">
<img class="imgEgg" src="./img/icons/egg.png" alt="egg">
<h4 class="h4">7km</h3>
</div>
<div class="tarjetaEgg" data-km="10 km">
<img class="imgEgg" src="./img/icons/egg.png" alt="egg">
<h4 class="h4">10km</h4>
</div>
</div>

<div  class="mostrarCalculo" id="mostrarCalculo">
</div>
`
  document.getElementById("mostrarCalculo").setAttribute("style", "display:none")

  setTimeout(function () {
    const tarjetaEgg = document.querySelectorAll(".tarjetaEgg")
    tarjetaEgg.forEach((boton) => {
      //console.log(boton.dataset.km);

      boton.addEventListener("click", () => {
        //console.log("addevent");

        opcionesHuevos ()
        contenedorPokemon.innerHTML=` `

        const pokemonesEgg = filterEgg(pokemones, boton.dataset.km)
        let km = boton.dataset.km
        km = km.substring(0, 2).trim()
        console.log(km)
        const resultadoCalculo =calculoAgregado(km)
        mostrarPokemones(contenedorPokemon, pokemonesEgg )

        document.getElementById("mostrarCalculo").setAttribute("style", "display:block")
        document.getElementById("mostrarCalculo").innerHTML= `${resultadoCalculo}`
      // opcionesHuevos()
      });
    });
  }, 0);

  
    
}

/*--------------------------------caracteristicas de pokemones-----------------------*/
function cararacteristicasPokemones(pokemon) {
  //buscadores.innerHTML= ``
  contenedorPokemon.innerHTML= `
  <div class="margin">
  <div class= "pokemon-${pokemon.type[0]} bloquetransparente ">
  <h2 class="tittle">${pokemon.name} 
  </h2> <div class="pokemonDescription"><img  class= "imgsPokemon"src="${pokemon.img}">
 <div class= "fondoCaracteristicas transparenciaCaracteristicas" <p>  ${pokemon.about}  <br>  type: ${pokemon.type} <br>
   city: ${pokemon.generation.name} <br> num:  ${pokemon.num} <br>
   resistant: ${pokemon.resistant} <br> weaknesses: ${pokemon.weaknesses} </p></div></div></div>`

}

/*----------------------------Filter y Order -------------------------------------*/


function mostrarFilter(buscadores){
    
  buscadores.innerHTML=  buscadores.innerHTML +
     `
    <div class="filter">
    <button class="filter-btn">Filter</button>
    <div class="filter-content">
    <button class="botonesTipo" id="grass"> grass </button>
    <button class="botonesTipo" id="poison" > poison </button>
    <button class="botonesTipo" id="fire"> fire </button>
    <button class="botonesTipo" id="flying"> flying </button>
    <button class="botonesTipo" id="water"> water </button>
    <button class="botonesTipo" id="bug"> bug </button>
    <button class="botonesTipo" id="electric"> electric </button>
    <button class="botonesTipo" id="ground"> ground </button>
    <button class="botonesTipo" id="fighting"> fighting </button>
    <button class="botonesTipo" id="psychic"> psychic  </button>
    <button class="botonesTipo" id="rock"> rock  </button>
    <button class="botonesTipo" id="ice">  ice </button>
    <button class="botonesTipo" id="ghost"> ghost </button>
    <button class="botonesTipo" id="normal"> normal </button>
    <button class="botonesTipo" id="steel"> steel</button>
    <button class="botonesTipo" id="dragon"> dragon </button>
    <button class="botonesTipo" id="fairy"> fairy </button>
    <button class="botonesTipo" id="fire"> dark </button>
    </div></div>`


  setTimeout(function () {
    const botonfilter = document.querySelectorAll(".botonesTipo");
    botonfilter.forEach((boton) => {
      //console.log(boton);
    
      boton.addEventListener("click", (e) => {
      //console.log("addevent");
            
        contenedorPokemon.innerHTML=` `
        const pokemonesfiltrados = filter(pokemones, e.target.id)
        mostrarPokemones(contenedorPokemon, pokemonesfiltrados )


      });
    });
    
    //console.log("fin");
  }, 0);
}
    
    
function mostrarOrder(buscadores){

  buscadores.innerHTML=  buscadores.innerHTML +`
        <div class="order">
        <button class="order-btn">ordenar</button>
        <div class="order-content">
    
        <button class="opcionOrder" id="aZ"> A-Z </button>
        <button class="opcionOrder" id="zA" > Z-A </button>
        </div></div>`;

  setTimeout(function () {
    const btnAz = document.getElementById("aZ");
    const btnZa = document.getElementById("zA");
          
    btnAz.addEventListener("click", ()=>{
          
      const pokemonesOrdenadosAz = orderAz(pokemones)
      contenedorPokemon.innerHTML=` `
      mostrarPokemones(contenedorPokemon, pokemonesOrdenadosAz)
          
    })
          
    btnZa.addEventListener("click", ()=>{
          
      const pokemonesOrdenadosZa = orderZa(pokemones)
      contenedorPokemon.innerHTML=` `
      mostrarPokemones(contenedorPokemon, pokemonesOrdenadosZa)
      // console.log(pokemonesfiltrados);
          
    })
  }, 0);
}



/*---------------------------Botones del menu--------------------------------------*/

//boton home
const botonHome = document.getElementById("home");
botonHome.addEventListener("click", ()=>{
    
  document.getElementById("pokebollImg").setAttribute("style", "display:block")
  document.getElementById("pokemones").setAttribute("style", "display:none")
  document.getElementById("buscadores").setAttribute("style", "display:none")
  document.getElementById("huevos").setAttribute("style", "display:none")
});

//boton pokemon
const botonPokemones = document.getElementById("btnPokemones");
botonPokemones.addEventListener("click", ()=>{
  contenedorPokemon.innerHTML=` `
  document.getElementById("pokebollImg").setAttribute("style", "display:none")
  document.getElementById("pokemones").setAttribute("style", "display:block")
  document.getElementById("buscadores").setAttribute("style", "display:block")
  document.getElementById("huevos").setAttribute("style", "display:none")
  mostrarPokemones(contenedorPokemon, pokemones)
  mostrarFilter(buscadores)
  mostrarOrder(buscadores)
  opcionesHuevos ()
  
});

//boton huevos
const botonhuevos = document.getElementById("eggs")
botonhuevos.addEventListener("click", ()=>{
  contenedorPokemon.innerHTML=``
  document.getElementById("buscadores").setAttribute("style", "display:none")
  document.getElementById("pokebollImg").setAttribute("style", "display:none")
  document.getElementById("huevos").setAttribute("style", "display:block")
  opcionesHuevos ()
    
})