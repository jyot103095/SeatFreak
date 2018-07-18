export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_TICKET_MODAL = 'OPEN_TICKET_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openTicketModal = (modal, ticketId) => {
  return {
    type: OPEN_TICKET_MODAL,
    modal,
    ticketId
  };
};
