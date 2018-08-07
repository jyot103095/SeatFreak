import React from 'react';

import { connect } from 'react-redux';
import {
  requestVenue
} from '../../actions/venue_actions';
import { withRouter, Link, Redirect } from 'react-router-dom';
import EventsListItem from './events_list_item';
import { track, untrack } from '../../actions/tracking_actions';
import { openModal } from '../../actions/modal_actions';

class VenueEventsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageView: false
    };
    this.handleTracking = this.handleTracking.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState({
      imageView: true
    });
  }

  componentDidMount() {
    this.props.requestVenue(this.props.match.params.venueId);
  }

  componentDidUpdate(prevParams) {
    if (prevParams.match.params.venueId !== this.props.match.params.venueId) {
      this.props.requestVenue(this.props.match.params.venueId);
    }
  }

  handleTracking() {
    if (this.props.loggedIn) {
      if (this.props.tracked) {
        this.props.untrack({ trackable_type: "Venue", trackable_id: this.props.venue.id });
      } else {
        this.props.track({ trackable_type: "Venue", trackable_id: this.props.venue.id });
      }

    } else {
      this.props.openLoginModal();
    }
  }

  render() {
    if (!this.props.venue) return null;

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
        <header className="item-show-main-content-splash loading-gif">
          <img src={this.props.venue.photoUrl} onLoad={this.handleLoad} className={this.state.imageView ? "image-shown" : "image-hidden"}/>
          <div className="main-content-splash-overlay"></div>
          <div className="main-content-splash-info">
            <h3 className="main-content-route-info">
              <span>
                <Link to="/" >Home</Link> / <Link to="/venues" >Venues</Link> / {this.props.venue.name}
              </span>
            </h3>
            <div className="main-content-splash-name">
              <h1>{this.props.venue.name} Tickets</h1>
              <h2 className="main-content-track-button">
                <i className={`fa-heart fa-sm ${ this.props.tracked ? "fas tracked" : "far"}`} onClick={this.handleTracking.bind(this)}></i>
              </h2>
            </div>
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

  let trackedVenues = [];
  let loggedIn = Boolean(state.entities.currentUser.id);

  if (loggedIn) {
    trackedVenues = state.entities.currentUser.trackedItems.trackedVenues;
  }


  let tracked = false;
  if (venue) {
    tracked = trackedVenues.includes(venue.id);
  }
  return {
    venue,
    events,
    loggedIn,
    tracked
  };
};

const mDP = dispatch => {
  return {
    requestVenue: venueId => dispatch(requestVenue(venueId)),
    track: venue => dispatch(track(venue)),
    untrack: venue => dispatch(untrack(venue)),
    openLoginModal: () => dispatch(openModal("login"))
  };
};

export default withRouter(connect(mSP, mDP)(VenueEventsIndex));
