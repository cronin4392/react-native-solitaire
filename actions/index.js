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