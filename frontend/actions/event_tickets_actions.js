export const SHOW_SINGLE_TICKET = "SHOW_SINGLE_TICKET";
export const SHOW_ALL_TICKETS = "SHOW_ALL_TICKETS";

export const showSingleTicket = ticketId => {
  return {
    type: SHOW_SINGLE_TICKET,
    ticketId
  };
};

export const showAllTickets = () => {
  return {
    type: SHOW_ALL_TICKETS,
  };
};
