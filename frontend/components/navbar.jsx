
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import { Route, withRouter } from 'react-router-dom';
import NavBarCategories from './navbar_categories';
import UserDropdown from './user_dropdown';
import EventInfo from './event_info';

const navBar = ({ currentUser, logout, openModal, location }) => {
  const logo = () => (
    <div className="logo">
      <Link to="/">
        <h1>SeatFreak</h1>
      </Link>
    </div>
  );

  const loc = location.pathname.split("/");

  const sessionLinks = () => (
    <div className="session-buttons">
      <button onClick={() => openModal('signup')}>Sign Up</button>
        &nbsp;
      <button onClick={() => openModal('login')}>Log In</button>
    </div>
  );

  const userShow = () => (
    <div className="user-dropdown-container">
      <UserDropdown currentUser={currentUser} logout={logout}/>
    </div>
  );
  return (
    <nav className="navbar">
      <div className="logo-categories-container">
        { logo() }
        { <Route exact path="/" component={NavBarCategories} /> }
        { <Route path='/events/:eventId' component={EventInfo} /> }
      </div>
      { currentUser.id ? userShow() : sessionLinks() }
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar));
