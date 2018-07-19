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
        <header className="main-content-splash main-page">
          <div className="main-content-splash-info">
            <h1 className="main-content-splash-name">Thousands of Tickets in One Place.</h1>
          </div>
          <form className="search-form-main-page">
            <div className="search-box-container-main-page">
              <input type="text" placeholder="Search by team, artist, event, or venue"></input>
              <input type="submit" value="Search"></input>
            </div>
          </form>
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
