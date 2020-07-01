import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){


    // const findId = () => {
    //   let review = this.props.review;
    //   if(this.props.author.id !== undefined && this.props.author.id === this.props.review.author_id){
    //     return <button className="header-logout-button" onClick={() => this.props.deleteReview(review.id)}>delete</button>
    //     }
    //   }


    const ratingStars = () => {
      let rating;
      if(this.props.review.rating === 1 ){
        rating = <div><i className="fas fa-star" /></div>
      }
      if(this.props.review.rating === 2 ){
        rating = <div>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          </div>
      }
      if(this.props.review.rating === 3 ){
        rating = <div>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      }
      if(this.props.review.rating === 4 ){
        rating = <div>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      }
      if(this.props.review.rating === 5 ){
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
    return(
      <div className="review-list">
        <div className="user-icon">
          <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"/>
          <p className="location-sf">San Francisco, CA</p>
          <div className="rating-stars">
            {ratingStars()}
          </div>
          <div className="review-content"> 
            {this.props.review.body}
          {/* {findId()} */}
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(ReviewList);