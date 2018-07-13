import React from 'react';
import { requestEvent } from '../actions/event_actions';
import { connect } from 'react-redux';
import TicketIndexItem from './ticket_index_item';

class EventTicketsIndex extends React.Component {
  componentDidMount() {
    this.props.requestEvent(this.props.match.params.eventId);
  }

  render() {
    if (!this.props.event) return null;

    const ticketItems = this.props.tickets.map(ticket => <TicketIndexItem ticket={ticket} />);

    return (
      <ul>
        {ticketItems}
      </ul>
    );
  }
}

const mSP = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];
  return {
    event,
    tickets: Object.values(state.entities.tickets)
  };
};

const mDP = dispatch => {
  return {
    requestEvent: eventId => dispatch(requestEvent(eventId))
  };
};

export default connect(mSP, mDP)(EventTicketsIndex);
