import * as types from "./actionTypes";

export function setTweets(tweets) {
  return {
    type: types.SET_TWEETS,
    tweets
  };
}

export function sortTweets(sortType, direction) {
  return {
    type: types.SORT_TWEETS,
    sortType,
    direction
  };
}

export function filterByDate(dates) {
  return {
    type: types.FILTER_BY_DATE,
    dates
  };
}

export function filterByLikes(numberOfLikes, filterType) {
  return {
    type: types.FILTER_BY_LIKES,
    numberOfLikes,
    filterType
  };
}

export function filterByLength(length, filterLengthType) {
  return {
    type: types.FILTER_BY_LENGTH,
    length,
    filterLengthType
  };
}

export function filterBySubstring(substring) {
  return {
    type: types.FILTER_BY_SUBSTRING,
    substring
  };
}

export function filterByExactMention(text, filterMentionType) {
  return {
    type: types.FILTER_BY_EXACT_MENTION,
    text,
    filterMentionType
  };
}
