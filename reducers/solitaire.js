import { shuffle } from '../helpers/cards';

import { DECK } from '../constants/cards';

const INITIAL_STATE = {
  cards: DECK,
  deck: [],
  pickup: [],
  piles: [],
  waste: [],
  faceup: {},
  selected: {},
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
    case 'ADD_CARDS_WASTE': {
      const { waste } = state;
      const { ids } = action;

      return {
        ...state,
        waste: [
          ...waste,
          ...ids,
        ],
      }
    }
    case 'REMOVE_CARD_WASTE': {
      const { waste } = state;
      const { id } = action;

      return {
        ...state,
        waste: waste.filter(item => item !== id),
      }
    }
    case 'REMOVE_ALL_CARDS_WASTE': {
      return {
        ...state,
        waste: [],
      }
    }
    case 'ADD_CARDS_PICKUP': {
      const { pickup } = state;
      const { ids } = action;

      return {
        ...state,
        pickup: [
          ...pickup,
          ...ids,
        ],
      }
    }
    case 'REMOVE_CARD_PICKUP': {
      const { pickup } = state;
      const { id } = action;

      return {
        ...state,
        pickup: pickup.filter(item => item !== id),
      }
    }
    case 'REMOVE_ALL_CARDS_PICKUP': {
      return {
        ...state,
        pickup: [],
      }
    }
    case 'SELECT_CARD': {
      const { selected } = state;
      const { id, location } = action;

      return {
        ...state,
        selected: {
          ...selected,
          [id]: location,
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