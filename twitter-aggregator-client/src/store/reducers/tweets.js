import {
  REQUEST_TWEETS,
  RECEIVE_TWEETS,
  SORT_TWEETS
} from "../actions/actionTypes";

const initialState = {
  tweets: [],
  isFetching: false
};

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TWEETS:
      return { ...state, isFetching: true };

    case RECEIVE_TWEETS:
      return { ...state, isFetching: false, tweets: action.tweets };

    case SORT_TWEETS:
      const { sortType, direction } = action;
      return {
        ...state,
        tweets: state.tweets.slice().sort((a, b) => {
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

export default tweets;
