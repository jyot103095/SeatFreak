import React from 'react';
import { Link } from 'react-router-dom';

const PerformerCard = ({performer}) => {
  let styles = {
    backgroundImage: `url(${performer.photoUrl})`,
    backgroundSize: 'cover',
    overflow: 'hidden'
  };
  return (
    <Link to={`/performers/${performer.id}`}>
      <div className="item-card">
        <div className="item-card-artwork" style={styles}>
        </div>
        <div className="item-card-info" >
          <h1>{performer.name}</h1>
          <h3>{performer.category}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PerformerCard;
