import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "react-bootstrap/lib/";
import Tweet from "../components/Tweet";
import StatModal from "./StatModal";
import ControlPanel from "../components/ControlPanel";
import FilterPanel from "../components/FilterPanel";

import { ActionCreators as UndoActionCreators } from "redux-undo";
import store from "../store";

const TweetsList = props => {
  const { tweets } = props;
  const isLoaded = props.tweets.length >= 1;

  const handleUndo = () => {
    store.dispatch(UndoActionCreators.jumpToPast(0));
  };
  return (
    <Grid>
      {isLoaded && (
        <Fragment>
          <ControlPanel />
          <FilterPanel
            isFiltersOpen={props.isFiltersOpen}
            canUndo={props.canUndo}
          />{" "}
          <StatModal />
          {tweets.map(tweet => (
            <Tweet tweet={tweet} key={tweet.id} />
          ))}
        </Fragment>
      )}

      {!isLoaded && props.canUndo && (
        <Fragment>
          <p className="lead">No results were found.</p>
          <Button bsStyle="danger" onClick={handleUndo}>
            UNDO APPLIED FILTERS
          </Button>
        </Fragment>
      )}
    </Grid>
  );
};

const mapStateToProps = function(store) {
  return {
    tweets: store.tweets.present.tweets,
    isFiltersOpen: store.filterBox.isFiltersOpen
  };
};

export default connect(mapStateToProps)(TweetsList);

// canUndo: store.tweets.past.length >= 1
