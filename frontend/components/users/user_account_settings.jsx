import React from 'react';
import Footer from '../footer';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { updateCurrentUser } from '../../actions/current_user_actions';

class UserAccountSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: this.props.currentUser.fName,
      lName: this.props.currentUser.lName,
      email: this.props.currentUser.email,
      clicked: false,
      photoFile: null    
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleUpload(e) {
    this.props.uploadPhoto(formData);
  }

  handleUpdateProfile(e) {
    e.preventDefault();

    const user = new FormData();
    if (e.currentTarget.files[0]) {
      user.append("user[photo]", e.currentTarget.files[0]);
    }

    user.append("user[id]", this.props.currentUser.id);
    user.append("user[f_name]", this.props.currentUser.fName);
    user.append("user[l_name]", this.props.currentUser.lName);
    user.append("user[email]", this.props.currentUser.email);

    this.props.updateCurrentUser(user);
  }

  render() {

    let styles = {
      backgroundImage: `url(${this.props.currentUser.photoUrl})`,
      backgroundSize: 'cover',
      overflow: 'hidden'
    };

    return (
      <div className="user-settings-container">
        <header className="main-content-splash">
          <div className="block-shade"></div>
          <div className="main-content-splash-image">
            <div className="upwards-shade"></div>
            <div className="right-shade"></div>
            <div className="left-shade"></div>
            <div className="main-clear-space"></div>
          </div>
          <h1 className="main-content-splash-name">Account Settings</h1>
        </header>
        <div className="main-content-content" >
          <div className="account-settings-wrapper">
            <div className="profile-card" >
              <div className="profile-map" >
                <div className="profile-image" style={styles}>
                  <input type="file" accept="image" onChange={this.handleUpload}/>
                </div>
                <div className="image-upload-container">
                  <button className="image-edit-button" onClick={this.handleClick}>Edit Image</button>
                  { this.state.clicked ?
                    <ul className="image-upload-dropdown">
                      <li className="image-upload-dropdown-option">Upload Photo</li>
                      <li className="image-upload-dropdown-option">Delete Photo</li>
                    </ul> : null
                  }
                </div>
              </div>
            </div>
            <div className="profile-forms" >
              <form className="account-settings-form" onSubmit={this.handleUpdateProfile}>
                <h2 className="user-settings-form-title">Profile</h2>
                <div className="user-settings-textfield-container" >
                  <label className="user-settings-form-label">First Name</label>
                  <input onChange={this.handleChange('fName')} type="text" value={this.state.fName} />
                </div>
                <div className="user-settings-textfield-container" >
                  <label className="user-settings-form-label">Last Name</label>
                  <input onChange={this.handleChange('lName')} type="text" value={this.state.lName} />
                </div>
                <div className="user-settings-textfield-container" >
                  <label className="user-settings-form-label">Email</label>
                  <input onChange={this.handleChange('email')} type="text" value={this.state.email} />
                </div>
                <div className="user-settings-submit-container" >
                  <button type="submit">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mSP = state => {
  return {
    currentUser : state.entities.currentUser
  };
};

const mDP = dispatch => {
  return {
    updateCurrentUser: user => dispatch(updateCurrentUser(user)),
    updateUserPassword: passwords => dispatch(updateUserPassword(passwords))
  }
}

export default connect(mSP, mDP)(UserAccountSettings);
