import {
  RECEIVE_EVENT,
  RECEIVE_EVENTS
} from '../actions/event_actions';
import { merge } from 'lodash';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case RECEIVE_EVENTS:
      return merge({}, state, action.events);
    default:
      return state;
  }
};

export default EventsReducer;
