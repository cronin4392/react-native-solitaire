export const startNewGame = () => dispatch => {
  dispatch(generateCards());
};

export const generateCards = () => ({
  type: "GENERATE_CARDS"
});

export const moveCardToLocation = (id, location) => ({
  type: "MOVE_CARD_TO_LOCATION",
  id,
  location
});
