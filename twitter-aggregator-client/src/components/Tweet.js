import React from "react";
import { Col, Image, Glyphicon, Row } from "react-bootstrap/lib";

import approx from "approximate-number";
import timeago from "epoch-timeago";

const Tweet = props => {
  const { tweet } = props;
  const userData = props.tweet.user;

  const isImageAvailable = (() => {
    if (typeof tweet.entities.media !== "undefined") {
      return (
        <Image
          src={tweet.entities.media[0].media_url}
          style={{ width: "400px" }}
          responsive
          rounded
        />
      );
    }
  })();

  const relativeTime = (() => timeago(new Date(tweet.created_at).getTime()))();

  const approximateNumber = num => approx(num);
  const retweet_count = approximateNumber(tweet.retweet_count);
  const favorite_count = approximateNumber(tweet.favorite_count);

  const userTitle = `${userData.name} @${userData.screen_name}`;

  return (
    <Row className="show-grid">
      <Col xs={1}>
        <Image src={userData.profile_image_url} circle responsive />
      </Col>
      <Col xs={11} md={11}>
        <strong>{userTitle}</strong> ~ {relativeTime}
        <p className="lead">{tweet.full_text}</p>
        {isImageAvailable}
        <Glyphicon glyph="retweet" /> {retweet_count}
        <Glyphicon style={{ paddingLeft: "20px" }} glyph="heart-empty" />{" "}
        {favorite_count}
        <hr />
      </Col>
    </Row>
  );
};

export default Tweet;
