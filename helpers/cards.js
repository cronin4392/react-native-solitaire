import {
  RANKS,
  SUIT_COLOR,
  SYMBOLS
} from '../constants/cards';

export const shuffle = (a) => {
  const b = [...a];
  let j, x, i;
  for (k = 0; k < 1000; k++) {
    for (i = b.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = b[i];
      b[i] = b[j];
      b[j] = x;
  }
  }
  
  return b;
}

export const symbol = (name) => SYMBOLS[name] || name;
export const rank = (pip) => RANKS[pip] || -1;
export const color = (suit) => SUIT_COLOR[suit];
