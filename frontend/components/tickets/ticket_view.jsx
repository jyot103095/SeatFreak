import React from 'react';
import { showAllTickets } from '../../actions/event_tickets_actions';
import { connect } from 'react-redux';

const TicketView = ({ticket, showAllTickets}) => {
  return (
    <div className="ticket-view-container">
      <div className="ticket-view-header">
        <button onClick={showAllTickets}>Back to all tickets</button>
      </div>
      <h1>Section {ticket.section} Row {ticket.row}</h1>
    </div>
  );
};

const mSP = state => {
  return {
    ticket: state.entities.tickets[state.ui.showingTicket]
  };
};

const mDP = dispatch => ({
  showAllTickets: () => dispatch(showAllTickets())
});

export default connect(mSP, mDP)(TicketView);
