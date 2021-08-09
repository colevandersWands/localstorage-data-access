import { isJsonable } from '../lib/is-jsonable.js';

export const write = (key = '', value) => {
  if (!isJsonable(value)) {
    throw new TypeError('data is not JSON-friendly');
  }

  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringifiedValue);
};
