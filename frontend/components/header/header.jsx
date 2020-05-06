import React from 'react';
import { Link } from 'react-router-dom';
import HomePageDisplay from './homepage_display_pictures'
import Footer from '../footer/footer';

class Header extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props)
  }



  render(){
    const header = (this.props.currentUser) ? (
      <div className="header-right-logout">
        <p>Hello, {this.props.currentUser.first_name}</p>
        <button className="logout" onClick={this.props.logout}>Log Out</button>
      </div>
    ) : (
      <div className="header-right">
        <p className="login">
          <Link to="/login">Log In</Link>
        </p>
        <p className="signup">
           <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    );
    return (
      <div className="homepage">
        <div className="header-mainpage">
          <div className="header-right-top">{header}</div>
          <div className="write-a-review">
            <Link to="/businesses">Write a Review</Link>
          </div>
          <div className="header-left">
            <p className="github-btn">
              <a href="https://github.com/hsachdeva01">Github</a>
            </p>
            <p className="linkedin-btn">
              <a href="https://www.linkedin.com/in/hari-sachdeva-8748051a6/">
                Linkedin
              </a>
            </p>
          </div>
          <div className="main">
          <div className="application-name">
            <Link to="/">Yelpit</Link>

            </div>
            <form className="homepage-search">
              <label className="search-find">
                <span className="find">Find</span>
                <input
                  className="search-input"
                  type="text"
                  placeholder="takeout delivery favorites"
                />
              </label>
              <label className="search-near">
                <span className="near">Near</span>
                <input
                  className="near-input"
                  type="text"
                  placeholder="San Francisco, CA 94111"
                />
              </label>
              {/* <label className="search-icon">
                <i className="fas fa-search" />
              </label> */}
            </form>
          </div>

          <div className="under-search-bar">
            <li id="accountant">Accountants</li>
            <li id="restaurant">Restaurants</li>
            <li id="home-service">Home Services</li>
            <li id="delivery">Delivery</li>
          </div>
          </div>
        <div className="display">
          <HomePageDisplay />
        </div>
        <div className="footer-homepage">
          <Footer />
        </div>
      </div>
    );
  };
}

export default Header;