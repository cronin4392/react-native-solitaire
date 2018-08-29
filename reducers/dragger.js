const INITIAL_STATE = {
  dragger: null,
  dropZones: {}, // { id: { width, height, x, y } }
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
    case 'REGISTER_DROPZONE': {
      const { dropZones } = state;
      const {
        location,
        width,
        height,
        px,
        py
      } = action;

      return {
        ...state,
        dropZones: {
          ...dropZones,
          [location]: {
            location,
            width,
            height,
            px,
            py,
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