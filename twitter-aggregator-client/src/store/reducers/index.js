import { combineReducers } from "redux";

import tweets from "./tweets";
import modal from "./modal";

const rootReducer = combineReducers({
  tweets,
  modal
});

export default rootReducer;
