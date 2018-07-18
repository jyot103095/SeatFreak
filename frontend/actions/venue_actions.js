import * as VenueApiUtil from '../util/venue_api_util';

export const RECEIVE_VENUE = "RECEIVE_VENUE";
export const RECEIVE_VENUE_ERRORS = "RECEIVE_VENUE_ERRORS";

export const receiveVenue = venue => {
  return {
    type: RECEIVE_VENUE,
    venue
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
    venue => dispatch(receiveVenue(venue)),
    errors => dispatch(receiveVenueErrors(errors.responseJSON))
  );
};
