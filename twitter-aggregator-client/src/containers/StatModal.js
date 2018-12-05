import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap/lib";
import commaNumber from "comma-number";
import store from "../store/";
import { toggleModal } from "../store/actions/modal-actions";

const StatModal = props => {
  const { tweets } = props;
  const handleClose = () => {
    store.dispatch(toggleModal(false));
  };

  const getTotalLikes = (() =>
    tweets.reduce((acc, val) => acc + val.favorite_count, 0))();
  const totalLikesFormatted = (() => commaNumber(getTotalLikes))();

  const getAverageLikes = (() => commaNumber(getTotalLikes / tweets.length))();

  const getMentions = (() => {
    const mentions = [];
    const occurences = [];

    tweets.forEach(el => {
      if (el.entities.user_mentions.length > 0) {
        mentions.push(el.entities.user_mentions);
      }
    });

    mentions.forEach(el => {
      el.forEach(element => occurences.push(element.screen_name));
    });

    const occurencesPerUser = occurences.reduce((acc, curr) => {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});

    return occurencesPerUser;
  })();

  const generateListOfMentions = (() => {
    return Object.entries(getMentions).map(([key, value]) => {
      return <li key={key}>{`@${key} : ${value}x`}</li>;
    });
  })();

  const isMentionsFound =
    generateListOfMentions.length > 0
      ? generateListOfMentions
      : "No mentions were found";

  return (
    <Fragment>
      <Modal show={props.modal.isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tweets statistics:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">
            <strong>Total number of likes:</strong> {totalLikesFormatted}
          </p>
          <p className="lead">
            <strong>Average number of likes per tweet:</strong>{" "}
            {getAverageLikes}
          </p>
          <p className="lead">
            <strong>Mentions:</strong>
          </p>
          <ul className="lead">{isMentionsFound}</ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = function(store) {
  return {
    modal: store.modal,
    tweets: store.tweets.tweets
  };
};

export default connect(mapStateToProps)(StatModal);
