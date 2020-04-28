import React from "react";
import HeaderContainer from './header/header_container';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <h1> Yelpit!!! </h1>
    <Route exact path="/" component={HeaderContainer} />
  </div>
);

export default App;
