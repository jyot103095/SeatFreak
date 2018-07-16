import React from 'react';
import Modal from './session/modal';
import NavBar from './navbar/navbar';
import EventTicketsIndex from './tickets/event_tickets_index';
import TicketCheckout from './tickets/ticket_checkout';
import { Route, Link } from 'react-router-dom';

const App = () => {
  return(
    <div className="app">
      <Modal />
      <div className="navbar-container">
        <NavBar />
      </div>
      <Route path='/events/:eventId' component={EventTicketsIndex} />
      <Route path='/checkout' component={TicketCheckout} />
    </div>
  );
};

export default App;
