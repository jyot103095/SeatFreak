import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event}) => {
  let title;
  if (event.title.length > 26) {
    title = event.title.slice(0, 26) + "...";
  } else {
    title = event.title;
  }

  return (
    <Link to={`/events/${event.id}`}>
      <div className="event-card" >
        <div className="event-card-artwork" >
          <div className="event-card-price">
            $105+
          </div>
        </div>
        <div className="event-card-info" >
          <h1>{title}</h1>
          <h3>{event.eventOn}</h3>
        </div>
      </div>
    </Link>
  );
};

export default EventIndexItem;
