import React from "react";
import { Button } from "react-bootstrap/lib/";
import store from "../store";
import { toggleModal } from "../store/actions/modal-actions";
import SortButtons from "./SortButtons";
import FilterButton from "./FilterButton";

const ControlPanel = () => {
  const handleModalOpen = () => {
    store.dispatch(toggleModal(true));
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      Sort by:
      <SortButtons />
      <FilterButton />
      <Button onClick={handleModalOpen} style={{ marginLeft: "35px" }}>
        Check Tweets Statistics
      </Button>
    </div>
  );
};

export default ControlPanel;
