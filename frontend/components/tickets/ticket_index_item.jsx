import React from 'react';
import { Link } from 'react-router-dom';
import { showSingleTicket } from '../../actions/event_tickets_actions';
import { connect } from 'react-redux';

const TicketIndexItem = ({ ticket, showTicket }) => {
  return (
    <div className="ticket-listing-container" onClick={() => showTicket(ticket.id)}>
      <div className="ticket-listing">
        <div className="ticket-info">
          <span>Section {ticket.section} Row {ticket.row} </span>
        </div>
        <div className="checkout-link">
          <Link to="/checkout" ticket={ticket} >
            <span>${ticket.price}<span className="per-each">/ea</span></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mDP = dispatch => ({
  showTicket: ticketId => dispatch(showSingleTicket(ticketId))
});

export default connect(null, mDP)(TicketIndexItem);
