import { shuffle } from '../helpers/cards';

import { DECK } from '../constants/cards';

const INITIAL_STATE = {
  cards: DECK,

  // locations
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
  faceup: {}, // { id: true }
  selected: {},

  // settings
  wasteSize: 3,
};

// Pile with top 3 cards face up
const INITIAL_STATE2 = {
  ...INITIAL_STATE,
  pile_6: [0,15,27,4,42],
  faceup: {
    27: true,
    4: true,
    42: true
  }
};

// Set up with cards in foundation that can be dragged back to the board
const INITIAL_STATE3 = {
  ...INITIAL_STATE,
  foundation_1: [0,1,2,3],
  pile_6: [30],
  faceup: {
    1: true,
    2: true,
    3: true,
    30: true,
  }
}

// Set up with a large pile
const INITIAL_STATE4 = {
  ...INITIAL_STATE,
  pile_1: [25, 50],
  pile_6: [12, 37, 10, 35, 8, 33, 6, 31, 4, 29, 2, 27, 0],
  faceup: {
    0: true,
    2: true,
    4: true,
    6: true,
    8: true,
    10: true,
    12: true,
    27: true,
    29: true,
    31: true,
    33: true,
    35: true,
    37: true,
    25: true,
    50: true,
  }
}

const INITIAL_STATE5 = {
  ...INITIAL_STATE,
}

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

const solitaire = (state = INITIAL_STATE5, action) => {
  switch(action.type) {
    case 'CLEAR_STATE': {
      return {
        ...INITIAL_STATE
      }
    }
    case 'GENERATE_PILES': {
      const cards = state.cards.map((_card, index) => index);
      const shuffledCards = shuffle(cards);
      const [pickup, ...piles] = createPiles([shuffledCards], 7);

      return {
        ...state,
        pickup,
        pile_1: piles[0],
        pile_2: piles[1],
        pile_3: piles[2],
        pile_4: piles[3],
        pile_5: piles[4],
        pile_6: piles[5],
        pile_7: piles[6],
      }
    }
    case 'FLIP_CARDS_UP': {
      const { ids } = action;
      const { faceup } = state;

      const newFaceUp = ids.reduce((acc, id) =>({
        ...acc,
        [id]: true,
      }), {});

      return {
        ...state,
        faceup: {
          ...faceup,
          ...newFaceUp
        }
      }
    }
    case 'FLIP_CARDS_DOWN': {
      const { ids } = action;
      const { faceup } = state;

      const newFaceUp = ids.reduce((acc, id) =>({
        ...acc,
        [id]: false,
      }), {});

      return {
        ...state,
        faceup: {
          ...faceup,
          ...newFaceUp
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
    case 'REMOVE_CARDS_LOCATION': {
      const { ids, location } = action;
      const existingIds = state[location];

      return {
        ...state,
        [location]: existingIds.filter(item => ids.indexOf(item) < 0),
      }
    }
    case 'REMOVE_ALL_CARDS_LOCATION': {
      const { location } = action;
      return {
        ...state,
        [location]: [],
      }
    }
    case 'SELECT_CARDS': {
      const { ids, location } = action;
      const { selected } = state;
      const selectedLength = Object.keys(selected).length;

      const newSelected = ids.reduce((acc, id, index) => {
        return {
          ...acc,
          [id]: {
            order: selectedLength + index,
            id,
            location,
          },
        };
      }, {});

      return {
        ...state,
        selected: {
          ...selected,
          ...newSelected,
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
          [id]: null, // TODO: unset this entirely
        }
      }
    }
    case 'UPDATE_SELECTED_POSITION': {
      const { selected } = state;
      const { id, width, height, px, py } = action;

      if (!selected[id]) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        selected: {
          ...selected,
          [id]: {
            ...selected[id],
            width,
            height,
            px,
            py,
          }
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
