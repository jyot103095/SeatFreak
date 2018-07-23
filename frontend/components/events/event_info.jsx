import React from 'react';
import { connect } from 'react-redux';
import { requestEvent } from '../../actions/event_actions';

class EventInfo extends React.Component {
  componentDidMount() {
    this.props.requestEvent(this.props.match.params.eventId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.eventId !== this.props.match.params.eventId) {
      this.props.requestEvent(this.props.match.params.eventId);
    }
  }

  render() {
    if (!this.props.event) return null;
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
  if (event !== undefined) {
    venue = state.entities.venues[event.venueId];
  }

  return {
    event,
    venue
  };
};

const mDP = dispatch => {
  return {
    requestEvent: eventId => dispatch(requestEvent(eventId))
  };
};

export default connect(mSP, mDP)(EventInfo);
