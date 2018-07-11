import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { loginUser, logoutUser, signupUser } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
