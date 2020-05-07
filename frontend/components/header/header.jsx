import React from 'react';
import { Link } from 'react-router-dom';
import HomePageDisplay from './homepage_display_pictures'
import Footer from '../footer/footer';

class Header extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props)
    this.state = { search: "", location: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.SearchBusinesses(this.state.query)
      .then( () => this.props.history.push("/businesses"))
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value})
    }
  }


  render(){
    const header = (this.props.currentUser) ? (
      <div className="header-right-logout">
        <button className="logout" onClick={this.props.logout}>Log Out</button>
        <div className="user"><p>Hello, {"  "} {this.props.currentUser.first_name}</p></div>
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
              <label className="search-find"> Find
                <input
                  className="search-input"
                  type="text"
                  placeholder="takeout delivery favorites"
                  onChange={this.update('search')}
                  value={this.state.search}
                />
              </label>
              <label className="search-near"> Near
                <input
                  className="near-input"
                  type="text"
                  placeholder="San Francisco, CA 94111"
                  onChange={this.update('location')}
                  value={this.state.location}
                />
              </label>
              <label className="search-icon" >
                <Link to="/businesses"> <i className="fas fa-search" /> </Link>
              </label>
          <div className="under-search-bar">
                <li id="accountant"><Link to="/businesses">Accountants</Link></li>
                <li id="restaurant"><Link to="/businesses">Restaurants</Link></li>
                <li id="home-service"><Link to="/businesses">Home-Service</Link></li>
                <li id="delivery"><Link to="/businesses">Delivery</Link></li>
          </div>
            </form>
         

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