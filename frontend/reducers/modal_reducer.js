import { OPEN_MODAL, OPEN_TICKET_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function ModalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
    case OPEN_TICKET_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
