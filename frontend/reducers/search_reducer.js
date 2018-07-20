import { combineReducers } from 'redux';
import SearchEventsReducer from './search_events_reducer';
import SearchVenuesReducer from './search_venues_reducer';
import SearchPerformersReducer from './search_performers_reducer';

export default combineReducers({
  events: SearchEventsReducer,
  venues: SearchVenuesReducer,
  performers: SearchPerformersReducer
});
