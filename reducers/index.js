import { combineReducers } from "redux";

import dragger from "./dragger";
import game from "./game";
import solitaire from "./solitaire";
import solitaire2 from "./solitaire2";

export default combineReducers({
  dragger,
  game,
  solitaire2
});
