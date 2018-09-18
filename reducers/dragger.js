const INITIAL_STATE = {
  dragger: null,
  selected: {},
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
    case 'SELECT_CARD': {
      const {
        id,
        location,
        width,
        height,
        px,
        py,
      } = action;
      const { selected } = state;
      const selectedLength = Object.keys(selected).length;

      return {
        ...state,
        selected: {
          ...selected,
          [id]: {
            order: selectedLength + 1,
            id,
            location,
            width,
            height,
            px,
            py,
          },
        }
      }
    }
    case 'SELECT_CARDS': {
      const { ids, location } = action;
      const { selected } = state;
      const selectedLength = Object.keys(selected).length;

      const newSelected = ids.reduce((acc, id, index) => {
        return {
          ...acc,
          [id]: {
            order: selectedLength + index,
            id,
            location,
          },
        };
      }, {});

      return {
        ...state,
        selected: {
          ...selected,
          ...newSelected,
        }
      }
    }
    case 'DESELECT_CARD': {
      const { selected } = state;
      const { id } = action;

      return {
        ...state,
        selected: {
          ...selected,
          [id]: null, // TODO: unset this entirely
        }
      }
    }
    case 'UPDATE_SELECTED_POSITION': {
      const { selected } = state;
      const { id, width, height, px, py } = action;

      if (!selected[id]) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        selected: {
          ...selected,
          [id]: {
            ...selected[id],
            width,
            height,
            px,
            py,
          }
        }
      }
    }
    case 'DESELECT_ALL_CARDS': {
      return {
        ...state,
        selected: {}
      }
    }
    default: {
      return state;
    }
  }
};

export default dragger;