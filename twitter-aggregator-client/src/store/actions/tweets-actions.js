import * as types from "./actionTypes";

export function setTweets(tweets) {
  return {
    type: types.SET_TWEETS,
    tweets
  };
}
