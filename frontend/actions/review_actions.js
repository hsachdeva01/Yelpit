export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
import * as R_APIUtil from '../util/review_api_util';

const receiveReview = ({review, user}) => ({
  type: RECEIVE_REVIEW,
  review: review,
  user: user
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveAllReview = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});


export const fetchReviews = () => dispatch => (
  R_APIUtil.fetchReviews()
  .then(payload => (
    dispatch(receiveReview(payload))
  ))
);

export const fetchReview = review => dispatch => (
  R_APIUtil.fetchReview(review)
  .then(payload => (dispatch(receiveReview(payload))
  ))
);

export const createReview = review => dispatch => (
  R_APIUtil.createReview(review)
  .then(payload => dispatch(receiveReview(payload)
  ))
);

export const updateReview = review => dispatch => (
  R_APIUtil.updateReview(review)
  .then(payload => dispatch(receiveReview(payload)
  ))
);

export const deleteReview = reviewId => dispatch => (
  R_APIUtil.removeReview(reviewId)
    .then(payload => dispatch(removeReview(payload.review.id)))
)

