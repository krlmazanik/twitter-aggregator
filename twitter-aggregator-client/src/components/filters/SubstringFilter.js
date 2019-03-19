import React, { Component } from "react";
import { Button } from "react-bootstrap/lib";

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
    const { filterBySubstring } = this.props;

    filterBySubstring(substring);
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
