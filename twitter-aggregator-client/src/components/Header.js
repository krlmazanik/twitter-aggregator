import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap/lib";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { screenName: "" };
  }

  handleOnClick = () => {
    this.props.fetchTweets(this.state.screenName);
  };

  handleChange = e => {
    this.setState({ screenName: e.target.value });
  };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Twitter Analytics</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Enter the screen name"
                name="screenName"
                value={this.state.screenName}
                onChange={this.handleChange}
              />
            </FormGroup>{" "}
            <Button type="submit" onClick={this.handleOnClick}>
              Submit
            </Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
