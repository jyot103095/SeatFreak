import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS
} from '../actions/event_actions';
import {
  RECEIVE_PERFORMER,
  RECEIVE_PERFORMERS
} from '../actions/performer_actions';
import {
  RECEIVE_TICKETS
} from '../actions/ticket_actions';
import { merge } from 'lodash';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_PERFORMER:
    case RECEIVE_PERFORMERS:
    case RECEIVE_EVENTS:
    case RECEIVE_TICKETS:
      return merge({}, state, action.events);
    default:
      return state;
  }
};

export default EventsReducer;
