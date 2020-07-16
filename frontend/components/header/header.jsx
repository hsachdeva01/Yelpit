import React from 'react';
import { Link } from 'react-router-dom';
import HomePageDisplay from './homepage_display_pictures'
import Footer from '../footer/footer';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", location: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let redirect = "";

    if (this.state.search && this.state.location) {
      redirect = `/businesses/search/details?keyword=${this.state.search}&location=${this.state.location}`;
    } else if (this.state.search) {
      redirect = `/businesses/search/details?keyword=${this.state.search}`;
    } else if (this.state.location) {
      redirect = `/businesses/search/details?location=${this.state.location}`;
    } else {
      redirect = `/businesses`;
    }

    this.props.history.push(redirect);

  }

  handleOnClick(e) {
    e.preventDefault();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }


  render() {
    const header = (this.props.currentUser) ? (
      <header className="splash">
        <div className="header-left">
        <p className="write-a-review">
          <Link to="/businesses">Write a Review</Link>
        </p>
        <p className="github-btn">
          <a href="https://github.com/hsachdeva01">Github</a>
        </p>
        <p className="linkedin-btn">
          <a href="https://www.linkedin.com/in/hari-sachdeva-8748051a6/">
            Linkedin
           </a>
        </p>
      </div>
      <div className="header-right-logout">
        <p className="welcome-user">Hello, {"  "} {this.props.currentUser.first_name}</p>
        <button className="logout" onClick={this.props.logout}>Log Out</button>
      </div>
      </header>
    ) : (
      <header className="splash">
        <div className="header-left">
          <p className="write-a-review">
            <Link to="/businesses">Write a Review</Link>
          </p>
          <p className="github-btn">
            <a href="https://github.com/hsachdeva01">Github</a>
          </p>
          <p className="linkedin-btn">
            <a href="https://www.linkedin.com/in/hari-sachdeva-8748051a6/">
              Linkedin
              </a>
          </p>
        </div>
        <div className="header-right-logout">
            <p className="welcome-user">
            <Link clssName="login" to="/login">Log In <p>          </p></Link>
          </p>
          <button className="signup">
            <Link to="/signup">Sign Up</Link>
            </button>
        </div>
        </header>
      );
    return (
      <div className="homepage">
        <div className="header-mainpage">
          {header}
          <div>

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
                {/* <Link to={`/businesses/search/details?keyword=${this.state.search}`}> <i className="fas fa-search" /> </Link> */}
                <button onClick={this.handleSubmit.bind(this)}> <i className="fas fa-search" /> </button>
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