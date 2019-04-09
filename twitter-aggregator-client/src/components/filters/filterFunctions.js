function masterFilter(filtersObj) {
  return filtersPipe(
    dateFilter,
    likesFilter,
    tweetLengthFilter,
    substringFilter,
    exactMentionFilter
  )(filtersObj);
}

function filtersPipe(...fns) {
  return function(obj) {
    return fns.reduce(
      (currentVal, currentFunc) => currentFunc(currentVal),
      obj
    );
  };
}

function dateFilter(filtersObj) {
  const { tweets } = filtersObj;
  const payload = filtersObj.appliedFilters.dateFilter;

  if (payload.active) {
    const [startDate, endDate] = payload.data;

    const filteredTweets = tweets.filter(tweet => {
      const { created_at } = tweet;

      const normalizedDate = (() => {
        const arr = created_at.split(" ");
        return new Date(`${arr[1]}, ${arr[2]}, ${arr[5]}`);
      })();

      if (endDate) {
        return +startDate <= +normalizedDate && +normalizedDate <= +endDate;
      }

      return +startDate === +normalizedDate;
    });
    return { ...filtersObj, tweets: filteredTweets };
  }

  return filtersObj;
}

function likesFilter(filtersObj) {
  const { tweets } = filtersObj;
  const payload = filtersObj.appliedFilters.likesFilter;

  if (payload.active) {
    const filteredTweets = tweets.filter(tweet => {
      const { favorite_count } = tweet;

      const filterType = payload.data[0];
      const likesStart = parseInt(payload.data[1], 10);

      if (filterType === "rangeOf") {
        const likesEnd = parseInt(payload.data[2], 10);

        if (likesStart > likesEnd || !likesEnd) {
          return likesStart <= favorite_count;
        } else {
          return likesStart <= favorite_count && favorite_count <= likesEnd;
        }
      } else if (filterType === "lessThan") {
        return parseInt(likesStart, 10) >= favorite_count;
      } else if (filterType === "moreThan") {
        return parseInt(likesStart, 10) <= favorite_count;
      }
    });
    return { ...filtersObj, tweets: filteredTweets };
  }

  return filtersObj;
}

function tweetLengthFilter(filtersObj) {
  const { tweets } = filtersObj;
  const payload = filtersObj.appliedFilters.tweetLengthFilter;

  if (payload.active) {
    const [filterType, length] = payload.data;

    const filteredTweets = tweets.filter(tweet => {
      const tweetLength = tweet.display_text_range[1];

      if (filterType === "lessThan") {
        return parseInt(length, 10) >= tweetLength;
      } else if (filterType === "moreThan") {
        return parseInt(length, 10) <= tweetLength;
      }
    });
    return { ...filtersObj, tweets: filteredTweets };
  }

  return filtersObj;
}

function substringFilter(filtersObj) {
  const { tweets } = filtersObj;
  const payload = filtersObj.appliedFilters.substringFilter;

  if (payload.active) {
    const substring = payload.data;
    const filteredTweets = tweets.filter(tweet => {
      const { full_text } = tweet;
      return full_text.toLowerCase().includes(substring.toLowerCase());
    });

    return { ...filtersObj, tweets: filteredTweets };
  }

  return filtersObj;
}

function exactMentionFilter(filtersObj) {
  const { tweets } = filtersObj;
  const payload = filtersObj.appliedFilters.exactMentionFilter;

  if (payload.active) {
    const [filterMentionType, text] = payload.data;

    const filteredTweets = tweets.filter(tweet => {
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
    });
    return { ...filtersObj, tweets: filteredTweets };
  }

  return filtersObj;
}

export default masterFilter;
