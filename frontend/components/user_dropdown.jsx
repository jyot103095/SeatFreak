import React from 'react';
import { Link } from 'react-router-dom';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    let dropdown;
    if (this.state.isOpen) {
      dropdown = () => (
        <ul className="user-links">
          <li onClick={this.props.logout}><span>Logout</span></li>
        </ul>
      );
    } else {
      dropdown = () => null;
    }
    return (
      <div className="user-dropdown" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
        <Link to="/" >
          <div className="user-name">
            <h2>{this.props.currentUser.fName}</h2>
          </div>
        </Link>
        { dropdown() }
      </div>
    );
  }
}

export default UserDropdown;
