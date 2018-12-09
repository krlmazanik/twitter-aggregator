import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap/lib";
import store from "../store";
import { toggleFilterBox } from "../store/actions/filterBox-actions";

const FilterButton = props => {
  const { isFiltersOpen } = props;
  const buttonText = isFiltersOpen ? "Close Filters" : "Show Filters";

  const handleClick = (status = "undefined") => {
    store.dispatch(toggleFilterBox(status));
  };

  return (
    <Button onClick={handleClick} style={{ marginLeft: "35px" }}>
      {buttonText}
    </Button>
  );
};

const mapStateToProps = store => {
  return {
    isFiltersOpen: store.filterBox.isFiltersOpen
  };
};

export default connect(mapStateToProps)(FilterButton);
