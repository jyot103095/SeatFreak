import * as CurrentUserApiUtil from '../util/current_user_api_util';
import { receiveUser } from './session_actions';

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const requestCurrentUser = () => dispatch => {
  return CurrentUserApiUtil.fetchCurrentUser().then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors.responseJSON))
  );
};

export const updateCurrentUser = user => dispatch => {
  return CurrentUserApiUtil.updateUser(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors.responseJSON))
  );
};
