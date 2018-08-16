import React from 'react';
import { requestEvent } from '../../actions/event_actions';
import { track, untrack } from '../../actions/tracking_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TicketIndexItem from './ticket_index_item';
import TicketView from './ticket_view';

class EventTicketsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageView: false,
      loading: true
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleTracking = this.handleTracking.bind(this);
  }

  componentDidMount() {
    this.props.requestEvent(this.props.match.params.eventId).then(
      success => this.setState({ loading: false })
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.eventId !== this.props.match.params.eventId) {
      this.props.requestEvent(this.props.match.params.eventId);
    }
  }

  handleTracking() {
    if (this.props.loggedIn) {
      if (this.props.tracked) {
        this.props.untrack({ trackable_type: "Event", trackable_id: this.props.event.id });
      } else {
        this.props.track({ trackable_type: "Event", trackable_id: this.props.event.id });
      }

    } else {
      this.props.openLoginModal();
    }
  }

  handleLoad() {
    this.setState({
      imageView: true
    });
  }

  render() {
    if (this.state.loading || !this.props.event) return <div className="loading-div"></div>

    if (!this.props.content) {
      const ticketIndex = () => {
        if (this.props.tickets.length > 0) {
          let ticketItems = this.props.tickets.map(ticket => {
            return (
              <TicketIndexItem key={ticket.id} ticket={ticket} />
            );
          });
          return (
            <ul className="tickets-list">
              {ticketItems}
            </ul>
          );
        } else {
          return (
            <div className="empty-tickets-container">
              <h2>No tickets currently on sale for this event</h2>
            </div>
          );
        }
      };

      return (
        <div className="event-tickets-wrapper">
          <div className="navbar-compensator"></div>
          <div className="event-tickets-container">
            <div className="event-tickets-header">
              <h4>Amazing Deals</h4>
              <h4><i className={`fa-heart fa-lg ${ this.props.tracked ? "fas tracked" : "far"}`} onClick={this.handleTracking}></i></h4>
            </div>
            { ticketIndex() }
          </div>
          <div className="event-image-loading">
            <img src={this.props.event.photoUrl} onLoad={this.handleLoad} className={this.state.imageView ? "image-shown" : "image-hidden"}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="event-tickets-wrapper">
          <div className="navbar-compensator"></div>
          <TicketView />
          <div className="event-image-loading">
            <img src={this.props.event.photoUrl} onLoad={this.handleLoad} className={this.state.imageView ? "image-shown" : "image-hidden"}/>
          </div>
        </div>
      );
    }
  }
}

const mSP = (state, ownProps) => {
  const event = state.entities.events[ownProps.match.params.eventId];
  let tickets;
  let venue;
  if (event) {
    tickets = Object.values(state.entities.tickets).filter(ticket => (ticket.eventId === event.id) && (ticket.onSale));
    venue = state.entities.venues[event.venueId];
  }

  let loggedIn = Boolean(state.session.id);
  let tracked = false;
  if (loggedIn && event) {
    tracked = state.entities.currentUser.trackedItems.trackedEvents.includes(event.id);
  }
  
  return {
    event,
    tickets,
    venue,
    content: state.ui.showingTicket,
    loggedIn,
    tracked
  };
};

const mDP = dispatch => {
  return {
    requestEvent: eventId => dispatch(requestEvent(eventId)),
    track: event => dispatch(track(event)),
    untrack: event => dispatch(untrack(event)),
    openLoginModal: () => dispatch(openModal('login'))
  };
};

export default connect(mSP, mDP)(EventTicketsIndex);
