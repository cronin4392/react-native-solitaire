import { shuffle } from '../helpers/cards';

const INITIAL_STATE = {
  deck: [],
  piles: [],
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
    case 'CREATE_CARDS':
      return {
        ...state,
        cards: action.cards,
      }
    case 'GENERATE_DECK':
      const deck = state.cards.map((card, index) => index);

      return {
        ...state,
        deck
      }
    case 'GENERATE_PILES':
      const [pickup, ...piles] = createPiles([state.deck], 7);

      return {
        ...state,
        piles: piles
      }
    case 'SHUFFLE_DECK':
      return {
        ...state,
        deck: shuffle(state.deck),
      }
    default:
      return state;
  }
};

export default solitaire;