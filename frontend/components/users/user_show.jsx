import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UserTicketsIndex from './user_tickets_index';

class UserShow extends React.Component {
  render() {

    return (
      <div className="user-show-container" >
        <h1>{this.props.currentUser.fName} {this.props.currentUser.lName}</h1>
        <Route path="/account/tickets" component={UserTicketsIndex} />
      </div>
    );
  }
}

const mSP = state => {
  return {
    currentUser : state.entities.currentUser
  };
};

export default connect(mSP)(UserShow);
