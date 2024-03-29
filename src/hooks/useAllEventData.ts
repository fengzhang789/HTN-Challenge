import { useState, useEffect } from 'react';
// import { gql, request } from 'graphql-request';
import { EventDetails, Events } from '../types/index';
import { useAuth0 } from '@auth0/auth0-react';


// useAllEventData() is a custom React hook that fetches all event data from the graphQL API.
const useAllEventData = (): Events | null => {
  const [events, setEvents] = useState<Events | null>(null);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    // Fetches all event data from the REST API, given VITE_ALL_EVENTS_API_URL in the .env file.
    fetch(import.meta.env.VITE_ALL_EVENTS_API_URL)
      .then(response => response.json())
      .then(data => {
        if (data) {
          // If the user is not logged in, remove the private events
          if (!isAuthenticated) {
            (data as EventDetails[]) = (data as EventDetails[]).filter((event) => {
              return event.permission === "public";
            });
          }
          setEvents({sampleEvents: data} as Events)
        }
      })
  }, [isAuthenticated])

  return events;
}


export default useAllEventData;





// GRAPHQL QUERY
  // const header = {
  //   'Content-Type': 'application/json'
  // }

    // const query = gql`
    //   query {
    //     sampleEvents {
    //       id
    //       name
    //       event_type
    //       permission
    //       start_time
    //       end_time
    //       description
    //       speakers {
    //         name
    //       }
    //       public_url
    //       private_url
    //       related_events
    //     }
    //   }
    // `

    // // Fetches all event data from the graphQL API, given VITE_ALL_EVENTS_API_URL in the .env file.
    // request(import.meta.env.VITE_ALL_EVENTS_API_URL, query, undefined).then((data: Events | unknown) => {
    //   if (data) {

    //     // If the user is not logged in, remove the private events
    //     if (!isAuthenticated) {
    //       (data as Events).sampleEvents = (data as Events).sampleEvents.filter((event) => {
    //         return event.permission === "public";
    //       });
    //     }

    //     setEvents(data as Events)
    //   }
    // })