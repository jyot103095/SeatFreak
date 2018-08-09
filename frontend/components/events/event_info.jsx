import React from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';

class EventInfo extends React.Component {

  render() {
    if (!this.props.venue) return null;
    return (
      <div className="event-info-container">
        <h3>{this.props.event.title}</h3>
        <h5>{this.props.event.eventOn} - {this.props.venue.name}</h5>
      </div>
    );
  }
};

const mSP = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];
  let venue;
  if (event) {
    venue = state.entities.venues[event.venueId];
  }

  return {
    event,
    venue
  };
};

export default connect(mSP)(EventInfo);
