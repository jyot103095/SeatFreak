import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Footer from '../footer';

const TicketSell = ({ loggedIn, openModal,  history }) => {
  const handleClick = () => {
    if (!loggedIn) {
      openModal();
    } else {
      history.push("/account/tickets");
    }
  };

  return (
    <div className="ticket-sell-splash" >
      <div className="ticket-sell-splash-info">
        <h1>Sell Tickets on SeatFreak</h1>
        <h2>Sell your tickets and get paid. Our transparent pricing means more money in your pocket.</h2>
        <button onClick={handleClick}>Start Selling</button>
      </div>
      <Footer />
    </div>
  );
};

const mSP = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const mDP = dispatch => {
  return {
    openModal: () => dispatch(openModal('login'))
  };
};

export default connect(mSP, mDP)(TicketSell);
