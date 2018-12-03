import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/";
import { setTweets } from "../store/actions/tweets-actions";

class App extends Component {
  componentDidMount() {
    fetch("/get-tweets")
      .then(res => res.json())
      .then(tweets => store.dispatch(setTweets(tweets)));
  }

  render() {
    return (
      <ul>
        {this.props.tweets.map(tweet => (
          <li>{tweet.full_text}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tweets: store.tweets
  };
};

export default connect(mapStateToProps)(App);
