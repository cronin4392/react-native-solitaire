// Suits

export const SPADES = 'SPADES';
export const CLUBS = 'CLUBS';
export const DIAMONDS = 'DIAMONDS';
export const HEARTS = 'HEARTS';

export const SUITS = [SPADES, CLUBS, DIAMONDS, HEARTS];

export const BLACK = 'BLACK';
export const RED = 'RED';

export const SUIT_COLOR = {
  [SPADES]: BLACK,
  [CLUBS]: BLACK,
  [DIAMONDS]: RED,
  [HEARTS]: RED,
};

// Pips

export const ACE = 'ACE';
export const TWO = 'TWO';
export const THREE = 'THREE';
export const FOUR = 'FOUR';
export const FIVE = 'FIVE';
export const SIX = 'SIX';
export const SEVEN = 'SEVEN';
export const EIGHT = 'EIGHT';
export const NINE = 'NINE';
export const TEN = 'TEN';
export const JACK = 'JACK';
export const QUEEN = 'QUEEN';
export const KING = 'KING';

export const PIPS = [ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING];

// Deck

export const DECK = SUITS.map(suit => PIPS.map(pip => ({ suit, pip }))).reduce((acc, val) => acc.concat(val), []);

// Symbols

export const SYMBOLS = {
  [SPADES]: '♠',
  [HEARTS]:	'♥',
  [DIAMONDS]:	'♦',
  [CLUBS]: '♣',
  [ACE]: 'A',
  [TWO]: '2',
  [THREE]: '3',
  [FOUR]: '4',
  [FIVE]: '5',
  [SIX]: '6',
  [SEVEN]: '7',
  [EIGHT]: '8',
  [NINE]: '9',
  [TEN]: '10',
  [JACK]: 'J',
  [QUEEN]: 'Q',
  [KING]: 'K',
};

// Directions

export const HORIZONTAL = 'horizontal';
export const VERITCAL = 'vertical';

// Locations

export const WASTE = 'waste';
export const PICKUP = 'pickup';
export const PILES = [
  'pile1',
  'pile2',
  'pile3',
  'pile4',
  'pile5',
  'pile6',
  'pile7',
];
