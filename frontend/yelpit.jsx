import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {login} from './util/session_api_util' // Testing
import * as Action from './actions/session_actions'
import * as BusinessAction from './actions/business_actions'
import * as CommentAction from './actions/comment_actions'
// import * as B_Actions from './actions/business_actions'




document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  
  // Testing
  window.login = Action.login;
  window.getState = BusinessAction.fetchBusinesses;
  window.dispatch = store.dispatch;
  window.logout = Action.logout;
  window.fetchComments = CommentAction.fetchComments;
});