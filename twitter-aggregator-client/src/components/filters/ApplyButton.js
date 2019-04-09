import React from "react";
import { Button } from "react-bootstrap/lib";

const ApplyButton = props => {
  const { applied } = props;

  return (
    <Button
      onClick={props.onClick}
      className={applied ? "btn btn-success" : "btn"}
      style={props.style}
    >
      {applied ? `${props.children} is applied` : `Apply ${props.children}`}
    </Button>
  );
};

export default ApplyButton;
