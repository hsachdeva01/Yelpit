import * as C_APIUtil from '../util/comments_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});



export const fetchComments = () => dispatch => (
  C_APIUtil.fetchComments()
  .then(comments => (
    dispatch(receiveComments(comments))
  ))
);

export const createComment = comment => dispatch => (
  C_APIUtil.createComment(comment)
  .then(comment => (
    dispatch(receiveComment(comment))
  ))
);

export const deleteComment = id => dispatch => (
  C_APIUtil.deleteComment(id)
  .then(comment => (
    dispatch(removeComment(comment))
    .then(location.reload(), 3000)
  ))
);
