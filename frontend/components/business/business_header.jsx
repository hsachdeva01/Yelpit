import React from 'react';
import { Link } from 'react-router-dom';



class BusinessHeader extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    const businessHeader = (this.props.currentUser) ? (
      <div className="logged-in-header">
        <div className="business-page-user">
          <div className="write-review">Write a Review</div>
          <span className="business-header-user-logout" onClick={this.props.logout}>Log Out</span>
        </div>
      </div>
    ) : (
      <div className="logged-out-header">
        <div className="business-page-user">
          <div className="write-review">Write a Review</div>
          <span className="business-header-signup"><Link to="/signup">Sign Up</Link></span>
          <span className="business-header-signin"><Link to="/login">Log In</Link></span>
        </div>
      </div>
    )
    return (
      <div className="business-header-render">
        <div className="application-biz-name">
        <div className="search-box">
          <Link to="/" className="biz-app-name">Yelpit</Link>
          <div className="input-search">
            <input type="text" placeholder="tacos cheap dinner businesses"/>
            <input type="text" placeholder="address neighborhood"/>
            <label className="search-box-search-icon">
              <i className="fas fa-search"></i>
        {businessHeader}
            </label>
          </div>
        </div>
        </div>
      </div>
      )
    }
};


export default BusinessHeader;