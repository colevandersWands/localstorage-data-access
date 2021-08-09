import { read } from './data-access/read.js';
import { write } from './data-access/write.js';

write('a', 'hello');

console.log(read('a'));

try {
  read('b');
} catch (err) {
  console.error(err);
}

const header = (text = '') => {
  const headerEl = document.createElement('h1');
  headerEl.innerHTML = text;
  return headerEl;
};

console.log(header(read('a')));
