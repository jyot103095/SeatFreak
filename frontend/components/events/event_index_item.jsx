import React from 'react';

const EventIndexItem = ({event}) => {
  return (
    <div className="eventCard" >
      <h1>{event.title}</h1>
      <h1>{event.eventOn}</h1>
    </div>
  );
};

export default EventIndexItem;
