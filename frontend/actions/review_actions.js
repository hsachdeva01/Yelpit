export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as R_APIUtil from '../util/review_api_util';

export const receiveReview = ({review, average_rating, user}) => ({
  type: RECEIVE_REVIEW,
  review,
  user,
  average_rating
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const receiveReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearReviewErrors = () => ({
  type: RECEIVE_ERRORS,
  errors: []
})


export const fetchReviews = () => dispatch => (
  R_APIUtil.fetchReviews()
    .then(reviews => (
      dispatch(receiveReviews(reviews))
  ))
);

export const fetchReview = id => dispatch => (
  R_APIUtil.fetchReviews(id)
  .then(review => (dispatch(receiveReviews(review))
  ))
);

export const createReview = id => dispatch => (
  R_APIUtil.createReview(id)
  .then(review => dispatch(receiveReview(review)
  ))
);

// export const updateReview = review => dispatch => (
//   R_APIUtil.updateReview(review)
//   .then(payload => dispatch(receiveReview(payload)
//   ))
// );

export const deleteReview = reviewId => dispatch => (
  R_APIUtil.deleteReview(reviewId)
    .then(review => dispatch(removeReview(reviewId))
))