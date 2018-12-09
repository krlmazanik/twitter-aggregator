import React, { Component, Fragment } from "react";
import { ButtonGroup, Button } from "react-bootstrap/lib";

import store from "../../store";
import { filterByLikes } from "../../store/actions/tweets-actions";

class LikesFilter extends Component {
  constructor() {
    super();

    this.state = {
      filter: "moreThan",
      likesStart: 0,
      likesEnd: 0
    };
  }

  handleClick = e => {
    this.setState({ filter: e.target.value });
  };

  isActive = value => {
    return value === this.state.filter ? "primary" : "default";
  };

  handleInputChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  handleApply = () => {
    const { likesStart, filter } = this.state;
    if (filter === "rangeOf") {
      const { likesEnd } = this.state;
      store.dispatch(filterByLikes([likesStart, likesEnd], filter));
    } else {
      store.dispatch(filterByLikes(likesStart, filter));
    }
  };

  render() {
    const { filter } = this.state;
    const buttons = [
      { value: "moreThan", text: "More Than" },
      { value: "lessThan", text: "Less Than" },
      { value: "rangeOf", text: "Range of Likes" }
    ];

    const inputStyles = {
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft: "5px",
      marginRight: "5px"
    };

    return (
      <div>
        <h3>Filter by the Number of Likes:</h3>
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
            id="likesStart"
            name="likesStart"
            value={this.state.likesStart}
            onChange={e => this.handleInputChange("likesStart", e)}
            placeholder="Enter the number of likes"
            style={inputStyles}
          />
          {filter === "rangeOf" && (
            <Fragment>
              up to
              <input
                type="number"
                id="likesEnd"
                name="likesEnd"
                placeholder="Enter the number of likes"
                onChange={e => this.handleInputChange("likesEnd", e)}
                style={inputStyles}
              />
            </Fragment>
          )}
          <Button style={{ marginLeft: "30px" }} onClick={this.handleApply}>
            Apply Likes Filter
          </Button>
        </div>
      </div>
    );
  }
}

export default LikesFilter;
