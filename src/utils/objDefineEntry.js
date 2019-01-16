export const objDefineEntry = (a, b) => {
  for (const prop in a) {
    if (b[prop] && (a[prop] !== b[prop])) {
      return false;
    }
  }
  return true;
}

export default {
  objDefineEntry,
}