import React from 'react';
import Modal from './modal.jsx';
import NavBar from './navbar';
import { Link } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <Modal />
      <header>
        <Link to="/" className="header-link">
          <h1>SeatFreak</h1>
        </Link>
        <NavBar />
      </header>
    </div>
  );
};

export default App;
