import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap/lib";
import ApplyButton from "./ApplyButton";

class TweetLengthFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "moreThan",
      tweetLength: 280
    };
  }

  handleClick = e => {
    this.setState({ filter: e.target.value });
  };

  isActive = value => {
    return value === this.state.filter ? "primary" : "default";
  };

  handleInputChange = e => {
    this.setState({
      tweetLength: e.target.value
    });
  };

  handleApply = () => {
    const { tweetLength, filter } = this.state;
    const { applyFilter } = this.props;

    applyFilter("tweetLengthFilter", [filter, tweetLength]);
  };

  render() {
    const buttons = [
      { value: "moreThan", text: "More Than" },
      { value: "lessThan", text: "Less Than" }
    ];

    const inputStyles = {
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft: "5px",
      marginRight: "35px"
    };

    const { applied } = this.props;

    return (
      <div>
        <h3>Filter by Tweet Length:</h3>

        <ButtonGroup>
          {buttons.map((button, index) => {
            return (
              <Button
                value={button.value}
                onClick={e => this.handleClick(e)}
                bsStyle={this.isActive(button.value)}
                key={button.value}
              >
                {button.text}
              </Button>
            );
          })}
        </ButtonGroup>

        <div>
          From
          <input
            type="number"
            id="tweetLength"
            name="tweetLength"
            value={this.state.tweetLength}
            onChange={e => this.handleInputChange(e)}
            placeholder="Enter desired tweet length"
            style={inputStyles}
          />
          <ApplyButton onClick={this.handleApply} applied={applied}>
            Tweet Length Filter
          </ApplyButton>
        </div>
      </div>
    );
  }
}

export default TweetLengthFilter;
