const INITIAL_STATE = {
  dragger: null,
  dropZones: {}, // { id: { width, height, x, y } }
};

const dragger = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_DRAGGER': {
      const { dragger } = action;
      return {
        ...state,
        dragger,
      }
    }
    case 'REGISTER_DROPZONE': {
      const { dropZones } = state;

      const {
        location,
        width,
        height,
        x,
        y
      } = action;

      return {
        ...state,
        dropZones: {
          ...dropZones,
          [location]: {
            location,
            width,
            height,
            x,
            y,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default dragger;