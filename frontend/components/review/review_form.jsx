import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Footer from '../footer/footer';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // get actuall business id
    // Fetch business details.
    //console.log(this.props.match.params.id);
    this.props.fetchBusiness(this.props.match.params.businessId);
    console.log(this.props);
  };

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      body: this.state.body,
      rating: this.state.rating,
      business_id: parseInt(this.props.match.params.businessId)
    }
    this.props.processReview(review)
      .then(this.props.history.push(`/businesses/${this.props.match.params.businessId}`))
  }

  renderErrors() {
    return (
      <div className="review-error">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>

      </div>
    );
  }

  render() {

    if (!this.props.business) {
      return null;
    }



    return (
      <div className="review-page">
        {/* {console.log(this.props.business.id)} */}
        <header className="review-page-header">
          {/* <div className="back-2-businesses">
            <Link to="/businesses">Back to Businesses</Link>
          </div> */}
          <Link to="/">
            Yelpit
          </Link>
        </header>

        <div className="review-form">
          {/* {this.renderErrors()} */}
          {/* <p>Review by {this.props.user.first_name}</p> */}
          <form className="review-form-box" onSubmit={this.handleSubmit}>
            <Link to={`/businesses/${this.props.business.id}`}>
              <p className="business-name-form">{this.props.business.name}</p>
            </Link>
            <div className="review-rating">
              <input className="rating" type="number" value={this.state.rating} min="1" max="5" onChange={this.update("rating")} />
              <textarea className="review"
                value={this.state.body}
                onChange={this.update("body")}
                placeholder="Share your experience with us!">
              </textarea>
              <input className="submit-review" type="submit" value="Post Review" />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ReviewForm;