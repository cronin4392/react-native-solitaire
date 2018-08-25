import { shuffle } from '../helpers/cards';

import { DECK } from '../constants/cards';

const INITIAL_STATE = {
  cards: DECK,

  // locations
  deck: [],
  pickup: [],
  waste: [],

  pile_1: [],
  pile_2: [],
  pile_3: [],
  pile_4: [],
  pile_5: [],
  pile_6: [],
  pile_7: [],

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
        piles,
        pile_1: piles[0],
        pile_2: piles[1],
        pile_3: piles[2],
        pile_4: piles[3],
        pile_5: piles[4],
        pile_6: piles[5],
        pile_7: piles[6],
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
