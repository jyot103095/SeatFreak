import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({event, performers}) => {
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

export default EventCard;
