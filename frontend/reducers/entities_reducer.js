import CurrentUserReducer from './current_user_reducer';
import EventsReducer from './events_reducer';
import TicketsReducer from './tickets_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  currentUser: CurrentUserReducer,
  events: EventsReducer,
  tickets: TicketsReducer
});

export default EntitiesReducer;
