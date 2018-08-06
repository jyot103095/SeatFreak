import {
  RECEIVE_PERFORMER,
  RECEIVE_PERFORMERS
} from '../actions/performer_actions';
import {
  RECEIVE_EVENTS
} from '../actions/event_actions';
import {
  RECEIVE_USER
} from '../actions/session_actions';
import { merge } from 'lodash';

const PerformerReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PERFORMER:
      return merge({}, state, { [action.performer.id]: action.performer });
    case RECEIVE_PERFORMERS:
    case RECEIVE_EVENTS:
    case RECEIVE_USER:
      return merge({}, state, action.performers);
    default:
      return state;
  }
};

export default PerformerReducer;
