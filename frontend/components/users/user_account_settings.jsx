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
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
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

  handleUpdatePassword() {

  }

  render() {
  // TODO: split component into seperate components
    return (
      <div className="user-settings-container">
        <header className="main-content-splash">
          <h1 className="main-content-splash-name">Account Settings</h1>
        </header>
        <div className="main-content-content" >
          <div className="account-settings-wrapper">
            <div className="profile-card" >
              <div className="profile-map-overlay"></div>
              <div className="profile-map" >

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
              <form className="account-settings-form" onSubmit={this.handleUpdatePassword}>
                <h2 className="user-settings-form-title">Change Your Password</h2>
                  <div className="user-settings-textfield-container" >
                    <label className="user-settings-form-label">Old Password</label>
                    <input onChange={this.handleChange('oldPassword')} type="password" value={this.state.oldPassword} />
                  </div>
                  <div className="user-settings-textfield-container" >
                    <label className="user-settings-form-label">New Password</label>
                    <input onChange={this.handleChange('newPassword')} type="password" value={this.state.newPassword}/>
                  </div>
                  <div className="user-settings-textfield-container" >
                    <label className="user-settings-form-label">Confirm Password</label>
                    <input onChange={this.handleChange('confirmPassword')} type="password" value={this.state.confirmPassword} />
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
