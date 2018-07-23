import * as TicketApiUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const RECEIVE_TICKETS = "RECEIVE_TICKETS";
export const RECIEVE_TICKET_ERRORS = "RECEIVE_TICKET_ERRORS";

export const receiveTicket = payload => {
  return {
    type: RECEIVE_TICKET,
    ticket: payload.ticket,
    event: payload.event
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
    payload => dispatch(receiveTicket(payload)),
    errors => dispatch(receiveTicketErrors(errors.responseJSON))
  )
};

export const sellTicket = ticket => dispatch => {
  return TicketApiUtil.sell(ticket).then(
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
    errors => dispatch(receiveTicketErrors(errors.responseJSON)),
  )
}
