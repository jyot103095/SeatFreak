import {
  RECEIVE_EVENT
} from '../actions/event_actions';
import { merge } from 'lodash';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    default:
      return state;
  }
};

export default EventsReducer;
