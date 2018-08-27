import { combineReducers } from 'redux';

import solitaire from './solitaire';
import game from './game';

export default combineReducers({
  game,
  solitaire
});