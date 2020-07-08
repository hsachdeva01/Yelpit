import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentForm from '../comment/comment_container';

class ReviewList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.comments
  }

  findId(){
    if (this.props.user_id === this.props.review.author_id) {
      return <Link to={`/businesses/${this.props.business.id}`}><button className="remove-review" onClick={() => this.props.deleteReview(this.props.review.id)}><i className="fa fa-trash-alt" aria-hidden="true"><i className='trash'>Remove Review</i></i></button></Link>
    }
  }

  // findCommentIds(){
  //   for(var key in this.props.review){
  //     if(key === 'comment_ids'){
  //       return this.props.review.key;
  //     }
  //   }
  //   return null;
  // }

  findComments(){
    let result = [];
    for(let i = 0; i < this.props.review.comment_ids.length; i++){
      for(let j = 0; j < this.props.comments.length; j++){
        let singleComment = this.props.comments[j];
        for(var key in singleComment){
          if(key === 'id' && this.props.review.comment_ids[i] === singleComment.id){
            result.push(singleComment.content);
          }
        }
      }
    }
    return result;
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
            <div id="review-body">
              
            {this.props.review.body}
            </div>
              <CommentForm reviewId={this.props.review.id} />
            <div className="each-comment">
              {this.findComments().reverse().map((comment, key) => {
                return (
                  <ul id="comment" key={key}>
                    {comment}
                  </ul>
                )
              })}
            </div>
             <div>

            </div>
          </div>
          {this.findId()}
        </div>
      </div>
    )
  }
};




export default withRouter(ReviewList);