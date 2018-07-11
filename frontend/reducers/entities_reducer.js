import CurrentUserReducer from './current_user_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  currentUser: CurrentUserReducer
});

export default EntitiesReducer;
