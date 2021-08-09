import { write } from './write.js';

describe('writes to local storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('writes strings', () => {
    write('a', 'b');
    const actual = localStorage.getItem('a');
    expect(actual).toEqual(JSON.stringify('b'));
  });
  it('writes numbers', () => {
    write('four', 4);
    const actual = localStorage.getItem('four');
    expect(actual).toEqual(JSON.stringify(4));
  });
  it('writes arrays', () => {
    write('things', [1, 'a', true]);
    const actual = localStorage.getItem('things');
    expect(actual).toEqual(JSON.stringify([1, 'a', true]));
  });
  it('writes objects', () => {
    write('things', { a: 1, b: 2 });
    const actual = localStorage.getItem('things');
    expect(actual).toEqual(JSON.stringify({ a: 1, b: 2 }));
  });
});
