import React from 'react';
import { connect } from 'react-redux';
import UserTicketsIndex from './user_tickets_index';

class UserShow extends React.Component {
  render() {

    return (
      <div className="user-show-container" >
        <h1>{this.props.currentUser.fName} {this.props.currentUser.lName}</h1>
        <div className="user-tickets-tab">
          <h2>Tickets</h2>
          <div className="user-tickets-list" >
            <UserTicketsIndex userId={this.props.currentUser.id}/>
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

export default connect(mSP)(UserShow);
