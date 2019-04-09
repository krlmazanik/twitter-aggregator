import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap/lib/";
import TweetList from "../components/TweetList";
import StatModal from "../components/StatModal";
import ControlPanel from "../components/ControlPanel";
import FilterPanel from "./FilterPanel";
import Spinner from "../components/Spinner";
import { toggleModal } from "../store/actions/modal-actions";
import { toggleFilterBox } from "../store/actions/filterBox-actions";
import { sortTweets } from "../store/actions/tweets-actions";

const Body = props => {
  const {
    tweets,
    isFetching,
    isModalOpen,
    isFiltersOpen,
    toggleModal,
    toggleFilterBox,
    sortTweets
  } = props;
  const isLoaded = tweets.length >= 1 && !isFiltersOpen;

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
        {isLoaded && <TweetList tweets={tweets} />}
      </Fragment>
    </Grid>
  );
};

const mapStateToProps = store => {
  return {
    tweets: store.tweets.tweets,
    isModalOpen: store.modal.isModalOpen,
    isFiltersOpen: store.filterBox.isFiltersOpen,
    isFetching: store.tweets.isFetching
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
)(Body);
