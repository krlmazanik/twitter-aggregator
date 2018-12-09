import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap/lib";

import store from "../../store";
import { filterByLength } from "../../store/actions/tweets-actions";

class TweetLengthFilter extends Component {
  constructor() {
    super();

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

    store.dispatch(filterByLength(tweetLength, filter));
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
          <Button onClick={this.handleApply}>Apply Tweet Length Filter</Button>
        </div>
      </div>
    );
  }
}

export default TweetLengthFilter;
