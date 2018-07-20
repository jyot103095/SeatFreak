import { combineReducers } from 'redux';

import ModalReducer from './modal_reducer';
import EventTicketsReducer from './event_tickets_reducer';
import SellingTicketReducer from './selling_ticket_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  modal: ModalReducer,
  showingTicket: EventTicketsReducer,
  sellingTicket: SellingTicketReducer,
  search: SearchReducer
});
