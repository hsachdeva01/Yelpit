import React from "react";
import { Link } from "react-router-dom";

class BusinessHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = () => (
      <div className="business-header-main">
        <div className="application-logo">
          <p id="application-name">
            <Link to="/">Yelpit</Link>
          </p>
        </div>
        <div className="business-page-searchbar">
          <input
            className="business-page-search"
            placeholder="tacos, indian food, cheap dinner"
            type="text"
          />
          <input
            className="business-page-location"
            placeholder="San Francisco, CA"
            type="text"
          />
          <label className="business-page-search-icon">
            <i class="fas fa-search"></i>
          </label>
        </div>
        <div className="user-logged-in">
          <span className="username">{this.props.currentUser.first_name}</span>
          <span className="logout-business" onClick={this.props.logout}>
            Log Out
          </span>
        </div>
      </div>
    );

    const userNotLoggedIn = () => (
      <div className="business-header-main">
        <div className="application-logo">
          <p id="application-name">
            <Link to="/">Yelpit</Link>
          </p>
        </div>
        <div className="business-page-searchbar">
          <input
            className="business-page-search"
            placeholder="tacos, indian food, cheap dinner"
            type="text"
          />
          <input
            className="business-page-location"
            placeholder="San Francisco, CA"
            type="text"
          />
          <label className="business-page-search-icon">
            <label>
              <i className="fas fa-search"></i>
            </label>
          </label>
        </div>
        <div className="user-not-logged-in">
          <p className="login">
            <Link to="/login">Log In</Link>
          </p>
          <p className="signup">
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    );
    return (
      this.props.currentUser ? currentUser() : userNotLoggedIn()
    )
  }
}

export default BusinessHeader;
