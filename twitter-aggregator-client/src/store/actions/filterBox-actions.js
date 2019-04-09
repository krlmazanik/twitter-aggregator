import * as types from "./actionTypes";

export function toggleFilterBox(status) {
  return {
    type: types.TOGGLE_FILTER_BOX,
    status
  };
}

export function applyFilter(filter, payload) {
  return {
    type: types.APPLY_FILTER,
    filter,
    payload
  }
}
