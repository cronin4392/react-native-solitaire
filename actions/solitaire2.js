import {
  toArray,
  getCardsAtLocation,
  sortCardsByLocationIndex
} from "../helpers/cards";
import {
  WASTE,
  PICKUP,
  PILE_1,
  PILE_2,
  PILE_3,
  PILE_4,
  PILE_5,
  PILE_6,
  PILE_7,
  FOUNDATION_1,
  FOUNDATION_2,
  FOUNDATION_3,
  FOUNDATION_4
} from "../constants/cards";

export const startNewGame = () => dispatch => {
  dispatch(generateCards());
  dispatch(dealCards()).then(() => {
    dispatch(flipBottomCards());
  });
};

const dealCards = () => (dispatch, getState) => {
  return new Promise(resolve => {
    const { solitaire2 } = getState();
    const { cards } = solitaire2;

    const sortedCards = toArray(cards).sort((a, b) => {
      return a.locationIndex - b.locationIndex;
    });

    const dealOrder = [
      PILE_1,
      PILE_2,
      PILE_3,
      PILE_4,
      PILE_5,
      PILE_6,
      PILE_7,
      PILE_2,
      PILE_3,
      PILE_4,
      PILE_5,
      PILE_6,
      PILE_7,
      PILE_3,
      PILE_4,
      PILE_5,
      PILE_6,
      PILE_7,
      PILE_4,
      PILE_5,
      PILE_6,
      PILE_7,
      PILE_5,
      PILE_6,
      PILE_7,
      PILE_6,
      PILE_7,
      PILE_7
    ];

    const dealCardsIterate = index => {
      const flippedIndex = sortedCards.length - 1 - index;
      if (flippedIndex >= dealOrder.length) {
        return resolve();
      }

      dispatch(
        moveCardToLocation(sortedCards[index].id, dealOrder[flippedIndex])
      );
      setTimeout(() => dealCardsIterate(index - 1), 100);
    };

    dealCardsIterate(sortedCards.length - 1);
  });
};

const flipBottomCards = () => (dispatch, getState) => {
  const { solitaire2 } = getState();
  const { cards } = solitaire2;

  const flipOrder = [PILE_1, PILE_2, PILE_3, PILE_4, PILE_5, PILE_6, PILE_7];

  const flipBottomCardsIterate = index => {
    if (index < 0) {
      return;
    }

    const location = flipOrder[index];
    const cardsInLocation = sortCardsByLocationIndex(
      getCardsAtLocation(toArray(cards), location)
    );
    const bottomCard = cardsInLocation[cardsInLocation.length - 1];
    dispatch(flipCardUp(bottomCard.id));

    setTimeout(() => flipBottomCardsIterate(index - 1), 100);
  };

  flipBottomCardsIterate(flipOrder.length - 1);
};

export const generateCards = () => ({
  type: "GENERATE_CARDS"
});

export const moveCardToLocation = (id, location) => ({
  type: "MOVE_CARD_TO_LOCATION",
  id,
  location
});

export const flipCardUp = id => ({
  type: "FLIP_CARD_UP",
  id
});

export const flipCardDown = id => ({
  type: "FLIP_CARD_DOWN",
  id
});
