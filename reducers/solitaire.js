import { shuffle } from '../helpers/cards';

import { DECK } from '../constants/cards';

const INITIAL_STATE = {
  cards: DECK,
  // locations
  deck: [],
  pickup: [],
  waste: [],
  piles: [],
  foundation_1: [],
  foundation_2: [],
  foundation_3: [],
  foundation_4: [],
  // state
  faceup: {},
  selected: {},
  // settings
  wasteSize: 3,
};

const createPiles = ([deck, ...rest], pileSize) => {
  if (pileSize <= 0) {
    return [deck, ...rest];
  }

  return createPiles([
    deck.slice(pileSize),
    deck.slice(0, pileSize),
    ...rest
  ], pileSize - 1);
}

const solitaire = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GENERATE_DECK': {
      const deck = state.cards.map((card, index) => index);

      return {
        ...state,
        deck
      }
    }
    case 'GENERATE_PILES': {
      const [pickup, ...piles] = createPiles([state.deck], 7);

      return {
        ...state,
        pickup,
        piles
      }
    }
    case 'SHUFFLE_DECK': {
      return {
        ...state,
        deck: shuffle(state.deck),
      }
    }
    case 'FLIP_CARD_UP': {
      const { faceup } = state;
      const { id } = action;
      return {
        ...state,
        faceup: {
          ...faceup,
          [id]: true,
        }
      }
    }
    case 'FLIP_CARD_DOWN': {
      const { faceup } = state;
      const { id } = action;
      return {
        ...state,
        faceup: {
          ...faceup,
          [id]: false,
        }
      }
    }
    case 'ADD_CARDS_LOCATION': {
      const { ids, location } = action;
      const existingIds = state[location];

      return {
        ...state,
        [location]: [
          ...existingIds,
          ...ids,
        ],
      }
    }
    case 'REMOVE_CARD_LOCATION': {
      const { id, location } = action;
      const existingIds = state[location];

      return {
        ...state,
        [location]: existingIds.filter(item => item !== id),
      }
    }
    case 'REMOVE_ALL_CARDS_LOCATION': {
      const { location } = action;
      return {
        ...state,
        [location]: [],
      }
    }
    case 'ADD_CARDS_PILE': {
      const { piles } = state;
      const { ids, index } = action;
      const pile = piles[index];
      const beforePiles = piles.slice(0, index);
      const afterPiles = piles.slice(index + 1);

      return {
        ...state,
        piles: [
          ...beforePiles,
          [
            ...pile,
            ...ids,
          ],
          ...afterPiles,
        ]
      }
    }
    case 'REMOVE_CARD_PILE': {
      const { piles } = state;
      const { id, index } = action;
      const pile = piles[index];
      const beforePiles = piles.slice(0, index);
      const afterPiles = piles.slice(index + 1);

      return {
        ...state,
        piles: [
          ...beforePiles,
          pile.filter(item => item !== id),
          ...afterPiles,
        ]
      }
    }
    case 'SELECT_CARD': {
      const { selected } = state;
      const { id, location } = action;

      return {
        ...state,
        selected: {
          ...selected,
          [id]: {
            id,
            location,
          }
        }
      }
    }
    case 'DESELECT_CARD': {
      const { selected } = state;
      const { id } = action;

      return {
        ...state,
        selected: {
          ...selected,
          [id]: null,
        }
      }
    }
    case 'DESELECT_ALL_CARDS': {
      return {
        ...state,
        selected: {}
      }
    }
    default: {
      return state;
    }
  }
};

export default solitaire;
