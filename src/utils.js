export const random = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

export const randomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const randomArrayItems = (array, quantity = 1, separator = `, `, join = true) => {
  if (quantity > 1) {
    let result = [];
    for (let i = 0; i < quantity; i++) {
      const randomItem = randomArrayItems(array);
      if (result.indexOf(randomItem) === -1) {
        result.push(randomItem);
      }
    }
    if (join) {
      result = result.join(separator);
    }
    return result;
  }
  const randIndex = randomInt(0, array.length - 1);
  return array[randIndex];
};
