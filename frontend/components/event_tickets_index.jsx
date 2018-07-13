import React from 'react';
import { requestEvent } from '../actions/event_actions';
import { connect } from 'react-redux';
import TicketIndexItem from './ticket_index_item';

class EventTicketsIndex extends React.Component {

  render() {
    if (!this.props.event) return null;

    const ticketItems = this.props.tickets.map(ticket => <TicketIndexItem key={ticket.id} ticket={ticket} />);

    return (
      <div className="event-tickets-container">
        <div className="event-tickets-header">
          <h4>Amazing Deals</h4>
        </div>
        <ul className="tickets-list">
          {ticketItems}
        </ul>
      </div>
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

export default connect(mSP)(EventTicketsIndex);
