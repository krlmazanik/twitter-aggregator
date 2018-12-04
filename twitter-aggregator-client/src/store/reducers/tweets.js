import { SET_TWEETS, SORT_TWEETS } from "../actions/actionTypes";

export default (state = { tweets: [] }, action) => {
  switch (action.type) {
    case SET_TWEETS:
      return { tweets: action.tweets };
    case SORT_TWEETS:
      return {
        tweets: state.tweets.slice().sort((a, b) => {
          const { sortType, direction } = action;
          if (sortType === "date") {
            a = new Date(a.created_at);
            b = new Date(b.created_at);
          } else if (sortType === "like") {
            a = a.favorite_count;
            b = b.favorite_count;
          }
          if (direction === "descending") {
            return b - a;
          } else if (direction === "ascending") {
            return a - b;
          }
        })
      };
    default:
      return state;
  }
};
