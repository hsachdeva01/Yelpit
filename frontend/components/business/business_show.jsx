import React from 'react';
import { Link } from 'react-router-dom';
import BusinessHeader from './business_header_container';
import Footer from '../footer/footer';
import BusinessMap from './business_map';
import ReviewList from '../review/review_list'

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: ""
    }
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    // this.props.fetchUsers().then( () => this.props.fetchBusiness(this.props.match.params.businessId))
  }

  render() {
    if(!this.props.business.photoUrls){
      return null;
    }

    const currentUser = (this.props.user.length !== 0) ? (
      <div className="reviews">
        <span>
          {" "}
          <i className="fas fa-star"></i>
          <Link to={`/reviews/${this.props.business.id}`}><p>Write a Review</p></Link>
        </span>
      </div> 
    )  : (
        <div className="reviews">
          <span>
            {" "}
            <i className="fas fa-star"></i>
            <Link to='/login'><p>Write a Review</p></Link>
          </span>
        </div>
    )


    return (
      <div className="business-show-all">
        <div className="business-main">
          <div className="business-header">
            <BusinessHeader />
          </div>
          {/* </div> */}
          <div className="business-picture">
            {this.props.business.photoUrls.map((photo, idx) => (
              <img src={photo} key={idx} />
            ))}
          </div>
          <div className="business-body">
            <div className="left-div">
              <div className="business-inside">
                <div className="business-profile-title">
                  {this.props.business.name}
                  <div className="business-profile-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="reviews">
                {currentUser}
              </div>
              <div className="covid-info">
                <span>
                  <span className="covid19">
                    {" "}
                    COVID-19 Update:{" "}
                    <p className="message">
                      {" "}
                      A message from this business{" "}
                    </p>{" "}
                  </span>
                  <p className="covid19-message">
                    Due to the pandemic, please contact the business directly
                    for updated hours and availablity. Orders may be placed
                    online for curbside pickup only.
                  </p>
                </span>
              </div>
              <div className="hours-and-map">
                <p className="location-hours">Location {`&`} Hours</p>
                <div className="map-hours">
                  <div className="map">
                    <div className="location">
                      <BusinessMap cords={{ lat: this.props.business.latitude, long: this.props.business.longitude }} />
                    </div>
                   <div> {this.props.business.address} {this.props.business.state} {this.props.business.city} {this.props.business.zip_code} </div>
                  </div>
                <div className="business-hours">
                  <div>
                    <p className="day">Mon</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                  <div>
                    <p className="day">Tue</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                  <div>
                    <p className="day">Wed</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                  <div>
                    <p className="day">Thu</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                  <div>
                    <p className="day">Fri</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                  <div>
                    <p className="day">Sat</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                  <div>
                    <p className="day">Sun</p>
                    <p>{this.props.business.business_hours}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="right-div">
              <div className="business-floater">
                <div className="business-website">
                  <i className="fas fa-chevron-right" />
                  <Link to={`${this.props.business.website}`}>
                    {this.props.business.website}
                  </Link>
                </div>
                <div className="business-phone">
                  <i className="fas fa-phone-volume" />(
                  {this.props.business.phone_number.slice(0, 3)}){" "}
                  {this.props.business.phone_number.slice(3, 6)} -{" "}
                  {this.props.business.phone_number.slice(6)}
                </div>
                <div className="business-menu">
                  <i className="fas fa-utensils" />
                  <p>Full Menu</p>
                </div>
                <div className="business-direction">
                  <i className="fas fa-directions fa-lg"></i> 
                  <a className="direction-map" href={`https://www.google.com/maps/@${this.props.business.latitude},${this.props.business.longitude},20z`}>
                    Get Directions
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="business-recommended">
          <p className="rev-p">Recommended Reviews</p>
        </div>
        <div className="yelpit-message">
          <p className="trust">Your trust is our top concern,</p> so businesses can't pay to alter or remove their reviews.
        </div>
        <div className="business-show">
            <div className="user-picture"><img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" alt=""/></div>
          <div className="review-start-stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          <div className="pic-name">
            Start your review of <span className="business-name-review"> <Link to={`/reviews/${this.props.business.id}`}>
              {this.props.business.name}</Link></span>
          </div>
          </div>
        </div>
        <div className="reviews-list">
          <div className="review-show-here">
            {this.props.reviews.map(review => {
              return <ReviewList
              key={review.id}
              review={review}
              author={this.props.users[review.author_id]}
              user_id={this.props.user.id}
              deleteReview={this.props.deleteReview}
            />})}
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default BusinessShow;