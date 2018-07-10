import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <h1>SeatFreak</h1>
    </HashRouter>
  </Provider>
);

export default Root;
