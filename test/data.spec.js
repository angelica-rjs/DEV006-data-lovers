import { filter } from '../src/data.js';
import { filterEgg } from '../src/data.js';
import { orderAz } from '../src/data.js';
import { orderZa } from '../src/data.js';
import { mostrarData } from '../src/data.js';
import { calculoAgregado } from '../src/data.js';


describe('calculoAgregado', () => {
  it('debería retornar string con tiempo y hora ', () => {
    expect(calculoAgregado(7)).toStrictEqual("Lo que debes caminar para consegir este huevo es 1 horas y 24 minutos");
  });
});



describe('mostrarData', () => {
  it('debería retornar los pokemones', () => {
    expect(Array.isArray(mostrarData())).toBe(true);
  });
});

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
      {"name": "bb"},
      {"name": "aa"},
      {"name": "cc"}
    ]

    const dataPokemonesOrdenados= [
      {"name": "aa"},
      {"name": "bb"},
      {"name": "cc"}
    ]
    expect(orderAz(dataPokemones)).toEqual(dataPokemonesOrdenados);
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

describe('orderZa', () => {
  /* it('dos parametros vacios', () => {
    expect (() =>filter("", "")).toThrow(TypeError)
  });*/
  it('validar orden de la Z a la A', () => {
    const dataPokemones= [
      {"name": "bb"},
      {"name": "aa"},
      {"name": "cc"}
    ]

    const dataPokemonesOrdenados= [
      {"name": "cc"},
      {"name": "bb"},
      {"name": "aa"}
    ]
    expect(orderZa(dataPokemones)).toEqual(dataPokemonesOrdenados);
  });
});