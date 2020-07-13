import React from 'react';
import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { fetchUsers } from '../../actions/user_actions'
import {fetchComments, deleteComment } from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId] || {},
  reviews: Object.values(state.entities.reviews) || [],
  users: state.entities.users || {},
  user: state.entities.users[state.session.id] || [],
  comments: Object.values(state.entities.comments) || {},
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchComments: () => dispatch(fetchComments()),
  fetchReviews: () => dispatch(fetchReviews())

});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)