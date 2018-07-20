import { connect } from 'react-redux';
import { sellTicket } from '../../actions/ticket_actions';
import { closeModal } from '../../actions/modal_actions';
import SellForm from './_sell_form';

const mSP = state => {
  const ticket = state.entities.tickets[state.ui.sellingTicket];
  const event = state.entities.events[ticket.eventId];
  return {
    ticket,
    event,
    formType: "Sell"
  };
};

const mDP = dispatch => {
  return {
    submitAction: ticket => dispatch(sellTicket(ticket)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSP, mDP)(SellForm);
