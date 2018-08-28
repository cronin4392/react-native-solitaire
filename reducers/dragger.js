const INITIAL_STATE = {
  dragger: null,
};

const dragger = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CREATE_DRAGGER': {
      const { dragger } = action;
      return {
        ...state,
        dragger,
      }
    }
    default: {
      return state;
    }
  }
};

export default dragger;