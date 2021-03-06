import React from 'react';
import { showAllTickets } from '../../actions/event_tickets_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const TicketView = ({ticket, showAllTickets, loggedIn, openModal, history}) => {

  function handleClick (e) {
    e.stopPropagation();

    if (!loggedIn) {
      openModal();
    } else {
      history.push(`/checkout/${ticket.id}`)
    }
  }

  return (
    <div className="event-tickets-wrapper">
      <div className="ticket-view-container">
        <div className="ticket-view-header" onClick={showAllTickets}>
          <h4>Back to all deals</h4>
        </div>
        <div className="ticket-seat-info">
          <h4>Section {ticket.section} Row {ticket.row}</h4>
        </div>
        <div className="ticket-price-container">
          <div className="ticket-price-info" >
            <span>${ticket.price}<span className="ticket-price-per-each">/ea</span></span>
          </div>
          <div className="bigger-checkout-link">
            <button onClick={handleClick}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mSP = state => {
  return {
    ticket: state.entities.tickets[state.ui.showingTicket],
    loggedIn: Boolean(state.session.id)
  };
};

const mDP = dispatch => ({
  showAllTickets: () => dispatch(showAllTickets()),
  openModal: () => dispatch(openModal('login'))
});

export default withRouter(connect(mSP, mDP)(TicketView));
