import React from "react";
import { connect } from "react-redux";
import Grid from "react-bootstrap/lib/Grid";
import Tweet from "../components/Tweet";

const TweetsList = props => {
  const { tweets } = props;
  return (
    <Grid>
      {tweets.map(tweet => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </Grid>
  );
};

const mapStateToProps = function(store) {
  return {
    tweets: store.tweets
  };
};

export default connect(mapStateToProps)(TweetsList);
