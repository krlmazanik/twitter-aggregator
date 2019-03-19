import React, { Fragment } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap/lib/";

const SortButtons = props => {
  const { sortTweets } = props;
  const handleClick = (sortType, direction) => {
    sortTweets(sortType, direction);
  };

  return (
    <Fragment>
      <DropdownButton title="Date" id="Date">
        <MenuItem onClick={() => handleClick("date", "descending")}>
          Show Most Recent
        </MenuItem>
        <MenuItem onClick={() => handleClick("date", "ascending")}>
          Show the Oldest
        </MenuItem>
      </DropdownButton>
      <DropdownButton title="Likes" id="Likes">
        <MenuItem onClick={() => handleClick("like", "descending")}>
          Show in Descending Order
        </MenuItem>
        <MenuItem onClick={() => handleClick("like", "ascending")}>
          Show in Ascending Order
        </MenuItem>
      </DropdownButton>
    </Fragment>
  );
};

export default SortButtons;
