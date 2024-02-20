import React from 'react';
import { useParams } from 'react-router-dom';
import useEventData from '../../hooks/useEventData';
import { Event } from '../../types/index';
import Navbar from '../../components/Navbar';
// 
const EventDetailsPage: React.FC = () => {
  const { eventId } = useParams();
  const event: Event | null = useEventData(eventId ?? '');

  return (
    <React.Fragment>
      {event ? (
        <React.Fragment>
          <Navbar />
          
          <main>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
          </main>
        </React.Fragment>
        
      ) : (
        null
      )}
    </React.Fragment>
  );
}

export default EventDetailsPage;