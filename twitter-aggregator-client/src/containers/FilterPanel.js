import React from "react";
import { connect } from "react-redux";
import { Well } from "react-bootstrap/lib";

import {
  DateFilter,
  LikesFilter,
  TweetLengthFilter,
  SubstringFilter,
  ExactMentionFilter
} from "../components/filters";

import {
  filterByDate,
  filterByLikes,
  filterByLength,
  filterBySubstring,
  filterByExactMention
} from "../store/actions/tweets-actions";

const FilterPanel = props => {
  const { isFiltersOpen } = props;
  const {
    filterByDate,
    filterByLikes,
    filterByLength,
    filterBySubstring,
    filterByExactMention
  } = props;

  const isVisible = isFiltersOpen ? { display: "block" } : { display: "none" };

  return (
    <Well style={isVisible}>
      <DateFilter filterByDate={filterByDate} />
      <LikesFilter filterByLikes={filterByLikes} />
      <TweetLengthFilter filterByLength={filterByLength} />
      <SubstringFilter filterBySubstring={filterBySubstring} />
      <ExactMentionFilter filterByExactMention={filterByExactMention} />
      <hr />
    </Well>
  );
};

const mapDispatchToProps = {
  filterByDate,
  filterByLikes,
  filterByLength,
  filterBySubstring,
  filterByExactMention
};

const mapStateToProps = store => {
  return { isFiltersOpen: store.filterBox.isFiltersOpen };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);
