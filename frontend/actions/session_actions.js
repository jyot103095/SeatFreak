import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT = "LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    events: payload.events,
    performers: payload.performers,
    venues: payload.venues
  }
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT
  }
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  }
};

export const loginUser = user => dispatch => {
  return SessionApiUtil.login(user).then(
    payload => dispatch(receiveUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signupUser = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    payload => dispatch(receiveUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logoutUser = () => dispatch => {
  return SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors))
  );
};
