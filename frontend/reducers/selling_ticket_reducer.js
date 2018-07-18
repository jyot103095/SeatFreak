import { OPEN_TICKET_MODAL } from '../actions/modal_actions';

const SellingTicketReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_TICKET_MODAL:
      return action.ticketId
    default:
      return null;
  }
};

export default SellingTicketReducer;
