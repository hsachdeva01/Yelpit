import React from 'react';
import { Link } from 'react-router-dom';
import BusinessHeader from './business_header_container';
import Footer from '../footer/footer';
import BusinessMap from './business_map';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);

  }

  render() {

    if(!this.props.business.photoUrls){
      return null;
    }

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
                <span>
                  {" "}
                  <i class="fas fa-star"></i>
                  <Link to="/reviews"><p>Write a Review</p></Link>
                </span>
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
                    <BusinessMap />
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
                  <i class="fas fa-chevron-right" />
                  <Link to={`${this.props.business.website}`}>
                    {this.props.business.website}
                  </Link>
                </div>
                <div className="business-phone">
                  <i class="fas fa-phone-volume" />(
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
                  <p>Get Directions</p>
                </div>
              </div>
            </div>
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