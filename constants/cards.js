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

export const RANKS = {
  [ACE]: 1,
  [TWO]: 2,
  [THREE]: 3,
  [FOUR]: 4,
  [FIVE]: 5,
  [SIX]: 6,
  [SEVEN]: 7,
  [EIGHT]: 8,
  [NINE]: 9,
  [TEN]: 10,
  [JACK]: 11,
  [QUEEN]: 12,
  [KING]: 13,
};

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

export const PILE = 'pile';
const PILE_1 = 'pile_1';
const PILE_2 = 'pile_2';
const PILE_3 = 'pile_3';
const PILE_4 = 'pile_4';
const PILE_5 = 'pile_5';
const PILE_6 = 'pile_6';
const PILE_7 = 'pile_7';
export const PILES = [
  PILE_1,
  PILE_2,
  PILE_3,
  PILE_4,
  PILE_5,
  PILE_6,
  PILE_7,
];

export const FOUNDATION = 'foundation';
export const FOUNDATION_1 = 'foundation_1';
export const FOUNDATION_2 = 'foundation_2';
export const FOUNDATION_3 = 'foundation_3';
export const FOUNDATION_4 = 'foundation_4';

export const AREAS = {
  [WASTE]: WASTE,
  [PICKUP]: PICKUP,
  [PILE_1]: PILE,
  [PILE_2]: PILE,
  [PILE_3]: PILE,
  [PILE_4]: PILE,
  [PILE_5]: PILE,
  [PILE_6]: PILE,
  [PILE_7]: PILE,
  [FOUNDATION_1]: FOUNDATION,
  [FOUNDATION_2]: FOUNDATION,
  [FOUNDATION_3]: FOUNDATION,
  [FOUNDATION_4]: FOUNDATION,
};
