import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import LoginSessionForm from "./login_session_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  demoLogin: demoUser => dispatch(login(demoUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);