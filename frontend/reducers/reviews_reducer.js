import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEW:
      const review = {[action.review.review.id]: action.review.review};
      return Object.assign({}, state, review)
    case RECEIVE_ALL_REVIEWS:
       return action.reviews
    case REMOVE_REVIEW:
      const newState = Object.assign({}, state, {deleted: true});
      delete newState[action.reviewId]
      return state
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, action.business.reviews);
    case RECEIVE_COMMENT:
      nextState[action.comment.review_id].comment_ids.push(action.comment.id);
      return nextState;
    case REMOVE_COMMENT:
      nextState[action.commment.review_id].comment_ids = nextState[action.comment.review_id].comment_ids.filter(id=> id !== action.comment.id)
      return nextState;
    default:
      return state;
  }
}

export default reviewsReducer;