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
    let klass;
    if (this.state.isOpen) {
      klass = null;
    } else {
      klass = "closed";
    }

    let styles = {
      backgroundImage: `url(${this.props.currentUser.photoUrl})`,
      backgroundSize: 'cover',
      overflow: 'hidden'
    };

    return (
      <div className="user-dropdown" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
        <Link to='/account/settings' >
          <div className="user-name">
            <div className="user-dropdown-image" style={styles}></div>
            <h2>{this.props.currentUser.fName}</h2>
          </div>
        </Link>
        <ul className={`user-links ${klass}`}>
          <li><Link to="/account/tickets"><i className="fas fa-ticket-alt dropdown-icons"></i><span>Tickets</span></Link></li>
          <li><Link to="/account/tracker"><i className="fa-heart fa-sm far dropdown-icons"></i><span>Tracker</span></Link></li>
          <li><Link to="/account/settings"><i className="fas fa-user dropdown-icons"></i><span>Settings</span></Link></li>
          <li onClick={this.handleLogout}><i className="fas fa-sign-out-alt dropdown-icons"></i><span>Logout</span></li>
        </ul>
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
