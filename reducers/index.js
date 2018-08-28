import { combineReducers } from 'redux';

import dragger from './dragger';
import game from './game';
import solitaire from './solitaire';

export default combineReducers({
  dragger,
  game,
  solitaire
});