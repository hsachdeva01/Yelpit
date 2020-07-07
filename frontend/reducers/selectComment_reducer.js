export const selectCommentsByReviews = (state, reviewId) => {
  if(state.entities.reviews[reviewId].commend_ids === undefined) return [];
  return state.entities.reviews[reviewId].comment_ids.map(commentId => {
    return state.entities.comments[commentId]
  });
}