import React from 'react';

const TicketIndexItem = ({ ticket }) => {
  return (
    <div>
      <span>Section {ticket.section} Row {ticket.row} </span>
    </div>
  );
};

export default TicketIndexItem;
