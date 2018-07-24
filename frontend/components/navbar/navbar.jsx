
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, logoutUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Route, withRouter } from 'react-router-dom';
import NavBarCategories from './navbar_categories';
import UserDropdown from './user_dropdown';
import EventInfo from '../events/event_info';
import NavbarSearchBox from './navbar_search';

const navBar = ({ currentUser, openModal, demoLogin, location }) => {
  const logo = () => (
    <div className="logo">
      <Link to="/">
        <h1>SeatFreak</h1>
      </Link>
    </div>
  );

  const sessionLinks = () => (
    <div className="session-buttons">
      <button onClick={() => openModal('signup')}>Sign Up</button>
      <button onClick={() => openModal('login')}>Log In</button>
      <button onClick={() => demoLogin({ email: "hunter2@gmail.com", password: "hunter2" })}>Demo</button>
    </div>
  );

  const userShow = () => (
    <div className="user-dropdown-container">
      <UserDropdown />
    </div>
  );

  let navbarDropdowns;
  if (!location.pathname.includes("/events")) {
    navbarDropdowns = () => (<NavBarCategories />);
  } else {
    navbarDropdowns = () => null;
  }

  let navbarSearch;
  if (location.pathname !== "/") {
    navbarSearch = () => (<NavbarSearchBox />);
  } else {
    navbarSearch = () => null;
  }


  return (
    <nav className={ location.pathname.includes("/events") ? "wider-navbar" : "navbar"}>
      <div className="navbar-left">
        { logo() }
        { navbarSearch() }
        { navbarDropdowns() }
        { <Route path='/events/:eventId' component={EventInfo} /> }
      </div>
      <div className="navbar-right">
        { currentUser.id ? userShow() : sessionLinks() }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: user => dispatch(loginUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar));
