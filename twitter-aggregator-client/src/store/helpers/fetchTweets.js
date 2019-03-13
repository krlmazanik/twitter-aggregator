import queryString from "query-string";

import { requestTweets, receiveTweets } from "../actions/tweets-actions";

export default function fetchTweets(screenName) {
  return function(dispatch) {
    dispatch(requestTweets());
    return fetch("/get-tweets", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: queryString.stringify({ screenName })
    })
      .then(
        response => response.json(),
        error => console.log("An error occured", error)
      )
      .then(tweets => dispatch(receiveTweets(tweets)));
  };
}
