import {
  RECEIVE_VENUE
} from '../actions/venue_actions';
import {
  RECEIVE_TICKETS
} from '../actions/ticket_actions';
import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT
} from '../actions/event_actions';
import {
  RECEIVE_PERFORMER,
  RECEIVE_PERFORMERS
} from '../actions/performer_actions';
import { merge } from 'lodash';

const VenuesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENTS:
    case RECEIVE_TICKETS:
    case RECEIVE_PERFORMER:
    case RECEIVE_PERFORMERS:
      return merge({}, state, action.venues);
    case RECEIVE_EVENT:
    case RECEIVE_VENUE:
      return merge({}, state, { [action.venue.id]: action.venue });
    default:
      return state;
  }
};

export default VenuesReducer;
