import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap/lib/";
import Tweet from "../components/Tweet";
import StatModal from "../components/StatModal";
import ControlPanel from "../components/ControlPanel";
import FilterPanel from "./FilterPanel";
import Spinner from "../components/Spinner";
import { toggleModal } from "../store/actions/modal-actions";
import { toggleFilterBox } from "../store/actions/filterBox-actions";
import { sortTweets } from "../store/actions/tweets-actions";

const TweetsList = props => {
  const {
    tweets,
    isFetching,
    isModalOpen,
    isFiltersOpen,
    toggleModal,
    toggleFilterBox,
    sortTweets
  } = props;
  const isLoaded = props.tweets.length >= 1;

  return (
    <Grid>
      <Fragment>
        <ControlPanel
          toggleModal={toggleModal}
          toggleFilterBox={toggleFilterBox}
          isFiltersOpen={isFiltersOpen}
          sortTweets={sortTweets}
        />
        <FilterPanel />
        <StatModal
          tweets={tweets}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
        <Spinner isFetching={isFetching} />
        {isLoaded &&
          tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)}
      </Fragment>
    </Grid>
  );
};

const mapStateToProps = store => {
  return {
    tweets: store.tweets.present.tweets,
    isModalOpen: store.modal.isModalOpen,
    isFiltersOpen: store.filterBox.isFiltersOpen,
    isFetching: store.tweets.present.isFetching
  };
};

const mapDispatchToProps = {
  toggleModal,
  toggleFilterBox,
  sortTweets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsList);
