import {
  RECEIVE_USER,
  LOGOUT
} from '../actions/session_actions';
import { merge } from 'lodash';

const SessionReducer = (state = { id: null }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return { id: action.user.id };
    default:
      return state;
  }
};

export default SessionReducer;
