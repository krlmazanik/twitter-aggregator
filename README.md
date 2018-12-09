# Twitter-aggregator (Twitter Analytics)

## Used technologies

- [React.js](https://reactjs.org/)
- [Redux.js](https://redux.js.org/) / [Redux-undo](https://github.com/omnidan/redux-undo)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Node.js](https://nodejs.org/en/) / [Express.js](https://expressjs.com/)

## Development setup

Setup the environment:

- Put your Twitter API keys close to `server.js`. You `keys.js` file should look like:

```js
const keys = {
  consumerKey: "XXX",

  consumerSecret: "XXX",

  accessToken: "XXX",

  accessTokenSecret: "XXX"
};

module.exports = keys;
```

- To install `npm` packages, run `npm install` from root folder.
- To install `client` dependencies, run `cd twitter-aggregator-client && npm install`.
- In order to run the project, run `npm run dev`. Or you may run `service` and `client` independently using `npm run server` and `npm run client`

## Functionality:

- **Choose** a screen name and **fetch** 50 last tweets from chosen twitter page.
- **Sort** fetched tweets by **date** and **number of likes**(_either in descending or ascending order_)
- **Filter** fetched tweets:
  - **by date**(_certain date or date range_)
  - **tweet length**(_more than, less than_)
  - **number of likes**(_more than, less than, range of likes_)
  - **substring occurrence**(_case insensitive_)
  - an **exact match for mention or hashtag**.
- **Check statistics** in modal window. The information represented:
  - **total number of likes**
  - **average number of likes per tweet**
  - **all mentions in tweets with a number of unique occurrences**.
