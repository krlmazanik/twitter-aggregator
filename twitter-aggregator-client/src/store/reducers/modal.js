import { TOGGLE_MODAL } from "../actions/actionTypes";

export default (state = { isModalOpen: false }, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isModalOpen: action.status };
    default:
      return state;
  }
};
