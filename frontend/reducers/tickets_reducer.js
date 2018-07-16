import {
  RECEIVE_EVENT
} from '../actions/event_actions';
import {
  RECEIVE_TICKET,
  RECEIVE_TICKETS
} from '../actions/ticket_actions';
import {
  RECEIVE_USER
} from '../actions/session_actions';
import { merge } from 'lodash';

const TicketsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENT:
    case RECEIVE_TICKETS:
      return merge({}, state, action.tickets);
    case RECEIVE_TICKET:
      return merge({}, state, { [action.ticket.id]: action.ticket} );
    default:
      return state;
  }
};

export default TicketsReducer;
