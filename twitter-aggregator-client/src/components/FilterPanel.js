import React from "react";
import { Button, Well } from "react-bootstrap/lib";
import DateFilter from "./filters/DateFilter";
import LikesFilter from "./filters/LikesFilter";
import TweetLengthFilter from "./filters/TweetLengthFilter";
import SubstringFilter from "./filters/SubstringFilter";
import ExactMentionFilter from "./filters/ExactMentionFilter";

import { ActionCreators as UndoActionCreators } from "redux-undo";
import store from "../store";

const FilterPanel = ({ isFiltersOpen, canUndo }) => {
  const isVisible = isFiltersOpen ? { display: "block" } : { display: "none" };

  const handleUndo = () => {
    store.dispatch(UndoActionCreators.jumpToPast(0));
  };

  return (
    <Well style={isVisible}>
      <DateFilter />
      <LikesFilter />
      <TweetLengthFilter />
      <SubstringFilter />
      <ExactMentionFilter />
      <hr />
      {canUndo && (
        <Button onClick={handleUndo} bsStyle="danger">
          UNDO APPLIED FILTERS
        </Button>
      )}
    </Well>
  );
};

export default FilterPanel;
