import * as VenueApiUtil from '../util/venue_api_util';

export const RECEIVE_VENUE = "RECEIVE_VENUE";
export const RECEIVE_VENUES = "RECEIVE_VENUES";
export const RECEIVE_VENUE_ERRORS = "RECEIVE_VENUE_ERRORS";

export const receiveVenue = payload => {
  return {
    type: RECEIVE_VENUE,
    venue: payload.venue,
    events: payload.events
  };
};

export const receiveVenues = venues => {
  return {
    type: RECEIVE_VENUES,
    venues
  };
};

export const receiveVenueErrors = errors => {
  return {
    type: RECEIVE_VENUE_ERRORS,
    errors
  };
};

export const requestVenue = venueId => dispatch => {
  return VenueApiUtil.fetchVenue(venueId).then(
    payload => dispatch(receiveVenue(payload)),
    errors => dispatch(receiveVenueErrors(errors.responseJSON))
  );
};

export const requestVenues = () => dispatch => {
  return VenueApiUtil.fetchVenues().then(
    venues => dispatch(receiveVenues(venues)),
    errors => dispatch(receiveVenueErrors(errors.responseJSON))
  );
};
