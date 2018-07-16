import React from 'react';
import { connect } from 'react-redux';
import { requestTickets } from '../../actions/ticket_actions';

class UserTicketsIndex extends React.Component {
  componentDidMount() {
    this.props.requestTickets(this.props.userId);
  }

  render() {
    if (this.props.tickets.includes(undefined)) return null;
    const ticketItems = this.props.tickets.map(ticket => {
      return (
        <div key={ticket.id} className="user-ticket-info">
          <h3>Section {ticket.section} Row {ticket.row}</h3>
        </div>
      )
    });

    return (
      <div className="user-tickets-list">
        {ticketItems}
      </div>
    );
  }
}

const mSP = state => {
  const tickets = state.entities.currentUser.ticketIds.map(ticketId => state.entities.tickets[ticketId]);
  return {
    tickets
  };
};

const mDP = dispatch => {
  return {
    requestTickets: userId => dispatch(requestTickets(userId))
  };
};

export default connect(mSP, mDP)(UserTicketsIndex);
