import React from 'react';
import Modal from './modal.jsx';
import NavBar from './navbar';

const App = () => {
  return(
    <div className="app">
      <Modal />
      <header className="app-header">
        <NavBar />
      </header>
    </div>
  );
};

export default App;
