import React from 'react';
import { connect } from 'react-redux';

class EventIndex extends React.Component {
  render() {

  }
}

const mSP = state => {
  return {
    events: state.entities.events
  }
};
