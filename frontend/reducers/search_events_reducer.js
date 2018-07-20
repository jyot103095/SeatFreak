import {
  RECEIVE_RESULTS
} from '../actions/search_actions';

const SearchEventsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.events;
    default:
      return state;
  }
};

export default SearchEventsReducer;
