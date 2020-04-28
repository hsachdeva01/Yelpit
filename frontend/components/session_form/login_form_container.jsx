import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)