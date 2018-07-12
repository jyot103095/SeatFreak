
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import UserDropdown from './user_dropdown';

const navBar = ({ currentUser, logout, openModal }) => {

  const logoAndCategories = () => (
    <div className="logo-categories">
      <Link to="/" className="header-link">
        <h1>SeatFreak</h1>
      </Link>
      <ul className="categories">
        <li>Sports</li>
        <li>Music</li>
        <li>Sell</li>
      </ul>
    </div>
  );

  const sessionLinks = () => (
    <nav className="login-signup">
      { logoAndCategories() }
      <div className="session-buttons">
        <button onClick={() => openModal('signup')}>Sign Up</button>
        &nbsp;
        <button onClick={() => openModal('login')}>Log In</button>
      </div>
    </nav>
  );

  const userShow = () => (
    <nav className="header-group">
      { logoAndCategories() }
      <UserDropdown currentUser={currentUser} logout={logout}/>
    </nav>
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
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar);
