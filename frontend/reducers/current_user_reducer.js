import {
  RECEIVE_USER,
  LOGOUT
} from '../actions/session_actions';

const CurrentUserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default CurrentUserReducer;
