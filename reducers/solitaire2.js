import { shuffle, toArray, toObject } from '../helpers/cards';

import { DECK, WASTE } from '../constants/cards';

const getCardsInLocationAsArray = (cards, location) => toArray(cards).filter(card => card.location === location);

const INITIAL_STATE = {
  cards: {
    /*
    [id]: {
      id: 0,
      pip: "ACE",
      suit: "SPADES",
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

      const oldLocation = card.location;
      const oldLocationIndex = card.locationIndex;

      // card did not move to new location
      if (location === oldLocation) {
        return {
          ...state
        };
      }

      // index to start incrementing new cards being placed
      const startIndex = toArray(cards).filter(card => card.location === location).length;

      // get card to move and any under it and update their location and locationIndex
      const cardsToMove = toArray(cards)
        .filter(card => card.location === oldLocation && card.locationIndex >= oldLocationIndex)
        .sort((a, b) => a.locationIndex - b.locationIndex)
        .map((card, index) => ({
          ...card,
          location,
          locationIndex: index + startIndex,
        }));

      return {
        ...state,
        cards: {
          ...cards,
          ...toObject(cardsToMove)
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default solitaire2;
