import {
  ACE,
  AREAS,
  FOUNDATION,
  FOUNDATION_1,
  FOUNDATION_2,
  FOUNDATION_3,
  FOUNDATION_4,
  PICKUP,
  PILE,
  PILES,
  WASTE,
} from '../constants/cards';

import {
  color,
  rank
} from '../helpers/cards';

const applyToArray = (array, func) => array.map(item => func(item));

/* Card Helpers */

const isTopCard = (id, pile) => ( id === pile[pile.length - 1] );
const isBottomCard = (id, pile) => ( id === pile[0] );

/*
  CREATION ACTIONS
*/

export const createCards = cards => ({
  type: 'CREATE_CARDS',
  cards,
});

export const generatePiles = () => ({
  type: 'GENERATE_PILES'
});

export const generateDeck = () => ({
  type: 'GENERATE_DECK'
});

export const shuffleDeck = () => ({
  type: 'SHUFFLE_DECK'
});

/*
  FLIP CARDS
*/

export const flipFirstCardUpInPiles = () => (dispatch, getState) => {
  const { solitaire } = getState();
  const { piles } = solitaire;

  piles.map(pile => {
    const firstCard = pile[pile.length - 1];
    dispatch(flipCardUp(firstCard));
  });
};

export const flipCardsUp = ids => dispatch => applyToArray(ids, (id => dispatch(flipCardUp(id))));
export const flipCardUp = id => ({
  type: 'FLIP_CARD_UP',
  id,
});

export const flipCardsDown = ids => dispatch => applyToArray(ids, (id => dispatch(flipCardDown(id))));
export const flipCardDown = id => ({
  type: 'FLIP_CARD_DOWN',
  id,
});

/* SELECT CARDS */

export const cardClicked = (payload) => (dispatch, getState) => {
  const { solitaire } = getState();
  const {
    faceup,
    selected,
  } = solitaire;
  const { id, location } = payload;
  const pile = solitaire[location];

  if (!faceup[id]) {
    if (AREAS[location] !== PILE) {
      return;
    }
    if (!isTopCard(id, pile)) {
      return;
    }
    return dispatch(flipCardUp(id));
  }

  if (AREAS[location] === FOUNDATION) {
    return;
  }

  if (location === WASTE) {
    if (!isTopCard(id, pile)) {
      return;
    }
  }

  if (selected[id]) {
    return dispatch(deselectCard(payload));
  }

  // Select card
  dispatch(deselectAllCards());
  dispatch(selectCard(payload));
};

export const deselectAllCards = () => ({
  type: 'DESELECT_ALL_CARDS',
});

export const selectCard = payload => ({
  type: 'SELECT_CARD',
  ...payload,
});

export const deselectCard = payload => ({
  type: 'DESELECT_CARD',
  ...payload,
});

/*
  MOVE CARDS
*/

export const movePickupIntoWaste = () => (dispatch, getState) => {
  const { solitaire } = getState();
  const { pickup, wasteSize } = solitaire;

  if(pickup.length === 0) {
    dispatch(moveWasteIntoPickup());
    return;
  }

  const cards = pickup.slice(0, wasteSize);

  dispatch(removeCardsLocation(cards, PICKUP));
  dispatch(addCardsLocation(cards, WASTE));
  dispatch(flipCardsUp(cards));
};

export const moveWasteIntoPickup = () => (dispatch, getState) => {
  const { solitaire } = getState();
  const { waste } = solitaire;

  dispatch(removeAllCardsLocation(WASTE));
  dispatch(flipCardsDown(waste));
  dispatch(addCardsLocation(waste, PICKUP));
};

const isValidMove = ({
  cards,
  fromCards,
  fromLocation,
  toLocation,
  toCards
}) => {
  const topFromCard = cards[fromCards[0]];
  const bottomToCard = cards[toCards[toCards.length - 1]];

  if (AREAS[toLocation] === PILE) {
    if (toCards.length === 0) {
      if (topFromCard.pip === KING) {
        return true;
      }
    }
    else {
      if (
        rank(topFromCard.pip) - rank(bottomToCard.pip) === -1 &&
        color(topFromCard.suit) !== color(bottomToCard.suit)
      ) {
        return true;
      }
    }
  }
  if (AREAS[toLocation] === FOUNDATION) {
    if (toCards.length === 0) {
      if (topFromCard.pip === ACE) {
        return true;
      }
    }
    else {
      if (
        rank(topFromCard.pip) - rank(bottomToCard.pip) === 1 &&
        topFromCard.suit === bottomToCard.suit
      ) {
        return true;
      }
    }
  }

  return false;
};

export const moveSelectedToLocation = location => (dispatch, getState) => {
  const { solitaire } = getState();
  const { cards, selected } = solitaire;
  const selectedArray = Object.keys(selected).reduce((acc, key) => (!!selected[key] ? [...acc, selected[key]['id']] : acc), []);

  const fromLocation = selected[Object.keys(selected)[0]].location;

  if ( !isValidMove({
    cards,
    fromCards: selectedArray,
    fromLocation: fromLocation,
    toLocation: location,
    toCards: solitaire[location],
  }) ) {
    dispatch(deselectAllCards());
    return;
  }

  // Remove cards
  Object.keys(selected).map(key => {
    const { location, id } = selected[key];
    return dispatch(removeCardLocation(id, location));
  });

  dispatch(addCardsLocation(selectedArray, location));

  dispatch(deselectAllCards());
}

/* ADD REMOVE CARDS */

export const addCardLocation = (id, location) => dispatch => dispatch(addCardsLocation([id], location));
export const addCardsLocation = (ids, location) => ({
  type: 'ADD_CARDS_LOCATION',
  ids,
  location,
});

export const removeCardsLocation = (ids, location) => dispatch => applyToArray(ids, (id => dispatch(removeCardLocation(id, location))));
export const removeCardLocation = (id, location) => ({
  type: 'REMOVE_CARD_LOCATION',
  id,
  location,
});

export const removeAllCardsLocation = location => ({
  type: 'REMOVE_ALL_CARDS_LOCATION',
  location
});
