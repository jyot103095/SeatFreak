import React from 'react';
import { requestEvent } from '../../actions/event_actions';
import { connect } from 'react-redux';
import { showSingleTicket, showAllTickets } from '../../actions/event_tickets_actions';
import TicketIndexItem from './ticket_index_item';
import TicketView from './ticket_view';

class EventTicketsIndex extends React.Component {

  render() {
    if (!this.props.event) return null;

    if (!this.props.content) {
      const ticketItems = this.props.tickets.map(ticket => {
        return (
          <TicketIndexItem key={ticket.id} ticket={ticket} />
        );
      });

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
    } else {
      return (<TicketView />);
    }
  }
}

const mSP = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];
  return {
    event,
    tickets: Object.values(state.entities.tickets),
    content: state.ui.showingTicket
  };
};

const mDP = dispatch => ({
  showingSingleTicket: ticketId => dispatch(showSingleTicket(ticketId))
});

export default connect(mSP, mDP)(EventTicketsIndex);
