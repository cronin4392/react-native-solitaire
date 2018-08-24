const applyToArray = (array, func) => array.map(item => func(item));

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

  // const slicePoint = pickup.length - wasteSize;
  const cards = pickup.slice(0, wasteSize);

  dispatch(removeCardsPickup(cards));
  dispatch(addCardsWaste(cards));
  dispatch(flipCardsUp(cards));
};

export const moveWasteIntoPickup = () => (dispatch, getState) => {
  const { solitaire } = getState();
  const { waste } = solitaire;

  dispatch(removeCardsWaste(waste));
  dispatch(flipCardsDown(waste));
  dispatch(addCardsPickup(waste));
};


/* ADD REMOVE CARDS */

export const addCardsWaste = ids => dispatch => applyToArray(ids, (id => dispatch(addCardWaste(id))));
export const addCardWaste = id => ({
  type: 'ADD_CARD_WASTE',
  id
});

export const removeCardsWaste = ids => dispatch => applyToArray(ids, (id => dispatch(removeCardWaste(id))));
export const removeCardWaste = id => ({
  type: 'REMOVE_CARD_WASTE',
  id
});

export const addCardsPickup = ids => dispatch => applyToArray(ids, (id => dispatch(addCardPickup(id))));
export const addCardPickup = id => ({
  type: 'ADD_CARD_PICKUP',
  id
});

export const removeCardsPickup = ids => dispatch => applyToArray(ids, (id => dispatch(removeCardPickup(id))));
export const removeCardPickup = id => ({
  type: 'REMOVE_CARD_PICKUP',
  id
});