import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = ({ results, navbar }) => {

  let eventResults = Object.values(results.events);
  if (eventResults.length > 3) {
    eventResults = eventResults.slice(0, 3);
  }

  let venueResults = Object.values(results.venues);
  if (venueResults.length > 3) {
    venueResults = venueResults.slice(0, 3);
  }

  let performerResults = Object.values(results.performers);
  if (performerResults.length > 3) {
    performerResults = performerResults.slice(0, 3);
  }

  const eventResultLis = eventResults.map(event => {
    return (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>
          <h2>{event.title}</h2>
          <h3>{event.eventOn}</h3>
        </Link>
      </li>
    );
  });

  const performerResultLis = performerResults.map(performer => {
    return (
      <li key={performer.id}><Link to={`/performers/${performer.id}`} >{performer.name}</Link></li>
    );
  });

  const venueResultLis = venueResults.map(venue => {
    return (
      <li key={venue.id}><Link to={`/venues/${venue.id}`} >{venue.name}</Link></li>
    );
  });

  if (eventResultLis.length > 0 || performerResultLis.length > 0 || venueResultLis.length > 0) {
    return (
      <ul className={navbar ? "navbar-search-results" : "main-page-search-results"}>
        { performerResultLis.length > 0 ?
          <h3>PERFORMERS</h3> : null
        }
        {performerResultLis}
        { eventResultLis.length > 0 ?
          <h3>EVENTS</h3> : null
        }
        {eventResultLis}
        { venueResultLis.length > 0 ?
          <h3>VENUES</h3> : null
        }
        {venueResultLis}
      </ul>
    );
  } else {
    return (
      <div className={navbar ? "navbar-search-results" : "main-page-search-results"} >
        <h2>No results found</h2>
      </div>
    );
  }
};

const mSP = state => {
  return {
    results: state.ui.search
  };
};

export default connect(mSP)(SearchResults);
