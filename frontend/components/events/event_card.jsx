import React from 'react';
import { connect } from 'react-redux';
import { track, untrack } from '../../actions/tracking_actions';
import { Link } from 'react-router-dom';

const EventCard = ({event, performers, tracked, track, untrack}) => {
  function handleClick (e) {
    e.stopPropagation();
    if (tracked) {
      dispatch(untrack({ trackable_type: "Event", trackable_id: event.id }));
    } else {
      dispatch(track({ trackable_type: "Event", trackable_id: event.id }));
    }

  }

  let title;
  if (event.title.length > 26) {
    title = event.title.slice(0, 26) + "...";
  } else {
    title = event.title;
  }

  // const performer = performers.sample;

  // let styles = {
  //   backgroundImage: `url(${performer.photoUrl})`,
  //   backgroundSize: 'cover',
  //   overflow: 'hidden'
  // };

  return (
    <Link to={`/events/${event.id}`}>
      <div className="item-card" >
        <div className="item-card-artwork">
          <div className="trackButton" onClick={handleClick}>
            { tracked ? "Untrack" : "Track"}
          </div>
          <div className="item-card-price">
            See Tickets
          </div>
        </div>
        <div className="item-card-info" >
          <h1>{title}</h1>
          <h3>{event.eventOn}</h3>
        </div>
      </div>
    </Link>
  );
};

const mDP = dispatch => {
  return {
    track: item => dispatch(track(item)),
    untrack: item => dispatch(untrack(item))
  };
};

export default connect(null, mDP)(EventCard);
