import React from 'react';

import { connect } from 'react-redux';
import {
  requestVenue
} from '../../actions/venue_actions';
import { withRouter, Link, Redirect } from 'react-router-dom';
import EventsListItem from './events_list_item';

class VenueEventsIndex extends React.Component {
  componentDidMount() {
    this.props.requestVenue(this.props.match.params.venueId);
  }

  componentDidUpdate(prevParams) {
    if (prevParams.match.params.venueId !== this.props.match.params.venueId) {
      this.props.requestVenue(this.props.match.params.venueId);
    }
  }

  render() {
    if (!this.props.venue) return null;

    let styles = {
      backgroundImage: `url(${this.props.venue.photoUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden'
    };

    const eventLinks = this.props.events.map(event => {
      return (
        <li className="venue-event-list-item" key={event.id}>
          <Link to={`/events/${event.id}`} >
            <EventsListItem event={event} venue={this.props.venue}/>
          </Link>
        </li>
      );
    });

    return (
      <div className="venues-index-container" >
        <header className="main-content-splash" style={styles}>
          <div className="main-content-splash-info">
            <h3 className="main-content-route-info">
              <span>
                <Link to="/" >Home</Link> / <Link to="/venues" >Venues</Link> / {this.props.venue.name}
              </span>
            </h3>
            <h1 className="main-content-splash-name">{this.props.venue.name} Tickets</h1>
          </div>
        </header>
        <div className="main-content-content" >
          <h1 className="venue-category-title">All Events</h1>
          <ul>
            {eventLinks}
          </ul>
        </div>
      </div>
    );
  }
}

const mSP = (state, ownProps) => {
  const venueId = Number(ownProps.match.params.venueId);
  const venue = state.entities.venues[venueId];
  const events = Object.values(state.entities.events).filter(event => event.venueId === venueId);
  return {
    venue,
    events
  };
};

const mDP = dispatch => {
  return {
    requestVenue: venueId => dispatch(requestVenue(venueId))
  };
};

export default withRouter(connect(mSP, mDP)(VenueEventsIndex));
