import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestEvent } from './actions/event_actions';
import * as PerformerApiUtil from './util/performer_api_util';

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
    }
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchPerformer = PerformerApiUtil.fetchPerformer;
  window.fetchPerformers = PerformerApiUtil.fetchPerformers;

  // window.dispatch = store.dispatch;
  // window.requestEvent = requestEvent;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
