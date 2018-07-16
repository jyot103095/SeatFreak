import React from 'react';
import { connect } from 'react-redux';
import { buyTicket } from '../../actions/ticket_actions';

const TicketCheckout = ({ticket, event, buyTicket}) => {
  return (
    <div>
      <h1>{event.title}</h1>
      <h2>{event.eventOn}</h2>
      <h1>Section {ticket.section} Row {ticket.row}</h1>
      <button onClick={() => buyTicket(ticket.id)}>Buy Ticket</button>
    </div>
  );
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
