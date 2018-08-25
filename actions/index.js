import {
  FOUNDATION_1,
  FOUNDATION_2,
  FOUNDATION_3,
  FOUNDATION_4,
  PICKUP,
  PILES,
  WASTE,
} from '../constants/cards';

const applyToArray = (array, func) => array.map(item => func(item));

/* Card Helpers */

const isTopCard = (id, pile) => ( id === pile[pile.length - 1] );

const isFoundationLocation = location => [FOUNDATION_1, FOUNDATION_2, FOUNDATION_3, FOUNDATION_4].indexOf(location) >= 0

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
    waste,
  } = solitaire;
  const { id, location } = payload;

  if (!faceup[id]) {
    return;
  }

  if (isFoundationLocation(location)) {
    return;
  }

  if (location === WASTE) {
    if (!isTopCard(id, waste)) {
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

const attemptMoveSelectedToLocation = (selected, location) => dispatch => {
  const pileIndex = PILES.indexOf(location);
  if (pileIndex >= 0) {
    return dispatch(addCardsPile(selected, pileIndex));
  }

  if (isFoundationLocation(location)) {
    return dispatch(addCardsLocation(selected, location));
  }

  return false;
}

export const moveSelectedToLocation = location => (dispatch, getState) => {
  const { solitaire } = getState();
  const { selected } = solitaire;
  const selectedArray = Object.keys(selected).reduce((acc, val) => (!!selected[val] ? [...acc, val] : acc), []);

  if (!dispatch(attemptMoveSelectedToLocation(selectedArray, location)) ) {
    return;
  }

  // Remove cards
  Object.keys(selected).map(key => {
    const { location, id } = selected[key];
    const pileIndex = PILES.indexOf(location);

    if (pileIndex >= 0) {
      return dispatch(removeCardPile(id, pileIndex));
    }
    return dispatch(removeCardLocation(id, location));
  });

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

export const removeCardsPile = (ids, index) => dispatch => applyToArray(ids, (id => dispatch(removeCardPile(id, index))));
export const removeCardPile = (id, index) => ({
  type: 'REMOVE_CARD_PILE',
  id,
  index
});
export const addCardsPile = (ids, index) => ({
  type: 'ADD_CARDS_PILE',
  ids,
  index
});
