import React from "react";
import { Link } from "react-router-dom";

class BusinessHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = () => (
      <div className="business-header-main">
        <div className="business-header-inner">
          <div className="application-logo">
            <p id="application-name">
              <Link to="/">Yelpit</Link>
            </p>
          </div>
          <form className="search-bar">
            <span className="business-page-searchbar">
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
                  <Link to="/businesses"><i className="fas fa-search"></i></Link>  
              </label>
            </span>
          </form>
          <div className="user-logged-in">
            <span className="username">{`Hello,  ${this.props.currentUser.first_name}`}</span>
            <span className="logout-business" onClick={this.props.logout}>
              Log Out
            </span>
          </div>
        </div>
      </div>
    );

    const userNotLoggedIn = () => (
      <div className="business-header-main">
        <div className="business-header-inner">
        <div className="application-logo">
          <p id="application-name">
            <Link to="/">Yelpit</Link>
          </p>
        </div>
        <form className="search-bar">
          <span className="business-page-searchbar">
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
              <Link to="/businesses"><i className="fas fa-search"></i></Link>
            </label>
          </label>
            </span>
        </form>
        <div className="user-not-logged-in">
          <p className="login">
            <Link to="/login">Log In</Link>
          </p>
          <p className="signup">
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        </div>
      </div>
    );
    return (
      this.props.currentUser ? currentUser() : userNotLoggedIn()
    )
  }
}

export default BusinessHeader;
