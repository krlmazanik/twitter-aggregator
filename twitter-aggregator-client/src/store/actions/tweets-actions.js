import * as types from "./actionTypes";

export function requestTweets() {
  return {
    type: types.REQUEST_TWEETS
  };
}

export function receiveTweets(tweets) {
  return {
    type: types.RECEIVE_TWEETS,
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
