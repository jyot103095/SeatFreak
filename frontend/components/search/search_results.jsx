import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {

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
      <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>
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

  return (
    <ul className="main-page-search-results" >
      {eventResultLis}
      {performerResultLis}
      {venueResultLis}
    </ul>
  )
};

const mSP = state => {
  return {
    results: state.ui.search
  };
};

export default connect(mSP)(SearchResults);
