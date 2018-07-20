import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveResults = results => {
  return {
    type: RECEIVE_RESULTS,
    events: results.events,
    performers: results.performers,
    venues: results.venues
  };
};

export const search = query => dispatch => {
  return SearchApiUtil.search(query).then(
    results => dispatch(receiveResults(results))
  );
};
