import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ tweets }) => {
  return (Array.isArray(tweets) ? tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />) : "Nothing was found");
};

export default TweetList;
