import * as types from "./actionTypes";

export function toggleModal(status) {
  return {
    type: types.TOGGLE_MODAL,
    status
  };
}
