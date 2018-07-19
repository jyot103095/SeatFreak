import React from 'react';
import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import EventCard from './event_card';
import VenueCard from '../venues/venue_card';
import PerformerCard from '../performers/performer_card';

class EventIndex extends React.Component {
  componentDidMount () {
    this.props.requestEvents();
  }

  render() {
    const eventItems = this.props.events.map(event => <EventCard key={event.id} event={event} />);
    const performerItems = this.props.performers.slice(0, 12).map(performer => <PerformerCard key={performer.id} performer={performer} />);
    const venueItems = this.props.venues.map(venue => <VenueCard key={venue.id} venue={venue} />);
    return (
      <div className="events-index-container">
        <header className="main-content-splash">
          <div className="main-content-splash-info">
            <h1 className="main-content-splash-name">Should be a Search Bar</h1>
          </div>
        </header>
        <div className="main-content-content">
          <div className="events-list" >
            {eventItems}
          </div>
          <div className="events-list" >
            {performerItems}
          </div>
          <div className="events-list" >
            {venueItems}
          </div>
        </div>
      </div>
    );
  }
}

const mSP = state => {
  return {
    events: Object.values(state.entities.events),
    performers: Object.values(state.entities.performers),
    venues: Object.values(state.entities.venues)
  };
};

const mDP = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents())
  }
}

export default connect(mSP, mDP)(EventIndex);
