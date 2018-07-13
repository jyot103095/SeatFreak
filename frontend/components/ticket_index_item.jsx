import React from 'react';
import { Link } from 'react-router-dom';

const TicketIndexItem = ({ ticket }) => {
  return (
    <div className="ticket-listing-container">
      <div className="ticket-listing">
        <div className="ticket-info">
          <span>Section {ticket.section} Row {ticket.row} </span>
        </div>
        <div className="checkout-link">
          <Link to="/checkout" ticket={ticket} ><span>${ticket.price}<span className="per-each">/ea</span></span></Link>
        </div>
      </div>
    </div>
  );
};

export default TicketIndexItem;
