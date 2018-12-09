import { TOGGLE_FILTER_BOX } from "../actions/actionTypes";

export default (state = { isFiltersOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_BOX:
      return { ...state, isFiltersOpen: !state.isFiltersOpen };
    default:
      return state;
  }
};
