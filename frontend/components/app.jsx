import React from 'react';
import Modal from './modal.jsx';
import NavBar from './navbar';
import EventTicketsIndex from './event_tickets_index';
import { Route } from 'react-router-dom';

const App = () => {
  return(
    <div className="app">
      <Modal />
      <header className="app-header">
        <NavBar />
      </header>
      <Route path='/events/:eventId' component={EventTicketsIndex} />
    </div>
  );
};

export default App;
