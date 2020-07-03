import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  reviewId: ownProps.reviewId,
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));

