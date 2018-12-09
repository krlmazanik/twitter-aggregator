import { combineReducers } from "redux";

import tweets from "./tweets";
import modal from "./modal";
import filterBox from "./filterBox";

const rootReducer = combineReducers({
  tweets,
  modal,
  filterBox
});

export default rootReducer;
