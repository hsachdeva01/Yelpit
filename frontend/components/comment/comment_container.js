import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { fetchUsers } from '../../actions/user_actions'
import { createComment } from '../../actions/comment_actions';
import { fetchComments } from '../../util/comments_api_util';
import { fetchReviews } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId] || {},
  reviewId: ownProps.reviewId || [],
  userId: state.session.id || [],
  reviews: Object.values(state.entities.reviews) || [],
  users: state.entities.users || {}
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchComments: () => dispatch(fetchComments()), 
  fetchReviews: () => dispatch(fetchReviews())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));

