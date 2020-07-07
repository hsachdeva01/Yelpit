import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentForm from '../comment/comment_container';

class ReviewList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // this.props.fetchComments();
  }

  findId(){
    if (this.props.user_id === this.props.review.author_id) {
      {console.log(this.props)}
      return <button className="header-logout-button" onClick={() => this.props.deleteReview(this.props.review.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
    }
  }

  ratingStars(){
    let rating;
    if (this.props.review.rating === 1) {
      rating = <div><i className="fas fa-star" /></div>
    }
    if (this.props.review.rating === 2) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    if (this.props.review.rating === 3) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    if (this.props.review.rating === 4) {
      rating = <div>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    }
    if (this.props.review.rating === 5) {
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

  render(){
    
    return (
      <div className="review-list">
        <div className="user-icon">
          <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" />
          <p className="location-sf">San Francisco, CA</p>
          <div className="rating-stars">
            {this.ratingStars()}
          </div>
          <div className="review-content">
            {this.props.review.body}
            <CommentForm reviewId={this.props.review.id} />
          </div>
          {this.findId()}
        </div>
      </div>
    )
  }
};




export default withRouter(ReviewList);