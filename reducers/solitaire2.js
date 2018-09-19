import { shuffle, toArray } from '../helpers/cards';

import { DECK, WASTE } from '../constants/cards';

const INITIAL_STATE = {
  cards: {
    /*
    [id]: {
      pip: DECK[0],
      suit: DECK[0],
      faceUp: false,
      location: "WASTE",
      locationIndex: 0,
    },
    */
  }
};

const solitaire2 = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GENERATE_CARDS': {
      const cards = DECK.reduce((acc, { pip, suit }, index) => {
        acc[index] = {
          id: index,
          pip,
          suit,
          location: WASTE,
          locationIndex: index,
          faceUp: true,
        };
        return acc;
      }, {});

      return {
        ...state,
        cards,
      };
    }
    case 'MOVE_CARD_TO_LOCATION': {
      const { id, location } = action;
      const { cards } = state;
      const card = cards[id];

      // get count of cards in location
      const existingCount = toArray(cards).filter(card => card.location === location).length;

      return {
        ...state,
        cards: {
          ...cards,
          [id]: {
            ...card,
            location,
            locationIndex: existingCount,
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default solitaire2;
