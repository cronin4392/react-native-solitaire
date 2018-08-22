import { shuffle } from '../helpers/cards';

const INITIAL_STATE = {
  cards: {},
  deck: [],
  piles: [],
  cardsFaceUp: {}
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
    case 'CREATE_CARDS': {
      return {
        ...state,
        cards: action.cards,
      }
    }
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
        piles
      }
    }
    case 'FLIP_FIRST_CARD_IN_PILES': {
      const { cardsFaceUp, piles } = state;
      const newCardsFaceUp = piles.reduce((acc, value) => {
        const cardId = value[value.length - 1];
        acc[cardId] = true;
        return acc;
      }, {});

      return {
        ...state,
        cardsFaceUp: {
          ...cardsFaceUp,
          ...newCardsFaceUp,
        },
      }
    }
    case 'SHUFFLE_DECK': {
      return {
        ...state,
        deck: shuffle(state.deck),
      }
    }
    default: {
      return state;
    }
  }
};

export default solitaire;