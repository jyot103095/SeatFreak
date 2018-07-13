import { SHOW_ALL_TICKETS, SHOW_SINGLE_TICKET } from '../actions/event_tickets_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';

const EventTicketsReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_SINGLE_TICKET:
      return action.ticketId;
    case SHOW_ALL_TICKETS:
    case RECEIVE_EVENT:
      return null;
    default:
      return state;
  }
}

export default EventTicketsReducer;
