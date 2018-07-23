import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { buyTicket } from '../../actions/ticket_actions';

class TicketCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleBuy() {
    this.props.buyTicket(this.props.ticket.id).then(
      () => this.props.history.push("/account/tickets")
    );
  }

  render() {
    return (
      <div className="event-tickets-wrapper">
        <div className="navbar-compensator"></div>
        <div className="checkout-container">
          <h1>{this.props.event.title}</h1>
          <h2>{this.props.event.eventOn}</h2>
          <h1>Section {this.props.ticket.section} Row {this.props.ticket.row}</h1>
          <button onClick={this.handleBuy}>Buy Ticket</button>
        </div>
      </div>
    );
  }
};

const mSP = state => {
  const ticketId = state.ui.showingTicket;
  const ticket = state.entities.tickets[ticketId];
  const event = state.entities.events[ticket.eventId];
  return {
    ticket,
    event
  }
};

const mDP = dispatch => {
  return {
    buyTicket: ticketId => dispatch(buyTicket(ticketId))
  }
};

export default connect(mSP, mDP)(TicketCheckout);
