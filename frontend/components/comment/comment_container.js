import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { fetchComments } from '../../util/comments_api_util';

const mapStateToProps = (state, ownProps) => ({
  reviewId: ownProps.reviewId,
  userId: state.session.id,
  content: ownProps.content
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  fetchComments: () => dispatch(fetchComments()) 
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));

