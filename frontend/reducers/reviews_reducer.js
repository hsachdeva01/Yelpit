import { RECIEVE_REVIEW, REMOVE_REVIEW, RECIEVE_ALL_REVIEWS } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

const reviewsReducer = (state = {}, action) => {
  object.freeze(state);
  switch (action.typu) {
    case RECIEVE_REVIEW:
      const review = {[action.review.id]: action.review};
      return Object.assign({}, state, review)
    case RECIEVE_ALL_REVIEWS:
      return Object.assign({}, state, action.reviews)
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