import {
  RECEIVE_USER,
  LOGOUT
} from '../actions/session_actions';
import {
  RECEIVE_TICKET
} from '../actions/ticket_actions';
import {
  RECEIVE_TRACKED_ITEM,
  RECEIVE_UNTRACKED_ITEM
} from '../actions/tracking_actions';
import { merge } from 'lodash';

const CurrentUserReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  let key;
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_TICKET:
      return merge({}, state, { ticketIds: [action.ticket.id] });
    case RECEIVE_TRACKED_ITEM:
      key = "tracked" + action.item.itemType + "s";
      newState.trackedItems[key].push(action.item.id);
      return newState;
    case RECEIVE_UNTRACKED_ITEM:
      key = "tracked" + action.item.itemType + "s";
      let itemId = newState.trackedItems[key].indexOf(action.item.id);
      newState.trackedItems[key].splice(itemId, 1);
      return newState;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default CurrentUserReducer;
