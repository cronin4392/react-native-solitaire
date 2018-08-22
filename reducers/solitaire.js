const INITIAL_STATE = {
  deck: []
};

const solitaire = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CREATE_DECK':
      return {
        ...state,
        deck: action.deck,
      }
    default:
      return state;
  }
};

export default solitaire;