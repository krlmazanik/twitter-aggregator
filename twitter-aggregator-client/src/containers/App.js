import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import fetchTweets from "../store/helpers/fetchTweets";
import Header from "../components/Header";
import Body from "./Body";

class App extends Component {
  componentDidMount() {
    this.props.fetchTweets("elonmusk");
  }

  render() {
    return (
      <Fragment>
        <Header fetchTweets={this.props.fetchTweets} />
        <Body />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchTweets
};

export default connect(
  null,
  mapDispatchToProps
)(App);
