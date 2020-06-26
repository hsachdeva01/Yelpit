import { RECEIVE_ERRORS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};
