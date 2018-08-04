import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as TrackingUtil from './util/tracking_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    let preLoadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        currentUser: window.currentUser
      }
    };
    
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.track = TrackingUtil.trackItem;
  window.untrack = TrackingUtil.untrackItem;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
