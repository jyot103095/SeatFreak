import React from 'react';
import { Link } from 'react-router-dom';

const VenueCard = ({venue}) => {
  return (
    <Link to={`/venues/${venue.id}`}>
      <div className="item-card" >
        <div className="item-card-artwork" >
        </div>
        <div className="item-card-info" >
          <h1>{venue.name}</h1>
          <h3>{venue.city}</h3>
        </div>
      </div>
    </Link>
  );
};

export default VenueCard;
