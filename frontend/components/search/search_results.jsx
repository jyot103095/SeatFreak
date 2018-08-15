import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const eventResultLis = this.props.eventResults.map(event => {
      return (
        <li key={event.id}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
            <h3>{event.eventOn}</h3>
          </Link>
        </li>
      );
    });

    const performerResultLis = this.props.performerResults.map(performer => {
      return (
        <li key={performer.id}><Link to={`/performers/${performer.id}`} >{performer.name}</Link></li>
      );
    });

    const venueResultLis = this.props.venueResults.map(venue => {
      return (
        <li key={venue.id}><Link to={`/venues/${venue.id}`} >{venue.name}</Link></li>
      );
    });

    if (eventResultLis.length > 0 || performerResultLis.length > 0 || venueResultLis.length > 0) {
      return (
        <ul className={this.props.navbar ? "navbar-search-results" : "main-page-search-results"}>
          { performerResultLis.length > 0 ?
            <h3><i className="far fa-user fa-lg"></i> PERFORMERS</h3> : null
          }
          {performerResultLis}
          { eventResultLis.length > 0 ?
            <h3><i className="far fa-calendar-alt fa-lg"></i> EVENTS</h3> : null
          }
          {eventResultLis}
          { venueResultLis.length > 0 ?
            <h3><i className="fas fa-map-marker-alt fa-lg"></i> VENUES</h3> : null
          }
          {venueResultLis}
        </ul>
      );
    } else {
      return (
        <ul className={this.props.navbar ? "navbar-search-results" : "main-page-search-results"} >
          <li>No results found</li>
        </ul>
      );
    }
  }
};

const mSP = state => {
  let eventResults = Object.values(state.ui.search.events);
  let performerResults = Object.values(state.ui.search.performers);
  let venueResults = Object.values(state.ui.search.venues);

  return {
    eventResults,
    performerResults,
    venueResults
  };
};

export default connect(mSP)(SearchResults);
