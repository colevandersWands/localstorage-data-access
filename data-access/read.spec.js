import { read } from './read.js';

const testData = {
  number: 2,
  string: 'hello',
  boolean: false,
  array: [1, 'hello', false, { a: 1 }],
  object: { a: true, b: 'hi', c: [1, 2, 3] },
};

describe('reads from local storage', () => {
  beforeEach(() => {
    localStorage.clear();
    Object.keys(testData).forEach(key =>
      localStorage.setItem(key, JSON.stringify(testData[key]))
    );
  });

  it('reads strings', () => {
    const actual = read('string');
    expect(actual).toEqual('hello');
  });
  it('reads numbers', () => {
    const actual = read('number');
    expect(actual).toEqual(2);
  });
  it('reads booleans', () => {
    const actual = read('boolean');
    expect(actual).toEqual(false);
  });
  it('reads arrays', () => {
    const actual = read('array');
    expect(actual).toEqual([1, 'hello', false, { a: 1 }]);
  });
  it('reads objects', () => {
    const actual = read('object');
    expect(actual).toEqual({ a: true, b: 'hi', c: [1, 2, 3] });
  });
});
