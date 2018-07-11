import {
  RECEIVE_USER
} from '../actions/session_actions';

const CurrentUserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default CurrentUserReducer;
