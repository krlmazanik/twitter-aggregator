import { SET_TWEETS } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_TWEETS:
      return action.tweets;
    default:
      return state;
  }
};
