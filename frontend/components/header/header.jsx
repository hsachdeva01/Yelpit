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
      </div>
    );
  };
}

export default Header;