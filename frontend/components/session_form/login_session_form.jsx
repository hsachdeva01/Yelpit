import React from "react";
import { Link } from "react-router-dom";

class LoginSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleClearErrors = this.handleClearErrors.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin(e) {
    e.preventDefault();
    this.setState({
      email: "yelpit@yelpit.com",
      password: "password"
    });
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
      <div className="login-error">
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
      <div className="existing-user-form">
        <div className="header">
          <a href="/" id="text" className="login-page-logo">
            Yelpit
          </a>
        </div>
        {/* <div className="login-image">
          <img src={window.signup_illustration} alt="login-illustration"/>
        </div> */}

        <div className="session-form">
          <p className="login-text">Log in to Yelpit</p>
          <p className="sign-up-notification">
            New to Yelpit? {"  "}
            <span className="sign-up-text-link">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
          <p className="term-policy-text">
            By logging in, you agree to Yelpit's Terms and Conditions
          </p>

          <div className="login-form">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              required
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              required
            />
            {this.renderErrors()}
            {/* <button className="login-btn" onClick={this.handleSubmit}>
              {this.props.formType}
            </button> */}
            <form onSubmit={this.handleSubmit}>
            <input
              className="login-btn"
              type="submit"
              value={this.props.formType}
            />
            </form>
            <button className="demo-btn" onClick={this.demoLogin}>
              Demo Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSessionForm;
