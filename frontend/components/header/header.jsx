import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return (
      <div className='header-mainpage'>
        { !this.props.currentUser ? (
          <div className='header-right'>
            <p className='login'><Link to="/login">Log In</Link></p>
            <p className='signup'><Link to="/signup">Sign Up</Link></p>
          </div>
        ) : (
          <div className='header-right'>
            <p className='logout' onClick={this.props.logout}>Log Out</p>
          </div>
        
      )}
      </div>
    )
  };
}

export default Header;