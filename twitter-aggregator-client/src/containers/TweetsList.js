import React from "react";
import { connect } from "react-redux";
import Grid from "react-bootstrap/lib/Grid";
import Tweet from "../components/Tweet";
import SortComponent from "../components/SortComponent";

const TweetsList = props => {
  const { tweets } = props;
  return (
    <Grid>
      <SortComponent />
      {Object.keys(props).length !== 0 &&
        props.constructor === Object &&
        tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)}
    </Grid>
  );
};

const mapStateToProps = function(store) {
  return {
    tweets: store.tweets.tweets
  };
};

export default connect(mapStateToProps)(TweetsList);
