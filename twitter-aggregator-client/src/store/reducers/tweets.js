import {
  REQUEST_TWEETS,
  RECEIVE_TWEETS,
  SORT_TWEETS,
  FILTER_BY_DATE,
  FILTER_BY_LIKES,
  FILTER_BY_LENGTH,
  FILTER_BY_SUBSTRING,
  FILTER_BY_EXACT_MENTION
} from "../actions/actionTypes";
import undoable, { includeAction } from "redux-undo";

const initialState = {
  tweets: [],
  isFetching: false
};

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TWEETS:
      return { ...state, isFetching: true };

    case RECEIVE_TWEETS:
      return { ...state, isFetching: false, tweets: action.tweets };

    case SORT_TWEETS:
      const { sortType, direction } = action;
      return {
        tweets: state.tweets.slice().sort((a, b) => {
          if (sortType === "date") {
            a = new Date(a.created_at);
            b = new Date(b.created_at);
          } else if (sortType === "like") {
            a = a.favorite_count;
            b = b.favorite_count;
          }
          if (direction === "descending") {
            return b - a;
          } else if (direction === "ascending") {
            return a - b;
          }
        })
      };

    case FILTER_BY_DATE:
      const startDate = action.dates[0];
      const endDate = action.dates[1];

      return {
        tweets: state.tweets.filter(tweet => {
          const { created_at } = tweet;

          const normalizedDate = (() => {
            const arr = created_at.split(" ");
            return new Date(`${arr[1]}, ${arr[2]}, ${arr[5]}`);
          })();

          if (endDate) {
            return +startDate <= +normalizedDate && +normalizedDate <= +endDate;
          }

          return +startDate === +normalizedDate;
        })
      };

    case FILTER_BY_LIKES:
      const { filterType, numberOfLikes } = action;

      return {
        tweets: state.tweets.filter(tweet => {
          const { favorite_count } = tweet;

          if (filterType === "rangeOf") {
            const likesStart = parseInt(numberOfLikes[0], 10);
            const likesEnd = parseInt(numberOfLikes[1], 10);

            if (likesStart > likesEnd || !likesEnd) {
              return likesStart <= favorite_count;
            } else {
              return likesStart <= favorite_count && favorite_count <= likesEnd;
            }
          } else if (filterType === "lessThan") {
            return parseInt(numberOfLikes, 10) >= favorite_count;
          } else if (filterType === "moreThan") {
            return parseInt(numberOfLikes, 10) <= favorite_count;
          }
        })
      };

    case FILTER_BY_LENGTH:
      const { length, filterLengthType } = action;
      return {
        tweets: state.tweets.filter(tweet => {
          const tweetLength = tweet.display_text_range[1];

          if (filterLengthType === "lessThan") {
            return parseInt(length, 10) >= tweetLength;
          } else if (filterLengthType === "moreThan") {
            return parseInt(length, 10) <= tweetLength;
          }
        })
      };

    case FILTER_BY_SUBSTRING:
      const { substring } = action;
      return {
        tweets: state.tweets.filter(tweet => {
          const { full_text } = tweet;
          return full_text.toLowerCase().includes(substring.toLowerCase());
        })
      };

    case FILTER_BY_EXACT_MENTION:
      const { text, filterMentionType } = action;

      return {
        tweets: state.tweets.filter(tweet => {
          const { hashtags, user_mentions } = tweet.entities;
          if (filterMentionType === "mention" && user_mentions.length >= 1) {
            const isFound = user_mentions.filter(mention => {
              return mention.screen_name === text;
            });

            return isFound.length >= 1;
          } else if (filterMentionType === "hashtag" && hashtags.length >= 1) {
            const isFound = hashtags.filter(hashtag => {
              return hashtag.text === text;
            });

            return isFound.length >= 1;
          }
        })
      };
    default:
      return state;
  }
};

export default undoable(tweets, {
  filter: includeAction([
    FILTER_BY_DATE,
    FILTER_BY_LIKES,
    FILTER_BY_LENGTH,
    FILTER_BY_SUBSTRING,
    FILTER_BY_EXACT_MENTION
  ])
});
