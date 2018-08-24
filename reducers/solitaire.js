import { shuffle } from '../helpers/cards';

import { DECK } from '../constants/cards';

const INITIAL_STATE = {
  cards: DECK,
  deck: [],
  pickup: [],
  piles: [],
  waste: [],
  isFaceUp: {},
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
      const { isFaceUp } = state;
      const { id } = action;
      return {
        ...state,
        isFaceUp: {
          ...isFaceUp,
          [id]: true,
        }
      }
    }
    case 'FLIP_CARD_DOWN': {
      const { isFaceUp } = state;
      const { id } = action;
      return {
        ...state,
        isFaceUp: {
          ...isFaceUp,
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
    default: {
      return state;
    }
  }
};

export default solitaire;