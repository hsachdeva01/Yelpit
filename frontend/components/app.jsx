import React from "react";
import HeaderContainer from './header/header_container';
import { Route } from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import BusinessHeaderContainer from './business/business_header_container'
import { AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';





const App = () => (
  <div>

      <Route exact path="/" component={HeaderContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/businesses" component={BusinessHeaderContainer} />
      {/* <Route path="/:id" component={HeaderContainer} /> */}

  </div>
);

export default App;
