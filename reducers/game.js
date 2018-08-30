const INITIAL_STATE = {
  gameState: 'ENDED',
  secondsPassed: 0,
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
    case 'RESET_SECONDS_PASSED': {
      return {
        ...state,
        secondsPassed: 0,
      }
    }
    case 'INCREMENT_SECONDS_PASSED': {
      const { secondsPassed } = state;
      return {
        ...state,
        secondsPassed: secondsPassed + 1,
      }
    }
    default: {
      return state;
    }
  }
};

export default game;