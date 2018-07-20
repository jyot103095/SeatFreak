import {
  RECEIVE_USER,
  LOGOUT
} from '../actions/session_actions';
import {
  RECEIVE_TICKET
} from '../actions/ticket_actions';
import { merge } from 'lodash';

const CurrentUserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_TICKET:
      return merge({}, newState, { ticketIds: [action.ticket.id] });
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default CurrentUserReducer;
