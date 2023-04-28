import { filter } from '../src/data.js';
import { filterEgg } from '../src/data.js';
import { orderAz } from '../src/data.js';




describe('filter', () => {
  it('dos parametros vacios', () => {
    expect (() =>filter("", "")).toThrow(TypeError)
  });
  it('validar filtrado por tipo', () => {
    const dataPokemones= [
      {type : ["fuego", "agua"]},
      {type : ["agua"]},
      {type : ["bicho", "fuego"]}
    ]

    const dataPokemonesFiltrados= [
      {type : ["fuego", "agua"]},
      {type : ["agua"]}
    ]
    const result = filter(dataPokemones,'agua')

    expect(result).toStrictEqual(dataPokemonesFiltrados);
  });
});

describe('orderAz', () => {
  /* it('dos parametros vacios', () => {
    expect (() =>filter("", "")).toThrow(TypeError)
  });*/
  it('validar orden de la A a la Z', () => {
    const dataPokemones= [
      {pokemon: "bb"},
      {pokemon: "aa"},
      {pokemon: "cc"}
    ]

    const dataPokemonesOrdenados= [
      {pokemon: "aa"},
      {pokemon: "bb"},
      {pokemon: "cc"}
    ]
    expect(orderAz(dataPokemones)).toBe(dataPokemonesOrdenados);
  });
});

describe('filterEgg', () => {
  it('validar filtrado de huevos', () => {
    const pokemones= [
      {egg : "2 km"},
      {egg : "3 km"},
      {egg : "2 km"}
    ]

    const pokemonesFiltro= [
      {egg : "2 km"},
      {egg : "2 km"}
    ]

    expect(filterEgg(pokemones, "2 km")).toStrictEqual(pokemonesFiltro);

  });

  /*it('dos parametros vacios', () => {
    expect (() =>filter("", "")).toThrow(TypeError)
  });*/
 
});
