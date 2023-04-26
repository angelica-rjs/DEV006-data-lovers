import { filter } from '../src/data.js';


describe('filter', () => {
  it('dos parametros vacios', () => {
    expect(filter("", "")).toThrow(new Error());
    expect(() => filter("", "")).toThrow(TypeError)
  });
  /*it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
