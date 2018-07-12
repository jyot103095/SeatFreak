import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_USER
 } from '../actions/session_actions';
 import {
   RECEIVE_EVENT,
   RECEIVE_EVENT_ERRORS
 } from '../actions/event_actions';
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';

const defaultState = {
  session: [],
  events: []
}

const ErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, { session: action.errors });
    case RECEIVE_EVENT_ERRORS:
      return merge({}, state, { events: action.errors });
    case RECEIVE_USER:
    case RECEIVE_EVENT:
    case CLOSE_MODAL:
    case OPEN_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default ErrorsReducer;
