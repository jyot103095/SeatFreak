export const buy = (ticketId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tickets/${ticketId}/buy`
  });
};

export const sell = (ticket) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tickets/${ticket.id}/sell`,
    data: {
      ticket
    }
  });
};

export const updatePrice = (ticket) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tickets/${ticket.id}`,
    data: {
      ticket
    }
  });
};

export const fetchTickets = () => {
  return $.ajax({
    method: "GET",
    url: '/api/tickets'
  });
};
