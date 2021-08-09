export const read = (key = '') => {
  const item = localStorage.getItem(key);
  if (item === null) {
    throw new ReferenceError(`"${key}" does not exist in local storage`);
  }
  return JSON.parse(item);
};
