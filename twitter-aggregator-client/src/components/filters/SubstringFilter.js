import React, { Component } from "react";
import ApplyButton from "./ApplyButton";

class SubstringFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      substring: ""
    };
  }

  handleInputChange = e => {
    this.setState({ substring: e.target.value });
  };

  handleApply = () => {
    const { substring } = this.state;
    const { applyFilter } = this.props;

    applyFilter("substringFilter", substring);
  };

  render() {
    const inputStyles = {
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft: "5px"
    };

    const { applied } = this.props;

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
        <ApplyButton
          onClick={this.handleApply}
          applied={applied}
          style={{ marginLeft: "30px" }}
        >
          Substring Occurence Filter
        </ApplyButton>
      </div>
    );
  }
}

export default SubstringFilter;
