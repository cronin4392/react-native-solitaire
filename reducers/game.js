const INITIAL_STATE = {
  gameState: 'ENDED',
};

const game = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_GAME_STATE': {
      const { gameState } = action;
      return {
        ...state,
        gameState,
      }
    }
    default: {
      return state;
    }
  }
};

export default game;