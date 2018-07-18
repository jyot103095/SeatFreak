import CurrentUserReducer from './current_user_reducer';
import EventsReducer from './events_reducer';
import TicketsReducer from './tickets_reducer';
import PerformersReducer from './performers_reducer';
import VenuesReducer from './venues_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  currentUser: CurrentUserReducer,
  events: EventsReducer,
  tickets: TicketsReducer,
  performers: PerformersReducer,
  venues: VenuesReducer
});

export default EntitiesReducer;
