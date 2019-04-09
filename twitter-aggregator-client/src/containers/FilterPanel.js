import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Well } from "react-bootstrap/lib";
import TweetList from "../components/TweetList";
import masterFilter from "../components/filters/filterFunctions";

import {
  DateFilter,
  LikesFilter,
  TweetLengthFilter,
  SubstringFilter,
  ExactMentionFilter
} from "../components/filters";

import { applyFilter } from "../store/actions/filterBox-actions";

const FilterPanel = props => {
  const { tweets, isFiltersOpen, applyFilter, appliedFilters } = props;

  const isVisible = isFiltersOpen ? { display: "block" } : { display: "none" };

  const filteredTweets = masterFilter({ tweets, appliedFilters })["tweets"];

  return (
    <Fragment>
      <Well style={isVisible}>
        <DateFilter
          applyFilter={applyFilter}
          applied={appliedFilters.dateFilter.active}
        />
        <LikesFilter
          applyFilter={applyFilter}
          applied={appliedFilters.likesFilter.active}
        />
        <TweetLengthFilter
          applyFilter={applyFilter}
          applied={appliedFilters.tweetLengthFilter.active}
        />
        <SubstringFilter
          applyFilter={applyFilter}
          applied={appliedFilters.substringFilter.active}
        />
        <ExactMentionFilter
          applyFilter={applyFilter}
          applied={appliedFilters.exactMentionFilter.active}
        />
        <hr />
      </Well>
      <TweetList style={isVisible} tweets={filteredTweets} />
    </Fragment>
  );
};

const mapDispatchToProps = {
  applyFilter
};

const mapStateToProps = store => {
  return {
    tweets: store.tweets.tweets,
    isFiltersOpen: store.filterBox.isFiltersOpen,
    appliedFilters: store.filterBox.appliedFilters
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);
