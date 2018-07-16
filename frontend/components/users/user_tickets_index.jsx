import React from 'react';
import { connect } from 'react-redux';
import { requestTickets, sellTicket } from '../../actions/ticket_actions';

class UserTicketsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSell = this.handleSell.bind(this);
  }

  componentDidMount() {
    this.props.requestTickets(this.props.userId);
  }

  handleSell(ticketId) {
    this.props.sellTicket(ticketId);
  }

  render() {
    if (this.props.tickets.includes(undefined)) return null;
    const ticketItems = this.props.tickets.map(ticket => {
      return (
        <div key={ticket.id} className="user-ticket-info">
          <h3>Section {ticket.section} Row {ticket.row}</h3>
          <button onClick={this.handleSell(ticket.id)}>Sell</button>
        </div>
      );
    });

    return (
      <div className="user-tickets">
        <h1>Tickets</h1>
        <div className="user-tickets">
          {ticketItems}
        </div>
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
    requestTickets: userId => dispatch(requestTickets(userId)),
    sellTicket: ticketId => dispatch(sellTicket(ticketId))
  };
};

export default connect(mSP, mDP)(UserTicketsIndex);
