import {
  RECEIVE_ERRORS,
  RECEIVE_USER
 } from '../actions/session_actions';
import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_USER:
    case CLOSE_MODAL:
    case OPEN_MODAL:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
