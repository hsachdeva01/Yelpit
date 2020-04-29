import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component{
  constructor(props){
    super(props);
    // this.props.formType === 'Sign Up' ? 
    //   this.state = {
    //     first_name = '',
    //     last_name = '',
    //     email: '',
    //     zip_code: '',
    //     birthday: '',
    //     password: ''
    //   } :
      this.state = {
        email: '',
        password: ''
      };
  }
  
  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render(){
    
    const existingUser = () => (
      <div className="existing-user-form">
        <div className="header">
          <a href="/" id="text">Yelpit</a> 
        </div>

        <div className="session-form">
          <p className="Login Text">Log in to Yelpit</p>
          <p className="sign-up-notification">New to Yelpit? <p className="sign-up-text-link"><Link to="/signup">Sign up</Link></p></p>
          <p className="term-policy-text">By logging in, you agree to Yelpit's Terms and Conditions</p>

          <div className="login-form">
            <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="Email"
            required
            />
            <br/>
            <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
            required
            />
            <button className="login-btn" onClick={this.handleSubmit}>{this.props.formType}</button>
          </div>
        </div> 

      </div>
    )
    
    
    
    return(
      existingUser()
    )
  }
};


export default SessionForm;