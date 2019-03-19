import React from "react";
import { Button } from "react-bootstrap/lib";

const FilterButton = props => {
  const { isFiltersOpen, toggleFilterBox } = props;
  const buttonText = isFiltersOpen ? "Close Filters" : "Show Filters";

  const handleClick = (status = "undefined") => {
    toggleFilterBox(status);
  };

  return (
    <Button onClick={handleClick} style={{ marginLeft: "35px" }}>
      {buttonText}
    </Button>
  );
};

export default FilterButton;
