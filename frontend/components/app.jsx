import React from 'react';
import Modal from './session/modal';
import NavBar from './navbar/navbar';
import EventTicketsIndex from './tickets/event_tickets_index';
import TicketCheckout from './tickets/ticket_checkout';
import EventIndex from './events/event_index';
import UserShow from './users/user_show';
import TicketSell from './tickets/tickets_sell';
import { Route, Link } from 'react-router-dom';

const App = () => {
  return(
    <div className="app">
      <Modal />
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="main-content-container">
        <Route exact path='/' component={EventIndex} />
        <Route path='/events/:eventId' component={EventTicketsIndex} />
        <Route path='/checkout' component={TicketCheckout} />
        <Route path='/account' component={UserShow} />
        <Route path='/sell' component={TicketSell} />
      </div>
    </div>
  );
};

export default App;
