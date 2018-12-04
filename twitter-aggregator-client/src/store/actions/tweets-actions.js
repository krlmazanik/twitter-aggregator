import * as types from "./actionTypes";

export function setTweets(tweets) {
  return {
    type: types.SET_TWEETS,
    tweets
  };
}

export function sortTweets(sortType, direction) {
  return {
    type: types.SORT_TWEETS,
    sortType,
    direction
  };
}
