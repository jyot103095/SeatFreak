import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECEIVE_TICKETS = "RECEIVE_TICKETS";
export const RECIEVE_TICKET_ERRORS = "RECEIVE_TICKET_ERRORS";

export const receiveTicket = ticket => {
  return {
    type: RECEIVE_TICKET,
    ticket
  }
};

export const receiveTickets = payload => {
  return {
    type: RECEIVE_TICKETS,
    tickets: payload.tickets,
    events: payload.events
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
    errors => dispatch(receiveTicketErrors(errors.responseJSON))
  );
};

export const sellTicket = ticketId => dispatch => {
  return TicketApiUtil.sell(ticketId).then(
    ticket => dispatch(receiveTicket(ticket)),
    errors => dispatch(receiveTicketErrors(errors.responseJSON))
  );
};

export const updatePrice = ticket => dispatch => {
  return TicketApiUtil.updatePrice(ticket).then(
    ticket => dispatch(receiveTicket(ticket)),
    errors => dispatch(receiveTicketErrors(errors.responseJSON))
  );
};

export const requestTickets = () => dispatch => {
  return TicketApiUtil.fetchTickets().then(
    payload => dispatch(receiveTickets(payload)),
    errors => dispatch(receiveTicketErrors(errors.responseJSON))
  )
}
