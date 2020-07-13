import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { createComment, receiveComments } from '../../actions/comment_actions';
import { fetchComments } from '../../util/comments_api_util';
import { fetchReviews, deleteReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId] || {},
  reviewId: ownProps.reviewId || [],
  userId: state.session.id || [],
  reviews: Object.values(state.entities.reviews),
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchComments: () => dispatch(fetchComments()), 
  fetchReviews: () => dispatch(fetchReviews())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));

