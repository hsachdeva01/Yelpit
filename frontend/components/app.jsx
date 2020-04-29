import React from "react";
import HeaderContainer from './header/header_container';
import { Route } from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
// import SignUpFromContainer from './session_form/signup_form_container';


const App = () => (
  <div>
    <h1> Yelpit!!! </h1>
    <Route exact path="/" component={HeaderContainer} />
    <Route exact path="/login" component={LogInFormContainer} />

  </div>
);

export default App;
