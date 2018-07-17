import React from 'react';
import { Link } from 'react-router-dom';

class MusicDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
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
    const categories = [
      "Hip-Hop",
      "Rock",
      "Pop",
      "Country",
      "Electronic",
      "Alternative"
    ];

    const catLis = categories.map((cat, id) => <li key={id}><Link to={`/${cat}`} >{cat}</Link></li>);

    let dropdown;

    if (this.state.isOpen) {
      dropdown = () => (
        <ul className="categories-list" >
          {catLis}
        </ul>
      );
    } else {
      dropdown = () => null;
    }

    return (
      <div className="music-dropdown-container" onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
        <h1 className="music-dropdown-header">Music</h1>
        { dropdown() }
      </div>
    );
  }
}

export default MusicDropdown;
