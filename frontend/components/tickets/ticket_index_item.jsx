import React from 'react';
import { withRouter } from 'react-router-dom';
import { showSingleTicket } from '../../actions/event_tickets_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const TicketIndexItem = ({ loggedIn, ticket, showTicket, openLoginModal, history }) => {
  function handleCheckout (e) {
    e.stopPropagation();
    if (!loggedIn) {
      debugger
      openLoginModal();
    } else {
      history.push(`/checkout/${ticket.id}`)
    }
  }

  return (
    <div className="ticket-listing-container" onClick={() => showTicket(ticket.id)}>
      <div className="ticket-listing">
        <div className="ticket-info">
          <span>Section {ticket.section} Row {ticket.row} </span>
        </div>
        <div className="checkout-link">
          <button onClick={handleCheckout} >
            <span>${ticket.price}<span className="per-each">/ea</span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mSP = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

const mDP = dispatch => ({
  showTicket: ticketId => dispatch(showSingleTicket(ticketId)),
  openLoginModal: () => dispatch(openModal('login'))
});

export default withRouter(connect(mSP, mDP)(TicketIndexItem));
