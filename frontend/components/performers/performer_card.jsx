import React from 'react';
import { Link } from 'react-router-dom';

const PerformerCard = ({performer}) => {
  return (
    <Link to={`/performers/${performer.id}`}>
      <div className="item-card" >
        <div className="item-card-artwork" >
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
