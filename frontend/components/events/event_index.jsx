import React from 'react';
import { connect } from 'react-redux';
import { requestEvents } from '../../actions/event_actions';
import MainPageSearchBox from '../search/main_page_search_box';
import EventCard from './event_card';
import VenueCard from '../venues/venue_card';
import PerformerCard from '../performers/performer_card';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: 0,
      performers: 0,
      venues: 0
    };
  }

  componentDidMount () {
    this.props.requestEvents();
  }

  render() {

    const eventItems = this.props.events.map(event => {
      return (<EventCard key={event.id} event={event} />);
    });

    let eventStyles = {
      transform: `translateX(${this.state.events}px)`
    };

    let eventButtons;
    if (this.state.events === 0) {
      eventButtons = () => (
        <div className="events-list-navigator-right" >
          <button onClick={() => this.setState({ events: (this.state.events -= 960)})}><i className="fas fa-arrow-right"></i></button>
        </div>
      );
    } else if (this.state.events === -1920) {
      eventButtons = () => (
        <div className="events-list-navigator-left">
          <button onClick={() => this.setState({ events: (this.state.events += 960)})}><i className="fas fa-arrow-left"></i></button>
        </div>
      );
    } else {
      eventButtons = () => (
        <div className="events-list-navigators" >
          <div className="events-list-navigator-left">
            <button onClick={() => this.setState({ events: (this.state.events += 960)})}><i className="fas fa-arrow-left"></i></button>
          </div>
          <div className="events-list-navigator-right">
            <button onClick={() => this.setState({ events: (this.state.events -= 960)})}><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      );
    }

    const performerItems = this.props.performers.slice(0, 12).map(performer => {
      return (<PerformerCard key={performer.id} performer={performer} />);
    });

    const performerStyles = {
      transform: `translateX(${this.state.performers}px)`
    };
    let performerButtons;
    if (this.state.performers === 0) {
      performerButtons = () => (
        <div className="performers-list-navigator-right" >
          <button onClick={() => this.setState({ performers: (this.state.performers -= 960)})}><i className="fas fa-arrow-right"></i></button>
        </div>
      );
    } else if (this.state.performers === -1920) {
      performerButtons = () => (
        <div className="performers-list-navigator-left">
          <button onClick={() => this.setState({ performers: (this.state.performers += 960)})}><i className="fas fa-arrow-left"></i></button>
        </div>
      );
    } else {
      performerButtons = () => (
        <div className="performers-list-navigators" >
          <div className="performers-list-navigator-left">
            <button onClick={() => this.setState({ performers: (this.state.performers += 960)})}><i className="fas fa-arrow-left"></i></button>
          </div>
          <div className="performers-list-navigator-right">
            <button onClick={() => this.setState({ performers: (this.state.performers -= 960)})}><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      );
    }

    const venueItems = this.props.venues.slice(0, 12).map(venue => {
      return (<VenueCard key={venue.id} venue={venue} />);
    });

    const venueStyles = {
      transform: `translateX(${this.state.venues}px)`
    };

    let venueButtons;
    if (this.state.venues === 0) {
      venueButtons = () => (
        <div className="venues-list-navigator-right" >
          <button onClick={() => this.setState({ venues: (this.state.venues -= 960)})}><i className="fas fa-arrow-right"></i></button>
        </div>
      );
    } else if (this.state.venues === -1920) {
      venueButtons = () => (
        <div className="venues-list-navigator-left">
          <button onClick={() => this.setState({ venues: (this.state.venues += 960)})}><i className="fas fa-arrow-left"></i></button>
        </div>
      );
    } else {
      venueButtons = () => (
        <div className="venues-list-navigators" >
          <div className="venues-list-navigator-left">
            <button onClick={() => this.setState({ venues: (this.state.venues += 960)})}><i className="fas fa-arrow-left"></i></button>
          </div>
          <div className="venues-list-navigator-right">
            <button onClick={() => this.setState({ venues: (this.state.venues -= 960)})}><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      );
    }

    return (
      <div className="events-index-container">
        <header className="main-content-splash main-page">
          <div className="block-shade"></div>
          <div className="main-content-splash-image main-page-splash-image">
            <div className="upwards-shade"></div>
            <div className="right-shade"></div>
            <div className="left-shade"></div>
            <div className="main-clear-space"></div>
          </div>
          <div className="main-content-splash-info">
            <h1 className="main-content-splash-name">Thousands of Tickets in One Place.</h1>
          </div>
          <MainPageSearchBox />
        </header>
        <div className="main-content-content">
          <h1 className="list-title">Popular Events</h1>
          <div className="events-list-wrapper" >
            { eventButtons() }
            <div className="horizontal-list-wrapper">
              <div className="events-list" style={eventStyles}>
                {eventItems}
              </div>
            </div>
          </div>
          <h1 className="list-title">Popular Performers</h1>
          <div className="performers-list-wrapper" >
            { performerButtons() }
            <div className="horizontal-list-wrapper">
              <div className="performers-list" style={performerStyles}>
                {performerItems}
              </div>
            </div>
          </div>
          <h1 className="list-title">Popular Venues</h1>
          <div className="venues-list-wrapper" >
            { venueButtons() }
            <div className="horizontal-list-wrapper" >
              <div className="venues-list" style={venueStyles}>
                {venueItems}
              </div>
            </div>
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
    venues: Object.values(state.entities.venues),
  };
};

const mDP = dispatch => {
  return {
    requestEvents: () => dispatch(requestEvents()),
  }
}

export default connect(mSP, mDP)(EventIndex);
