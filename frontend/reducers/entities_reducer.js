import CurrentUserReducer from './current_user_reducer';
import EventsReducer from './events_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  currentUser: CurrentUserReducer,
  events: EventsReducer
});

export default EntitiesReducer;
