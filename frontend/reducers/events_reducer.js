import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS
} from '../actions/event_actions';
import {
  RECEIVE_PERFORMER,
} from '../actions/performer_actions';
import {
  RECEIVE_TICKETS,
  RECEIVE_TICKET
} from '../actions/ticket_actions';
import {
  RECEIVE_VENUE
} from '../actions/venue_actions';
import {
  RECEIVE_USER
} from '../actions/session_actions';
import { merge } from 'lodash';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
    case RECEIVE_TICKET:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_USER:
      return merge({}, state, action.events);
    case RECEIVE_PERFORMER:
    case RECEIVE_TICKETS:
    case RECEIVE_VENUE:
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default EventsReducer;
