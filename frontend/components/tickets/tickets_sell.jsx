import React from 'react';
import { Link } from 'react-router-dom';

const TicketSell = () => (
  <article className="ticket-sell-splash" >
    <div className="ticket-sell-splash-info">
      <h1>Sell Tickets on SeatFreak</h1>
      <h2>Sell your tickets and get paid. Our transparent pricing means more money in your pocket.</h2>
      <Link to="/account/tickets" >Start Selling</Link>
    </div>
  </article>
);

export default TicketSell;
