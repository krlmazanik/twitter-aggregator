import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import ApplyButton from "./ApplyButton";

class ExactMentionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      filter: "mention"
    };
  }

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };

  handleClick = e => {
    this.setState({ filter: e.target.value });
  };

  isActive = value => {
    return value === this.state.filter ? "primary" : "default";
  };

  handleApply = () => {
    const { text, filter } = this.state;
    const { applyFilter } = this.props;

    applyFilter("exactMentionFilter", [filter, text]);
  };

  render() {
    const inputStyles = {
      marginTop: "20px",
      marginBottom: "10px",
      marginLeft: "5px"
    };

    const buttons = [
      { value: "mention", text: "@Mention" },
      { value: "hashtag", text: "#Hashtag" }
    ];

    const { applied } = this.props;

    return (
      <div>
        <h3>Filter by Exact Mention or Hashtag:</h3>
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
          Search for:
          <input
            type="text"
            id="exactMention"
            name="exactMention"
            value={this.state.text}
            onChange={e => this.handleInputChange(e)}
            placeholder="Enter the text w/o # or @"
            style={inputStyles}
          />
          <ApplyButton
            onClick={this.handleApply}
            applied={applied}
            style={{ marginLeft: "30px" }}
          >
            Exact Mention/Hashtag Filter
          </ApplyButton>
        </div>
      </div>
    );
  }
}

export default ExactMentionFilter;
