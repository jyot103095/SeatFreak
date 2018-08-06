import React from 'react';
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
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleUpdateProfile() {
    const user = {
      id: this.props.currentUser.id,
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email
    };

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
                <div className="profile-image" style={styles}></div>
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
