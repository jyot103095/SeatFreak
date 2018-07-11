
import React from 'react';
import { connect } from 'react-redux';
import { logoutCurrentUser } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';

const navBar = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );

  const userShow = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.email}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser.id ?
    userShow(currentUser, logout) :
    sessionLinks()
  );
};

const mapStateToProps = ({ entities }) => ({
  currentUser: entities.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar);
