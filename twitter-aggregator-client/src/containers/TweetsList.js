import React, { Fragment } from "react";
import { connect } from "react-redux";
import Grid from "react-bootstrap/lib/Grid";
import Tweet from "../components/Tweet";
import SortComponent from "../components/SortComponent";
import StatModal from "./StatModal";

const TweetsList = props => {
  const { tweets } = props;
  const isLoaded = props.tweets.length > 1;
  // Object.keys(props).length !== 0 && props.constructor === Object;
  return (
    <Grid>
      {isLoaded && (
        <Fragment>
          <SortComponent />
          <StatModal />
          {tweets.map(tweet => (
            <Tweet tweet={tweet} key={tweet.id} />
          ))}
        </Fragment>
      )}
    </Grid>
  );
};

const mapStateToProps = function(store) {
  return {
    tweets: store.tweets.tweets
  };
};

export default connect(mapStateToProps)(TweetsList);
