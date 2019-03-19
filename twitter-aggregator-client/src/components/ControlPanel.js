import React from "react";
import { Button } from "react-bootstrap/lib/";
import SortButtons from "./SortButtons";
import FilterButton from "./FilterButton";

//make this component a container(?)
const ControlPanel = props => {
  const { toggleModal, isFiltersOpen,toggleFilterBox, sortTweets } = props;
  const handleModalOpen = () => {
    toggleModal(true);
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      Sort by:
      <SortButtons sortTweets={sortTweets}/>
      <FilterButton toggleFilterBox={toggleFilterBox} isFiltersOpen={isFiltersOpen}/>
      <Button onClick={handleModalOpen} style={{ marginLeft: "35px" }}>
        Check Tweets Statistics
      </Button>
    </div>
  );
};

export default ControlPanel;
