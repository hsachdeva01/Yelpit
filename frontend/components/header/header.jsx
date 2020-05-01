import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="header-mainpage">
        <div className="header-right-top">
          {header}
        </div>
        <div className="write-a-review">
          <Link to="/businesses">Write a Review</Link>
        </div>
        <div className="header-left">
          <p className="github-btn">
            <a href="https://github.com/hsachdeva01">Github</a>
          </p>
          <p className="linkedin-btn">
            <a href="https://www.linkedin.com/in/hari-sachdeva-8748051a6/">Linkedin</a>
          </p>
        </div>
        <div className="application-name">
          <Link to="/">Yelpit</Link>
        </div>
        <div className="homepage-search">
          <label className="search-find"> Find <input className="search-input" type="text"
            placeholder="takeout delivery app academy"
            />
            </label>
          <label className="search-near"> Near <input className="near-input" type="text"
            placeholder="San Francisco, CA 94111"
            />
            </label>
        </div>

        <div className="under-search-bar">
          <li id="accountant">Accountants</li>
          <li id="restaurant">Restaurants</li>
          <li id="home-service">Home Services</li>
          <li id="delivery">Delivery</li>
        </div>
      </div>
    );
  };
}

export default Header;