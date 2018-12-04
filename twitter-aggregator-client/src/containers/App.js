import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import store from "../store/";
import { setTweets } from "../store/actions/tweets-actions";
import Header from "../components/Header";
import TweetsList from "./TweetsList";

class App extends Component {
  componentDidMount() {
    fetch("/get-tweets")
      .then(res => res.json())
      .then(tweets => store.dispatch(setTweets(tweets)));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <TweetsList />
      </Fragment>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tweets: store.tweets
  };
};

export default connect(mapStateToProps)(App);
