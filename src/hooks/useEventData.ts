import { useState, useEffect } from 'react';
import { gql, request } from 'graphql-request';
import { Event } from '../types/index';

// useEventData(eventID) is a custom React hook that fetches event data for eventID from the graphQL API.
const useEventData = (eventID: string): Event | null => {
  const [event, setEvents] = useState<Event | null>(null);

  useEffect(() => {
    const query = gql`
      query {
        sampleEvent (id: ${eventID}) {
          id
          name
          event_type
          permission
          start_time
          end_time
          description
        }
      }
    `

    // Fetches all event data from the graphQL API, given VITE_ALL_EVENTS_API_URL in the .env file.
    request(import.meta.env.VITE_ALL_EVENTS_API_URL, query).then((data: Event | unknown) => {
      
      if (data) {
        setEvents(data as Event)
      }
    })
  }, [])

  return event;
}


export default useEventData;