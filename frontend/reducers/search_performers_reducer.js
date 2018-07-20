import {
  RECEIVE_RESULTS
} from '../actions/search_actions';

const SearchPerformersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.performers;
    default:
      return state;
  }
};

export default SearchPerformersReducer;
