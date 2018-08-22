import { SYMBOLS } from '../constants/cards';

export const shuffle = (a) => {
  const b = [...a];
  let j, x, i;
  for (i = b.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = b[i];
      b[i] = b[j];
      b[j] = x;
  }
  return b;
}

export const symbol = (suitName) => SYMBOLS[suitName] || suitName;