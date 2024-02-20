import { useState, useEffect } from 'react';
import { gql, request } from 'graphql-request';

type Event = {
  sampleEvents: {
    id: string,
    name: string,
    event_type: string,
    permission: string,
    start_time: number,
    end_time: number,
    description: string,
    speakers: {
      name: string,
    }[],
    public_url: string,
    private_url: string,
    related_events: string[],
  }[]
}

export const useAllEventData: Event | null = () => {
  const [events, setEvents] = useState<Event | null>(null);

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

    request('https://api.hackthenorth.com/v3/graphql', query).then((data: Event | unknown) => {
      if (data) {
        setEvents(data as Event)
      }
    })
  }, [])

  return events;
}