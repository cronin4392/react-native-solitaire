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

/*
  MOVE CARDS
*/

export const movePickupIntoWaste = () => (dispatch, getState) => {
  const { solitaire } = getState();
  const { pickup, waste, wasteSize } = solitaire;

  const slicePoint = pickup.length - wasteSize;
  const cards = pickup.slice(slicePoint);

  dispatch(removeCardsPickup(cards));
  dispatch(addCardsWaste(cards));
  dispatch(flipCardsUp(cards));
};


/* ADD REMOVE CARDS */

export const addCardsWaste = ids => dispatch => applyToArray(ids, (id => dispatch(addCardWaste(id))));
export const addCardWaste = id => ({
  type: 'ADD_CARD_WASTE',
  id
});

export const removeCardsPickup = ids => dispatch => applyToArray(ids, (id => dispatch(removeCardPickup(id))));
export const removeCardPickup = id => ({
  type: 'REMOVE_CARD_PICKUP',
  id
});