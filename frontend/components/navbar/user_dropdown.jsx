import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    if (!this.props.currentUser) return null;
    let dropdown;
    if (this.state.isOpen) {
      dropdown = () => (
        <ul className="user-links">
          <li><Link to="/account/tickets"><span>Tickets</span></Link></li>
          <li><Link to="/account/settings"><span>Account Settings</span></Link></li>
          <li><Link to="/account/tracker"><span>Tracker</span></Link></li>
          <li onClick={this.handleLogout}><span>Logout</span></li>
        </ul>
      );
    } else {
      dropdown = () => null;
    }

    return (
      <div className="user-dropdown" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
        <Link to='/account/settings' >
          <div className="user-name">
            <h2>{this.props.currentUser.fName}</h2>
          </div>
        </Link>
        { dropdown() }
      </div>
    );
  }
}

const mSP = state => {
  return {
    currentUser: state.entities.currentUser
  }
};

const mDP = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default withRouter(connect(mSP, mDP)(UserDropdown));
