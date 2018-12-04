import React from "react";
import store from "../store/";
import { setTweets } from "../store/actions/tweets-actions";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap/lib";

import queryString from "query-string";

const Header = () => {
  let textInput = "";
  const handleOnClick = () => {
    fetch("/get-tweets", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: queryString.stringify({ screenName: textInput.value })
    })
      .then(res => res.json())
      .then(tweets => store.dispatch(setTweets(tweets)));
  };

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
              inputRef={ref => {
                textInput = ref;
              }}
            />
          </FormGroup>{" "}
          <Button type="submit" onClick={handleOnClick}>
            Submit
          </Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
