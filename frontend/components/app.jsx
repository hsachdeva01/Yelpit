import React from "react";
import HeaderContainer from './header/header_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import BusinessHeader from './business/business_header_container'
import { AuthRoute } from '../util/route_util';
import BusinessIndexContainer from "./business/business_index_container";
import BusinessShowContainer from "./business/business_show_container";
import ReviewForm from './review/review_form_container';






const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HeaderContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/businesses" component={BusinessIndexContainer} />
      <Route path="/businesses/search/:query?" component={BusinessIndexContainer} />
      {/* <Route path="/:id" component={HeaderContainer} /> */}
      <Route path ="/businesses/:businessId" component={BusinessShowContainer} />
      <Route exact path="/reviews/:businessId" component={ReviewForm} />
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </Switch>

  </div>
);

export default App;
