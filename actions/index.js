import {
  ACE,
  KING,
  AREAS,
  FOUNDATION,
  PICKUP,
  PILE,
  PILES,
  WASTE,
} from '../constants/cards';

import {
  PLAYING,
  PAUSED,
  WIN,
} from '../constants/game';

import {
  color,
  rank
} from '../helpers/cards';

/* Card Helpers */

const isTopCard = (id, pile) => ( id === pile[pile.length - 1] );

/*
  CREATION ACTIONS
*/

export const clearState = () => ({
  type: 'CLEAR_STATE'
});

export const createCards = cards => ({
  type: 'CREATE_CARDS',
  cards,
});

export const generatePiles = () => ({
  type: 'GENERATE_PILES'
});

export const pauseGame = () => dispatch => {
  dispatch(setGameState(PAUSED));
}

export const continueGame = () => dispatch => {
  dispatch(setGameState(PLAYING));
}

export const winGame = () => dispatch => {
  dispatch(setGameState(WIN));
}

export const startNewGame = () => dispatch => {
  dispatch(clearState());
  dispatch(resetSecondsPassed());
  dispatch(generatePiles());
  dispatch(flipFirstCardUpInPiles());
  dispatch(setGameState(PLAYING));
}

/*
  FLIP CARDS
*/

export const flipFirstCardUpInPiles = () => (dispatch, getState) => {
  const { solitaire } = getState();

  const cards = PILES.map(location => {
    const pile = solitaire[location];
    return pile[pile.length - 1];
  });

  dispatch(flipCardsUp(cards));
};

export const flipCardsUp = ids => ({
  type: 'FLIP_CARDS_UP',
  ids,
});
export const flipCardUp = (id) => (dispatch) => dispatch(flipCardsUp([id]));

export const flipCardsDown = ids => ({
  type: 'FLIP_CARDS_DOWN',
  ids,
});
export const flipCardDown = (id) => (dispatch) => dispatch(flipCardsDown([id]));

/* SELECT CARDS */

export const cardClicked = payload => (dispatch, getState) => {
  const { id, location } = payload;
  const { solitaire } = getState();
  const { faceup } = solitaire;
  const pile = solitaire[location];

  if (AREAS[location] === PILE) {
    if (!faceup[id]) {
      if (isTopCard(id, pile)) {
        return dispatch(flipCardUp(id));
      }
      return;
    }
    if (!isTopCard(id, pile)) {
      const index = pile.indexOf(id);
      return dispatch(selectCards({ ids: pile.slice(index), location }));
    }
  }

  if (AREAS[location] === WASTE) {
    if (!isTopCard(id, pile)) {
      return;
    }
  }

  dispatch(deselectAllCards());
  dispatch(selectCard(payload));
};

export const updateSelectedPosition = payload => ({
  type: 'UPDATE_SELECTED_POSITION',
  ...payload
});

// TODO: this recieves and object while other functions like addCardLocation recieve a list
export const selectCards = payload => ({
  type: 'SELECT_CARDS',
  ...payload
});
export const selectCard = payload => ({
  type: 'SELECT_CARD',
  ...payload
});

export const deselectAllCards = () => ({
  type: 'DESELECT_ALL_CARDS',
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
  const { dragger, solitaire } = getState();
  const { selected } = dragger;
  const { cards } = solitaire;
  const selectedArray = Object.keys(selected)
    .reduce((acc, key) => (
      [...acc, selected[key]]
    ), [])
    .sort((a, b) => a.order - b.order)
    .map(item => item.id);

  if(selectedArray.length === 0) {
    return;
  }

  if ( !isValidMove({
    cards,
    fromCards: selectedArray,
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

export const registerDropZone = payload => ({
  type: 'REGISTER_DROPZONE',
  ...payload
});

/* ADD REMOVE CARDS */

export const addCardLocation = (id, location) => dispatch => dispatch(addCardsLocation([id], location));
export const addCardsLocation = (ids, location) => ({
  type: 'ADD_CARDS_LOCATION',
  ids,
  location,
});

export const removeCardsLocation = (ids, location) => ({
  type: 'REMOVE_CARDS_LOCATION',
  ids,
  location,
});
export const removeCardLocation = (id, location) => (dispatch) => dispatch(removeCardsLocation([id], location));

export const removeAllCardsLocation = location => ({
  type: 'REMOVE_ALL_CARDS_LOCATION',
  location
});


// TODO: Everything below should be broken out to own files

/* GAME STATE */

export const setGameState = gameState => ({
  type: 'SET_GAME_STATE',
  gameState
});

export const resetSecondsPassed = () => ({
  type: 'RESET_SECONDS_PASSED'
});

export const incrementSecondsPassed = () => ({
  type: 'INCREMENT_SECONDS_PASSED'
});

/* DRAGGER */

export const setDragger = dragger => ({
  type: 'SET_DRAGGER',
  dragger
});

export const draggerReleased = position => (dispatch, getState) => {
  const { dragger } = getState();
  const { dropZones } = dragger;

  const dropZonesInRelease = Object.keys(dropZones)
    .filter(key => {
      const zone = dropZones[key];
      const { width, height, x, y } = zone;

      const top = y;
      const right = x + width;
      const bottom = y + height;
      const left = x;

      const inXBounds = position.x >= left && position.x <= right;
      const inYBounds = position.y >= top && position.y <= bottom;

      return inXBounds && inYBounds;
    });

  if (dropZonesInRelease.length > 0) {
    return dispatch(moveSelectedToLocation(dropZonesInRelease[0]));
  }

  return dispatch(deselectAllCards());
}
