import { TOGGLE_FILTER_BOX, APPLY_FILTER } from "../actions/actionTypes";

const initialState = {
  isFiltersOpen: false,
  appliedFilters: {
    dateFilter: { active: false, data: null },
    exactMentionFilter: { active: false, data: null },
    likesFilter: { active: false, data: null },
    substringFilter: { active: false, data: null },
    tweetLengthFilter: { active: false, data: null }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_BOX:
      return { ...state, isFiltersOpen: !state.isFiltersOpen };
    case APPLY_FILTER:
      const { filter } = action;
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          [filter]: {
            ...state.appliedFilters[filter],
            active: !state.appliedFilters[filter].active,
            data: action.payload
          }
        }
      };
    default:
      return state;
  }
};
