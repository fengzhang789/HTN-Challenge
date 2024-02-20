import React from 'react';
import { useParams } from 'react-router-dom';

// 
const EventDetails: React.FC = () => {
  const { eventId } = useParams();

  const event = {
    id: eventId
  };

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {/* Additional event details */}
    </div>
  );
}

export default EventDetails;