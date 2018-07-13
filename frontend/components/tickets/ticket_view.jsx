import React from 'react';
import { showAllTickets } from '../../actions/event_tickets_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TicketView = ({ticket, showAllTickets}) => {
  return (
    <div className="ticket-view-container">
      <div className="ticket-view-header">
        <button onClick={showAllTickets}><h4>Back to all deals</h4></button>
      </div>
      <div className="ticket-seat-info">
        <h4>Section {ticket.section} Row {ticket.row}</h4>
      </div>
      <div className="ticket-price-container">
        <div className="ticket-price-info" >
          <span>${ticket.price}<span className="ticket-price-per-each">/ea</span></span>
        </div>
        <div className="bigger-checkout-link">
          <Link to="/checkout" ticket={ticket} >Checkout</Link>
        </div>
      </div>
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
