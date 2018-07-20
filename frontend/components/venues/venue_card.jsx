import React from 'react';
import { Link } from 'react-router-dom';

const VenueCard = ({venue}) => {
  let styles = {
    backgroundImage: `url(${venue.photoUrl})`,
    backgroundSize: 'cover',
    overflow: 'hidden'
  };
  return (
    <Link to={`/venues/${venue.id}`}>
      <div className="item-card" >
        <div className="item-card-artwork" style={styles}>
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
