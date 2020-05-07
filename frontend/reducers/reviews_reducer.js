import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.typu) {
    case RECEIVE_REVIEW:
      const review = {[action.review.id]: action.review};
      return Object.assign({}, state, review)
    case RECEIVE_ALL_REVIEWS:
       return action.reviews
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state, {deleted: true});
      delete newState[action.reviewId]
      return state
    case RECEIVE_BUSINESS:
      return action.business.reviews || {};
    default:
      return state;
  }
}

export default reviewsReducer;