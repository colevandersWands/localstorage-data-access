// the main entry point of their projects could do this

import { data } from './data.js';
import { isJsonable } from './lib/is-jsonable.js';

if (!isJsonable(data)) {
  throw new TypeError('data is not JSON friendly');
}

Object.keys(data).forEach(key =>
  localStorage.setItem(key, JSON.stringify(data[key]))
);
