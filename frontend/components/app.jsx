import React from 'react';
import Modal from './session/modal';
import NavBar from './navbar/navbar';
import EventTicketsIndex from './tickets/event_tickets_index';
import TicketCheckout from './tickets/ticket_checkout';
import EventIndex from './events/event_index';
import UserAccountSettings from './users/user_account_settings';
import UserTicketsIndex from './users/user_tickets';
import TicketSell from './tickets/tickets_sell';
import PerformersIndex from './performers/performers_index';
import PerformerEventsIndex from './events/performer_events_index';
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
        <Route path='/account/settings' component={UserAccountSettings} />
        <Route path='/account/tickets' component={UserTicketsIndex} />
        <Route path='/sell' component={TicketSell} />
        <Route exact path='/categories/:category' component={PerformersIndex} />
        <Route path='/performers/:performerId' component={PerformerEventsIndex} />
      </div>
    </div>
  );
};

export default App;
