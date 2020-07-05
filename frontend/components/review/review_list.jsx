import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentForm from '../comment/comment_container';

const ReviewList = (props) => {
  const findId = () => {
    if(props.user_id === props.review.author_id){
      return <button className="header-logout-button" onClick={() => props.deleteReview(props.review.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
      }
    }

  const ratingStars = () => {
    let rating;
    if (props.review.rating === 1) {
      rating = <div><i className="fas fa-star" /></div>
    }
    if (props.review.rating === 2) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    if (props.review.rating === 3) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    if (props.review.rating === 4) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    if (props.review.rating === 5) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    return rating;
  }
  return (
    <div className="review-list">
      <div className="user-icon">
        <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" />
        <p className="location-sf">San Francisco, CA</p>
        <div className="rating-stars">
          {ratingStars()}
        </div>
        <div className="review-content">
          {props.review.body}
          <CommentForm reviewId={props.review.id} />
        </div>
          {findId()}
      </div>
    </div>
  )
};


export default withRouter(ReviewList);