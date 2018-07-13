import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

export const receiveEvent = payload => {
  return {
    type: RECEIVE_EVENT,
    event: payload.event,
    tickets: payload.tickets
  };
};

export const receiveEventErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  };
}

export const requestEvent = eventId => dispatch => {
  return EventApiUtil.fetchEvent(eventId).then(
    payload => dispatch(receiveEvent(payload)),
    errors => dispatch(receiveEventErrors(errors.responseJSON))
  );
};
