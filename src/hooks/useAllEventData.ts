import { useState, useEffect } from 'react';
import { gql, request } from 'graphql-request';
import { Events } from '../types/index';

// useAllEventData() is a custom React hook that fetches all event data from the graphQL API.
const useAllEventData = (): Events | null => {
  const [events, setEvents] = useState<Events | null>(null);

  useEffect(() => {
    const query = gql`
      query {
        sampleEvents {
          id
          name
          event_type
          permission
          start_time
          end_time
          description
          speakers {
            name
          }
          public_url
          private_url
          related_events
        }
      }
    `

    // Fetches all event data from the graphQL API, given VITE_ALL_EVENTS_API_URL in the .env file.
    request(import.meta.env.VITE_ALL_EVENTS_API_URL, query).then((data: Events | unknown) => {
      
      if (data) {
        setEvents(data as Events)
      }
    })
  }, [])

  return events;
}


export default useAllEventData;