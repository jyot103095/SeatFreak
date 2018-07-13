import { SHOW_ALL_TICKETS, SHOW_SINGLE_TICKET } from '../actions/event_tickets_actions';

const EventTicketsReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_SINGLE_TICKET:
      return action.ticketId;
    case SHOW_ALL_TICKETS:
      return null;
    default:
      return state;
  }
}

export default EventTicketsReducer;
