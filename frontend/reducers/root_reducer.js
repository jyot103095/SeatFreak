import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer.js';

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});
