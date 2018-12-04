import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap/lib/";
import store from "../store";
import { sortTweets } from "../store/actions/tweets-actions";

const SortComponent = () => {
  const handleClick = (sortType, direction) => {
    store.dispatch(sortTweets(sortType, direction));
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      {" "}
      Sort by:{" "}
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
    </div>
  );
};

export default SortComponent;
