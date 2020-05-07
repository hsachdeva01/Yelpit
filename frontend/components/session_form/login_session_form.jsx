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
    this.demoEmail = "yelpit@yelpit.com";
    this.demoPassword = "password";
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

  demoLogin() {
    const email = this.demoEmail;
    const password = this.demoPassword;
    const Speed = 35;

    document.getElementById("demo-button").disabled = true;
    this.setState({ email: "", password: "" });

    for (let i = 0; i < email.length; i++) {
      setTimeout(() => {
        this.setState({ email: this.state.email + email[i] });
      }, i * Speed);
    }
    for (let j = 0; j < password.length; j++) {
      setTimeout(() => {
        this.setState({ password: this.state.password + password[j] });
      }, (email.length * Speed) + j * Speed);
    }
    setTimeout(() => {
      this.props.processForm(this.state).then(() => this.props.history.push("/"));
    }, (email.length * Speed) + (password.length * Speed) + Speed);

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
// 
    
    return (
      <div className="existing-user-form">
        <div className="header">
          <a href="/" id="text" className="login-page-logo">
            Yelpit
          </a>
        </div>
        <div className="errors">
          {this.renderErrors()}
          <i
            onClick={this.handleClearErrors}
            className="fas fa-times"
          />
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
            By logging in, you do not agree to Yelpit's Terms and Conditions
          </p>

          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
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
              {/* <button className="login-btn" onClick={this.handleSubmit}>
              {this.props.formType}
            </button> */}
              {/* <form onSubmit={this.handleSubmit}> */}
              <input
                className="login-btn"
                type="submit"
                value={this.props.formType}
              />
            </form>
            <button id="demo-button" className="demo-btn" onClick={this.demoLogin}>
              Demo Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSessionForm;
