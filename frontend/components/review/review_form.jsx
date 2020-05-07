import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Footer from '../footer/footer';

class ReviewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: '',
      rating: 0,
      business_id: null,
      author_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
  };

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  };

  handleSubmit(e){
    e.preventDefault();
    const review = {
      body: this.state.body,
      rating: this.state.rating,
      author_id: this.props.author_id,
      business_id: this.props.business_id
    }
    this.props.processReview(review)
      .then(this.props.history.push(`/businesses/${this.props.match.params.id}`))
  }

  renderErrors() {
    return (
      <div className="login-error">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }
  

  render(){
    if (!this.props.business) {
      return null;
    }
    return(
      <div className="review-page">
        <header className="review-page-header">
          <Link to="/">
            Yelpit
          </Link>
        </header>

        <div className="review-form">
          {this.renderErrors()}
          {console.log(this.props.business)}
          <form className="review-form-box" onSubmit={this.handleSubmit}>
            <Link to={`/businesses/${this.props.business.id}`}>
              <p>{this.props.business.name}</p>
            </Link>
            <div className="review-rating">
              <input className="rating" type="number" value={this.state.rating} min="1" max="5" onChange={this.update("rating")}/>
              <textarea className="review" 
              value={this.state.body} 
              onChange={this.update("body")} 
              placeholder="Share your experience with us!">
              </textarea>
              <input className="submit-review" type="submit" value="Post Review"/>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ReviewForm;