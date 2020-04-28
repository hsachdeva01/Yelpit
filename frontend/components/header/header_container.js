import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header'



const mapStateToProps = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);