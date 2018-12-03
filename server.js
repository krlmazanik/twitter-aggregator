const express = require("express");
const Twitter = require("twitter-js-client").Twitter;
const bodyParser = require("body-parser");

const keys = require("./keys.js");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

var twitter = new Twitter(keys);

app.get("/get-tweets", (req, res) => {
  twitter.getUserTimeline(
    { tweet_mode: "extended", screen_name: "realDonaldTrump", count: "5" },
    err => res.send(err),
    data => res.send(data)
  );
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
