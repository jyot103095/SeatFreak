import { combineReducers } from 'redux';

import ModalReducer from './modal_reducer';
import EventTicketsReducer from './event_tickets_reducer';

export default combineReducers({
  modal: ModalReducer,
  showingTicket: EventTicketsReducer
});
