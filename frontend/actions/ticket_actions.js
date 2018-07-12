import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECIEVE_TICKET_ERRORS = "RECEIVE_TICKET_ERRORS";

export const receiveTicket = ticket => {
  return {
    type: RECEIVE_TICKET,
    ticket
  }
};

export const receiveTicketErrors = errors => {
  return {
    type: RECIEVE_TICKET_ERRORS,
    errors
  }
};

export const buyTicket = ticketId => dispatch => {
  return TicketApiUtil.buy(ticketId).then(
    ticket => dispatch(receiveTicket(ticket)),
    errors => dispatch(receiveTicketErrors(errors))
  );
};

export const sellTicket = ticketId => dispatch => {
  return TicketApiUtil.sell(ticketId).then(
    ticket => dispatch(receiveTicket(ticket)),
    errors => dispatch(receiveTicketErrors(errors))
  );
};

export const updatePrice = ticket => dispatch => {
  return TicketApiUtil.updatePrice(ticket).then(
    ticket => dispatch(receiveTicket(ticket)),
    errors => dispatch(receiveTicketErrors(errors))
  );
};
