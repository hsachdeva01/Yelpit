import React from "react";
import { Link } from "react-router-dom";

class SignupSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      zip_code: "",
      birthday: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this); 
    this.handleClearErrors = this.handleClearErrors.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  demoLogin(e) {
    e.preventDefault();
    this.setState({
      email: "yelpit@yelpit.com",
      password: "password"
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.history.push(`/user/${user.id}`);
    this.props.processForm(user);
  }

  handleClearErrors(e) {
    e.preventDefault();
    this.props.clearSessionErrors();
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    return (
      <div className="signup-error">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="new-user-form">
        <div className="header">
          <a href="/" id="text">
            Yelpit
          </a>
        </div>

        <div className="sign-up-text-form">
          <p className="sign-up-for-yelpit">Sign Up for Yelpit</p>
          <p className="sign-up-connect">Connect with your favorite business</p>
          <p className="sign-up-legal">
            By continuing, you agree to Yelpit's Terms and Conditions
          </p>
        </div>
        <button className="sign-up-demo-btn" onClick={this.demoLogin}>
          Demo Login
        </button>

        <div className="sign-up-form">
          <div className="sign-up-name">
            <input
              type="text"
              onChange={this.update("first_name")}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              onChange={this.update("last_name")}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="signup-email">
            <input
              type="text"
              onChange={this.update("email")}
              placeholder="Email"
              required
            />
          </div>
          <div className="signup-password">
            <input
              type="password"
              onChange={this.update("password")}
              placeholder="Password"
              required
            />
          </div>
          <div className="signup-zipcode">
            <input
              type="text"
              onChange={this.update("zip_code")}
              placeholder="Zip Code"
              required
            />
          </div>
          <div className="signup-birthday">
            <p id="birthday">Birthday Optional </p>
            <input type="date" />
          </div>

          <div className="sign-up-btn">
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
          </div>
          <div className="already-on-yelpit">
            <p>
              Already on Yelpit? <Link to="/login">Log in</Link>
            </p>
          </div>
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}

export default SignupSessionForm;
