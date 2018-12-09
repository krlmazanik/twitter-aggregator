import React, { Component } from "react";
import { Button } from "react-bootstrap/lib";

import store from "../../store";
import { filterBySubstring } from "../../store/actions/tweets-actions";

class SubstringFilter extends Component {
  constructor() {
    super();

    this.state = {
      substring: ""
    };
  }

  handleInputChange = e => {
    this.setState({ substring: e.target.value });
  };

  handleApply = () => {
    const { substring } = this.state;
    store.dispatch(filterBySubstring(substring));
  };

  render() {
    const inputStyles = {
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft: "5px"
    };

    return (
      <div>
        <h3>Filter by Substring Occurence:</h3>
        Search for:
        <input
          type="text"
          id="substringOccurence"
          name="substringOccurence"
          value={this.state.substring}
          onChange={e => this.handleInputChange(e)}
          placeholder="Enter the text here"
          style={inputStyles}
        />
        <Button onClick={this.handleApply} style={{ marginLeft: "30px" }}>
          Apply Substring Occurence Filter
        </Button>
      </div>
    );
  }
}

export default SubstringFilter;
