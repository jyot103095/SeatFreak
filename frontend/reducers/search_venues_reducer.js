import {
  RECEIVE_RESULTS
} from '../actions/search_actions';

const SearchVenuesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.venues;
    default:
      return state;
  }
};

export default SearchVenuesReducer;
